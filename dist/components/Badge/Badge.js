import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export var Badge = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'solid' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, ariaLabel = _a.ariaLabel;
    var badgeClasses = ['badge'];
    badgeClasses.push("-".concat(variant));
    var finalClassName = [badgeClasses.join(' '), className].filter(Boolean).join(' ');
    return (_jsxs("span", { className: finalClassName, children: [children, ariaLabel && _jsx("span", { className: "hide", children: ariaLabel })] }));
};
export default Badge;
