import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export var Tab = function (_a) {
    var _b, _c;
    var items = _a.items, defaultActiveTab = _a.defaultActiveTab, onTabChange = _a.onTabChange, _d = _a.className, className = _d === void 0 ? '' : _d;
    var _e = useState(defaultActiveTab || ((_b = items[0]) === null || _b === void 0 ? void 0 : _b.id)), activeTab = _e[0], setActiveTab = _e[1];
    var handleTabClick = function (tabId) {
        var tab = items.find(function (item) { return item.id === tabId; });
        if (tab && !tab.disabled) {
            setActiveTab(tabId);
            onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange(tabId);
        }
    };
    var activeTabContent = (_c = items.find(function (item) { return item.id === activeTab; })) === null || _c === void 0 ? void 0 : _c.content;
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "tabs ".concat(className).trim(), children: _jsx("div", { className: "outer", children: _jsx("div", { className: "inner", children: _jsx("div", { role: "tablist", className: "list", children: items.map(function (item) { return (_jsx("div", { className: "item ".concat(activeTab === item.id ? '-active' : '').trim(), children: _jsx("button", { type: "button", role: "tab", "aria-selected": activeTab === item.id, "aria-controls": "tabs-panel-".concat(item.id), id: "tab-".concat(item.id), disabled: item.disabled, onClick: function () { return handleTabClick(item.id); }, children: item.label }) }, item.id)); }) }) }) }) }), _jsx("div", { className: "content -wide", children: _jsx("div", { className: "tabs-panels", children: items.map(function (item) { return (_jsx("div", { role: "tabpanel", "aria-labelledby": "tab-".concat(item.id), id: "tabs-panel-".concat(item.id), className: "tabs-panel ".concat(activeTab === item.id ? '-active' : '').trim(), tabIndex: 0, style: { display: activeTab === item.id ? 'block' : 'none' }, children: item.content }, item.id)); }) }) })] }));
};
export default Tab;
