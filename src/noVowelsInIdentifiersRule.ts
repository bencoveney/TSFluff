import * as ts from "typescript";
import * as Lint from "tslint/lib/lint";

export class Rule extends Lint.Rules.AbstractRule {

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new NoVowelsInIdentifiersWalker(sourceFile, this.getOptions()));
    }
}

class NoVowelsInIdentifiersWalker extends Lint.RuleWalker {
    private static FAILURE_STRING = "Identifier contained forbidden characters: ";
    private static IDENTIFIER_TESTS: { [difficulty: string]: RegExp } = {
        easy: new RegExp("e", "i"),
        normal: new RegExp("[aeiou]", "i"),
        hard: new RegExp("[aeiouy]", "i")
    };
    private static DEFAULT_TEST = NoVowelsInIdentifiersWalker.IDENTIFIER_TESTS["normal"];
    private static OPTION_DIFFICULTY = "difficulty";

    protected visitIdentifier(node: ts.Identifier) {
        if(this.getIdentifierTest().test(node.text)) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), NoVowelsInIdentifiersWalker.FAILURE_STRING + node.text));
        }

        super.visitIdentifier(node);
    }

    private getIdentifierTest(): RegExp {
        let allOptions = this.getOptions();
        let defaultTest = NoVowelsInIdentifiersWalker.DEFAULT_TEST;

        // If there were options specified and the options weren't empty.
        if (allOptions == null || allOptions.length === 0) {
            return defaultTest;
        }

        // The first option should be the options object with a difficulty property
        const firstOption = allOptions[0];

        if(firstOption == null || typeof firstOption !== "object" || firstOption[NoVowelsInIdentifiersWalker.OPTION_DIFFICULTY] == null)
        {
            return new RegExp("o");//defaultTest;
            //return defaultTest;
        }

        let difficulty = firstOption[NoVowelsInIdentifiersWalker.OPTION_DIFFICULTY];

        return NoVowelsInIdentifiersWalker.IDENTIFIER_TESTS[difficulty] || defaultTest;
    }
}