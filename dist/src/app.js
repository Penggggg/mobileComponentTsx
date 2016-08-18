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
            React.createElement(button_1.default, {loading: loading, icon: "icon-untitled79", round: true, large: true, onClick: function (e) { return _this.setState({ loading: true }); }}), 
            React.createElement(button_1.default, {blue: true, icon: "icon-untitled83", round: true, large: true}), 
            React.createElement(button_1.default, {green: true, icon: "icon-untitled145", round: true, large: true}), 
            React.createElement(button_1.default, {pink: true, icon: "icon-untitled53", round: true, large: true}), 
            React.createElement(button_1.default, {red: true, icon: "icon-untitled32", round: true, large: true}), 
            React.createElement(button_1.default, {dark: true, icon: "icon-clover1193374easyiconnet", round: true, large: true})));
    };
    return Test;
}(React.PureComponent));
ReactDom.render(React.createElement(Test, null), document.getElementById('peng'));
//# sourceMappingURL=app.js.map