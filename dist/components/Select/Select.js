import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
export var Select = function (_a) {
    var label = _a.label, options = _a.options, value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? '선택' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.readonly, readonly = _d === void 0 ? false : _d, _e = _a.error, error = _e === void 0 ? false : _e, info = _a.info, errorMessage = _a.errorMessage, _f = _a.variant, variant = _f === void 0 ? 'default' : _f, onChange = _a.onChange, _g = _a.className, className = _g === void 0 ? '' : _g;
    var _h = useState(false), isOpen = _h[0], setIsOpen = _h[1];
    var _j = useState(false), isFocused = _j[0], setIsFocused = _j[1];
    var selectRef = useRef(null);
    var buttonRef = useRef(null);
    var selectedOption = options.find(function (option) { return option.value === value; });
    var hasValue = Boolean(selectedOption);
    // 클릭 외부 감지
    useEffect(function () {
        var handleClickOutside = function (event) {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
                setIsFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return function () { return document.removeEventListener('mousedown', handleClickOutside); };
    }, []);
    var handleButtonClick = function () {
        if (disabled || readonly)
            return;
        setIsOpen(!isOpen);
        setIsFocused(!isOpen);
    };
    var handleOptionClick = function (option) {
        if (option.disabled)
            return;
        onChange === null || onChange === void 0 ? void 0 : onChange(option.value, option);
        setIsOpen(false);
        setIsFocused(false);
    };
    var getSelectClasses = function () {
        var baseClass = 'select';
        var classes = [baseClass];
        if (variant === 'account')
            classes.push('-account');
        if (variant === 'admin')
            classes.push('-price');
        if (variant === '2row')
            classes.push('row-two');
        if (hasValue)
            classes.push('-filled');
        if (isFocused || isOpen)
            classes.push('-focused');
        if (error)
            classes.push('-error');
        if (disabled)
            classes.push('-disabled');
        if (readonly)
            classes.push('-readonly');
        return classes.join(' ');
    };
    var renderSelectedContent = function () {
        if (!selectedOption) {
            return (_jsx("span", { className: "fc-empty", children: placeholder }));
        }
        switch (variant) {
            case 'account':
                return (_jsx("div", { className: "selection", children: _jsxs("div", { "data-bankcode": selectedOption.bankCode, className: "info", children: [_jsx("span", { className: "name", children: _jsx("span", { children: selectedOption.label }) }), _jsxs("span", { className: "account-number", children: [_jsx("span", { children: selectedOption.bankCode }), _jsx("span", { children: selectedOption.accountNumber })] })] }) }));
            case '2row':
                return (_jsxs("div", { className: "selct-wrap", children: [_jsx("div", { className: "sub-disc", children: selectedOption.description }), _jsx("div", { className: "selct-opt", children: selectedOption.label })] }));
            default:
                return _jsx("span", { children: selectedOption.label });
        }
    };
    var renderOptions = function () {
        if (!isOpen)
            return null;
        return (_jsx("div", { className: "select-dropdown", children: _jsx("ul", { className: "options-list", children: options.map(function (option) { return (_jsx("li", { children: _jsx("button", { type: "button", className: "option ".concat(option.disabled ? 'disabled' : '', " ").concat(value === option.value ? 'selected' : ''), onClick: function () { return handleOptionClick(option); }, disabled: option.disabled, children: variant === 'account' ? (_jsx("div", { className: "selection", children: _jsxs("div", { "data-bankcode": option.bankCode, className: "info", children: [_jsx("span", { className: "name", children: _jsx("span", { children: option.label }) }), _jsxs("span", { className: "account-number", children: [_jsx("span", { children: option.bankCode }), _jsx("span", { children: option.accountNumber })] })] }) })) : variant === '2row' ? (_jsxs("div", { className: "selct-wrap", children: [_jsx("div", { className: "sub-disc", children: option.description }), _jsx("div", { className: "selct-opt", children: option.label })] })) : (option.label) }) }, option.value)); }) }) }));
    };
    return (_jsxs("div", { className: "field ".concat(className), ref: selectRef, children: [label && _jsx("label", { className: "label", children: label }), _jsxs("div", { className: getSelectClasses(), children: [_jsx("button", { ref: buttonRef, type: "button", "aria-haspopup": "true", "aria-expanded": isOpen, className: !selectedOption ? 'fc-empty' : '', onClick: handleButtonClick, disabled: disabled, children: renderSelectedContent() }), renderOptions()] }), (info || errorMessage) && (_jsx("div", { className: "text", children: _jsx("p", { className: "info ".concat(error ? '-error' : ''), children: error && errorMessage ? errorMessage : info }) }))] }));
};
export default Select;
