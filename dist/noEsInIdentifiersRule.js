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
        return this.applyWithWalker(new NoEsInIdentifiersWalker(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoEsInIdentifiersWalker = (function (_super) {
    __extends(NoEsInIdentifiersWalker, _super);
    function NoEsInIdentifiersWalker() {
        _super.apply(this, arguments);
    }
    NoEsInIdentifiersWalker.prototype.visitIdentifier = function (node) {
        if (NoEsInIdentifiersWalker.IDENTIFIER_TEST.test(node.text)) {
            this.addFailure(this.createFailure(node.getStart(), node.getWidth(), NoEsInIdentifiersWalker.FAILURE_STRING + node.text));
        }
        _super.prototype.visitIdentifier.call(this, node);
    };
    NoEsInIdentifiersWalker.FAILURE_STRING = "'e' character forbidden in identifiers: ";
    NoEsInIdentifiersWalker.IDENTIFIER_TEST = new RegExp("e");
    return NoEsInIdentifiersWalker;
}(Lint.RuleWalker));
//# sourceMappingURL=noEsInIdentifiersRule.js.map