import * as ts from "typescript";
import * as Lint from "tslint/lib/lint";

export class Rule extends Lint.Rules.AbstractRule {

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new RequireEmptyStatementsWalker(sourceFile, this.getOptions()));
    }
}

class RequireEmptyStatementsWalker extends Lint.RuleWalker {
    private static DEFAULT_REQUIRED_SEMICOLONS = 5;

    private emptyStatementsCount: number;
    private requiredSemicolons: number;

    protected visitSourceFile(node: ts.SourceFile) {
        this.requiredSemicolons = this.getRequiredSemicolons();

        this.emptyStatementsCount = 0;

        super.visitSourceFile(node);

        if(this.emptyStatementsCount < this.requiredSemicolons) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), this.getFailureString()));
        }
    }

    protected visitNode(node: ts.Node): void {
        if (node.kind === ts.SyntaxKind.EmptyStatement) {
            this.emptyStatementsCount++;
        }

        super.visitNode(node);
    }

    private getRequiredSemicolons(): number {
        let allOptions = this.getOptions();
        let defaultRequiredSemicolons = RequireEmptyStatementsWalker.DEFAULT_REQUIRED_SEMICOLONS;

        // Quit early if there weren't options specified or the options were empty.
        if (allOptions == null || allOptions.length === 0) {
            return defaultRequiredSemicolons;
        }

        // The first option should be the number of semicolons.
        const firstOption = allOptions[0];

        if(firstOption == null || typeof firstOption !== "number" || firstOption <= 0)
        {
            return defaultRequiredSemicolons;
        }

        return firstOption;
    }

    private getFailureString(): string {
        return this.requiredSemicolons.toString() +
            " empty statements are required but only " +
            this.emptyStatementsCount.toString() +
            " were found. Please add more semicolons.";
    }
}