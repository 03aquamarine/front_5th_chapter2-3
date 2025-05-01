// store 값과 액션을 반환하는 커스텀 훅

import { useSearchQueryStore, useSelectedTagStore, useSortByStore } from "../store/queryParamsStore"

// 게시물 검색
export const useSearchQuery = () => {
  const searchQuery = useSearchQueryStore((state) => state.searchQuery)
  const setSearchQuery = useSearchQueryStore((state) => state.setSearchQuery)

  return { searchQuery, setSearchQuery }
}

// 선택된 태그
export const useSelectedTag = () => {
  const selectedTag = useSelectedTagStore((state) => state.selectedTag)
  const setSelectedTag = useSelectedTagStore((state) => state.setSelectedTag)

  return { selectedTag, setSelectedTag }
}

// 정렬 기준
export const useSortBy = () => {
  const sortBy = useSortByStore((state) => state.sortBy)
  const setSortBy = useSortByStore((state) => state.setSortBy)

  return { sortBy, setSortBy }
}
