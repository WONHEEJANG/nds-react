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
export var Radio = forwardRef(function (_a, ref) {
    var label = _a.label, _b = _a.size, size = _b === void 0 ? 'lg' : _b, _c = _a.variant, variant = _c === void 0 ? 'basic' : _c, _d = _a.state, state = _d === void 0 ? 'default' : _d, _e = _a.className, className = _e === void 0 ? '' : _e, id = _a.id, disabled = _a.disabled, checked = _a.checked, props = __rest(_a, ["label", "size", "variant", "state", "className", "id", "disabled", "checked"]);
    var radioClasses = ['radio'];
    radioClasses.push("-".concat(variant));
    radioClasses.push("-".concat(size));
    if (state === 'error') {
        radioClasses.push('-error');
    }
    var finalClassName = [radioClasses.join(' '), className].filter(Boolean).join(' ');
    var isDisabled = disabled || state === 'disabled';
    var isChecked = checked || state === 'selected';
    return (_jsxs("div", { className: finalClassName, children: [_jsx("input", __assign({ ref: ref, type: "radio", id: id, disabled: isDisabled, checked: isChecked }, props)), label && (_jsx("label", { htmlFor: id, children: label }))] }));
});
Radio.displayName = 'Radio';
export default Radio;
