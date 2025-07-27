import type { Meta, StoryObj } from '@storybook/react';
import { Infobox, InfoboxProps } from './Infobox';

const meta: Meta<typeof Infobox> = {
  title: 'Components/Infobox',
  component: Infobox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['default', 'sm', 'xs'],
      description: '크기 변형',
    },
    active: {
      control: 'boolean',
      description: '활성 상태',
    },
    showDeleteButton: {
      control: 'boolean',
      description: '삭제 버튼 표시 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '타이틀',
    content: '내용을 입력해 주세요.',
    size: 'default',
    onClick: () => console.log('Infobox clicked'),
  },
};

export const Small: Story = {
  args: {
    title: '작은 제목',
    content: '작은 크기의 인포박스입니다.',
    size: 'sm',
    onClick: () => console.log('Small infobox clicked'),
  },
};

export const ExtraSmall: Story = {
  args: {
    title: '매우 작은 제목',
    content: '매우 작은 크기의 인포박스입니다.',
    size: 'xs',
    onClick: () => console.log('Extra small infobox clicked'),
  },
};

export const Active: Story = {
  args: {
    title: '선택된 항목',
    content: '이 인포박스는 현재 선택된 상태입니다.',
    size: 'default',
    active: true,
    onClick: () => console.log('Active infobox clicked'),
  },
};

export const WithDeleteButton: Story = {
  args: {
    title: '삭제 가능한 항목',
    content: '이 인포박스는 삭제 버튼이 있습니다.',
    size: 'default',
    showDeleteButton: true,
    onClick: () => console.log('Infobox clicked'),
    onDelete: () => console.log('Delete button clicked'),
  },
};

export const ActiveWithDelete: Story = {
  args: {
    title: '선택된 삭제 가능한 항목',
    content: '선택된 상태이면서 삭제도 가능합니다.',
    size: 'default',
    active: true,
    showDeleteButton: true,
    onClick: () => console.log('Active infobox clicked'),
    onDelete: () => console.log('Delete button clicked'),
  },
};

export const NoTitle: Story = {
  args: {
    content: '제목이 없는 인포박스입니다.',
    size: 'default',
  },
};

export const NoContent: Story = {
  args: {
    title: '내용이 없는 제목',
    size: 'default',
  },
};

export const LongContent: Story = {
  args: {
    title: '긴 내용이 있는 인포박스',
    content: '이것은 매우 긴 내용을 가진 인포박스입니다. 여러 줄에 걸쳐서 내용이 표시될 수 있으며, 인포박스의 크기가 내용에 맞게 조정됩니다. 사용자에게 충분한 정보를 제공하기 위해 필요한 만큼의 텍스트를 포함할 수 있습니다.',
    size: 'default',
  },
};

export const CustomContent: Story = {
  args: {
    title: '커스텀 콘텐츠',
    size: 'default',
    children: (
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '14px', color: '#666' }}>
          커스텀 콘텐츠 예시
        </p>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
          <li>첫 번째 항목</li>
          <li>두 번째 항목</li>
          <li>세 번째 항목</li>
        </ul>
      </div>
    ),
  },
};

export const SmallWithDelete: Story = {
  args: {
    title: '작은 삭제 가능',
    content: '작은 크기에서도 삭제 버튼을 사용할 수 있습니다.',
    size: 'sm',
    showDeleteButton: true,
    onDelete: () => console.log('Small infobox deleted'),
  },
};

export const ExtraSmallActive: Story = {
  args: {
    title: '매우 작은 활성',
    content: '매우 작은 크기의 활성 상태입니다.',
    size: 'xs',
    active: true,
    onClick: () => console.log('Extra small active clicked'),
  },
};

export const ReactNodeContent: Story = {
  args: {
    title: 'React 노드 콘텐츠',
    content: (
      <div style={{ fontSize: '14px' }}>
        <strong style={{ color: '#007bff' }}>중요:</strong>{' '}
        <span style={{ color: '#28a745' }}>성공적으로 처리되었습니다.</span>
        <br />
        <small style={{ color: '#6c757d' }}>추가 정보가 여기에 표시됩니다.</small>
      </div>
    ),
    size: 'default',
  },
};