import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export var Accordion = function (_a) {
    var title = _a.title, subInfo = _a.subInfo, badge = _a.badge, children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'box' : _b, _c = _a.type, type = _c === void 0 ? 'list' : _c, _d = _a.defaultOpen, defaultOpen = _d === void 0 ? false : _d, _e = _a.className, className = _e === void 0 ? '' : _e;
    var _f = useState(defaultOpen), isOpen = _f[0], setIsOpen = _f[1];
    var baseClasses = 'accordion';
    var variantClass = "-".concat(variant);
    var typeClass = "-".concat(type);
    var activeClass = isOpen ? '-active' : '';
    var classes = [baseClasses, variantClass, typeClass, activeClass, className]
        .filter(Boolean)
        .join(' ');
    var handleToggle = function () {
        setIsOpen(!isOpen);
    };
    return (_jsxs("div", { className: classes, "data-role": "fold", children: [_jsxs("button", { type: "button", className: "title", "data-role": "marker", title: isOpen ? "펼쳐짐" : "접힘", onClick: handleToggle, children: [badge && (_jsx("div", { className: "badges", children: _jsx("span", { className: "badge line-gray", children: badge }) })), _jsxs("div", { className: "info", children: [_jsx("span", { className: "name", children: _jsx("span", { children: title }) }), subInfo && (_jsx("span", { className: "sub-info", children: _jsx("span", { children: subInfo }) }))] })] }), _jsx("div", { className: "panel", "data-role": isOpen ? "visible" : "hidden", children: children })] }));
};
export default Accordion;
