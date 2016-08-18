"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDom = require('react-dom');
var button_1 = require('../component/button');
var Test = (function (_super) {
    __extends(Test, _super);
    function Test() {
        _super.call(this);
        this.state = {
            loading: false
        };
    }
    Test.prototype.render = function () {
        var _this = this;
        var loading = this.state.loading;
        return (React.createElement("div", {onClick: function () { }}, 
            React.createElement(button_1.default, {blue: true, loading: loading, onClick: function (e) { return _this.setState({ loading: true }); }}, "Button")
        ));
    };
    return Test;
}(React.PureComponent));
ReactDom.render(React.createElement(Test, null), document.getElementById('peng'));
//# sourceMappingURL=app.js.map