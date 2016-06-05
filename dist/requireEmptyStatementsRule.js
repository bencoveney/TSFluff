"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ts = require("typescript");
var Lint = require("tslint/lib/lint");
var Rule = (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        _super.apply(this, arguments);
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new RequireEmptyStatementsWalker(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var RequireEmptyStatementsWalker = (function (_super) {
    __extends(RequireEmptyStatementsWalker, _super);
    function RequireEmptyStatementsWalker() {
        _super.apply(this, arguments);
    }
    RequireEmptyStatementsWalker.prototype.visitSourceFile = function (node) {
        this.requiredSemicolons = this.getRequiredSemicolons();
        this.emptyStatementsCount = 0;
        _super.prototype.visitSourceFile.call(this, node);
        if (this.emptyStatementsCount < this.requiredSemicolons) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), this.getFailureString()));
        }
    };
    RequireEmptyStatementsWalker.prototype.visitNode = function (node) {
        if (node.kind === ts.SyntaxKind.EmptyStatement) {
            this.emptyStatementsCount++;
        }
        _super.prototype.visitNode.call(this, node);
    };
    RequireEmptyStatementsWalker.prototype.getRequiredSemicolons = function () {
        var allOptions = this.getOptions();
        var defaultRequiredSemicolons = RequireEmptyStatementsWalker.DEFAULT_REQUIRED_SEMICOLONS;
        if (allOptions == null || allOptions.length === 0) {
            return defaultRequiredSemicolons;
        }
        var firstOption = allOptions[0];
        if (firstOption == null || typeof firstOption !== "number" || firstOption <= 0) {
            return defaultRequiredSemicolons;
        }
        return firstOption;
    };
    RequireEmptyStatementsWalker.prototype.getFailureString = function () {
        return this.requiredSemicolons.toString() +
            " empty statements are required but only " +
            this.emptyStatementsCount.toString() +
            " were found. Please add more semicolons.";
    };
    RequireEmptyStatementsWalker.DEFAULT_REQUIRED_SEMICOLONS = 5;
    return RequireEmptyStatementsWalker;
}(Lint.RuleWalker));
//# sourceMappingURL=requireEmptyStatementsRule.js.map