import { create } from "zustand"
import { User } from "../../post/model/usePostStore"

interface Comment {
  id: number
  body: string
  postId: number
  userId: number
  likes: number
  user?: User
}

interface CommentStoreState {
  comments: Comment[]
  setComments: (comments: Comment[]) => void
}

export const useCommentStore = create<CommentStoreState>()((set) => ({
  comments: [],
  setComments: (comments) => set(() => ({ comments })),
}))
