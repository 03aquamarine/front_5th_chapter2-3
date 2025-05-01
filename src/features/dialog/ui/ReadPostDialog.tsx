import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/Dialog/ui"
import { useShowReadDialogStore } from "../model/useShowReadDialogStore"

// 게시물 상세 보기 대화상자
const ReadPostDialog = () => {
  const showReadDialog = useShowReadDialogStore((state) => state.showReadDialog)
  const setShowReadDialog = useShowReadDialogStore((state) => state.setShowReadDialog)

  return (
    <Dialog open={showReadDialog} onOpenChange={setShowReadDialog}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{highlightText(selectedPost?.title || "", searchQuery)}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p>{highlightText(selectedPost?.body || "", searchQuery)}</p>
          {selectedPost?.id !== undefined && renderComments(selectedPost?.id)}
        </div>
      </DialogContent>
    </Dialog>
  )
}
