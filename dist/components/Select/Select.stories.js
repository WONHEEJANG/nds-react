import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select } from './Select';
var meta = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'NDS 디자인 시스템의 선택 컴포넌트입니다. 다양한 변형과 옵션을 지원합니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: '선택 필드의 라벨',
        },
        placeholder: {
            control: 'text',
            description: '플레이스홀더 텍스트',
        },
        variant: {
            control: 'select',
            options: ['default', 'account', 'admin', '2row'],
            description: '선택 필드의 변형',
        },
        disabled: {
            control: 'boolean',
            description: '비활성화 상태',
        },
        error: {
            control: 'boolean',
            description: '에러 상태',
        },
        options: {
            control: 'object',
            description: '선택 옵션 배열',
        },
        onChange: {
            action: 'changed',
            description: '선택 변경 시 호출되는 함수',
        },
    },
    args: {
        label: 'Select Label',
        placeholder: '옵션을 선택하세요',
        variant: 'default',
        disabled: false,
        error: false,
        options: [
            { value: 'option1', label: '옵션 1' },
            { value: 'option2', label: '옵션 2' },
            { value: 'option3', label: '옵션 3' },
        ],
    },
};
export default meta;
// 기본 스토리
export var Default = {
    args: {
        label: '기본 선택',
        placeholder: '옵션을 선택하세요',
        options: [
            { value: 'option1', label: '옵션 1' },
            { value: 'option2', label: '옵션 2' },
            { value: 'option3', label: '옵션 3' },
            { value: 'option4', label: '옵션 4' },
        ],
    },
};
// 계좌 선택 변형
export var Account = {
    args: {
        label: '계좌 선택',
        variant: 'account',
        placeholder: '계좌를 선택하세요',
        options: [
            { value: 'account1', label: 'NH농협은행 123-456-789012' },
            { value: 'account2', label: '국민은행 987-654-321098' },
            { value: 'account3', label: '신한은행 555-444-333222' },
            { value: 'account4', label: '우리은행 111-222-333444' },
        ],
    },
};
// 관리자 선택 변형
export var Admin = {
    args: {
        label: '관리자 선택',
        variant: 'admin',
        placeholder: '관리자를 선택하세요',
        options: [
            { value: 'admin1', label: '김관리 (kim@company.com)' },
            { value: 'admin2', label: '이관리 (lee@company.com)' },
            { value: 'admin3', label: '박관리 (park@company.com)' },
        ],
    },
};
// 2행 변형
export var TwoRow = {
    args: {
        label: '2행 선택',
        variant: '2row',
        placeholder: '항목을 선택하세요',
        options: [
            { value: 'item1', label: '첫 번째 항목\n부가 설명이 있는 항목' },
            { value: 'item2', label: '두 번째 항목\n추가 정보가 포함된 항목' },
            { value: 'item3', label: '세 번째 항목\n상세한 설명이 있는 항목' },
        ],
    },
};
// 비활성화 상태
export var Disabled = {
    args: {
        label: '비활성화 상태',
        disabled: true,
        placeholder: '선택할 수 없습니다',
        options: [
            { value: 'disabled1', label: '비활성화 옵션 1' },
            { value: 'disabled2', label: '비활성화 옵션 2' },
        ],
    },
};
// 에러 상태
export var Error = {
    args: {
        label: '에러 상태',
        error: true,
        placeholder: '옵션을 선택하세요',
        options: [
            { value: 'option1', label: '옵션 1' },
            { value: 'option2', label: '옵션 2' },
        ],
    },
};
// 필수 선택
export var Required = {
    args: {
        label: '필수 선택',
        required: true,
        placeholder: '반드시 선택해주세요',
        options: [
            { value: 'required1', label: '필수 옵션 1' },
            { value: 'required2', label: '필수 옵션 2' },
            { value: 'required3', label: '필수 옵션 3' },
        ],
    },
};
// 선택된 상태
export var WithValue = {
    args: {
        label: '선택된 상태',
        value: 'option2',
        options: [
            { value: 'option1', label: '옵션 1' },
            { value: 'option2', label: '옵션 2 (선택됨)' },
            { value: 'option3', label: '옵션 3' },
        ],
    },
};
// 다양한 변형 비교
export var AllVariants = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '24px', width: '350px' }, children: [_jsx(Select, { label: "\uAE30\uBCF8 \uC120\uD0DD", variant: "default", placeholder: "\uAE30\uBCF8 \uBCC0\uD615", options: [
                    { value: 'default1', label: '기본 옵션 1' },
                    { value: 'default2', label: '기본 옵션 2' },
                    { value: 'default3', label: '기본 옵션 3' },
                ] }), _jsx(Select, { label: "\uACC4\uC88C \uC120\uD0DD", variant: "account", placeholder: "\uACC4\uC88C \uBCC0\uD615", options: [
                    { value: 'account1', label: 'NH농협은행 123-456-789012' },
                    { value: 'account2', label: '국민은행 987-654-321098' },
                ] }), _jsx(Select, { label: "\uAD00\uB9AC\uC790 \uC120\uD0DD", variant: "admin", placeholder: "\uAD00\uB9AC\uC790 \uBCC0\uD615", options: [
                    { value: 'admin1', label: '김관리 (kim@company.com)' },
                    { value: 'admin2', label: '이관리 (lee@company.com)' },
                ] }), _jsx(Select, { label: "2\uD589 \uC120\uD0DD", variant: "2row", placeholder: "2\uD589 \uBCC0\uD615", options: [
                    { value: 'row1', label: '첫 번째 항목\n부가 설명' },
                    { value: 'row2', label: '두 번째 항목\n추가 정보' },
                ] })] })); },
    parameters: {
        docs: {
            description: {
                story: '선택 컴포넌트의 모든 변형을 비교해볼 수 있습니다.',
            },
        },
    },
};
// 많은 옵션
export var ManyOptions = {
    args: {
        label: '많은 옵션',
        placeholder: '도시를 선택하세요',
        options: [
            { value: 'seoul', label: '서울특별시' },
            { value: 'busan', label: '부산광역시' },
            { value: 'daegu', label: '대구광역시' },
            { value: 'incheon', label: '인천광역시' },
            { value: 'gwangju', label: '광주광역시' },
            { value: 'daejeon', label: '대전광역시' },
            { value: 'ulsan', label: '울산광역시' },
            { value: 'sejong', label: '세종특별자치시' },
            { value: 'gyeonggi', label: '경기도' },
            { value: 'gangwon', label: '강원도' },
            { value: 'chungbuk', label: '충청북도' },
            { value: 'chungnam', label: '충청남도' },
            { value: 'jeonbuk', label: '전라북도' },
            { value: 'jeonnam', label: '전라남도' },
            { value: 'gyeongbuk', label: '경상북도' },
            { value: 'gyeongnam', label: '경상남도' },
            { value: 'jeju', label: '제주특별자치도' },
        ],
    },
    parameters: {
        docs: {
            description: {
                story: '많은 수의 옵션을 가진 선택 컴포넌트입니다.',
            },
        },
    },
};
