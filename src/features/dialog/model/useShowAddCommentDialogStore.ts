import { create } from "zustand"

interface ShowAddCommentDialogStoreState {
  showAddCommentDialog: boolean
  setShowAddCommentDialog: (show: boolean) => void
}

// 댓글 추가 대화상자 띄우기
export const useShowAddCommentDialogStore = create<ShowAddCommentDialogStoreState>((set) => ({
  showAddCommentDialog: false,
  setShowAddCommentDialog: (show: boolean) => set(() => ({ showAddCommentDialog: show })),
}))
