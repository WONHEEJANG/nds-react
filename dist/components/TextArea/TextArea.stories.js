import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TextArea } from './TextArea';
var meta = {
    title: 'Components/TextArea',
    component: TextArea,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'NDS 디자인 시스템의 다중행 텍스트 입력 컴포넌트입니다. 자동 크기 조절과 문자 수 제한 기능을 지원합니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: '텍스트에어리어 라벨',
        },
        placeholder: {
            control: 'text',
            description: '플레이스홀더 텍스트',
        },
        maxLength: {
            control: 'number',
            description: '최대 문자 수',
        },
        minRows: {
            control: 'number',
            description: '최소 행 수',
        },
        maxRows: {
            control: 'number',
            description: '최대 행 수 (자동 크기 조절 시)',
        },
        autoResize: {
            control: 'boolean',
            description: '자동 크기 조절 여부',
        },
        showCounter: {
            control: 'boolean',
            description: '문자 카운트 표시 여부',
        },
        disabled: {
            control: 'boolean',
            description: '비활성화 상태',
        },
        readonly: {
            control: 'boolean',
            description: '읽기 전용 상태',
        },
        error: {
            control: 'boolean',
            description: '에러 상태',
        },
        required: {
            control: 'boolean',
            description: '필수 입력 여부',
        },
        info: {
            control: 'text',
            description: '안내 메시지',
        },
        errorMessage: {
            control: 'text',
            description: '에러 메시지',
        },
    },
    args: {
        label: 'TextArea Label',
        placeholder: '내용을 입력하세요',
        minRows: 3,
        disabled: false,
        readonly: false,
        error: false,
        required: false,
        autoResize: false,
        showCounter: false,
    },
};
export default meta;
// 기본 스토리
export var Default = {
    args: {
        label: '기본 텍스트 영역',
        placeholder: '여러 줄의 텍스트를 입력하세요',
    },
};
// 문자 수 제한
export var WithMaxLength = {
    args: {
        label: '문자 수 제한 (100자)',
        placeholder: '최대 100자까지 입력 가능',
        maxLength: 100,
        showCounter: true,
        minRows: 4,
    },
};
// 자동 크기 조절
export var AutoResize = {
    args: {
        label: '자동 크기 조절',
        placeholder: '입력하면 자동으로 크기가 조절됩니다',
        autoResize: true,
        minRows: 2,
        maxRows: 6,
    },
};
// 비활성화 상태
export var Disabled = {
    args: {
        label: '비활성화 상태',
        value: '수정할 수 없는 텍스트입니다',
        disabled: true,
    },
};
// 읽기 전용
export var ReadOnly = {
    args: {
        label: '읽기 전용',
        value: '읽기 전용 텍스트입니다.\n여러 줄로 작성된 내용을 볼 수 있습니다.',
        readonly: true,
    },
};
// 에러 상태
export var Error = {
    args: {
        label: '에러 상태',
        placeholder: '내용을 입력하세요',
        error: true,
        errorMessage: '필수 항목입니다. 내용을 입력해주세요.',
    },
};
// 필수 입력
export var Required = {
    args: {
        label: '필수 입력 텍스트 영역',
        placeholder: '필수 내용을 입력하세요',
        required: true,
    },
};
// 안내 메시지
export var WithInfo = {
    args: {
        label: '안내 메시지가 있는 텍스트 영역',
        placeholder: '의견을 자유롭게 작성해주세요',
        info: '최대한 자세히 작성해주시면 더 정확한 답변을 드릴 수 있습니다.',
    },
};
// 다양한 설정 조합
export var VariousConfigurations = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }, children: [_jsx(TextArea, { label: "\uAE30\uBCF8 \uD14D\uC2A4\uD2B8 \uC601\uC5ED", placeholder: "\uAE30\uBCF8 \uD14D\uC2A4\uD2B8 \uC601\uC5ED\uC785\uB2C8\uB2E4", minRows: 3 }), _jsx(TextArea, { label: "\uBB38\uC790 \uC218 \uC81C\uD55C + \uCE74\uC6B4\uD130", placeholder: "\uCD5C\uB300 50\uC790\uAE4C\uC9C0", maxLength: 50, showCounter: true, minRows: 2 }), _jsx(TextArea, { label: "\uC790\uB3D9 \uD06C\uAE30 \uC870\uC808", placeholder: "\uC785\uB825\uD558\uBA74 \uD06C\uAE30\uAC00 \uC790\uB3D9\uC73C\uB85C \uC870\uC808\uB429\uB2C8\uB2E4", autoResize: true, minRows: 2, maxRows: 5 }), _jsx(TextArea, { label: "\uD544\uC218 \uC785\uB825 + \uC548\uB0B4 \uBA54\uC2DC\uC9C0", placeholder: "\uD544\uC218 \uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694", required: true, info: "\uC774 \uD56D\uBAA9\uC740 \uBC18\uB4DC\uC2DC \uC785\uB825\uD574\uC57C \uD569\uB2C8\uB2E4." })] })); },
    parameters: {
        docs: {
            description: {
                story: '다양한 설정을 조합한 텍스트 영역의 예제입니다.',
            },
        },
    },
};
// 크기별 비교
export var DifferentSizes = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }, children: [_jsx(TextArea, { label: "2\uD589 (\uCD5C\uC18C)", placeholder: "\uCD5C\uC18C 2\uD589", minRows: 2 }), _jsx(TextArea, { label: "4\uD589 (\uC911\uAC04)", placeholder: "\uAE30\uBCF8 4\uD589", minRows: 4 }), _jsx(TextArea, { label: "6\uD589 (\uD070 \uC0AC\uC774\uC988)", placeholder: "\uD070 \uC0AC\uC774\uC988 6\uD589", minRows: 6 })] })); },
    parameters: {
        docs: {
            description: {
                story: '다양한 행 수를 가진 텍스트 영역을 비교해볼 수 있습니다.',
            },
        },
    },
};
