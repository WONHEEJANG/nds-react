import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toast, ToastProvider, useToast } from './Toast';
import { Button } from '../Button/Button';
var meta = {
    title: 'Components/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'NDS 디자인 시스템의 토스트 알림 컴포넌트입니다. 임시 메시지를 표시하는 데 사용됩니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        message: {
            control: 'text',
            description: '토스트 메시지',
        },
        type: {
            control: 'select',
            options: ['info', 'success', 'warning', 'error'],
            description: '토스트 타입',
        },
        visible: {
            control: 'boolean',
            description: '표시 여부',
        },
        duration: {
            control: 'number',
            description: '자동 닫힘 시간 (ms), 0이면 자동으로 닫히지 않음',
        },
        onClose: {
            action: 'closed',
            description: '토스트가 닫힐 때 호출되는 콜백',
        },
    },
    args: {
        message: '토스트 메시지입니다',
        type: 'info',
        visible: true,
        duration: 3000,
    },
};
export default meta;
// 기본 스토리
export var Default = {
    args: {
        message: '기본 토스트 메시지입니다',
        visible: true,
    },
};
// 정보 토스트
export var Info = {
    args: {
        message: '정보 메시지입니다',
        type: 'info',
        visible: true,
    },
};
// 성공 토스트
export var Success = {
    args: {
        message: '성공적으로 처리되었습니다',
        type: 'success',
        visible: true,
    },
};
// 경고 토스트
export var Warning = {
    args: {
        message: '주의가 필요합니다',
        type: 'warning',
        visible: true,
    },
};
// 에러 토스트
export var Error = {
    args: {
        message: '오류가 발생했습니다',
        type: 'error',
        visible: true,
    },
};
// 자동으로 닫히지 않는 토스트
export var Persistent = {
    args: {
        message: '이 토스트는 자동으로 닫히지 않습니다',
        type: 'info',
        visible: true,
        duration: 0,
    },
};
// 다양한 토스트 타입 비교
export var AllTypes = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' }, children: [_jsx(Toast, { message: "\uC815\uBCF4 \uBA54\uC2DC\uC9C0\uC785\uB2C8\uB2E4", type: "info", visible: true, duration: 0 }), _jsx(Toast, { message: "\uC131\uACF5\uC801\uC73C\uB85C \uCC98\uB9AC\uB418\uC5C8\uC2B5\uB2C8\uB2E4", type: "success", visible: true, duration: 0 }), _jsx(Toast, { message: "\uC8FC\uC758\uAC00 \uD544\uC694\uD569\uB2C8\uB2E4", type: "warning", visible: true, duration: 0 }), _jsx(Toast, { message: "\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4", type: "error", visible: true, duration: 0 })] })); },
    parameters: {
        docs: {
            description: {
                story: '모든 토스트 타입을 한눈에 볼 수 있습니다.',
            },
        },
    },
};
// 다양한 메시지 길이
export var MessageLengths = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '12px' }, children: [_jsx(Toast, { message: "\uC9E7\uC740 \uBA54\uC2DC\uC9C0", type: "info", visible: true, duration: 0 }), _jsx(Toast, { message: "\uC911\uAC04 \uAE38\uC774\uC758 \uBA54\uC2DC\uC9C0\uC785\uB2C8\uB2E4. \uB450 \uC904 \uC815\uB3C4 \uB418\uB294 \uB0B4\uC6A9\uC785\uB2C8\uB2E4.", type: "success", visible: true, duration: 0 }), _jsx(Toast, { message: "\uB9E4\uC6B0 \uAE34 \uBA54\uC2DC\uC9C0\uC785\uB2C8\uB2E4. \uC774\uB7F0 \uC2DD\uC73C\uB85C \uAE34 \uB0B4\uC6A9\uB3C4 \uD1A0\uC2A4\uD2B8\uC5D0 \uD45C\uC2DC\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uD1A0\uC2A4\uD2B8\uB294 \uB0B4\uC6A9\uC5D0 \uB530\uB77C \uC801\uC808\uD788 \uD06C\uAE30\uAC00 \uC870\uC808\uB429\uB2C8\uB2E4.", type: "warning", visible: true, duration: 0 })] })); },
    parameters: {
        docs: {
            description: {
                story: '다양한 길이의 메시지를 가진 토스트입니다.',
            },
        },
    },
};
// ToastProvider와 useToast 훅 사용 예제
var ToastDemo = function () {
    var showToast = useToast().showToast;
    return (_jsxs("div", { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' }, children: [_jsx(Button, { variant: "primary", size: "sm", onClick: function () { return showToast('정보 메시지입니다', 'info'); }, children: "\uC815\uBCF4 \uD1A0\uC2A4\uD2B8" }), _jsx(Button, { variant: "primary", size: "sm", onClick: function () { return showToast('성공적으로 처리되었습니다', 'success'); }, children: "\uC131\uACF5 \uD1A0\uC2A4\uD2B8" }), _jsx(Button, { variant: "primary", size: "sm", onClick: function () { return showToast('주의가 필요합니다', 'warning'); }, children: "\uACBD\uACE0 \uD1A0\uC2A4\uD2B8" }), _jsx(Button, { variant: "primary", size: "sm", onClick: function () { return showToast('오류가 발생했습니다', 'error'); }, children: "\uC624\uB958 \uD1A0\uC2A4\uD2B8" }), _jsx(Button, { variant: "secondary", size: "sm", onClick: function () { return showToast('이 토스트는 5초간 표시됩니다', 'info', 5000); }, children: "5\uCD08 \uD1A0\uC2A4\uD2B8" })] }));
};
export var WithProvider = {
    render: function () { return (_jsx(ToastProvider, { maxToasts: 3, children: _jsx(ToastDemo, {}) })); },
    parameters: {
        docs: {
            description: {
                story: 'ToastProvider와 useToast 훅을 사용한 실제 구현 예제입니다. 버튼을 클릭하면 토스트가 표시됩니다.',
            },
        },
    },
};
// 연속으로 여러 토스트 표시
var MultipleToastDemo = function () {
    var showToast = useToast().showToast;
    var showMultipleToasts = function () {
        showToast('첫 번째 토스트', 'info');
        setTimeout(function () { return showToast('두 번째 토스트', 'success'); }, 500);
        setTimeout(function () { return showToast('세 번째 토스트', 'warning'); }, 1000);
        setTimeout(function () { return showToast('네 번째 토스트', 'error'); }, 1500);
    };
    return (_jsx(Button, { variant: "primary", onClick: showMultipleToasts, children: "\uC5EC\uB7EC \uD1A0\uC2A4\uD2B8 \uB3D9\uC2DC \uD45C\uC2DC" }));
};
export var MultipleToasts = {
    render: function () { return (_jsx(ToastProvider, { maxToasts: 5, children: _jsx(MultipleToastDemo, {}) })); },
    parameters: {
        docs: {
            description: {
                story: '여러 개의 토스트를 연속으로 표시하는 예제입니다.',
            },
        },
    },
};
