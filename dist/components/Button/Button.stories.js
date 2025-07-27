import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from './Button';
var meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'NDS 디자인 시스템의 기본 버튼 컴포넌트입니다. 다양한 변형과 크기를 지원합니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'],
            description: '버튼의 스타일 변형',
        },
        size: {
            control: 'select',
            options: ['lg', 'md', 'rg', 'sm', 'xs'],
            description: '버튼의 크기',
        },
        disabled: {
            control: 'boolean',
            description: '버튼 비활성화 상태',
        },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
            description: '버튼의 HTML 타입',
        },
        children: {
            control: 'text',
            description: '버튼에 표시될 텍스트',
        },
        onClick: {
            action: 'clicked',
            description: '버튼 클릭 시 호출되는 함수',
        },
    },
    args: {
        children: 'Button',
        variant: 'primary',
        size: 'md',
        disabled: false,
        type: 'button',
    },
};
export default meta;
// 기본 스토리
export var Default = {
    args: {
        children: 'Default Button',
    },
};
// 변형별 스토리
export var Primary = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
};
export var Secondary = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
};
export var Tertiary = {
    args: {
        variant: 'tertiary',
        children: 'Tertiary Button',
    },
};
// 크기별 스토리
export var Sizes = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', gap: '12px', alignItems: 'center' }, children: [_jsx(Button, { variant: "primary", size: "lg", children: "Large" }), _jsx(Button, { variant: "primary", size: "md", children: "Medium" }), _jsx(Button, { variant: "primary", size: "rg", children: "Regular" }), _jsx(Button, { variant: "primary", size: "sm", children: "Small" }), _jsx(Button, { variant: "primary", size: "xs", children: "XSmall" })] })); },
    parameters: {
        docs: {
            description: {
                story: '버튼의 다양한 크기를 보여줍니다.',
            },
        },
    },
};
// 비활성화 상태
export var Disabled = {
    args: {
        disabled: true,
        children: 'Disabled Button',
    },
};
// 모든 변형 조합
export var AllVariants = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: [_jsxs("div", { style: { display: 'flex', gap: '12px' }, children: [_jsx(Button, { variant: "primary", size: "lg", children: "Primary Large" }), _jsx(Button, { variant: "secondary", size: "lg", children: "Secondary Large" }), _jsx(Button, { variant: "tertiary", size: "lg", children: "Tertiary Large" })] }), _jsxs("div", { style: { display: 'flex', gap: '12px' }, children: [_jsx(Button, { variant: "primary", size: "md", children: "Primary Medium" }), _jsx(Button, { variant: "secondary", size: "md", children: "Secondary Medium" }), _jsx(Button, { variant: "tertiary", size: "md", children: "Tertiary Medium" })] }), _jsxs("div", { style: { display: 'flex', gap: '12px' }, children: [_jsx(Button, { variant: "primary", size: "sm", children: "Primary Small" }), _jsx(Button, { variant: "secondary", size: "sm", children: "Secondary Small" }), _jsx(Button, { variant: "tertiary", size: "sm", children: "Tertiary Small" })] }), _jsxs("div", { style: { display: 'flex', gap: '12px' }, children: [_jsx(Button, { variant: "primary", disabled: true, children: "Primary Disabled" }), _jsx(Button, { variant: "secondary", disabled: true, children: "Secondary Disabled" }), _jsx(Button, { variant: "tertiary", disabled: true, children: "Tertiary Disabled" })] })] })); },
    parameters: {
        docs: {
            description: {
                story: '버튼의 모든 변형과 상태를 한눈에 볼 수 있습니다.',
            },
        },
    },
};
