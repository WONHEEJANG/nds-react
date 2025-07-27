import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip, TooltipButton } from './Tooltip';
import { Button } from '../Button/Button';
var meta = {
    title: 'Components/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'NDS 디자인 시스템의 툴팁 컴포넌트입니다. 추가 정보나 도움말을 제공하는 데 사용됩니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: 'text',
            description: '툴팁 제목',
        },
        content: {
            control: 'text',
            description: '툴팁 내용',
        },
        position: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right'],
            description: '툴팁 위치',
        },
        trigger: {
            control: 'select',
            options: ['hover', 'click', 'focus'],
            description: '트리거 이벤트',
        },
        disabled: {
            control: 'boolean',
            description: '비활성화 상태',
        },
        delay: {
            control: 'number',
            description: '지연 시간 (ms)',
        },
    },
    args: {
        content: '툴팁 내용입니다',
        position: 'top',
        trigger: 'hover',
        disabled: false,
        delay: 0,
        children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uD234\uD301 \uD2B8\uB9AC\uAC70" }),
    },
};
export default meta;
// 기본 스토리
export var Default = {
    args: {
        content: '기본 툴팁입니다',
        children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uD638\uBC84\uD558\uC138\uC694" }),
    },
};
// 제목이 있는 툴팁
export var WithTitle = {
    args: {
        title: '도움말',
        content: '이것은 제목이 있는 툴팁입니다',
        children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uC81C\uBAA9 \uC788\uB294 \uD234\uD301" }),
    },
};
// 클릭 트리거
export var ClickTrigger = {
    args: {
        content: '클릭하면 나타나는 툴팁입니다',
        trigger: 'click',
        children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uD074\uB9AD\uD558\uC138\uC694" }),
    },
};
// 포커스 트리거
export var FocusTrigger = {
    args: {
        content: '포커스 시 나타나는 툴팁입니다',
        trigger: 'focus',
        children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uD3EC\uCEE4\uC2A4\uD558\uC138\uC694" }),
    },
};
// 비활성화된 툴팁
export var Disabled = {
    args: {
        content: '이 툴팁은 비활성화되었습니다',
        disabled: true,
        children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uBE44\uD65C\uC131\uD654\uB428" }),
    },
};
// 지연 시간
export var WithDelay = {
    args: {
        content: '1초 후에 나타나는 툴팁입니다',
        delay: 1000,
        children: _jsx(Button, { variant: "secondary", size: "sm", children: "1\uCD08 \uC9C0\uC5F0" }),
    },
};
// 위치별 툴팁
export var Positions = {
    render: function () { return (_jsxs("div", { style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
            padding: '60px',
            alignItems: 'center',
            justifyItems: 'center'
        }, children: [_jsx("div", {}), _jsx(Tooltip, { content: "\uC704\uCABD \uD234\uD301", position: "top", children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uC704\uCABD" }) }), _jsx("div", {}), _jsx(Tooltip, { content: "\uC67C\uCABD \uD234\uD301", position: "left", children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uC67C\uCABD" }) }), _jsx("div", { style: { padding: '20px', border: '1px dashed #ccc', borderRadius: '4px' }, children: "\uAC00\uC6B4\uB370" }), _jsx(Tooltip, { content: "\uC624\uB978\uCABD \uD234\uD301", position: "right", children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uC624\uB978\uCABD" }) }), _jsx("div", {}), _jsx(Tooltip, { content: "\uC544\uB798\uCABD \uD234\uD301", position: "bottom", children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uC544\uB798\uCABD" }) }), _jsx("div", {})] })); },
    parameters: {
        docs: {
            description: {
                story: '툴팁의 다양한 위치를 보여줍니다.',
            },
        },
    },
};
// 다양한 트리거 타입
export var TriggerTypes = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', gap: '16px', alignItems: 'center' }, children: [_jsx(Tooltip, { content: "\uD638\uBC84 \uC2DC \uB098\uD0C0\uB098\uB294 \uD234\uD301", trigger: "hover", children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uD638\uBC84 \uD234\uD301" }) }), _jsx(Tooltip, { content: "\uD074\uB9AD \uC2DC \uB098\uD0C0\uB098\uB294 \uD234\uD301", trigger: "click", children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uD074\uB9AD \uD234\uD301" }) }), _jsx(Tooltip, { content: "\uD3EC\uCEE4\uC2A4 \uC2DC \uB098\uD0C0\uB098\uB294 \uD234\uD301", trigger: "focus", children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uD3EC\uCEE4\uC2A4 \uD234\uD301" }) })] })); },
    parameters: {
        docs: {
            description: {
                story: '다양한 트리거 이벤트를 가진 툴팁들입니다.',
            },
        },
    },
};
// 텍스트 내용과 함께
export var WithTextContent = {
    render: function () { return (_jsx("div", { style: { padding: '20px', maxWidth: '400px' }, children: _jsxs("p", { children: ["\uC774\uAC83\uC740 \uC77C\uBC18\uC801\uC778 \uD14D\uC2A4\uD2B8\uC785\uB2C8\uB2E4.", _jsx(Tooltip, { content: "\uC774\uAC83\uC740 \uC778\uB77C\uC778 \uD234\uD301\uC785\uB2C8\uB2E4", trigger: "hover", children: _jsx("span", { style: { textDecoration: 'underline', cursor: 'help', color: 'blue' }, children: "\uB3C4\uC6C0\uB9D0\uC774 \uD544\uC694\uD55C \uC6A9\uC5B4" }) }), "\uC5D0 \uB300\uD55C \uC124\uBA85\uC744 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4."] }) })); },
    parameters: {
        docs: {
            description: {
                story: '텍스트 내용 중에 포함된 툴팁 예제입니다.',
            },
        },
    },
};
// 긴 내용의 툴팁
export var LongContent = {
    args: {
        title: '상세 설명',
        content: '이것은 매우 긴 내용을 가진 툴팁입니다. 여러 줄에 걸쳐 내용이 표시될 수 있으며, 사용자에게 자세한 정보를 제공할 때 유용합니다. 툴팁은 적절한 크기로 조절되어 표시됩니다.',
        children: _jsx(Button, { variant: "secondary", size: "sm", children: "\uAE34 \uB0B4\uC6A9 \uD234\uD301" }),
    },
};
// TooltipButton 컴포넌트
export var TooltipButtonComponent = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', gap: '16px', alignItems: 'center' }, children: [_jsx(TooltipButton, { content: "\uB3C4\uC6C0\uB9D0 \uBC84\uD2BC\uC73C\uB85C \uB9CC\uB4E4\uC5B4\uC9C4 \uD234\uD301\uC785\uB2C8\uB2E4", label: "\uB3C4\uC6C0\uB9D0", trigger: "click" }), _jsx(TooltipButton, { title: "\uC0C1\uC138 \uC815\uBCF4", content: "\uC81C\uBAA9\uACFC \uB0B4\uC6A9\uC774 \uBAA8\uB450 \uC788\uB294 \uB3C4\uC6C0\uB9D0 \uBC84\uD2BC\uC785\uB2C8\uB2E4", label: "\uC0C1\uC138 \uB3C4\uC6C0\uB9D0", trigger: "hover" })] })); },
    parameters: {
        docs: {
            description: {
                story: '전용 도움말 버튼 컴포넌트입니다.',
            },
        },
    },
};
// 폼 필드와 함께 사용
export var WithFormFields = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("label", { children: "\uBE44\uBC00\uBC88\uD638" }), _jsx(Tooltip, { content: "\uBE44\uBC00\uBC88\uD638\uB294 8\uC790 \uC774\uC0C1\uC774\uC5B4\uC57C \uD558\uBA70, \uD2B9\uC218\uBB38\uC790\uB97C \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4", trigger: "click", children: _jsx(Button, { variant: "tertiary", size: "xs", children: "?" }) })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("label", { children: "\uC774\uBA54\uC77C" }), _jsx(TooltipButton, { content: "\uC62C\uBC14\uB978 \uC774\uBA54\uC77C \uD615\uC2DD\uC73C\uB85C \uC785\uB825\uD574\uC8FC\uC138\uC694 (\uC608: user@example.com)", label: "\uC774\uBA54\uC77C \uB3C4\uC6C0\uB9D0", trigger: "hover" })] })] })); },
    parameters: {
        docs: {
            description: {
                story: '폼 필드와 함께 사용되는 툴팁 예제입니다.',
            },
        },
    },
};
