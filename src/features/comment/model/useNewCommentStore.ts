import { create } from "zustand"

interface NewComment {
  body: string
  postId: number | null
  userId: number
}

interface NewCommentStoreState {
  newComment: NewComment
  setNewComment: (newComment: Comment[]) => void
}

export const useNewCommentStore = create<NewCommentStoreState>()((set) => ({
  newComment: { body: "", postId: null, userId: 1 },
  setNewComment: (newComment) => set(() => ({ newComment })),
}))
