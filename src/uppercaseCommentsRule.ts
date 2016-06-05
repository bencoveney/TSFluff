import * as ts from "typescript";
import * as Lint from "tslint/lib/lint";

export class Rule extends Lint.Rules.AbstractRule {

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new UppercaseCommentsWalker(sourceFile, this.getOptions()));
    }
}

class UppercaseCommentsWalker extends Lint.SkippableTokenAwareRuleWalker {
    private static FAILURE_STRING = "COMMENTS MUST BE IN ALL CAPS";
    private static TSLINT_COMMENT = /\/\/\s*tslint/;

    public visitSourceFile(node: ts.SourceFile) {
        super.visitSourceFile(node);
        Lint.scanAllTokens(ts.createScanner(ts.ScriptTarget.ES5, false, ts.LanguageVariant.Standard, node.text), (scanner: ts.Scanner) => {
            const startPos = scanner.getStartPos();
            if (this.tokensToSkipStartEndMap[startPos] != null) {
                // tokens to skip are places where the scanner gets confused about what the token is, without the proper context
                // (specifically, regex, identifiers, and templates). So skip those tokens.
                scanner.setTextPos(this.tokensToSkipStartEndMap[startPos]);
                return;
            }

            if (scanner.getToken() === ts.SyntaxKind.SingleLineCommentTrivia) {
                const commentText = scanner.getTokenText();
                const startPosition = scanner.getTokenPos() + 2;
                const width = commentText.length - 2;

                if (commentText.match(UppercaseCommentsWalker.TSLINT_COMMENT)) {
                    return;
                }

                if (commentText.toUpperCase() !== commentText) {
                    this.addFailure(this.createFailure(startPosition, width, UppercaseCommentsWalker.FAILURE_STRING));
                }
            }
        });
    }
}