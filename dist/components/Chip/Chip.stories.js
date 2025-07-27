import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Chip, ChipGroup } from './Chip';
var meta = {
    title: 'Components/Chip',
    component: Chip,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'NDS 디자인 시스템의 칩 컴포넌트입니다. 태그, 필터, 선택 옵션 등에 사용됩니다.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            description: '칩에 표시될 텍스트',
        },
        deletable: {
            control: 'boolean',
            description: '삭제 가능한 칩인지 여부',
        },
        active: {
            control: 'boolean',
            description: '활성화 상태',
        },
        disabled: {
            control: 'boolean',
            description: '비활성화 상태',
        },
        onClick: {
            action: 'clicked',
            description: '칩 클릭 시 호출되는 콜백',
        },
        onDelete: {
            action: 'deleted',
            description: '삭제 버튼 클릭 시 호출되는 콜백',
        },
    },
    args: {
        children: 'Chip',
        deletable: false,
        active: false,
        disabled: false,
    },
};
export default meta;
// 기본 스토리
export var Default = {
    args: {
        children: '기본 칩',
    },
};
// 활성화된 칩
export var Active = {
    args: {
        children: '활성화된 칩',
        active: true,
    },
};
// 삭제 가능한 칩
export var Deletable = {
    args: {
        children: '삭제 가능한 칩',
        deletable: true,
    },
};
// 비활성화된 칩
export var Disabled = {
    args: {
        children: '비활성화된 칩',
        disabled: true,
    },
};
// 클릭 가능한 칩
export var Clickable = {
    args: {
        children: '클릭 가능한 칩',
        onClick: function () { return console.log('칩이 클릭되었습니다!'); },
    },
};
// 다양한 상태의 칩들
export var ChipStates = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' }, children: [_jsx(Chip, { children: "\uAE30\uBCF8" }), _jsx(Chip, { active: true, children: "\uD65C\uC131\uD654" }), _jsx(Chip, { disabled: true, children: "\uBE44\uD65C\uC131\uD654" }), _jsx(Chip, { deletable: true, onDelete: function () { return console.log('삭제!'); }, children: "\uC0AD\uC81C \uAC00\uB2A5" }), _jsx(Chip, { active: true, deletable: true, onDelete: function () { return console.log('활성화 + 삭제!'); }, children: "\uD65C\uC131\uD654 + \uC0AD\uC81C \uAC00\uB2A5" })] })); },
    parameters: {
        docs: {
            description: {
                story: '칩의 다양한 상태를 한눈에 볼 수 있습니다.',
            },
        },
    },
};
// 기술 스택 태그 예제
export var TechStack = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' }, children: [_jsx(Chip, { active: true, onClick: function () { return console.log('React'); }, children: "React" }), _jsx(Chip, { onClick: function () { return console.log('Vue'); }, children: "Vue" }), _jsx(Chip, { onClick: function () { return console.log('Angular'); }, children: "Angular" }), _jsx(Chip, { active: true, onClick: function () { return console.log('TypeScript'); }, children: "TypeScript" }), _jsx(Chip, { onClick: function () { return console.log('JavaScript'); }, children: "JavaScript" }), _jsx(Chip, { active: true, onClick: function () { return console.log('Node.js'); }, children: "Node.js" })] })); },
    parameters: {
        docs: {
            description: {
                story: '기술 스택을 선택하는 인터페이스 예제입니다.',
            },
        },
    },
};
// 관심사 태그 (삭제 가능)
export var InterestTags = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', gap: '8px', flexWrap: 'wrap' }, children: [_jsx(Chip, { deletable: true, onDelete: function () { return console.log('프론트엔드 삭제'); }, children: "\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C" }), _jsx(Chip, { deletable: true, onDelete: function () { return console.log('백엔드 삭제'); }, children: "\uBC31\uC5D4\uB4DC \uAC1C\uBC1C" }), _jsx(Chip, { deletable: true, onDelete: function () { return console.log('모바일 삭제'); }, children: "\uBAA8\uBC14\uC77C \uAC1C\uBC1C" }), _jsx(Chip, { deletable: true, onDelete: function () { return console.log('데이터사이언스 삭제'); }, children: "\uB370\uC774\uD130 \uC0AC\uC774\uC5B8\uC2A4" }), _jsx(Chip, { deletable: true, onDelete: function () { return console.log('디자인 삭제'); }, children: "UI/UX \uB514\uC790\uC778" })] })); },
    parameters: {
        docs: {
            description: {
                story: '사용자가 선택한 관심사를 삭제할 수 있는 태그 예제입니다.',
            },
        },
    },
};
// 칩 그룹 - 기본
export var BasicChipGroup = {
    render: function () { return (_jsxs(ChipGroup, { variant: "basic", children: [_jsx(Chip, { children: "\uCE74\uD14C\uACE0\uB9AC 1" }), _jsx(Chip, { children: "\uCE74\uD14C\uACE0\uB9AC 2" }), _jsx(Chip, { children: "\uCE74\uD14C\uACE0\uB9AC 3" }), _jsx(Chip, { children: "\uCE74\uD14C\uACE0\uB9AC 4" })] })); },
    parameters: {
        docs: {
            description: {
                story: '기본 칩 그룹입니다.',
            },
        },
    },
};
// 칩 그룹 - 탭
export var TabChipGroup = {
    render: function () { return (_jsxs(ChipGroup, { variant: "tab", children: [_jsx(Chip, { active: true, children: "\uC804\uCCB4" }), _jsx(Chip, { children: "\uCE74\uD14C\uACE0\uB9AC A" }), _jsx(Chip, { children: "\uCE74\uD14C\uACE0\uB9AC B" }), _jsx(Chip, { children: "\uCE74\uD14C\uACE0\uB9AC C" })] })); },
    parameters: {
        docs: {
            description: {
                story: '탭 형태의 칩 그룹입니다.',
            },
        },
    },
};
// 칩 그룹 - 아코디언
export var AccordionChipGroup = {
    render: function () { return (_jsxs(ChipGroup, { variant: "accordion", isOpen: true, showMore: true, children: [_jsx(Chip, { children: "\uC778\uAE30 \uAC80\uC0C9\uC5B4 1" }), _jsx(Chip, { children: "\uC778\uAE30 \uAC80\uC0C9\uC5B4 2" }), _jsx(Chip, { children: "\uC778\uAE30 \uAC80\uC0C9\uC5B4 3" }), _jsx(Chip, { children: "\uC778\uAE30 \uAC80\uC0C9\uC5B4 4" }), _jsx(Chip, { children: "\uC778\uAE30 \uAC80\uC0C9\uC5B4 5" })] })); },
    parameters: {
        docs: {
            description: {
                story: '아코디언 형태의 칩 그룹입니다.',
            },
        },
    },
};
// 크기가 다른 칩들
export var DifferentSizes = {
    render: function () { return (_jsxs("div", { style: { display: 'flex', gap: '8px', alignItems: 'center' }, children: [_jsx(Chip, { children: "\uC791\uC740 \uCE69" }), _jsx(Chip, { children: "\uBCF4\uD1B5 \uCE69" }), _jsx(Chip, { children: "\uD070 \uCE69" })] })); },
    parameters: {
        docs: {
            description: {
                story: '다양한 크기의 칩을 사용하는 예제입니다.',
            },
        },
    },
};
