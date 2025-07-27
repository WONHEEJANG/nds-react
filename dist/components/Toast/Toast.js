var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
export var Toast = function (_a) {
    var message = _a.message, _b = _a.type, type = _b === void 0 ? 'info' : _b, _c = _a.visible, visible = _c === void 0 ? false : _c, _d = _a.duration, duration = _d === void 0 ? 3000 : _d, onClose = _a.onClose, _e = _a.className, className = _e === void 0 ? '' : _e;
    var _f = useState(visible), isVisible = _f[0], setIsVisible = _f[1];
    var _g = useState(false), isAnimating = _g[0], setIsAnimating = _g[1];
    useEffect(function () {
        if (visible) {
            setIsVisible(true);
            setIsAnimating(true);
            if (duration > 0) {
                var timer_1 = setTimeout(function () {
                    handleClose();
                }, duration);
                return function () { return clearTimeout(timer_1); };
            }
        }
    }, [visible, duration]);
    var handleClose = function () {
        setIsAnimating(false);
        setTimeout(function () {
            setIsVisible(false);
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }, 300); // 애니메이션 시간
    };
    var getToastClasses = function () {
        var classes = ['toast'];
        if (isAnimating)
            classes.push('-active');
        if (type !== 'info')
            classes.push("-".concat(type));
        if (className)
            classes.push(className);
        return classes.join(' ');
    };
    if (!isVisible)
        return null;
    return (_jsx("div", { className: getToastClasses(), role: "alert", "aria-live": "assertive", children: _jsx("div", { className: "message", children: _jsx("p", { children: message }) }) }));
};
export var ToastContext = React.createContext(null);
export var ToastProvider = function (_a) {
    var children = _a.children, _b = _a.maxToasts, maxToasts = _b === void 0 ? 3 : _b;
    var _c = useState([]), toasts = _c[0], setToasts = _c[1];
    var showToast = function (message, type, duration) {
        if (type === void 0) { type = 'info'; }
        if (duration === void 0) { duration = 3000; }
        var id = Math.random().toString(36).substr(2, 9);
        var newToast = { id: id, message: message, type: type, duration: duration };
        setToasts(function (prev) {
            var newToasts = __spreadArray(__spreadArray([], prev, true), [newToast], false);
            // 최대 개수 제한
            if (newToasts.length > maxToasts) {
                return newToasts.slice(-maxToasts);
            }
            return newToasts;
        });
    };
    var removeToast = function (id) {
        setToasts(function (prev) { return prev.filter(function (toast) { return toast.id !== id; }); });
    };
    return (_jsxs(ToastContext.Provider, { value: { showToast: showToast }, children: [children, _jsx("div", { className: "toast-container", children: toasts.map(function (toast) { return (_jsx(Toast, { message: toast.message, type: toast.type, visible: true, duration: toast.duration, onClose: function () { return removeToast(toast.id); } }, toast.id)); }) })] }));
};
export var useToast = function () {
    var context = React.useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
export default Toast;
