import { jsx as _jsx } from "react/jsx-runtime";
export var Divider = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'content-8' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, color = _a.color, thickness = _a.thickness, margin = _a.margin;
    var getDividerClasses = function () {
        var classes = ['hr'];
        // 타입별 클래스 추가
        switch (type) {
            case 'content-8':
                classes.push('content-8');
                break;
            case 'list-1':
                classes.push('list-1');
                break;
            case 'list-2':
                classes.push('list-2');
                break;
            case 'page-1':
                classes.push('page-1');
                break;
        }
        if (className)
            classes.push(className);
        return classes.join(' ');
    };
    var getInlineStyles = function () {
        var styles = {};
        if (color)
            styles.borderColor = color;
        if (thickness)
            styles.borderWidth = thickness;
        if (margin)
            styles.margin = margin;
        return Object.keys(styles).length > 0 ? styles : undefined;
    };
    return (_jsx("hr", { className: getDividerClasses(), style: getInlineStyles() }));
};
export var VerticalDivider = function (_a) {
    var _b = _a.height, height = _b === void 0 ? '1em' : _b, color = _a.color, _c = _a.thickness, thickness = _c === void 0 ? '1px' : _c, _d = _a.margin, margin = _d === void 0 ? '0 8px' : _d, _e = _a.className, className = _e === void 0 ? '' : _e;
    var getInlineStyles = function () {
        return {
            display: 'inline-block',
            width: thickness,
            height: height,
            backgroundColor: color || 'currentColor',
            margin: margin,
            verticalAlign: 'middle',
        };
    };
    return (_jsx("span", { className: "vertical-divider ".concat(className), style: getInlineStyles(), role: "separator", "aria-orientation": "vertical" }));
};
export default Divider;
