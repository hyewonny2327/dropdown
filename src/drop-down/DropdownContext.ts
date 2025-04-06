//context 생성

import { createContext, Dispatch, SetStateAction } from 'react';
interface DropdownContextProps {
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  onSelect: (id: string) => void;
  toggleOpen: () => void;
}
// createContext에는 "실제 값"을 넣어야 하므로, 기본값을 정의해줌
export const DropdownContext = createContext<DropdownContextProps>({
  selectedItem: '선택하세요요',
  setSelectedItem: () => {},
  onSelect: () => {},
  toggleOpen: () => {},
});
