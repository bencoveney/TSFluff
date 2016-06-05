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
        this.emptyStatementsCount = 0;
        _super.prototype.visitSourceFile.call(this, node);
        if (this.emptyStatementsCount < RequireEmptyStatementsWalker.REQUIRED_SEMICOLONS) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), RequireEmptyStatementsWalker.FAILURE_STRING(this.emptyStatementsCount)));
        }
    };
    RequireEmptyStatementsWalker.prototype.visitNode = function (node) {
        if (node.kind === ts.SyntaxKind.EmptyStatement) {
            this.emptyStatementsCount++;
        }
        _super.prototype.visitNode.call(this, node);
    };
    RequireEmptyStatementsWalker.REQUIRED_SEMICOLONS = 5;
    RequireEmptyStatementsWalker.FAILURE_STRING = function (foundCount) {
        return RequireEmptyStatementsWalker.REQUIRED_SEMICOLONS.toString() +
            " empty statements are required but only " +
            foundCount.toString() +
            " were found. Please add more semicolons.";
    };
    return RequireEmptyStatementsWalker;
}(Lint.RuleWalker));
//# sourceMappingURL=requireEmptyStatementsRule.js.map