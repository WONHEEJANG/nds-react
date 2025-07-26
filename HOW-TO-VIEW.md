# 🚀 NDS React 컴포넌트 미리보기 방법

## 방법 1: 간단한 HTML 미리보기 (추천)

가장 쉬운 방법입니다. React를 설치하지 않고도 바로 볼 수 있습니다.

### 📁 파일 열기
1. `preview.html` 파일을 더블클릭하거나
2. 브라우저에서 `Ctrl + O`를 눌러서 `preview.html` 파일을 선택해서 열기

### ✨ 확인할 수 있는 것들
- 모든 NDS 컴포넌트의 시각적 모습
- 버튼, 입력 필드, 체크박스, 라디오 버튼 등
- 아코디언 펼치기/접기 기능
- 탭 전환 기능
- 실제 동작하는 인터랙션

---

## 방법 2: React 개발 환경 (개발자용)

실제 React 컴포넌트를 개발하거나 수정하려면 이 방법을 사용하세요.

### 📋 필요한 것들
- Node.js (https://nodejs.org 에서 다운로드)
- 명령 프롬프트(CMD) 또는 PowerShell

### 🛠 설치 및 실행 단계

#### 1단계: Node.js 설치 확인
```bash
node --version
npm --version
```

#### 2단계: 프로젝트 폴더로 이동
```bash
cd "C:\Users\93jwh\Downloads\fronbiz-nds.gitlab.io-master"
```

#### 3단계: 의존성 설치
```bash
npm install
```

#### 4단계: React 개발 환경 실행
```bash
npm run react-dev
```

#### 5단계: 브라우저에서 확인
- 자동으로 브라우저가 열리거나
- http://localhost:5173 으로 접속

---

## 📂 파일 구조 설명

```
📁 components/          # React 컴포넌트 소스코드
├── Button/            # 버튼 컴포넌트
├── Input/             # 입력 필드 컴포넌트
├── Checkbox/          # 체크박스 컴포넌트
├── Radio/             # 라디오 버튼 컴포넌트
├── Accordion/         # 아코디언 컴포넌트
├── Icon/              # 아이콘 컴포넌트
├── Card/              # 카드 컴포넌트
├── List/              # 리스트 컴포넌트
├── Tab/               # 탭 컴포넌트
├── Badge/             # 배지 컴포넌트
└── index.ts           # 모든 컴포넌트 export

📁 examples/           # 사용 예제
├── LoginForm.tsx      # 로그인 폼 예제
└── ComponentShowcase.tsx  # 모든 컴포넌트 쇼케이스

📄 preview.html       # HTML 미리보기 파일
📄 package.json       # 프로젝트 설정
📄 tsconfig.json      # TypeScript 설정
📄 README.md          # 프로젝트 문서
```

---

## 🎯 권장사항

### React 초보자라면:
👉 **방법 1 (preview.html)** 사용하세요!
- 설치 없음
- 바로 확인 가능
- 모든 컴포넌트 한 번에 확인

### React 개발자라면:
👉 **방법 2 (React 개발 환경)** 사용하세요!
- 실시간 코드 수정
- 핫 리로드 기능
- TypeScript 지원
- 개발자 도구 사용 가능

---

## 🆘 문제 해결

### preview.html이 제대로 안 보여요
- CSS 파일 경로 확인: `public/content/assets/css/common-ui.css`
- 브라우저 개발자 도구(F12)에서 에러 확인

### React 개발 환경이 안 돼요
1. Node.js 설치 확인
2. 명령어를 정확히 입력했는지 확인
3. 폴더 경로가 맞는지 확인

### 컴포넌트가 이상해요
- CSS 파일이 제대로 로드되었는지 확인
- NDS 원본 CSS와 충돌이 없는지 확인

---

## 📞 추가 도움

더 자세한 내용은 `README.md` 파일을 참고하세요!