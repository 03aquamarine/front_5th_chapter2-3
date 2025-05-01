import { showUserModalStore } from "./showUserModalStore"

// 사용자 정보 모달 띄우기
export const useShowUserModal = () => {
  const showUserModal = showUserModalStore((state) => state.showUserModal)
  const setShowUserModal = showUserModalStore((state) => state.setShowUserModal)

  return { showUserModal, setShowUserModal }
}
