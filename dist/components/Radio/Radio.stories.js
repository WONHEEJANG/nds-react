import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Radio } from './Radio';
var meta = {
    title: 'Components/Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'NDS 디자인 시스템의 라디오 버튼 컴포넌트입니다. 여러 옵션 중 하나만 선택할 때 사용됩니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: '라디오 버튼 라벨',
        },
        name: {
            control: 'text',
            description: '라디오 그룹 이름',
        },
        value: {
            control: 'text',
            description: '라디오 버튼 값',
        },
        size: {
            control: 'select',
            options: ['lg', 'md', 'sm', 'xs'],
            description: '라디오 버튼 크기',
        },
        state: {
            control: 'select',
            options: ['false', 'true', 'disabled'],
            description: '라디오 버튼 상태',
        },
        checked: {
            control: 'boolean',
            description: '선택 상태',
        },
        disabled: {
            control: 'boolean',
            description: '비활성화 상태',
        },
        required: {
            control: 'boolean',
            description: '필수 선택 여부',
        },
        onChange: {
            action: 'changed',
            description: '상태 변경 시 호출되는 함수',
        },
    },
    args: {
        label: 'Radio Label',
        name: 'radio-group',
        value: 'option1',
        size: 'lg',
        state: 'default',
        checked: false,
        disabled: false,
        required: false,
    },
};
export default meta;
// 기본 스토리
export var Default = {
    args: {
        label: '기본 라디오 버튼',
        name: 'default',
        value: 'default',
    },
};
// 선택된 상태
export var Checked = {
    args: {
        label: '선택된 라디오 버튼',
        name: 'checked',
        value: 'checked',
        checked: true,
    },
};
// 비활성화 상태
export var Disabled = {
    args: {
        label: '비활성화 라디오 버튼',
        name: 'disabled',
        value: 'disabled',
        state: 'disabled',
        disabled: true,
    },
};
// 비활성화 + 선택 상태
export var DisabledChecked = {
    args: {
        label: '비활성화 + 선택 상태',
        name: 'disabled-checked',
        value: 'disabled-checked',
        checked: true,
        disabled: true,
    },
};
// 필수 선택
export var Required = {
    args: {
        label: '필수 선택 라디오 버튼',
        name: 'required',
        value: 'required',
        required: true,
    },
};
// 크기별
export var Sizes = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' }, children: [_jsx(Radio, { label: "Large (lg)", name: "sizes", value: "lg", size: "lg" }), _jsx(Radio, { label: "Small (sm)", name: "sizes", value: "sm", size: "sm" })] })); },
    parameters: {
        docs: {
            description: {
                story: '라디오 버튼의 다양한 크기를 보여줍니다.',
            },
        },
    },
};
// 상태별
export var States = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' }, children: [_jsx(Radio, { label: "\uAE30\uBCF8 \uC0C1\uD0DC", name: "states", value: "default", state: "default" }), _jsx(Radio, { label: "\uC120\uD0DD\uB41C \uC0C1\uD0DC", name: "states", value: "selected", state: "selected" }), _jsx(Radio, { label: "\uBE44\uD65C\uC131\uD654 \uC0C1\uD0DC", name: "states", value: "disabled", state: "disabled" })] })); },
    parameters: {
        docs: {
            description: {
                story: '라디오 버튼의 다양한 상태를 보여줍니다.',
            },
        },
    },
};
// 라디오 그룹 예제
export var RadioGroup = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [_jsx("div", { style: { fontWeight: 'bold', marginBottom: '8px' }, children: "\uC120\uD638\uD558\uB294 \uD504\uB85C\uADF8\uB798\uBC0D \uC5B8\uC5B4:" }), _jsx(Radio, { label: "JavaScript", name: "language", value: "javascript" }), _jsx(Radio, { label: "TypeScript", name: "language", value: "typescript" }), _jsx(Radio, { label: "Python", name: "language", value: "python" }), _jsx(Radio, { label: "Java", name: "language", value: "java" }), _jsx(Radio, { label: "C++", name: "language", value: "cpp" })] })); },
    parameters: {
        docs: {
            description: {
                story: '여러 개의 라디오 버튼을 그룹으로 사용하는 예제입니다.',
            },
        },
    },
};
// 수평 배치 그룹
export var HorizontalGroup = {
    render: function () { return (_jsxs("div", { children: [_jsx("div", { style: { fontWeight: 'bold', marginBottom: '8px' }, children: "\uACBD\uD5D8 \uC218\uC900:" }), _jsxs("div", { style: { display: 'flex', gap: '16px' }, children: [_jsx(Radio, { label: "\uCD08\uAE09", name: "level", value: "beginner" }), _jsx(Radio, { label: "\uC911\uAE09", name: "level", value: "intermediate" }), _jsx(Radio, { label: "\uACE0\uAE09", name: "level", value: "advanced" })] })] })); },
    parameters: {
        docs: {
            description: {
                story: '라디오 버튼을 수평으로 배치한 그룹 예제입니다.',
            },
        },
    },
};
// 다양한 크기 조합
export var MixedSizes = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: [_jsxs("div", { children: [_jsx("div", { style: { fontWeight: 'bold', marginBottom: '8px' }, children: "\uD070 \uD06C\uAE30 \uC635\uC158:" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [_jsx(Radio, { label: "\uC635\uC158 A", name: "large-options", value: "a", size: "lg" }), _jsx(Radio, { label: "\uC635\uC158 B", name: "large-options", value: "b", size: "lg" })] })] }), _jsxs("div", { children: [_jsx("div", { style: { fontWeight: 'bold', marginBottom: '8px' }, children: "\uC791\uC740 \uD06C\uAE30 \uC635\uC158:" }), _jsxs("div", { style: { display: 'flex', gap: '12px' }, children: [_jsx(Radio, { label: "\uC608", name: "small-options", value: "yes", size: "sm" }), _jsx(Radio, { label: "\uC544\uB2C8\uC624", name: "small-options", value: "no", size: "sm" })] })] })] })); },
    parameters: {
        docs: {
            description: {
                story: '다양한 크기의 라디오 버튼을 조합한 예제입니다.',
            },
        },
    },
};
// 라벨 없는 라디오 버튼
export var WithoutLabel = {
    args: {
        name: 'no-label',
        value: 'no-label',
        'aria-label': '라벨 없는 라디오 버튼',
    },
    parameters: {
        docs: {
            description: {
                story: '시각적 라벨 없이 aria-label만 사용하는 라디오 버튼입니다.',
            },
        },
    },
};
