import * as ts from "typescript";
import * as Lint from "tslint/lib/lint";

export class Rule extends Lint.Rules.AbstractRule {

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new NoEsInIdentifiersWalker(sourceFile, this.getOptions()));
    }
}

class NoEsInIdentifiersWalker extends Lint.RuleWalker {
    private static FAILURE_STRING = "'e' character forbidden in identifiers: ";
    private static IDENTIFIER_TEST = new RegExp("e");

    protected visitIdentifier(node: ts.Identifier) {
        if(NoEsInIdentifiersWalker.IDENTIFIER_TEST.test(node.text)) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), NoEsInIdentifiersWalker.FAILURE_STRING + node.text));
        }

        super.visitIdentifier(node);
    }
}