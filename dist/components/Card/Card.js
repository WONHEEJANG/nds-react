import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export var Card = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'general' : _b, _c = _a.type, type = _c === void 0 ? 'basic' : _c, title = _a.title, subtitle = _a.subtitle, accountNumber = _a.accountNumber, bankCode = _a.bankCode, bankName = _a.bankName, _d = _a.hasAccordion, hasAccordion = _d === void 0 ? false : _d, _e = _a.defaultExpanded, defaultExpanded = _e === void 0 ? false : _e, _f = _a.items, items = _f === void 0 ? [] : _f, _g = _a.hiddenItems, hiddenItems = _g === void 0 ? [] : _g, children = _a.children, _h = _a.className, className = _h === void 0 ? '' : _h;
    var _j = useState(defaultExpanded), isExpanded = _j[0], setIsExpanded = _j[1];
    var cardClasses = ['card'];
    cardClasses.push(variant);
    if (variant === 'account') {
        cardClasses.push('-comb');
        if (hasAccordion)
            cardClasses.push('-accor');
    }
    var cardClassName = [cardClasses.join(' '), className].filter(Boolean).join(' ');
    var toggleExpanded = function () {
        setIsExpanded(!isExpanded);
    };
    var renderAccountInfo = function () { return (_jsxs("div", { "data-bankcode": bankCode, className: "info", children: [_jsx("span", { className: "name", children: _jsx("span", { children: title }) }), _jsxs("span", { className: "account-number", children: [_jsx("span", { children: bankName }), _jsx("span", { children: accountNumber })] })] })); };
    var renderDataList = function (itemList) { return (_jsx("dl", { className: "dl", children: itemList.map(function (item, index) { return (_jsxs("div", { children: [_jsx("dt", { children: item.title }), _jsx("dd", { children: item.value })] }, index)); }) })); };
    var renderAccordionSection = function () { return (_jsxs("div", { className: "dls", "data-role": "fold", children: [_jsx("button", { type: "button", className: "more", "data-role": "marker", onClick: toggleExpanded, children: _jsx("span", { className: "hide", children: isExpanded ? '접기' : '더보기' }) }), _jsx("div", { className: "dl", "data-role": isExpanded ? "visible" : "hidden", children: renderDataList(hiddenItems) })] })); };
    return (_jsx("div", { className: "field", children: _jsxs("div", { className: cardClassName, children: [variant === 'account' && renderAccountInfo(), variant === 'general' && title && (_jsxs("div", { className: "info", children: [_jsx("span", { className: "name", children: _jsx("span", { children: title }) }), subtitle && (_jsx("span", { className: "sub-info", children: _jsx("span", { children: subtitle }) }))] })), items.length > 0 && renderDataList(items), hasAccordion && hiddenItems.length > 0 && renderAccordionSection(), children] }) }));
};
export default Card;
