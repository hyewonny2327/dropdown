## 🧠 프로젝트 미션: Context 기반 커스텀 드롭다운 컴포넌트 만들기

### 🎯 미션 목표

- Context API를 활용해 드롭다운 컴포넌트를 설계하고, 내부 상태 및 선택값을 전역 없이 공유할 수 있도록 구성한다.
- `Dropdown`, `DropdownItem`, `DropdownButton` 세 가지 컴포넌트를 만들고, 드롭다운 메뉴의 재사용성과 조합 유연성을 높인다.

---

### ✅ 구현 컴포넌트

#### 1. `<Dropdown />`

- Context를 생성하고, 내부에 있는 `DropdownItem`과 `DropdownButton`에게 상태를 전달함
- 내부 자식 요소를 탐색하여 `DropdownItem`은 모두 렌더링, `DropdownButton`은 맨 아래에 렌더링
- props: `onChange(id: string)` 전달

#### 2. `<DropdownItem />`

- 드롭다운 메뉴 항목을 나타냄
- 클릭 시 Context의 `setSelectedItem()` 실행 후 `onChange(id)` 콜백 호출
- 클릭된 항목은 `selectedItem`과 비교해 강조 스타일 적용

#### 3. `<DropdownButton />`

- 현재 선택된 항목(`selectedItem`)을 기반으로 버튼 텍스트 표시
- 클릭 시 메뉴를 열거나 닫는 역할 (선택 구현)

---

### 🔧 제공 Context 값

```tsx
interface DropdownContextProps {
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  onChange: (id: string) => void;
}
```

---

### 📁 사용 예시

```tsx
<Dropdown onChange={(id) => console.log('선택된 값:', id)}>
  <DropdownItem id="a">🍕 피자</DropdownItem>
  <DropdownItem id="b">🍔 햄버거</DropdownItem>
  <DropdownItem id="c">🍗 치킨</DropdownItem>
  <DropdownButton />
</Dropdown>
```

---

### 📌 구현 포인트

- Context로 `selectedItem`, `setSelectedItem`, `onChange` 제공
- `Children.toArray()` + `child.type === 컴포넌트` 로 자식 분리
- `cloneElement` 로 props 주입
- `DropdownItem` 클릭 시 `setSelectedItem`, `onChange` 실행
- `DropdownButton`은 현재 선택된 항목을 보여주는 버튼 역할

---

### 💡 확장 과제 (선택)

- Dropdown 열림/닫힘 상태 관리 (`isOpen`, `setIsOpen`)
- 외부 클릭 시 메뉴 닫기 (`useRef + useEffect`)
- 키보드 접근성 (`Enter`, `Esc` 처리)
- `DropdownItem`에 아이콘이나 비활성화 상태 추가

---

### ✅ 이 미션으로 복습할 수 있는 것

- Context API 실전 활용 (상태 + 함수 공유)
- 컴포넌트 조합 & 재사용 설계
- React.Children, cloneElement 사용법
- 컴포넌트 간 명확한 역할 분리와 UI 구성

---

🔥 **목표는 단순 드롭다운을 넘어서, 조합 가능한 UI 컴포넌트를 직접 설계하는 감각을 기르는 것!**
