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
        return this.applyWithWalker(new NoTripleEqualsWalker(sourceFile, this.getOptions()));
    };
    Rule.EQUAL_FAILURE_STRING = "=== should be ==";
    Rule.NOT_EQUAL_FAILURE_STRING = "!== should be !=";
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoTripleEqualsWalker = (function (_super) {
    __extends(NoTripleEqualsWalker, _super);
    function NoTripleEqualsWalker() {
        _super.apply(this, arguments);
    }
    NoTripleEqualsWalker.prototype.visitBinaryExpression = function (node) {
        var position = node.getChildAt(1).getStart();
        var operator = node.operatorToken.kind;
        switch (operator) {
            case ts.SyntaxKind.EqualsEqualsEqualsToken:
                this.addFailure(this.createFailure(position, NoTripleEqualsWalker.COMPARISON_OPERATOR_WIDTH, Rule.EQUAL_FAILURE_STRING));
                break;
            case ts.SyntaxKind.ExclamationEqualsEqualsToken:
                this.addFailure(this.createFailure(position, NoTripleEqualsWalker.COMPARISON_OPERATOR_WIDTH, Rule.NOT_EQUAL_FAILURE_STRING));
                break;
        }
        var bool = "hello" == "1";
        _super.prototype.visitBinaryExpression.call(this, node);
    };
    NoTripleEqualsWalker.COMPARISON_OPERATOR_WIDTH = 3;
    return NoTripleEqualsWalker;
}(Lint.RuleWalker));
//# sourceMappingURL=noTripleEqualsRule.js.map