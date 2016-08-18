"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ButtonIcon_1 = require('./ButtonIcon');
var classnames = require('classnames');
require('./style/Button.less');
var domUtil_1 = require('../../util/domUtil');
var _theme = ['dark', 'red', 'pink', 'green', 'blue', 'light'];
var _dispaly = ['block', 'inline'];
var _size = ['large', 'small', 'normalsize'];
var _type = ['clear', 'outline', 'normaltype'];
var _shape = ['round', 'normalshape'];
var _loading = [true];
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        _super.call(this);
    }
    Button.prototype.componentWillMount = function () {
        var _a = this.props, theme = _a.theme, display = _a.display, size = _a.size, type = _a.type, shape = _a.shape, loading = _a.loading, icon = _a.icon;
        var _p = this.props;
        this.theme_classname = classnames("hzp-btn", theme ? "btn-" + theme : "btn-" + domUtil_1._fitlerProps(_p, _theme), display ? "btn-" + display : "btn-" + domUtil_1._fitlerProps(_p, _dispaly), size ? "size-" + size : "size-" + domUtil_1._fitlerProps(_p, _size), type ? "type-" + type : "type-" + domUtil_1._fitlerProps(_p, _type), shape ? "shape-" + shape : "shape-" + domUtil_1._fitlerProps(_p, _shape), _p.children ? "" : "just-icon");
    };
    Button.prototype.componentWillReceiveProps = function (_np) {
        var loading = _np.loading;
        this.theme_classname = classnames(this.theme_classname, loading ? "loading" : "");
    };
    Button.prototype.render = function () {
        var _a = this.props, icon = _a.icon, loading = _a.loading, iconRight = _a.iconRight, onClick = _a.onClick;
        return (React.createElement("button", {className: this.theme_classname, onClick: onClick}, 
            icon ?
                loading ?
                    React.createElement(ButtonIcon_1.default, {icon: icon, loading: loading})
                    :
                        React.createElement(ButtonIcon_1.default, {icon: icon, loading: false})
                :
                    loading ?
                        iconRight ?
                            React.createElement(ButtonIcon_1.default, {icon: false, loading: loading})
                            :
                                React.createElement(ButtonIcon_1.default, {icon: "icon-loading", loading: loading})
                        :
                            React.createElement(ButtonIcon_1.default, {icon: false, loading: false}), 
            this.props.children, 
            iconRight ?
                loading ?
                    React.createElement(ButtonIcon_1.default, {icon: iconRight, loading: loading})
                    :
                        React.createElement(ButtonIcon_1.default, {icon: iconRight, loading: false})
                :
                    loading ?
                        React.createElement(ButtonIcon_1.default, {icon: false, loading: false})
                        :
                            React.createElement(ButtonIcon_1.default, {icon: false, loading: false})));
    };
    Button.defaultProps = {
        light: true,
        inline: true,
        normalsize: true,
        normaltype: true,
        normalshape: true,
        loading: false
    };
    return Button;
}(React.PureComponent));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
//# sourceMappingURL=Button.js.map