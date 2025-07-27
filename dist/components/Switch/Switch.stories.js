import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Switch } from './Switch';
var meta = {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'NDS 디자인 시스템의 스위치 컴포넌트입니다. 설정 옵션의 켜기/끄기를 제어할 때 사용됩니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: '스위치 라벨',
        },
        size: {
            control: 'select',
            options: ['lg', 'md', 'sm'],
            description: '스위치 크기',
        },
        state: {
            control: 'select',
            options: ['false', 'true', 'disabled'],
            description: '스위치 상태',
        },
        checked: {
            control: 'boolean',
            description: '켜짐/꺼짐 상태',
        },
        disabled: {
            control: 'boolean',
            description: '비활성화 상태',
        },
        onChange: {
            action: 'changed',
            description: '상태 변경 시 호출되는 함수',
        },
    },
    args: {
        label: 'Switch Label',
        size: 'lg',
        state: 'false',
        checked: false,
        disabled: false,
    },
};
export default meta;
// 기본 스토리
export var Default = {
    args: {
        label: '기본 스위치',
    },
};
// 켜진 상태
export var Checked = {
    args: {
        label: '켜진 스위치',
        checked: true,
    },
};
// 비활성화 상태
export var Disabled = {
    args: {
        label: '비활성화 스위치',
        state: 'disabled',
        disabled: true,
    },
};
// 비활성화 + 켜진 상태
export var DisabledChecked = {
    args: {
        label: '비활성화 + 켜진 상태',
        checked: true,
        disabled: true,
    },
};
// 크기별
export var Sizes = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px' }, children: [_jsx(Switch, { label: "Large (lg)", size: "lg" }), _jsx(Switch, { label: "Medium (md)", size: "md" }), _jsx(Switch, { label: "Small (sm)", size: "sm" })] })); },
    parameters: {
        docs: {
            description: {
                story: '스위치의 다양한 크기를 보여줍니다.',
            },
        },
    },
};
// 상태별
export var States = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' }, children: [_jsx(Switch, { label: "\uAEBC\uC9C4 \uC0C1\uD0DC", state: "false" }), _jsx(Switch, { label: "\uCF1C\uC9C4 \uC0C1\uD0DC", state: "true" }), _jsx(Switch, { label: "\uBE44\uD65C\uC131\uD654 \uC0C1\uD0DC", state: "disabled" })] })); },
    parameters: {
        docs: {
            description: {
                story: '스위치의 다양한 상태를 보여줍니다.',
            },
        },
    },
};
// 설정 패널 예제
export var SettingsPanel = {
    render: function () { return (_jsxs("div", { style: {
            padding: '20px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#fafafa',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            minWidth: '280px'
        }, children: [_jsx("h3", { style: { margin: '0 0 8px 0', fontSize: '16px' }, children: "\uC54C\uB9BC \uC124\uC815" }), _jsx(Switch, { label: "\uD478\uC2DC \uC54C\uB9BC \uBC1B\uAE30", size: "lg" }), _jsx(Switch, { label: "\uC774\uBA54\uC77C \uC54C\uB9BC \uBC1B\uAE30", size: "lg" }), _jsx(Switch, { label: "SMS \uC54C\uB9BC \uBC1B\uAE30", size: "lg" }), _jsx("hr", { style: { border: 'none', borderTop: '1px solid #e0e0e0', margin: '8px 0' } }), _jsx("h3", { style: { margin: '0 0 8px 0', fontSize: '16px' }, children: "\uACC4\uC815 \uC124\uC815" }), _jsx(Switch, { label: "\uC790\uB3D9 \uB85C\uADF8\uC778", size: "lg", checked: true }), _jsx(Switch, { label: "\uC0DD\uCCB4 \uC778\uC99D", size: "lg" }), _jsx(Switch, { label: "2\uB2E8\uACC4 \uC778\uC99D", size: "lg", checked: true })] })); },
    parameters: {
        docs: {
            description: {
                story: '설정 패널에서 스위치를 사용하는 실제 예제입니다.',
            },
        },
    },
};
// 모바일 스타일 설정
export var MobileSettings = {
    render: function () { return (_jsxs("div", { style: {
            padding: '16px',
            backgroundColor: '#ffffff',
            border: '1px solid #e0e0e0',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '320px'
        }, children: [_jsxs("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: '1px solid #f0f0f0'
                }, children: [_jsx("span", { children: "\uB2E4\uD06C \uBAA8\uB4DC" }), _jsx(Switch, { size: "md" })] }), _jsxs("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: '1px solid #f0f0f0'
                }, children: [_jsx("span", { children: "Wi-Fi" }), _jsx(Switch, { size: "md", checked: true })] }), _jsxs("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: '1px solid #f0f0f0'
                }, children: [_jsx("span", { children: "\uBE14\uB8E8\uD22C\uC2A4" }), _jsx(Switch, { size: "md" })] }), _jsxs("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0'
                }, children: [_jsx("span", { children: "\uC704\uCE58 \uC11C\uBE44\uC2A4" }), _jsx(Switch, { size: "md", checked: true })] })] })); },
    parameters: {
        docs: {
            description: {
                story: '모바일 앱의 설정 화면과 같은 스타일의 스위치 사용 예제입니다.',
            },
        },
    },
};
// 인라인 스위치
export var InlineSwitch = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '12px' }, children: [_jsx(Switch, { size: "sm" }), _jsx("span", { children: "\uC791\uC740 \uC778\uB77C\uC778 \uC2A4\uC704\uCE58" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '12px' }, children: [_jsx(Switch, { size: "md", checked: true }), _jsx("span", { children: "\uC911\uAC04 \uD06C\uAE30 \uC778\uB77C\uC778 \uC2A4\uC704\uCE58" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '12px' }, children: [_jsx(Switch, { size: "lg" }), _jsx("span", { children: "\uD070 \uC778\uB77C\uC778 \uC2A4\uC704\uCE58" })] })] })); },
    parameters: {
        docs: {
            description: {
                story: '텍스트와 인라인으로 배치된 스위치 예제입니다.',
            },
        },
    },
};
// 라벨 없는 스위치
export var WithoutLabel = {
    args: {
        size: 'lg',
        'aria-label': '라벨 없는 스위치',
    },
    parameters: {
        docs: {
            description: {
                story: '시각적 라벨 없이 aria-label만 사용하는 스위치입니다.',
            },
        },
    },
};
// 모든 크기 조합
export var AllSizesComparison = {
    render: function () { return (_jsxs("div", { style: {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            alignItems: 'center',
            padding: '20px'
        }, children: [_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx("div", { style: { marginBottom: '8px', fontWeight: 'bold' }, children: "Small" }), _jsx(Switch, { size: "sm" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx("div", { style: { marginBottom: '8px', fontWeight: 'bold' }, children: "Medium" }), _jsx(Switch, { size: "md" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx("div", { style: { marginBottom: '8px', fontWeight: 'bold' }, children: "Large" }), _jsx(Switch, { size: "lg" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(Switch, { size: "sm", checked: true }), _jsx("div", { style: { marginTop: '8px', fontSize: '12px', color: '#666' }, children: "ON" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(Switch, { size: "md", checked: true }), _jsx("div", { style: { marginTop: '8px', fontSize: '12px', color: '#666' }, children: "ON" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(Switch, { size: "lg", checked: true }), _jsx("div", { style: { marginTop: '8px', fontSize: '12px', color: '#666' }, children: "ON" })] })] })); },
    parameters: {
        docs: {
            description: {
                story: '모든 크기의 스위치를 ON/OFF 상태로 비교해볼 수 있습니다.',
            },
        },
    },
};
