import * as ts from "typescript";
import * as Lint from "tslint/lib/lint";

export class Rule extends Lint.Rules.AbstractRule {

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new RequireEmptyStatementsWalker(sourceFile, this.getOptions()));
    }
}

class RequireEmptyStatementsWalker extends Lint.RuleWalker {
    private static REQUIRED_SEMICOLONS = 5;
    private static FAILURE_STRING = (foundCount: number) => {
        return RequireEmptyStatementsWalker.REQUIRED_SEMICOLONS.toString() +
            " empty statements are required but only " +
            foundCount.toString() +
            " were found. Please add more semicolons.";
    };

    private emptyStatementsCount: number;

    protected visitSourceFile(node: ts.SourceFile) {
        this.emptyStatementsCount = 0;

        super.visitSourceFile(node);

        if(this.emptyStatementsCount < RequireEmptyStatementsWalker.REQUIRED_SEMICOLONS) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), RequireEmptyStatementsWalker.FAILURE_STRING(this.emptyStatementsCount)));
        }
    }

    protected visitNode(node: ts.Node): void {
        if (node.kind === ts.SyntaxKind.EmptyStatement) {
            this.emptyStatementsCount++;
        }

        super.visitNode(node);
    }
}