import { create } from "zustand"

interface ShowReadDialogStoreState {
  showReadDialog: boolean
  setShowReadDialog: (show: boolean) => void
}

// 게시물 상세 보기 대화상자 띄우기
export const useShowReadDialogStore = create<ShowReadDialogStoreState>((set) => ({
  showReadDialog: false,
  setShowReadDialog: (show: boolean) => set(() => ({ showReadDialog: show })),
}))
