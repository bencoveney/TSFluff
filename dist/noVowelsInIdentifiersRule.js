"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Lint = require("tslint/lib/lint");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoVowelsInIdentifiersWalker(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoVowelsInIdentifiersWalker = (function (_super) {
    __extends(NoVowelsInIdentifiersWalker, _super);
    function NoVowelsInIdentifiersWalker() {
        _super.apply(this, arguments);
    }
    NoVowelsInIdentifiersWalker.prototype.visitIdentifier = function (node) {
        if (this.getIdentifierTest().test(node.text)) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), NoVowelsInIdentifiersWalker.FAILURE_STRING + node.text));
        }
        _super.prototype.visitIdentifier.call(this, node);
    };
    NoVowelsInIdentifiersWalker.prototype.getIdentifierTest = function () {
        var allOptions = this.getOptions();
        var defaultTest = NoVowelsInIdentifiersWalker.DEFAULT_TEST;
        if (allOptions == null || allOptions.length === 0) {
            return defaultTest;
        }
        var firstOption = allOptions[0];
        if (firstOption == null || typeof firstOption !== "object" || firstOption[NoVowelsInIdentifiersWalker.OPTION_DIFFICULTY] == null) {
            return new RegExp("o");
        }
        var difficulty = firstOption[NoVowelsInIdentifiersWalker.OPTION_DIFFICULTY];
        return NoVowelsInIdentifiersWalker.IDENTIFIER_TESTS[difficulty] || defaultTest;
    };
    NoVowelsInIdentifiersWalker.FAILURE_STRING = "Identifier contained forbidden characters: ";
    NoVowelsInIdentifiersWalker.IDENTIFIER_TESTS = {
        easy: new RegExp("e", "i"),
        normal: new RegExp("[aeiou]", "i"),
        hard: new RegExp("[aeiouy]", "i")
    };
    NoVowelsInIdentifiersWalker.DEFAULT_TEST = NoVowelsInIdentifiersWalker.IDENTIFIER_TESTS["normal"];
    NoVowelsInIdentifiersWalker.OPTION_DIFFICULTY = "difficulty";
    return NoVowelsInIdentifiersWalker;
}(Lint.RuleWalker));
//# sourceMappingURL=noVowelsInIdentifiersRule.js.map