import { useShowUserModalStore } from "./useShowUserModalStore"

// 사용자 정보 모달 띄우기
export const useShowUserModal = () => {
  const showUserModal = useShowUserModalStore((state) => state.showUserModal)
  const setShowUserModal = useShowUserModalStore((state) => state.setShowUserModal)

  return { showUserModal, setShowUserModal }
}
