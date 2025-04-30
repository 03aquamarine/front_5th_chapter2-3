import { Plus } from "lucide-react"
import { useShowAddDialogStore } from "../store/showStore"
import { CardHeader, CardTitle } from "../shared/ui/Card/ui"
import { Button } from "../shared/ui/Button/ui"

const ContentHeader = () => {
  const { setShowAddDialog } = useShowAddDialogStore()

  return (
    <CardHeader>
      <CardTitle className="flex items-center justify-between">
        <span>게시물 관리자</span>
        <Button onClick={() => setShowAddDialog(true)}>
          <Plus className="w-4 h-4 mr-2" />
          게시물 추가
        </Button>
      </CardTitle>
    </CardHeader>
  )
}

export default ContentHeader
