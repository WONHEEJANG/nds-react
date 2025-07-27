import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export var Chip = function (_a) {
    var children = _a.children, _b = _a.deletable, deletable = _b === void 0 ? false : _b, _c = _a.active, active = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, onClick = _a.onClick, onDelete = _a.onDelete, _e = _a.className, className = _e === void 0 ? '' : _e;
    var _f = useState(false), isHovered = _f[0], setIsHovered = _f[1];
    var handleClick = function () {
        if (disabled)
            return;
        onClick === null || onClick === void 0 ? void 0 : onClick();
    };
    var handleDelete = function (e) {
        e.stopPropagation();
        if (disabled)
            return;
        onDelete === null || onDelete === void 0 ? void 0 : onDelete();
    };
    var getChipClasses = function () {
        var classes = ['chip'];
        if (active)
            classes.push('-active');
        if (disabled)
            classes.push('-disabled');
        if (className)
            classes.push(className);
        return classes.join(' ');
    };
    if (deletable) {
        return (_jsxs("div", { className: getChipClasses(), onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, children: [_jsx("span", { onClick: handleClick, role: onClick ? 'button' : undefined, children: children }), _jsx("button", { type: "button", className: "compare-delete", onClick: handleDelete, disabled: disabled, "aria-label": "\uC0AD\uC81C", children: _jsx("span", { className: "hide", children: "\uC0AD\uC81C" }) })] }));
    }
    return (_jsx("div", { className: getChipClasses(), onClick: handleClick, role: onClick ? 'button' : undefined, onMouseEnter: function () { return setIsHovered(true); }, onMouseLeave: function () { return setIsHovered(false); }, children: children }));
};
export var ChipGroup = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'basic' : _b, _c = _a.isOpen, isOpen = _c === void 0 ? false : _c, menuCount = _a.menuCount, _d = _a.showMore, showMore = _d === void 0 ? false : _d, children = _a.children, onMoreClick = _a.onMoreClick, _e = _a.className, className = _e === void 0 ? '' : _e;
    var getGroupClasses = function () {
        var classes = ['popular-search', 'chip'];
        if (className)
            classes.push(className);
        return classes.join(' ');
    };
    var getAccordionClasses = function () {
        var classes = ['popular-anchors', 'accordion'];
        if (isOpen)
            classes.push('-active');
        return classes.join(' ');
    };
    if (variant === 'accordion') {
        return (_jsx("div", { className: getGroupClasses(), children: _jsxs("div", { className: getAccordionClasses(), children: [_jsx("div", { className: "outer", children: _jsx("div", { className: "inner over-x", children: _jsx("ul", { className: "list tab", children: children }) }) }), showMore && (_jsx("button", { type: "button", className: "more", onClick: onMoreClick, children: _jsx("span", { className: "hide", children: "\uD3BC\uCE58\uAE30" }) }))] }) }));
    }
    if (variant === 'basic') {
        return (_jsx("div", { className: "filter-result", children: _jsx("div", { className: "inner over-x", children: children }) }));
    }
    // tab variant
    return (_jsx("div", { className: getGroupClasses(), children: _jsx("div", { className: "popular-anchors accordion", children: _jsx("div", { className: "outer", children: _jsx("div", { className: "inner over-x", children: _jsx("ul", { className: "list tab", children: children }) }) }) }) }));
};
export default Chip;
