import { jsx as _jsx } from "react/jsx-runtime";
export var Button = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, onClick = _a.onClick, _e = _a.type, type = _e === void 0 ? 'button' : _e, _f = _a.className, className = _f === void 0 ? '' : _f;
    var baseClasses = 'button';
    var variantClass = "-".concat(variant);
    var sizeClass = "-".concat(size);
    var classes = [baseClasses, variantClass, sizeClass, className]
        .filter(Boolean)
        .join(' ');
    return (_jsx("button", { type: type, className: classes, disabled: disabled, onClick: onClick, children: children }));
};
export default Button;
