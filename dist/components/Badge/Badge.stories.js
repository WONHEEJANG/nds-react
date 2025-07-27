import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from './Badge';
var meta = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'NDS 디자인 시스템의 뱃지 컴포넌트입니다. 다양한 변형을 지원합니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['new', 'line-gray', 'solid', 'outline'],
            description: '뱃지의 스타일 변형',
        },
        children: {
            control: 'text',
            description: '뱃지에 표시될 텍스트',
        },
        ariaLabel: {
            control: 'text',
            description: '접근성을 위한 aria-label',
        },
    },
    args: {
        children: 'Badge',
        variant: 'solid',
    },
};
export default meta;
// 기본 스토리
export var Default = {
    args: {
        children: 'Default Badge',
    },
};
// 변형별 스토리
export var New = {
    args: {
        variant: 'new',
        children: 'New',
    },
};
export var LineGray = {
    args: {
        variant: 'line-gray',
        children: 'Line Gray',
    },
};
export var Solid = {
    args: {
        variant: 'solid',
        children: 'Solid',
    },
};
export var Outline = {
    args: {
        variant: 'outline',
        children: 'Outline',
    },
};
// 모든 변형 조합
export var AllVariants = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', gap: '12px', alignItems: 'center' }, children: [_jsx(Badge, { variant: "new", children: "New" }), _jsx(Badge, { variant: "line-gray", children: "Line Gray" }), _jsx(Badge, { variant: "solid", children: "Solid" }), _jsx(Badge, { variant: "outline", children: "Outline" })] })); },
    parameters: {
        docs: {
            description: {
                story: '뱃지의 모든 변형을 한눈에 볼 수 있습니다.',
            },
        },
    },
};
// 접근성 예시
export var WithAriaLabel = {
    args: {
        children: 'Important',
        ariaLabel: '중요한 정보입니다',
        variant: 'new',
    },
    parameters: {
        docs: {
            description: {
                story: 'ariaLabel을 사용하여 접근성을 향상시킨 예시입니다.',
            },
        },
    },
};
