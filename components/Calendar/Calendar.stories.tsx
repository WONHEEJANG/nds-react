import type { Meta, StoryObj } from '@storybook/react';
import { Calendar, CalendarProps } from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['day', 'period', 'month', 'year-month-day'],
      description: '달력 타입',
    },
    controlStyle: {
      control: 'radio',
      options: ['default', 'separate'],
      description: '컨트롤 스타일',
    },
    showToday: {
      control: 'boolean',
      description: '오늘 버튼 표시 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DayCalendar: Story = {
  args: {
    type: 'day',
    selectedDate: { year: 2024, month: 10, day: 17 },
    showToday: true,
    onDateSelect: (date) => console.log('Selected date:', date),
    onTodayClick: () => console.log('Today clicked'),
  },
};

export const MonthCalendar: Story = {
  args: {
    type: 'month',
    selectedDate: { year: 2025, month: 10 },
    showToday: true,
    onDateSelect: (date) => console.log('Selected month:', date),
    onTodayClick: () => console.log('Current month clicked'),
  },
};

export const SeparateControls: Story = {
  args: {
    type: 'day',
    controlStyle: 'separate',
    selectedDate: { year: 2024, month: 12, day: 15 },
    showToday: true,
    onDateSelect: (date) => console.log('Selected date:', date),
  },
};

export const WithDateRestrictions: Story = {
  args: {
    type: 'day',
    selectedDate: { year: 2024, month: 10, day: 15 },
    minDate: { year: 2024, month: 10, day: 5 },
    maxDate: { year: 2024, month: 10, day: 25 },
    showToday: true,
    onDateSelect: (date) => console.log('Selected date:', date),
  },
};

export const NoTodayButton: Story = {
  args: {
    type: 'day',
    selectedDate: { year: 2024, month: 10, day: 17 },
    showToday: false,
    onDateSelect: (date) => console.log('Selected date:', date),
  },
};

export const PeriodCalendar: Story = {
  args: {
    type: 'period',
    startDate: { year: 2024, month: 12, day: 24 },
    endDate: { year: 2025, month: 6, day: 6 },
    showToday: true,
    onPeriodSelect: (start, end) => console.log('Selected period:', start, end),
  },
};

export const YearMonthDay: Story = {
  args: {
    type: 'year-month-day',
    controlStyle: 'separate',
    selectedDate: { year: 2024, month: 12, day: 15 },
    showToday: true,
    onDateSelect: (date) => console.log('Selected date:', date),
  },
};