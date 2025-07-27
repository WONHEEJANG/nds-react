import type { Meta, StoryObj } from '@storybook/react';
import { Image, ImageProps } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: [24, 28, 32, 40, 56, 68, 80, 120, 140, 150, 190, 232],
      description: '이미지 크기',
    },
    category: {
      control: 'radio',
      options: ['common', 'flag'],
      description: '이미지 카테고리',
    },
    retina: {
      control: 'boolean',
      description: '레티나 지원 여부',
    },
    loading: {
      control: 'radio',
      options: ['lazy', 'eager'],
      description: '로딩 방식',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AgreeCheck: Story = {
  args: {
    name: 'img_agree-check',
    size: 68,
    category: 'common',
    alt: '동의 확인',
  },
};

export const CompleteClap: Story = {
  args: {
    name: 'img_complete-clap',
    size: 140,
    category: 'common',
    alt: '완료 축하',
  },
};

export const ErrorFail: Story = {
  args: {
    name: 'img_error-fail',
    size: 68,
    category: 'common',
    alt: '오류 발생',
  },
};

export const SmallSize: Story = {
  args: {
    name: 'img_agree-check',
    size: 24,
    category: 'common',
    alt: '작은 이미지',
  },
};

export const MediumSize: Story = {
  args: {
    name: 'img_agree-check',
    size: 56,
    category: 'common',
    alt: '중간 이미지',
  },
};

export const LargeSize: Story = {
  args: {
    name: 'img_complete-clap',
    size: 190,
    category: 'common',
    alt: '큰 이미지',
  },
};

export const MaxSize: Story = {
  args: {
    name: 'img_complete-clap',
    size: 232,
    category: 'common',
    alt: '최대 크기 이미지',
  },
};

export const FlagAustralia: Story = {
  args: {
    name: 'img_flag-australia',
    size: 24,
    category: 'flag',
    alt: '호주 국기',
  },
};

export const FlagKorea: Story = {
  args: {
    name: 'img_flag-korea',
    size: 32,
    category: 'flag',
    alt: '대한민국 국기',
  },
};

export const CustomSrc: Story = {
  args: {
    src: 'https://via.placeholder.com/80x80/4A90E2/FFFFFF?text=Custom',
    size: 80,
    alt: '커스텀 이미지',
    name: '', // name은 무시됨
  },
};

export const WithoutRetina: Story = {
  args: {
    name: 'img_agree-check',
    size: 68,
    category: 'common',
    retina: false,
    alt: '레티나 미지원',
  },
};

export const EagerLoading: Story = {
  args: {
    name: 'img_agree-check',
    size: 68,
    category: 'common',
    loading: 'eager',
    alt: '즉시 로딩',
  },
};

export const Clickable: Story = {
  args: {
    name: 'img_agree-check',
    size: 68,
    category: 'common',
    alt: '클릭 가능한 이미지',
    onClick: () => alert('이미지가 클릭되었습니다!'),
  },
};

export const WithCustomClass: Story = {
  args: {
    name: 'img_complete-clap',
    size: 120,
    category: 'common',
    alt: '커스텀 클래스',
    className: 'custom-image-wrapper',
  },
};

export const AllSizesShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
      {[24, 28, 32, 40, 56, 68, 80, 120, 140].map((size) => (
        <div key={size} style={{ textAlign: 'center' }}>
          <Image
            name="img_agree-check"
            size={size as any}
            category="common"
            alt={`${size}px 이미지`}
          />
          <div style={{ marginTop: '8px', fontSize: '12px' }}>{size}px</div>
        </div>
      ))}
    </div>
  ),
};