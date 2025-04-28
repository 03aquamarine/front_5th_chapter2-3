// 대화상자 및 모달 보이는 경우 상태 관리

import { create } from "zustand"

interface ShowAddDialogState {
  showAddDialog: boolean
  setShowAddDialog: (show: boolean) => void
}

// 새 게시물 추가
export const useShowAddDialogStore = create<ShowAddDialogState>((set) => ({
  showAddDialog: false,
  setShowAddDialog: (show: boolean) => set(() => ({ showAddDialog: show })),
}))
