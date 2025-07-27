import { jsx as _jsx } from "react/jsx-runtime";
export var Icon = function (_a) {
    var name = _a.name, _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.style, style = _c === void 0 ? 'line' : _c, _d = _a.category, category = _d === void 0 ? 'general' : _d, _e = _a.color, color = _e === void 0 ? '' : _e, _f = _a.darkMode, darkMode = _f === void 0 ? false : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.className, className = _h === void 0 ? '' : _h, alt = _a.alt;
    // 파일명 생성 로직
    var buildIconFileName = function () {
        var parts = ['ico', name];
        if (color)
            parts.push(color);
        if (style)
            parts.push(style);
        if (size)
            parts.push(size.toString());
        if (disabled)
            parts.push('disabled');
        if (darkMode)
            parts.push('dk');
        return parts.join('_') + '.png';
    };
    var fileName = buildIconFileName();
    var srcSet = "assets/imgs/nds/common/".concat(fileName, " 2x");
    var altText = alt || fileName.replace('.png', '');
    return (_jsx("div", { className: "nds__icon__wrap ".concat(className).trim(), children: _jsx("img", { srcSet: srcSet, alt: altText }) }));
};
export default Icon;
