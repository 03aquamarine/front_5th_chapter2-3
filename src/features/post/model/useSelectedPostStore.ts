import { create } from "zustand"
import { Post } from "./usePostStore"

interface SelectedPostStoreState {
  selectedPost: Post | null
  setSelectedPost: (post: Post) => void
}

export const useSelectedPostStore = create<SelectedPostStoreState>()((set) => ({
  selectedPost: null,
  setSelectedPost: (post) => set({ selectedPost: post }),
}))
