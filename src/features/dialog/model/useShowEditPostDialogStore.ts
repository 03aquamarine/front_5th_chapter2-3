import { create } from "zustand"

interface ShowEditDialogStoreState {
  showEditDialog: boolean
  setShowEditDialog: (show: boolean) => void
}

// 게시물 추가 대화상자 띄우기
export const useShowEditDialogStore = create<ShowEditDialogStoreState>((set) => ({
  showEditDialog: false,
  setShowEditDialog: (show: boolean) => set(() => ({ showEditDialog: show })),
}))
