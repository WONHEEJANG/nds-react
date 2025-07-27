import type { Meta, StoryObj } from '@storybook/react';
import { Process, Progress, Stepper, ProcessProps, ProgressProps, StepperProps } from './Process';
import { useState } from 'react';

// Process Stories
const processMeta: Meta<typeof Process> = {
  title: 'Components/Process/Process',
  component: Process,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['step', 'icon', 'badge', 'circle'],
      description: '프로세스 변형',
    },
    direction: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: '방향',
    },
    size: {
      control: 'radio',
      options: ['default', 'sm'],
      description: '크기',
    },
    currentStep: {
      control: 'number',
      description: '현재 단계 인덱스',
    },
  },
};

export default processMeta;
type ProcessStory = StoryObj<typeof processMeta>;

// Step Horizontal Variants
export const StepHorizontal3: ProcessStory = {
  args: {
    variant: 'step',
    direction: 'horizontal',
    currentStep: 1,
    steps: [
      { id: '1', title: '스탭명', state: 'done' },
      { id: '2', title: '스탭명', state: 'active' },
      { id: '3', title: '스탭명' },
    ],
    onStepClick: (index, step) => console.log('Step clicked:', index, step),
  },
};

export const StepHorizontal4: ProcessStory = {
  args: {
    variant: 'step',
    direction: 'horizontal',
    currentStep: 2,
    steps: [
      { id: '1', title: '1단계' },
      { id: '2', title: '2단계' },
      { id: '3', title: '3단계' },
      { id: '4', title: '4단계' },
    ],
  },
};

export const StepHorizontal5: ProcessStory = {
  args: {
    variant: 'step',
    direction: 'horizontal',
    currentStep: 3,
    steps: [
      { id: '1', title: '시작' },
      { id: '2', title: '진행' },
      { id: '3', title: '검토' },
      { id: '4', title: '완료' },
      { id: '5', title: '종료' },
    ],
  },
};

// Step Vertical Variants
export const StepVertical3: ProcessStory = {
  args: {
    variant: 'step',
    direction: 'vertical',
    currentStep: 1,
    steps: [
      { id: '1', title: '타이틀', content: '내용을 입력해 주세요.' },
      { id: '2', title: '타이틀', content: '내용을 입력해 주세요.' },
      { id: '3', title: '타이틀', content: '내용을 입력해 주세요.' },
    ],
  },
};

export const StepVertical5: ProcessStory = {
  args: {
    variant: 'step',
    direction: 'vertical',
    currentStep: 2,
    steps: [
      { id: '1', title: '신청서 작성', content: '개인정보 및 신청 내용을 입력합니다.' },
      { id: '2', title: '서류 제출', content: '필요한 서류를 업로드합니다.' },
      { id: '3', title: '심사 진행', content: '담당자가 신청 내용을 검토합니다.' },
      { id: '4', title: '승인 완료', content: '승인 결과를 확인합니다.' },
      { id: '5', title: '서비스 이용', content: '승인된 서비스를 이용할 수 있습니다.' },
    ],
  },
};

// Icon Variants
export const IconHorizontal: ProcessStory = {
  args: {
    variant: 'icon',
    direction: 'horizontal',
    currentStep: 1,
    steps: [
      { id: '1', title: '스탭명', subInfo: '부가설명', stepNumber: 1 },
      { id: '2', title: '스탭명', subInfo: '부가설명', stepNumber: 2 },
      { id: '3', title: '스탭명', subInfo: '부가설명', stepNumber: 3 },
    ],
  },
};

export const IconVertical: ProcessStory = {
  args: {
    variant: 'icon',
    direction: 'vertical',
    currentStep: 2,
    steps: [
      { id: '1', title: '계좌 선택', subInfo: '출금할 계좌를 선택하세요', stepNumber: 1 },
      { id: '2', title: '금액 입력', subInfo: '이체할 금액을 입력하세요', stepNumber: 2 },
      { id: '3', title: '정보 확인', subInfo: '이체 정보를 확인하세요', stepNumber: 3 },
      { id: '4', title: '이체 완료', subInfo: '이체가 완료되었습니다', stepNumber: 4 },
    ],
  },
};

// Badge Text Variants
export const BadgeText: ProcessStory = {
  args: {
    variant: 'badge',
    direction: 'vertical',
    currentStep: 1,
    steps: [
      { id: '1', badge: '1단계', title: '타이틀', content: '내용을 입력해 주세요.' },
      { id: '2', badge: '2단계', title: '타이틀', content: '내용을 입력해 주세요.' },
      { id: '3', badge: '3단계', title: '타이틀', content: '내용을 입력해 주세요.' },
    ],
  },
};

