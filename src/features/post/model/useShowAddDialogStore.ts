import { create } from "zustand"

interface ShowAddDialogStoreState {
  showAddDialog: boolean
  setShowAddDialog: (show: boolean) => void
}

// 게시물 추가 대화상자 띄우기
export const useShowAddDialogStore = create<ShowAddDialogStoreState>((set) => ({
  showAddDialog: false,
  setShowAddDialog: (show: boolean) => set(() => ({ showAddDialog: show })),
}))
