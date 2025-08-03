# NDS Split - React Components

NH Design System의 HTML 컴포넌트들을 React로 변환한 프로젝트입니다.

## 🚀 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm start
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📦 컴포넌트

### Accordion 컴포넌트

원본 HTML의 모든 accordion 타입을 React 컴포넌트로 구현했습니다:

- **AccordionBox** - 기본 박스 타입
- **AccordionBoxList** - 리스트 형태의 박스 타입
- **AccordionGraybox** - 회색 박스 타입
- **AccordionLine** - 라인 타입
- **AccordionNotice** - 공지사항 타입

### 사용법

```jsx
import Accordion, { AccordionBox, AccordionBoxList } from './components/Accordion';

// 기본 사용법
<Accordion 
  type="box" 
  variant="text" 
  title="제목" 
  isOpen={false}
  onToggle={(isOpen) => console.log('Toggle:', isOpen)}
>
  <div>내용</div>
</Accordion>

// 리스트 타입
<AccordionBoxList
  title="타이틀"
  subInfo="부가설명"
  badge="라벨"
  isOpen={true}
>
  <dl className="dl">
    <div>
      <dt>타이틀</dt>
      <dd>데이터</dd>
    </div>
  </dl>
</AccordionBoxList>
```

## 🎨 스타일

기존 NDS의 `common-ui.css`를 그대로 사용하여 동일한 디자인을 유지합니다.

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── Accordion.js      # 메인 Accordion 컴포넌트
│   └── DownloadList.js   # 다운로드 리스트 컴포넌트
├── App.js               # 메인 앱 컴포넌트
├── App.css              # 앱 스타일
├── index.js             # 앱 진입점
└── index.css            # 기본 스타일
```

## 🔧 빌드

```bash
npm run build
```

## 🧪 테스트

```bash
npm test
```

## 📝 라이선스

이 프로젝트는 NH Design System을 기반으로 합니다.
