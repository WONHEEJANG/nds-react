import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
export var TextArea = function (_a) {
    var label = _a.label, value = _a.value, defaultValue = _a.defaultValue, _b = _a.placeholder, placeholder = _b === void 0 ? '내용을 입력하세요' : _b, maxLength = _a.maxLength, _c = _a.minRows, minRows = _c === void 0 ? 3 : _c, maxRows = _a.maxRows, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.readonly, readonly = _e === void 0 ? false : _e, _f = _a.error, error = _f === void 0 ? false : _f, _g = _a.required, required = _g === void 0 ? false : _g, _h = _a.autoResize, autoResize = _h === void 0 ? false : _h, _j = _a.showCounter, showCounter = _j === void 0 ? false : _j, info = _a.info, errorMessage = _a.errorMessage, onChange = _a.onChange, onFocus = _a.onFocus, onBlur = _a.onBlur, _k = _a.className, className = _k === void 0 ? '' : _k, id = _a.id;
    var _l = useState(defaultValue || ''), internalValue = _l[0], setInternalValue = _l[1];
    var _m = useState(false), isFocused = _m[0], setIsFocused = _m[1];
    var textareaRef = useRef(null);
    var currentValue = value !== undefined ? value : internalValue;
    var hasValue = Boolean(currentValue);
    var currentLength = currentValue.length;
    // 자동 크기 조절
    useEffect(function () {
        if (autoResize && textareaRef.current) {
            var textarea = textareaRef.current;
            textarea.style.height = 'auto';
            var scrollHeight = textarea.scrollHeight;
            var lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 10);
            var minHeight = lineHeight * minRows;
            var maxHeight = maxRows ? lineHeight * maxRows : Infinity;
            var newHeight = Math.max(minHeight, Math.min(scrollHeight, maxHeight));
            textarea.style.height = "".concat(newHeight, "px");
        }
    }, [currentValue, autoResize, minRows, maxRows]);
    var handleChange = function (event) {
        var newValue = event.target.value;
        // maxLength 체크
        if (maxLength && newValue.length > maxLength) {
            return;
        }
        if (value === undefined) {
            setInternalValue(newValue);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(newValue, event);
    };
    var handleFocus = function (event) {
        setIsFocused(true);
        onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
    };
    var handleBlur = function (event) {
        setIsFocused(false);
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    };
    var getTextAreaClasses = function () {
        var classes = ['textarea'];
        if (hasValue)
            classes.push('-filled');
        if (isFocused)
            classes.push('-focused');
        if (error)
            classes.push('-error');
        if (disabled)
            classes.push('-disabled');
        if (readonly)
            classes.push('-readonly');
        return classes.join(' ');
    };
    var getFieldClasses = function () {
        var classes = ['field', 'textfield'];
        if (className)
            classes.push(className);
        return classes.join(' ');
    };
    return (_jsxs("div", { className: getFieldClasses(), children: [label && (_jsxs("label", { htmlFor: id, className: "label", children: [label, required && _jsx("span", { className: "required", "aria-label": "\uD544\uC218", children: "*" })] })), _jsxs("div", { className: getTextAreaClasses(), children: [_jsx("textarea", { ref: textareaRef, id: id, value: currentValue, placeholder: placeholder, maxLength: maxLength, rows: minRows, disabled: disabled, readOnly: readonly, required: required, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, "aria-invalid": error, "aria-describedby": (info || errorMessage) ? "".concat(id, "-info") : undefined }), showCounter && maxLength && (_jsxs("div", { className: "text-count", children: [_jsx("span", { className: "count ".concat(error ? 'error' : 'point'), children: currentLength }), _jsx("span", { className: "total", children: maxLength })] }))] }), (info || errorMessage) && (_jsx("p", { id: "".concat(id, "-info"), className: "info ".concat(error ? '-error' : ''), children: error && errorMessage ? errorMessage : info }))] }));
};
export default TextArea;
