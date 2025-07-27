import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion } from './Accordion';
var meta = {
    title: 'Components/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'NDS 디자인 시스템의 아코디언 컴포넌트입니다. 접고 펼칠 수 있는 콘텐츠 영역을 제공합니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: '아코디언 제목',
        },
        subInfo: {
            control: 'text',
            description: '부가 정보',
        },
        badge: {
            control: 'text',
            description: '배지 텍스트',
        },
        variant: {
            control: 'select',
            options: ['box', 'line'],
            description: '아코디언 스타일 변형',
        },
        type: {
            control: 'select',
            options: ['list', 'content'],
            description: '아코디언 타입',
        },
        defaultOpen: {
            control: 'boolean',
            description: '기본 열림/닫힘 상태',
        },
        children: {
            control: 'text',
            description: '아코디언 내용',
        },
    },
    args: {
        title: 'Accordion Title',
        variant: 'box',
        type: 'list',
        defaultOpen: false,
        children: '아코디언 내용입니다.',
    },
};
export default meta;
// 기본 스토리
export var Default = {
    args: {
        title: '기본 아코디언',
        children: (_jsxs("div", { style: { padding: '16px' }, children: [_jsx("p", { children: "\uC774\uAC83\uC740 \uAE30\uBCF8 \uC544\uCF54\uB514\uC5B8\uC758 \uB0B4\uC6A9\uC785\uB2C8\uB2E4." }), _jsx("p", { children: "\uC5EC\uB7EC \uC904\uC758 \uD14D\uC2A4\uD2B8\uB098 \uB2E4\uB978 \uCEF4\uD3EC\uB10C\uD2B8\uB4E4\uC744 \uD3EC\uD568\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." })] })),
    },
};
// 계좌 정보 아코디언
export var AccountInfo = {
    args: {
        title: '계좌 정보',
        subInfo: 'NH농협은행',
        badge: '주거래',
        variant: 'box',
        type: 'list',
        children: (_jsxs("dl", { className: "dl", style: { margin: 0, padding: '16px' }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }, children: [_jsx("dt", { children: "\uACC4\uC88C\uBC88\uD638" }), _jsx("dd", { style: { margin: 0 }, children: "123-456-789012" })] }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }, children: [_jsx("dt", { children: "\uC794\uC561" }), _jsx("dd", { style: { margin: 0 }, children: "1,234,567\uC6D0" })] }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [_jsx("dt", { children: "\uAC1C\uC124\uC77C" }), _jsx("dd", { style: { margin: 0 }, children: "2024.01.15" })] })] })),
    },
};
// 열린 상태
export var Opened = {
    args: {
        title: '열린 아코디언',
        isOpen: true,
        children: (_jsx("div", { style: { padding: '16px' }, children: _jsx("p", { children: "\uC774 \uC544\uCF54\uB514\uC5B8\uC740 \uCD08\uAE30\uC5D0 \uC5F4\uB9B0 \uC0C1\uD0DC\uC785\uB2C8\uB2E4." }) })),
    },
};
// 비활성화 상태
export var Disabled = {
    args: {
        title: '비활성화된 아코디언',
        disabled: true,
        children: (_jsx("div", { style: { padding: '16px' }, children: _jsx("p", { children: "\uC774 \uB0B4\uC6A9\uC740 \uBCF4\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4." }) })),
    },
};
// 라인 변형
export var LineVariant = {
    args: {
        title: '라인 변형 아코디언',
        variant: 'line',
        children: (_jsx("div", { style: { padding: '16px' }, children: _jsx("p", { children: "\uB77C\uC778 \uC2A4\uD0C0\uC77C\uC758 \uC544\uCF54\uB514\uC5B8\uC785\uB2C8\uB2E4." }) })),
    },
};
// 콘텐츠 타입
export var ContentType = {
    args: {
        title: '콘텐츠 타입 아코디언',
        type: 'content',
        children: (_jsxs("div", { style: { padding: '16px' }, children: [_jsx("h4", { style: { margin: '0 0 12px 0' }, children: "\uC0C1\uC138 \uB0B4\uC6A9" }), _jsx("p", { children: "\uCF58\uD150\uCE20 \uD0C0\uC785\uC758 \uC544\uCF54\uB514\uC5B8\uC740 \uB354 \uC790\uC720\uB85C\uC6B4 \uD615\uD0DC\uC758 \uB0B4\uC6A9\uC744 \uB2F4\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }), _jsxs("ul", { children: [_jsx("li", { children: "\uCCAB \uBC88\uC9F8 \uD56D\uBAA9" }), _jsx("li", { children: "\uB450 \uBC88\uC9F8 \uD56D\uBAA9" }), _jsx("li", { children: "\uC138 \uBC88\uC9F8 \uD56D\uBAA9" })] })] })),
    },
};
// 다양한 변형 비교
export var Variants = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }, children: [_jsx(Accordion, { title: "\uBC15\uC2A4 + \uB9AC\uC2A4\uD2B8 \uD0C0\uC785", variant: "box", type: "list", subInfo: "NH\uB18D\uD611\uC740\uD589", badge: "\uC8FC\uAC70\uB798", children: _jsx("div", { style: { padding: '16px' }, children: "\uBC15\uC2A4 \uC2A4\uD0C0\uC77C, \uB9AC\uC2A4\uD2B8 \uD0C0\uC785" }) }), _jsx(Accordion, { title: "\uBC15\uC2A4 + \uCF58\uD150\uCE20 \uD0C0\uC785", variant: "box", type: "text", children: _jsx("div", { style: { padding: '16px' }, children: "\uBC15\uC2A4 \uC2A4\uD0C0\uC77C, \uCF58\uD150\uCE20 \uD0C0\uC785" }) }), _jsx(Accordion, { title: "\uB77C\uC778 + \uB9AC\uC2A4\uD2B8 \uD0C0\uC785", variant: "line", type: "list", children: _jsx("div", { style: { padding: '16px' }, children: "\uB77C\uC778 \uC2A4\uD0C0\uC77C, \uB9AC\uC2A4\uD2B8 \uD0C0\uC785" }) }), _jsx(Accordion, { title: "\uB77C\uC778 + \uCF58\uD150\uCE20 \uD0C0\uC785", variant: "line", type: "text", children: _jsx("div", { style: { padding: '16px' }, children: "\uB77C\uC778 \uC2A4\uD0C0\uC77C, \uCF58\uD150\uCE20 \uD0C0\uC785" }) })] })); },
    parameters: {
        docs: {
            description: {
                story: '아코디언의 다양한 변형을 비교해볼 수 있습니다.',
            },
        },
    },
};
// FAQ 예제
export var FAQ = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px', width: '500px' }, children: [_jsx("h3", { style: { margin: '0 0 16px 0' }, children: "\uC790\uC8FC \uBB3B\uB294 \uC9C8\uBB38" }), _jsx(Accordion, { title: "\uACC4\uC88C \uAC1C\uC124\uC740 \uC5B4\uB5BB\uAC8C \uD558\uB098\uC694?", variant: "line", type: "text", children: _jsxs("div", { style: { padding: '16px' }, children: [_jsx("p", { children: "\uC628\uB77C\uC778 \uB610\uB294 \uC601\uC5C5\uC810 \uBC29\uBB38\uC744 \uD1B5\uD574 \uACC4\uC88C\uB97C \uAC1C\uC124\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4." }), _jsxs("ol", { children: [_jsx("li", { children: "\uC2E0\uBD84\uC99D \uC900\uBE44" }), _jsx("li", { children: "\uAC1C\uC124 \uC2E0\uCCAD\uC11C \uC791\uC131" }), _jsx("li", { children: "\uCD08\uAE30 \uC785\uAE08 (\uCD5C\uC18C 1\uB9CC\uC6D0)" })] })] }) }), _jsx(Accordion, { title: "\uC778\uD130\uB137\uBC45\uD0B9 \uBE44\uBC00\uBC88\uD638\uB97C \uC78A\uC5B4\uBC84\uB838\uC5B4\uC694", variant: "line", type: "text", children: _jsxs("div", { style: { padding: '16px' }, children: [_jsx("p", { children: "\uACE0\uAC1D\uC13C\uD130(1588-2100) \uB610\uB294 \uC601\uC5C5\uC810 \uBC29\uBB38\uC744 \uD1B5\uD574 \uC7AC\uC124\uC815\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4." }), _jsx("p", { children: "\uBCF8\uC778 \uD655\uC778 \uD6C4 \uC989\uC2DC \uC7AC\uC124\uC815\uD574\uB4DC\uB9BD\uB2C8\uB2E4." })] }) }), _jsx(Accordion, { title: "\uC218\uC218\uB8CC\uB294 \uC5B8\uC81C \uBD80\uACFC\uB418\uB098\uC694?", variant: "line", type: "text", children: _jsxs("div", { style: { padding: '16px' }, children: [_jsx("p", { children: "\uAC70\uB798 \uC720\uD615\uC5D0 \uB530\uB77C \uC218\uC218\uB8CC\uAC00 \uBD80\uACFC\uB429\uB2C8\uB2E4:" }), _jsxs("ul", { children: [_jsx("li", { children: "\uD0C0\uD589 \uC774\uCCB4: 500\uC6D0" }), _jsx("li", { children: "ATM \uD0C0\uD589 \uCD9C\uAE08: 1,000\uC6D0" }), _jsx("li", { children: "\uD574\uC678 \uC1A1\uAE08: 15,000\uC6D0" })] })] }) })] })); },
    parameters: {
        docs: {
            description: {
                story: 'FAQ 페이지에서 사용되는 아코디언 예제입니다.',
            },
        },
    },
};
// 계좌 목록 예제
export var AccountList = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px', width: '400px' }, children: [_jsx("h3", { style: { margin: '0 0 16px 0' }, children: "\uB0B4 \uACC4\uC88C" }), _jsx(Accordion, { title: "\uC8FC\uAC70\uB798\uC6B0\uB300\uD1B5\uC7A5", subInfo: "NH\uB18D\uD611\uC740\uD589", badge: "\uC8FC\uAC70\uB798", variant: "box", type: "list", children: _jsxs("dl", { style: { margin: 0, padding: '16px' }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }, children: [_jsx("dt", { children: "\uACC4\uC88C\uBC88\uD638" }), _jsx("dd", { style: { margin: 0 }, children: "111-1234-5678-99" })] }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }, children: [_jsx("dt", { children: "\uC794\uC561" }), _jsx("dd", { style: { margin: 0 }, children: "2,567,890\uC6D0" })] }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [_jsx("dt", { children: "\uAC1C\uC124\uC77C" }), _jsx("dd", { style: { margin: 0 }, children: "2023.05.15" })] })] }) }), _jsx(Accordion, { title: "\uC790\uC720\uC801\uAE08", subInfo: "NH\uB18D\uD611\uC740\uD589", variant: "box", type: "list", children: _jsxs("dl", { style: { margin: 0, padding: '16px' }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }, children: [_jsx("dt", { children: "\uACC4\uC88C\uBC88\uD638" }), _jsx("dd", { style: { margin: 0 }, children: "222-5678-9012-34" })] }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }, children: [_jsx("dt", { children: "\uC794\uC561" }), _jsx("dd", { style: { margin: 0 }, children: "1,234,567\uC6D0" })] }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [_jsx("dt", { children: "\uB9CC\uAE30\uC77C" }), _jsx("dd", { style: { margin: 0 }, children: "2025.01.15" })] })] }) }), _jsx(Accordion, { title: "\uC815\uAE30\uC608\uAE08", subInfo: "NH\uB18D\uD611\uC740\uD589", variant: "box", type: "list", children: _jsxs("dl", { style: { margin: 0, padding: '16px' }, children: [_jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }, children: [_jsx("dt", { children: "\uACC4\uC88C\uBC88\uD638" }), _jsx("dd", { style: { margin: 0 }, children: "333-9012-3456-78" })] }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }, children: [_jsx("dt", { children: "\uC794\uC561" }), _jsx("dd", { style: { margin: 0 }, children: "5,000,000\uC6D0" })] }), _jsxs("div", { style: { display: 'flex', justifyContent: 'space-between' }, children: [_jsx("dt", { children: "\uB9CC\uAE30\uC77C" }), _jsx("dd", { style: { margin: 0 }, children: "2024.12.31" })] })] }) })] })); },
    parameters: {
        docs: {
            description: {
                story: '계좌 목록을 표시하는 아코디언 예제입니다.',
            },
        },
    },
};
