## 📘 프로젝트 주제: Context API로 드롭다운 컴포넌트 만들기

### 🎯 목표

- React Context API를 활용해 **여러 드롭다운 컴포넌트 간의 상태를 공유**하는 구조 설계 연습
- 전역 상태가 아닌 **트리 내부에서만 필요한 상태 관리** 구현

---

### 📁 기능 요구사항

- 여러 개의 드롭다운이 동시에 존재 가능 ✅
- 한 번에 **하나의 드롭다운만** 열릴 수 있음 🔄
- 드롭다운 외부 클릭 시 자동으로 닫힘 ⛔
- 드롭다운 항목 클릭 시 닫히고 액션 발생 🖱️
- 키보드 조작 (`Esc`, `Tab`) 지원 (선택 과제) ⌨️

---

### 🧩 주요 개념

- React Context API (`createContext`, `useContext`)
- 컴포넌트 트리 상태 공유
- 커스텀 훅으로 역할 분리 (`useDropdown`, `useOutsideClick` 등)
- 이벤트 버블링과 리액트의 synthetic event 처리
- 접근성 고려 (ARIA, 키보드 접근 등)

---

### ⚙️ 컴포넌트 구조 예시

````txt
<DropdownProvider>
  <Dropdown id="menu1">
    <DropdownTrigger>...</DropdownTrigger>
    <DropdownMenu>...</DropdownMenu>
  </Dropdown>

  <Dropdown id="menu2">
    <DropdownTrigger>...</DropdownTrigger>

---

### 🛠️ 개발 단계 가이드

1. `DropdownContext` 생성 - 열려있는 드롭다운 ID 관리
2. `DropdownProvider`에서 context 값 제공 (openId, setOpenId)
3. `Dropdown`은 본인 ID와 context의 openId 비교해 열림 여부 판단
4. `DropdownTrigger` 클릭 시 openId 변경
5. `DropdownMenu`는 열려있을 때만 렌더링
6. 외부 클릭 감지 (`useRef` + `useEffect`)로 닫기 처리
7. (선택) 키보드 접근성 대응 (`Escape`, `Tab`, ARIA role 등)

---

### 🧪 예시 코드 스니펫

<details>
  <summary>DropdownProvider.tsx</summary>

```tsx
export const DropdownContext = createContext({
  openId: null,
  setOpenId: () => {},
});

export function DropdownProvider({ children }) {
  const [openId, setOpenId] = useState(null);
  const value = { openId, setOpenId };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
}
````

</details>

---

### 🚀 확장 아이디어

- 드롭다운 메뉴에 애니메이션 추가 (framer-motion)
- 메뉴 내부 항목을 props로 동적으로 구성
- 드롭다운 상태를 전역으로 확장 (예: Modal과 상태 통합)

---

### ✅ 이 프로젝트로 복습 가능한 것

- Context API의 실전 활용
- 컴포넌트 분리 & 책임 분담 설계
- 이벤트 처리 및 외부 클릭 감지
- 접근성 고려한 UI 설계
- 리액트 렌더링 흐름과 최적화 마인드
