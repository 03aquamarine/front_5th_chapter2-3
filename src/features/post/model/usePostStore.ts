import { create } from "zustand"

export interface Post {
  id: number
  title: string
  body: string
  userId: number
  views: number
  tags: string[]
  reactions: Reactions
  author?: User | undefined
}
export interface User {
  id: number
  username: string
  image: string
}

export interface Reactions {
  likes: number
  dislikes: number
}

interface PostStoreState {
  posts: Post[]
  setPosts: (posts: Post[]) => void
}

// 게시물 상태 관리
export const usePostStore = create<PostStoreState>()((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}))
