import { Search } from "lucide-react"
import { Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../shared/ui"
import { useSearchQuery, useSelectedTag } from "../hooks/useStore"

export const SearchInput = ({ searchPosts }) => {
  const { searchQuery, setSearchQuery } = useSearchQuery()

  return (
    <div className="flex-1">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="게시물 검색..."
          className="pl-8"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && searchPosts()}
        />
      </div>
    </div>
  )
}

export const SearchSelectTag = ({ tags, fetchPostsByTag, updateURL }) => {
  const { selectedTag, setSelectedTag } = useSelectedTag()

  return (
    <Select
      value={selectedTag}
      onValueChange={(value) => {
        setSelectedTag(value)
        fetchPostsByTag(value)
        updateURL()
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="태그 선택" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">모든 태그</SelectItem>
        {tags.map((tag) => (
          <SelectItem key={tag.url} value={tag.slug}>
            {tag.slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

const ContentSearchFilter = ({ searchPosts, tags, fetchPostsByTag, updateURL }) => {
  return (
    <div className="flex gap-4">
      <SearchInput searchPosts={searchPosts} />

      <SearchSelectTag tags={tags} fetchPostsByTag={fetchPostsByTag} updateURL={updateURL} />
    </div>
  )
}

export default ContentSearchFilter
