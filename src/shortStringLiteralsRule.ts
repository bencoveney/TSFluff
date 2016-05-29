import * as ts from "typescript";
import * as Lint from "tslint/lib/lint";

export class Rule extends Lint.Rules.AbstractRule {

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new ShortStringLiteralsWalker(sourceFile, this.getOptions()));
    }
}

class ShortStringLiteralsWalker extends Lint.RuleWalker {
    private static FAILURE_STRING = "String literals can have a maximum length of 1: ";
    private static MAXIMUM_LENGTH = 1;

    protected visitStringLiteral(node: ts.StringLiteral) {
        if(node.text.length > ShortStringLiteralsWalker.MAXIMUM_LENGTH)
        {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), ShortStringLiteralsWalker.FAILURE_STRING + node.text));
        }

        super.visitStringLiteral(node);
    }
}