import type { Meta, StoryObj } from '@storybook/react';
import { AttachedFile, AttachedFileProps } from './AttachedFile';

const meta: Meta<typeof AttachedFile> = {
  title: 'Components/AttachedFile',
  component: AttachedFile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['list', 'thumbnail'],
      description: '컴포넌트 타입',
    },
    lines: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
      description: '리스트 타입인 경우 줄 수',
    },
    thumbnailState: {
      control: 'radio',
      options: ['default', 'disabled', 'filled'],
      description: '썸네일 상태',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleFiles = [
  { id: '1', filename: '파일명1.jpg', onDelete: () => console.log('Delete file 1') },
  { id: '2', filename: '파일명2.pdf', onDelete: () => console.log('Delete file 2') },
  { id: '3', filename: '파일명3.docx', onDelete: () => console.log('Delete file 3') },
  { id: '4', filename: '파일명4.xlsx', onDelete: () => console.log('Delete file 4') },
  { id: '5', filename: '파일명5.pptx', onDelete: () => console.log('Delete file 5') },
];

export const ListType1Line: Story = {
  args: {
    type: 'list',
    lines: 1,
    files: sampleFiles.slice(0, 1),
  },
};

export const ListType2Lines: Story = {
  args: {
    type: 'list',
    lines: 2,
    files: sampleFiles.slice(0, 2),
  },
};

export const ListType3Lines: Story = {
  args: {
    type: 'list',
    lines: 3,
    files: sampleFiles.slice(0, 3),
  },
};

export const ListType4Lines: Story = {
  args: {
    type: 'list',
    lines: 4,
    files: sampleFiles.slice(0, 4),
  },
};

export const ListType5Lines: Story = {
  args: {
    type: 'list',
    lines: 5,
    files: sampleFiles,
  },
};

export const ThumbnailDefault: Story = {
  args: {
    type: 'thumbnail',
    thumbnailState: 'default',
    count: { current: 0, total: 5 },
    onThumbnailClick: () => console.log('Thumbnail clicked'),
  },
};

export const ThumbnailDisabled: Story = {
  args: {
    type: 'thumbnail',
    thumbnailState: 'disabled',
    count: { current: 0, total: 5 },
  },
};

export const ThumbnailFilled: Story = {
  args: {
    type: 'thumbnail',
    thumbnailState: 'filled',
    thumbnailImage: './assets/imgs/nds/common/img_nh-golf_58.png',
    thumbnailAlt: '첨부된 이미지',
    onThumbnailDelete: () => console.log('Thumbnail deleted'),
  },
};