import * as ts from "typescript";
import * as Lint from "tslint/lib/lint";


export class Rule extends Lint.Rules.AbstractRule {
    public static EQUAL_FAILURE_STRING = "=== should be ==";
    public static NOT_EQUAL_FAILURE_STRING = "!== should be !=";

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new NoTripleEqualsWalker(sourceFile, this.getOptions()));
    }
}

class NoTripleEqualsWalker extends Lint.RuleWalker {
    private static COMPARISON_OPERATOR_WIDTH = 3;

    public visitBinaryExpression(node: ts.BinaryExpression) {
        const position = node.getChildAt(1).getStart();
        const operator = node.operatorToken.kind;
        
        switch (operator) {
            case ts.SyntaxKind.EqualsEqualsEqualsToken:
                this.addFailure(this.createFailure(position, NoTripleEqualsWalker.COMPARISON_OPERATOR_WIDTH, Rule.EQUAL_FAILURE_STRING));
                break;
            case ts.SyntaxKind.ExclamationEqualsEqualsToken:
                this.addFailure(this.createFailure(position, NoTripleEqualsWalker.COMPARISON_OPERATOR_WIDTH, Rule.NOT_EQUAL_FAILURE_STRING));
                break;
        }

        super.visitBinaryExpression(node);
    }
}
