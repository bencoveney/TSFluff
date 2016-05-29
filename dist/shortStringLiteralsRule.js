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
        return this.applyWithWalker(new ShortStringLiteralsWalker(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var ShortStringLiteralsWalker = (function (_super) {
    __extends(ShortStringLiteralsWalker, _super);
    function ShortStringLiteralsWalker() {
        _super.apply(this, arguments);
    }
    ShortStringLiteralsWalker.prototype.visitStringLiteral = function (node) {
        if (node.text.length > ShortStringLiteralsWalker.MAXIMUM_LENGTH) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), ShortStringLiteralsWalker.FAILURE_STRING + node.text));
        }
        _super.prototype.visitStringLiteral.call(this, node);
    };
    ShortStringLiteralsWalker.FAILURE_STRING = "String literals can have a maximum length of 1: ";
    ShortStringLiteralsWalker.MAXIMUM_LENGTH = 1;
    return ShortStringLiteralsWalker;
}(Lint.RuleWalker));
//# sourceMappingURL=shortStringLiteralsRule.js.map