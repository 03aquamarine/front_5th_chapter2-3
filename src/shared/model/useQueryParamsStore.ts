// URL 쿼리 파라미터 상태 관리

import { create } from "zustand"

interface SearchQueryState {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

interface SelectedTagState {
  selectedTag: string
  setSelectedTag: (tag: string) => void
}

interface SortByState {
  sortBy: string
  setSortBy: (sortBy: string) => void
}

// 게시물 검색
export const useSearchQueryStore = create<SearchQueryState>((set) => ({
  searchQuery: "",
  setSearchQuery: (query: string) => set(() => ({ searchQuery: query })),
}))

// 선택된 태그
export const useSelectedTagStore = create<SelectedTagState>((set) => ({
  selectedTag: "",
  setSelectedTag: (tag: string) => set(() => ({ selectedTag: tag })),
}))

// 정렬 기준
export const useSortByStore = create<SortByState>((set) => ({
  sortBy: "",
  setSortBy: (sortBy: string) => set(() => ({ sortBy: sortBy })),
}))
