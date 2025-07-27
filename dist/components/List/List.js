import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
export var List = function (_a) {
    var items = _a.items, _b = _a.variant, variant = _b === void 0 ? 'basic' : _b, _c = _a.type, type = _c === void 0 ? 'default' : _c, _d = _a.lines, lines = _d === void 0 ? 1 : _d, _e = _a.selectable, selectable = _e === void 0 ? false : _e, onItemClick = _a.onItemClick, onFavoriteToggle = _a.onFavoriteToggle, _f = _a.className, className = _f === void 0 ? '' : _f;
    var containerClasses = ['selection'];
    if (variant === 'account')
        containerClasses.push('remittance');
    var finalClassName = [containerClasses.join(' '), className].filter(Boolean).join(' ');
    var handleItemClick = function (item) {
        var _a;
        if (!item.disabled) {
            (_a = item.onClick) === null || _a === void 0 ? void 0 : _a.call(item);
            onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item);
        }
    };
    var handleFavoriteToggle = function (itemId, currentFavorite) {
        onFavoriteToggle === null || onFavoriteToggle === void 0 ? void 0 : onFavoriteToggle(itemId, !currentFavorite);
    };
    var renderAccountItem = function (item) { return (_jsxs(_Fragment, { children: [_jsxs("button", { type: "button", "data-bankcode": item.bankCode, className: "info", onClick: function () { return handleItemClick(item); }, disabled: item.disabled, children: [_jsx("span", { className: "name", children: _jsx("span", { children: item.title }) }), _jsx("span", { className: "account-number", children: _jsx("span", { className: "number", children: item.accountNumber }) })] }), onFavoriteToggle && (_jsx("div", { className: "list-settings", children: _jsxs("div", { className: "setting -favorite", children: [_jsx("input", { type: "checkbox", id: "favorite-".concat(item.id), className: "favorite-input", checked: item.isFavorite || false, onChange: function () { return handleFavoriteToggle(item.id, item.isFavorite || false); } }), _jsx("label", { htmlFor: "favorite-".concat(item.id), className: "favorite-label", children: _jsx("span", { className: "hide", children: "\uC990\uACA8\uCC3E\uAE30" }) })] }) }))] })); };
    var renderBasicItem = function (item) { return (_jsxs("button", { type: "button", className: "info", onClick: function () { return handleItemClick(item); }, disabled: item.disabled, children: [_jsx("span", { className: "name", children: _jsx("span", { children: item.title }) }), item.subtitle && (_jsx("span", { className: "sub-info", children: _jsx("span", { children: item.subtitle }) })), item.value && (_jsx("span", { className: "value", children: _jsx("span", { children: item.value }) }))] })); };
    return (_jsx("div", { className: finalClassName, children: _jsx("ul", { children: items.map(function (item) { return (_jsx("li", { children: variant === 'account' ? renderAccountItem(item) : renderBasicItem(item) }, item.id)); }) }) }));
};
export default List;
