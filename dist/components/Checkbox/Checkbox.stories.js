import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox } from './Checkbox';
var meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'NDS 디자인 시스템의 체크박스 컴포넌트입니다. 다양한 크기와 상태를 지원합니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: '체크박스 라벨',
        },
        size: {
            control: 'select',
            options: ['lg', 'md', 'sm', 'xs'],
            description: '체크박스 크기',
        },
        state: {
            control: 'select',
            options: ['false', 'true', 'indeterminate', 'disabled'],
            description: '체크박스 상태',
        },
        checked: {
            control: 'boolean',
            description: '체크 상태',
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
        label: 'Checkbox Label',
        size: 'sm',
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
        label: '기본 체크박스',
    },
};
// 선택된 상태
export var Checked = {
    args: {
        label: '선택된 체크박스',
        checked: true,
    },
};
// 중간 상태
export var Indeterminate = {
    args: {
        label: '중간 상태 체크박스',
        state: 'indeterminate',
    },
};
// 비활성화 상태
export var Disabled = {
    args: {
        label: '비활성화 체크박스',
        state: 'disabled',
        disabled: true,
    },
};
// 비활성화 + 선택 상태
export var DisabledChecked = {
    args: {
        label: '비활성화 + 선택 상태',
        checked: true,
        disabled: true,
    },
};
// 필수 선택
export var Required = {
    args: {
        label: '필수 선택 체크박스',
        required: true,
    },
};
// 크기별
export var Sizes = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' }, children: [_jsx(Checkbox, { label: "Large (lg)", size: "lg" }), _jsx(Checkbox, { label: "Small (sm)", size: "sm" }), _jsx(Checkbox, { label: "Small (sm)", size: "sm" }), _jsx(Checkbox, { label: "Extra Small (xs)", size: "xs" })] })); },
    parameters: {
        docs: {
            description: {
                story: '체크박스의 다양한 크기를 보여줍니다.',
            },
        },
    },
};
// 상태별
export var States = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' }, children: [_jsx(Checkbox, { label: "\uAE30\uBCF8 \uC0C1\uD0DC", state: "default" }), _jsx(Checkbox, { label: "\uC120\uD0DD\uB41C \uC0C1\uD0DC", state: "selected" }), _jsx(Checkbox, { label: "\uC911\uAC04 \uC0C1\uD0DC", state: "selected" }), _jsx(Checkbox, { label: "\uBE44\uD65C\uC131\uD654 \uC0C1\uD0DC", state: "disabled" })] })); },
    parameters: {
        docs: {
            description: {
                story: '체크박스의 다양한 상태를 보여줍니다.',
            },
        },
    },
};
// 그룹 예제
export var CheckboxGroup = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [_jsx("div", { style: { fontWeight: 'bold', marginBottom: '8px' }, children: "\uAD00\uC2EC \uBD84\uC57C\uB97C \uC120\uD0DD\uD558\uC138\uC694:" }), _jsx(Checkbox, { label: "\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C" }), _jsx(Checkbox, { label: "\uBC31\uC5D4\uB4DC \uAC1C\uBC1C" }), _jsx(Checkbox, { label: "\uBAA8\uBC14\uC77C \uAC1C\uBC1C" }), _jsx(Checkbox, { label: "\uB370\uC774\uD130 \uC0AC\uC774\uC5B8\uC2A4" }), _jsx(Checkbox, { label: "\uB514\uC790\uC778" })] })); },
    parameters: {
        docs: {
            description: {
                story: '여러 개의 체크박스를 그룹으로 사용하는 예제입니다.',
            },
        },
    },
};
// 라벨 없는 체크박스
export var WithoutLabel = {
    args: {
        'aria-label': '라벨 없는 체크박스',
    },
    parameters: {
        docs: {
            description: {
                story: '시각적 라벨 없이 aria-label만 사용하는 체크박스입니다.',
            },
        },
    },
};
