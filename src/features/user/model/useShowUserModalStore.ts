import { create } from "zustand"

interface useShowUserModalStoreState {
  showUserModal: boolean
  setShowUserModal: (show: boolean) => void
}

// 사용자 정보 모달 띄우기
export const useShowUserModalStore = create<useShowUserModalStoreState>((set) => ({
  showUserModal: false,
  setShowUserModal: (show: boolean) => set(() => ({ showUserModal: show })),
}))
