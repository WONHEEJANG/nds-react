import type { Meta, StoryObj } from '@storybook/react';
import { Indicator, IndicatorProps } from './Indicator';

const meta: Meta<typeof Indicator> = {
  title: 'Components/Indicator',
  component: Indicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['dot', 'number'],
      description: '인디케이터 타입',
    },
    currentIndex: {
      control: 'number',
      description: '현재 슬라이드 인덱스 (0부터 시작)',
    },
    totalSlides: {
      control: 'number',
      description: '전체 슬라이드 수',
    },
    playState: {
      control: 'radio',
      options: ['play', 'stop', 'pause'],
      description: '재생 상태',
    },
    centered: {
      control: 'boolean',
      description: '중앙 정렬 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DotIndicatorPlay: Story = {
  args: {
    type: 'dot',
    currentIndex: 1,
    totalSlides: 3,
    playState: 'play',
    centered: true,
    onSlideClick: (index) => console.log('Slide clicked:', index),
    onPlayToggle: () => console.log('Play toggle clicked'),
  },
};

export const DotIndicatorStop: Story = {
  args: {
    type: 'dot',
    currentIndex: 1,
    totalSlides: 3,
    playState: 'stop',
    centered: true,
    onSlideClick: (index) => console.log('Slide clicked:', index),
    onPlayToggle: () => console.log('Play toggle clicked'),
  },
};

export const NumberIndicatorPlay: Story = {
  args: {
    type: 'number',
    currentIndex: 0,
    totalSlides: 3,
    playState: 'play',
    centered: true,
    onSlideClick: (index) => console.log('Slide clicked:', index),
    onPlayToggle: () => console.log('Play toggle clicked'),
  },
};

export const NumberIndicatorPause: Story = {
  args: {
    type: 'number',
    currentIndex: 2,
    totalSlides: 3,
    playState: 'pause',
    centered: true,
    onSlideClick: (index) => console.log('Slide clicked:', index),
    onPlayToggle: () => console.log('Play toggle clicked'),
  },
};

export const NumberIndicatorStop: Story = {
  args: {
    type: 'number',
    currentIndex: 2,
    totalSlides: 3,
    playState: 'stop',
    centered: true,
    onSlideClick: (index) => console.log('Slide clicked:', index),
    onPlayToggle: () => console.log('Play toggle clicked'),
  },
};

export const DotIndicatorManySlides: Story = {
  args: {
    type: 'dot',
    currentIndex: 3,
    totalSlides: 8,
    playState: 'play',
    centered: true,
    onSlideClick: (index) => console.log('Slide clicked:', index),
    onPlayToggle: () => console.log('Play toggle clicked'),
  },
};

export const NumberIndicatorManySlides: Story = {
  args: {
    type: 'number',
    currentIndex: 7,
    totalSlides: 12,
    playState: 'play',
    centered: true,
    onSlideClick: (index) => console.log('Slide clicked:', index),
    onPlayToggle: () => console.log('Play toggle clicked'),
  },
};

export const DotIndicatorNotCentered: Story = {
  args: {
    type: 'dot',
    currentIndex: 1,
    totalSlides: 4,
    playState: 'stop',
    centered: false,
    onSlideClick: (index) => console.log('Slide clicked:', index),
    onPlayToggle: () => console.log('Play toggle clicked'),
  },
};

export const SingleSlide: Story = {
  args: {
    type: 'dot',
    currentIndex: 0,
    totalSlides: 1,
    playState: 'stop',
    centered: true,
    onSlideClick: (index) => console.log('Slide clicked:', index),
    onPlayToggle: () => console.log('Play toggle clicked'),
  },
};

export const TwoSlides: Story = {
  args: {
    type: 'number',
    currentIndex: 1,
    totalSlides: 2,
    playState: 'play',
    centered: true,
    onSlideClick: (index) => console.log('Slide clicked:', index),
    onPlayToggle: () => console.log('Play toggle clicked'),
  },
};