export const BadgeTextLong: ProcessStory = {
  args: {
    variant: 'badge',
    direction: 'vertical',
    currentStep: 2,
    steps: [
      { id: '1', badge: '1단계', title: '회원가입', content: '개인정보를 입력하고 회원가입을 완료합니다.' },
      { id: '2', badge: '2단계', title: '본인인증', content: '휴대폰 또는 공동인증서로 본인인증을 진행합니다.' },
      { id: '3', badge: '3단계', title: '계좌연결', content: '사용할 계좌를 연결하여 서비스 이용을 시작합니다.' },
      { id: '4', badge: '4단계', title: '서비스 이용', content: '모든 설정이 완료되어 서비스를 이용할 수 있습니다.' },
    ],
  },
};

// Circle Small Variants
export const CircleSmall: ProcessStory = {
  args: {
    variant: 'circle',
    direction: 'vertical',
    size: 'sm',
    currentStep: 1,
    steps: [
      { id: '1', title: '타이틀', content: '내용을 입력해 주세요.' },
      { id: '2', title: '타이틀', content: '내용을 입력해 주세요.' },
      { id: '3', title: '타이틀', content: '내용을 입력해 주세요.' },
    ],
  },
};

export const CircleSmall7Steps: ProcessStory = {
  args: {
    variant: 'circle',
    direction: 'vertical',
    size: 'sm',
    currentStep: 3,
    steps: [
      { id: '1', title: '계좌 개설 신청', content: '온라인으로 계좌 개설을 신청합니다.' },
      { id: '2', title: '개인정보 입력', content: '필요한 개인정보를 정확히 입력합니다.' },
      { id: '3', title: '본인인증', content: '휴대폰 또는 공동인증서로 본인인증합니다.' },
      { id: '4', title: '상품 선택', content: '원하는 예금 상품을 선택합니다.' },
      { id: '5', title: '약관 동의', content: '필수 약관에 동의합니다.' },
      { id: '6', title: '신청 완료', content: '계좌 개설 신청이 완료됩니다.' },
      { id: '7', title: '카드 발급', content: '체크카드 발급을 신청할 수 있습니다.' },
    ],
  },
};

// Interactive Example
export const InteractiveProcess: ProcessStory = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
      { id: '1', title: '정보 입력', content: '개인정보를 입력합니다.' },
      { id: '2', title: '인증', content: '본인인증을 진행합니다.' },
      { id: '3', title: '확인', content: '입력한 정보를 확인합니다.' },
      { id: '4', title: '완료', content: '모든 과정이 완료됩니다.' },
    ];

    return (
      <div>
        <Process
          variant="step"
          direction="horizontal"
          steps={steps}
          currentStep={currentStep}
          onStepClick={(index) => setCurrentStep(index)}
        />
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            style={{ marginRight: '10px' }}
          >
            이전
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
          >
            다음
          </button>
        </div>
      </div>
    );
  },
};

// Progress Stories
const progressMeta: Meta<typeof Progress> = {
  title: 'Components/Process/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type ProgressStory = StoryObj<typeof progressMeta>;

export const ProgressDefault: ProgressStory = {
  args: {
    current: 3,
    max: 12,
  },
};

export const ProgressHalfway: ProgressStory = {
  args: {
    current: 6,
    max: 12,
  },
};

export const ProgressAlmostComplete: ProgressStory = {
  args: {
    current: 11,
    max: 12,
  },
};

export const ProgressComplete: ProgressStory = {
  args: {
    current: 12,
    max: 12,
  },
};

// Stepper Stories
const stepperMeta: Meta<typeof Stepper> = {
  title: 'Components/Process/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type StepperStory = StoryObj<typeof stepperMeta>;

export const StepperDefault: StepperStory = {
  args: {
    value: 1,
    min: 0,
    max: 10,
    onChange: (value) => console.log('Value changed:', value),
  },
};

export const StepperWithLimits: StepperStory = {
  args: {
    value: 5,
    min: 1,
    max: 10,
    onChange: (value) => console.log('Value changed:', value),
  },
};

export const StepperDisabled: StepperStory = {
  args: {
    value: 3,
    min: 0,
    max: 10,
    disabled: true,
  },
};

export const InteractiveStepper: StepperStory = {
  render: () => {
    const [value, setValue] = useState(1);
    
    return (
      <div style={{ textAlign: 'center' }}>
        <Stepper
          value={value}
          min={0}
          max={10}
          onChange={setValue}
        />
        <p style={{ marginTop: '10px' }}>현재 값: {value}</p>
      </div>
    );
  },
};