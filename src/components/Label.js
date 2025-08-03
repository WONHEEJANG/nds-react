import React from 'react';

const Label = ({ 
  type = 'fill', // fill, line, text
  color = 'gray', // gray, green, red, skyblue, yellow, blue, lightblue, navy, orange
  grade, // grade1, grade2, grade3, grade4, grade5, grade6
  children = '배지',
  htmlFor,
  className = '',
  ...props
}) => {
  
  // 클래스명 생성
  const getClassName = () => {
    let classes = ['badge'];
    
    if (type === 'fill') {
      classes.push(`fill-${color}`);
    } else if (type === 'line') {
      if (grade) {
        classes.push(`-${grade}`);
      } else {
        classes.push(`line-${color}`);
      }
    } else if (type === 'text') {
      classes = ['label'];
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // Text 타입 라벨
  if (type === 'text') {
    return (
      <label htmlFor={htmlFor} className={getClassName()} {...props}>
        {children}
      </label>
    );
  }

  // Badge 타입 라벨
  return (
    <span className={getClassName()} {...props}>
      {children}
    </span>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const FillLabel = (props) => <Label type="fill" {...props} />;
export const LineLabel = (props) => <Label type="line" {...props} />;
export const TextLabel = (props) => <Label type="text" {...props} />;

// 색상별 래퍼
export const GrayLabel = (props) => <Label color="gray" {...props} />;
export const GreenLabel = (props) => <Label color="green" {...props} />;
export const RedLabel = (props) => <Label color="red" {...props} />;
export const SkyblueLabel = (props) => <Label color="skyblue" {...props} />;
export const YellowLabel = (props) => <Label color="yellow" {...props} />;
export const BlueLabel = (props) => <Label color="blue" {...props} />;
export const LightblueLabel = (props) => <Label color="lightblue" {...props} />;
export const NavyLabel = (props) => <Label color="navy" {...props} />;
export const OrangeLabel = (props) => <Label color="orange" {...props} />;

// 등급별 래퍼
export const Grade1Label = (props) => <Label type="line" grade="grade1" {...props} />;
export const Grade2Label = (props) => <Label type="line" grade="grade2" {...props} />;
export const Grade3Label = (props) => <Label type="line" grade="grade3" {...props} />;
export const Grade4Label = (props) => <Label type="line" grade="grade4" {...props} />;
export const Grade5Label = (props) => <Label type="line" grade="grade5" {...props} />;
export const Grade6Label = (props) => <Label type="line" grade="grade6" {...props} />;

export default Label; 