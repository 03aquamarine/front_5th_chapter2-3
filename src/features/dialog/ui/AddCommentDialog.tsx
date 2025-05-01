import { useState } from "react"
import { Button } from "../../../shared/ui/Button/ui"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/Dialog/ui"
import { Textarea } from "../../../shared/ui/Textarea/ui"
import { useShowAddCommentDialogStore } from "../model/useShowAddCommentDialogStore"
import { useCommentStore } from "../../comment/model/useCommentStore"
import { useNewCommentStore } from "../../comment/model/useNewCommentStore"

// 댓글 추가 대화상자
const AddCommentDialog = () => {
  const showAddCommentDialog = useShowAddCommentDialogStore((state) => state.showAddCommentDialog)
  const setShowAddCommentDialog = useShowAddCommentDialogStore((state) => state.setShowAddCommentDialog)
  const setComments = useCommentStore((state) => state.setComments)
  const newComment = useNewCommentStore((state) => state.newComment)
  const setNewComment = useNewCommentStore((state) => state.setNewComment)

  const addComment = async () => {
    try {
      const response = await fetch("/api/comments/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      })
      const data = await response.json()
      setComments((prev: Comment[]) => ({
        ...prev,
        [data.postId]: [...(prev[data.postId] || []), data],
      }))
      setShowAddCommentDialog(false)
      setNewComment({ body: "", postId: null, userId: 1 })
    } catch (error) {
      console.error("댓글 추가 오류:", error)
    }
  }

  return (
    <Dialog open={showAddCommentDialog} onOpenChange={setShowAddCommentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 댓글 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Textarea
            placeholder="댓글 내용"
            value={newComment.body}
            onChange={(e) => setNewComment({ ...newComment, body: e.target.value })}
          />
          <Button onClick={addComment}>댓글 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddCommentDialog
