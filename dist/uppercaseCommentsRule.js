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
        return this.applyWithWalker(new UppercaseCommentsWalker(sourceFile, this.getOptions()));
    };
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var UppercaseCommentsWalker = (function (_super) {
    __extends(UppercaseCommentsWalker, _super);
    function UppercaseCommentsWalker() {
        _super.apply(this, arguments);
    }
    UppercaseCommentsWalker.prototype.visitSourceFile = function (node) {
        var _this = this;
        _super.prototype.visitSourceFile.call(this, node);
        Lint.scanAllTokens(ts.createScanner(ts.ScriptTarget.ES5, false, ts.LanguageVariant.Standard, node.text), function (scanner) {
            var startPos = scanner.getStartPos();
            if (_this.tokensToSkipStartEndMap[startPos] != null) {
                scanner.setTextPos(_this.tokensToSkipStartEndMap[startPos]);
                return;
            }
            if (scanner.getToken() === ts.SyntaxKind.SingleLineCommentTrivia) {
                var commentText = scanner.getTokenText();
                var startPosition = scanner.getTokenPos() + 2;
                var width = commentText.length - 2;
                if (commentText.match(UppercaseCommentsWalker.TSLINT_COMMENT)) {
                    return;
                }
                if (commentText.toUpperCase() !== commentText) {
                    _this.addFailure(_this.createFailure(startPosition, width, UppercaseCommentsWalker.FAILURE_STRING));
                }
            }
        });
    };
    UppercaseCommentsWalker.FAILURE_STRING = "COMMENTS MUST BE IN ALL CAPS";
    UppercaseCommentsWalker.TSLINT_COMMENT = /\/\/\s*tslint/;
    return UppercaseCommentsWalker;
}(Lint.SkippableTokenAwareRuleWalker));
//# sourceMappingURL=uppercaseCommentsRule.js.map