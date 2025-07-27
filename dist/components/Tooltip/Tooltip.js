import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
export var Tooltip = function (_a) {
    var title = _a.title, content = _a.content, _b = _a.position, position = _b === void 0 ? 'top' : _b, children = _a.children, _c = _a.trigger, trigger = _c === void 0 ? 'hover' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.delay, delay = _e === void 0 ? 0 : _e, _f = _a.className, className = _f === void 0 ? '' : _f;
    var _g = useState(false), isVisible = _g[0], setIsVisible = _g[1];
    var _h = useState(false), isOpen = _h[0], setIsOpen = _h[1];
    var timeoutRef = useRef(null);
    var tooltipRef = useRef(null);
    var triggerRef = useRef(null);
    useEffect(function () {
        return function () {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
    // 클릭 외부 감지 (click trigger인 경우)
    useEffect(function () {
        if (trigger !== 'click')
            return;
        var handleClickOutside = function (event) {
            if (tooltipRef.current &&
                triggerRef.current &&
                !tooltipRef.current.contains(event.target) &&
                !triggerRef.current.contains(event.target)) {
                hideTooltip();
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, trigger]);
    var showTooltip = function () {
        if (disabled)
            return;
        if (delay > 0) {
            timeoutRef.current = setTimeout(function () {
                setIsVisible(true);
                setIsOpen(true);
            }, delay);
        }
        else {
            setIsVisible(true);
            setIsOpen(true);
        }
    };
    var hideTooltip = function () {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
        setIsVisible(false);
        setIsOpen(false);
    };
    var handleMouseEnter = function () {
        if (trigger === 'hover') {
            showTooltip();
        }
    };
    var handleMouseLeave = function () {
        if (trigger === 'hover') {
            hideTooltip();
        }
    };
    var handleClick = function () {
        if (trigger === 'click') {
            if (isOpen) {
                hideTooltip();
            }
            else {
                showTooltip();
            }
        }
    };
    var handleFocus = function () {
        if (trigger === 'focus') {
            showTooltip();
        }
    };
    var handleBlur = function () {
        if (trigger === 'focus') {
            hideTooltip();
        }
    };
    var getTooltipClasses = function () {
        var classes = ['tooltip'];
        if (className)
            classes.push(className);
        return classes.join(' ');
    };
    return (_jsxs("span", { className: getTooltipClasses(), children: [_jsx("button", { ref: triggerRef, type: "button", className: "trigger", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onClick: handleClick, onFocus: handleFocus, onBlur: handleBlur, "aria-haspopup": "true", "aria-expanded": isOpen, disabled: disabled, children: typeof children === 'string' ? (_jsx("span", { className: "hide", children: children })) : (children) }), isVisible && (_jsxs("span", { ref: tooltipRef, className: "panel", role: "tooltip", children: [title && _jsx("span", { className: "title", children: title }), _jsx("span", { className: "content", children: content })] }))] }));
};
export var TooltipButton = function (_a) {
    var title = _a.title, content = _a.content, _b = _a.label, label = _b === void 0 ? '도움말 보기' : _b, _c = _a.position, position = _c === void 0 ? 'top' : _c, _d = _a.trigger, trigger = _d === void 0 ? 'click' : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, _f = _a.delay, delay = _f === void 0 ? 0 : _f, _g = _a.className, className = _g === void 0 ? '' : _g;
    return (_jsx(Tooltip, { title: title, content: content, position: position, trigger: trigger, disabled: disabled, delay: delay, className: className, children: _jsx("span", { className: "hide", children: label }) }));
};
export default Tooltip;
