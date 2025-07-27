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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button, Input, Checkbox } from '../components';
export var LoginForm = function () {
    var _a = useState({
        username: '',
        password: '',
        rememberMe: false,
    }), formData = _a[0], setFormData = _a[1];
    var handleInputChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value, type = _a.type, checked = _a.checked;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = type === 'checkbox' ? checked : value, _a)));
        });
    };
    var handleSubmit = function (e) {
        e.preventDefault();
        console.log('로그인 정보:', formData);
    };
    return (_jsx("div", { className: "page", children: _jsxs("div", { className: "container", children: [_jsx("header", { className: "header", children: _jsx("div", { className: "inner", children: _jsx("h1", { className: "title", children: "\uB85C\uADF8\uC778" }) }) }), _jsx("main", { className: "contents", children: _jsx("div", { className: "content", children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsx(Input, { label: "\uC544\uC774\uB514", type: "text", name: "username", value: formData.username, onChange: handleInputChange, placeholder: "\uC544\uC774\uB514\uB97C \uC785\uB825\uD558\uC138\uC694", required: true }), _jsx(Input, { label: "\uBE44\uBC00\uBC88\uD638", type: "password", name: "password", value: formData.password, onChange: handleInputChange, placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694", required: true }), _jsx(Checkbox, { label: "\uB85C\uADF8\uC778 \uC0C1\uD0DC \uC720\uC9C0", name: "rememberMe", checked: formData.rememberMe, onChange: handleInputChange }), _jsx("div", { className: "buttons", children: _jsx(Button, { type: "submit", variant: "primary", size: "lg", children: "\uB85C\uADF8\uC778" }) })] }) }) })] }) }));
};
