# NDS React Components

NH농협은행 디자인 시스템(Nonghyup Design System)을 React TypeScript 컴포넌트로 변환한 라이브러리입니다.

## 📦 설치

```bash
npm install nds-react-components
# 또는
yarn add nds-react-components
```

## 🚀 사용 방법

### 기본 사용법

```tsx
import React from 'react';
import { Button, Input, Checkbox } from 'nds-react-components';

function App() {
  return (
    <div>
      <Button variant="primary" size="lg">
        버튼
      </Button>
      
      <Input 
        label="이름" 
        placeholder="이름을 입력하세요" 
      />
      
      <Checkbox 
        label="동의합니다" 
      />
    </div>
  );
}
```

### CSS 스타일 import

NDS CSS 파일을 프로젝트에 포함해야 합니다:

```css
/* public/content/assets/css/common-ui.css 파일을 포함하세요 */
@import 'path/to/nds/common-ui.css';
```

## 📚 컴포넌트

### Button

다양한 스타일과 크기의 버튼 컴포넌트

```tsx
<Button variant="primary" size="lg">Primary Large</Button>
<Button variant="secondary" size="md">Secondary Medium</Button>
<Button variant="tertiary" size="sm">Tertiary Small</Button>
<Button disabled>Disabled Button</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'tertiary'
- `size`: 'lg' | 'md' | 'rg' | 'sm' | 'xs'
- `disabled`: boolean
- `onClick`: 클릭 핸들러

### Input

다양한 입력 필드 컴포넌트

```tsx
<Input 
  label="레이블" 
  placeholder="내용을 입력하세요"
  type="text"
/>

<Input 
  label="비밀번호" 
  type="password"
  error="올바른 형식이 아닙니다"
/>
```

**Props:**
- `label`: string - 입력 필드 레이블
- `error`: string - 에러 메시지
- `variant`: 'text' | 'box' | 'number' | 'password' | 'search' | 'tel'
- `state`: 'default' | 'error' | 'focus' | 'filled' | 'disabled'

### Checkbox

체크박스 컴포넌트

```tsx
<Checkbox label="동의합니다" />
<Checkbox label="큰 체크박스" size="lg" />
<Checkbox label="비활성" state="disabled" />
```

**Props:**
- `label`: string - 체크박스 레이블
- `size`: 'xs' | 'sm' | 'lg'
- `variant`: 'basic' | 'box' | 'survey'
- `state`: 'default' | 'disabled' | 'selected' | 'select-disabled' | 'error'

### Accordion

접고 펼칠 수 있는 아코디언 컴포넌트

```tsx
<Accordion
  title="계좌 정보"
  subInfo="NH농협은행"
  badge="주거래"
  variant="box"
  type="list"
>
  <dl className="dl">
    <div>
      <dt>계좌번호</dt>
      <dd>123-456-789012</dd>
    </div>
  </dl>
</Accordion>
```

**Props:**
- `title`: string - 제목
- `subInfo`: string - 부가 정보
- `badge`: string - 배지 텍스트
- `variant`: 'box' | 'graybox' | 'line' | 'notice'
- `type`: 'list' | 'text' | 'basic'

### Icon

아이콘 컴포넌트

```tsx
<Icon name="home" size={24} />
<Icon name="menu" size={32} darkMode />
<Icon name="search" disabled />
```

**Props:**
- `name`: string - 아이콘 이름
- `size`: 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56
- `style`: 'fill' | 'line'
- `darkMode`: boolean
- `disabled`: boolean

## 🎨 스타일 가이드

### 클래스 네이밍 규칙

NDS는 BEM 방법론을 기반으로 한 클래스 네이밍을 사용합니다:

- `.button -primary -lg`: 버튼의 primary 변형, large 크기
- `.checkbox -basic -sm`: 체크박스의 basic 변형, small 크기
- `.accordion -box -list -active`: 박스형 리스트 아코디언, 활성 상태

### 반응형 디자인

모든 컴포넌트는 모바일 우선으로 설계되었으며, 다양한 화면 크기에서 적절히 동작합니다.

## 🛠 개발

### 로컬 개발 환경 설정

```bash
# 의존성 설치
npm install

# TypeScript 컴파일
npm run build

# 개발 모드 (watch)
npm run dev

# 타입 체크
npm run type-check

# 린트 검사
npm run lint
```

### 프로젝트 구조

```
├── components/          # React 컴포넌트들
│   ├── Button/
│   ├── Input/
│   ├── Checkbox/
│   ├── Accordion/
│   ├── Icon/
│   └── index.ts
├── examples/           # 사용 예제들
├── public/            # 원본 NDS 자료들
└── dist/              # 빌드된 파일들
```

## 📄 라이선스

MIT License

## 🤝 기여

이 프로젝트는 NH농협은행의 디자인 시스템을 기반으로 제작되었습니다. 
기여를 원하시면 이슈를 생성하거나 풀 리퀘스트를 보내주세요.

## 📞 지원

문제가 있거나 질문이 있으시면 이슈를 생성해 주세요.