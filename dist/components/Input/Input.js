var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
export var Input = forwardRef(function (_a, ref) {
    var label = _a.label, error = _a.error, _b = _a.variant, variant = _b === void 0 ? 'text' : _b, _c = _a.state, state = _c === void 0 ? 'default' : _c, _d = _a.clearable, clearable = _d === void 0 ? true : _d, _e = _a.className, className = _e === void 0 ? '' : _e, _f = _a.wrapperClassName, wrapperClassName = _f === void 0 ? '' : _f, id = _a.id, props = __rest(_a, ["label", "error", "variant", "state", "clearable", "className", "wrapperClassName", "id"]);
    var fieldClasses = ['field'];
    if (state === 'error')
        fieldClasses.push('-error');
    var textClasses = ['text'];
    if (!clearable)
        textClasses.push('[data-clear="false"]');
    var inputClasses = [className].filter(Boolean).join(' ');
    var fieldClassName = [fieldClasses.join(' '), wrapperClassName].filter(Boolean).join(' ');
    return (_jsxs("div", { className: fieldClassName, children: [label && (_jsx("label", { htmlFor: id, className: "label", children: label })), _jsx("div", { className: textClasses.join(' '), children: _jsx("input", __assign({ ref: ref, id: id, className: inputClasses }, props)) }), error && (_jsx("div", { className: "error-message", children: error }))] }));
});
Input.displayName = 'Input';
export default Input;
