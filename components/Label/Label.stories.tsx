import type { Meta, StoryObj } from '@storybook/react';
import { Label, LabelProps } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['form', 'badge'],
      description: '라벨 타입',
    },
    variant: {
      control: 'radio',
      options: ['default', 'multi'],
      description: '폼 라벨 변형',
    },
    badgeVariant: {
      control: 'radio',
      options: ['fill', 'line', 'grade', 'new'],
      description: '배지 변형',
    },
    color: {
      control: 'select',
      options: ['gray', 'green', 'red', 'skyblue', 'yellow', 'blue', 'lightblue', 'cobalt', 'orange'],
      description: '배지 색상',
    },
    grade: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: '등급',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Form Label Stories
export const FormLabel: Story = {
  args: {
    type: 'form',
    children: '레이블',
    htmlFor: 'input-id',
  },
};

export const FormLabelMulti: Story = {
  args: {
    type: 'form',
    variant: 'multi',
    children: '복합 레이블',
    htmlFor: 'complex-input',
  },
};

export const FormLabelWithoutFor: Story = {
  args: {
    type: 'form',
    children: '조회 설정',
  },
};

// Badge Fill Stories
export const BadgeFillGray: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'fill',
    color: 'gray',
    children: '배지',
  },
};

export const BadgeFillGreen: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'fill',
    color: 'green',
    children: '성공',
  },
};

export const BadgeFillRed: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'fill',
    color: 'red',
    children: '오류',
  },
};

export const BadgeFillSkyblue: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'fill',
    color: 'skyblue',
    children: '정보',
  },
};

export const BadgeFillYellow: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'fill',
    color: 'yellow',
    children: '경고',
  },
};

// Badge Line Stories
export const BadgeLineBlue: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'line',
    color: 'blue',
    children: '라인 배지',
  },
};

export const BadgeLineGray: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'line',
    color: 'gray',
    children: '기본',
  },
};

export const BadgeLineGreen: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'line',
    color: 'green',
    children: '승인',
  },
};

export const BadgeLineLightblue: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'line',
    color: 'lightblue',
    children: '진행중',
  },
};

export const BadgeLineCobalt: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'line',
    color: 'cobalt',
    children: '중요',
  },
};

export const BadgeLineOrange: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'line',
    color: 'orange',
    children: '대기',
  },
};

export const BadgeLineRed: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'line',
    color: 'red',
    children: '거부',
  },
};

export const BadgeLineSkyblue: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'line',
    color: 'skyblue',
    children: '알림',
  },
};

export const BadgeLineYellow: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'line',
    color: 'yellow',
    children: '주의',
  },
};

// Grade Badge Stories
export const BadgeGrade1: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'grade',
    grade: 1,
    children: '1등급',
  },
};

export const BadgeGrade2: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'grade',
    grade: 2,
    children: '2등급',
  },
};

export const BadgeGrade3: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'grade',
    grade: 3,
    children: '3등급',
  },
};

export const BadgeGrade4: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'grade',
    grade: 4,
    children: '4등급',
  },
};

export const BadgeGrade5: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'grade',
    grade: 5,
    children: '5등급',
  },
};

export const BadgeGrade6: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'grade',
    grade: 6,
    children: '6등급',
  },
};

// Special Badge Stories
export const BadgeNew: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'new',
    children: '',
    hiddenText: '새로운 알람이 있습니다.',
  },
};

// Interactive Stories
export const ClickableBadge: Story = {
  args: {
    type: 'badge',
    badgeVariant: 'fill',
    color: 'blue',
    children: '클릭 가능',
    onClick: () => alert('배지가 클릭되었습니다!'),
  },
};

// All Fill Colors Showcase
export const AllFillColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {['gray', 'green', 'red', 'skyblue', 'yellow'].map((color) => (
        <Label
          key={color}
          type="badge"
          badgeVariant="fill"
          color={color as any}
        >
          {color}
        </Label>
      ))}
    </div>
  ),
};

// All Line Colors Showcase
export const AllLineColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {['blue', 'gray', 'green', 'lightblue', 'cobalt', 'orange', 'red', 'skyblue', 'yellow'].map((color) => (
        <Label
          key={color}
          type="badge"
          badgeVariant="line"
          color={color as any}
        >
          {color}
        </Label>
      ))}
    </div>
  ),
};

// All Grades Showcase
export const AllGrades: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {[1, 2, 3, 4, 5, 6].map((grade) => (
        <Label
          key={grade}
          type="badge"
          badgeVariant="grade"
          grade={grade as any}
        >
          {grade}등급
        </Label>
      ))}
    </div>
  ),
};