import { Button } from "../../../shared/ui/Button/ui"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/Dialog/ui"
import { Input } from "../../../shared/ui/Input/ui"
import { Textarea } from "../../../shared/ui/Textarea/ui"
import { usePostStore } from "../../post/model/usePostStore"
import { useSelectedPostStore } from "../../post/model/useSelectedPostStore"
import { useShowEditDialogStore } from "../model/useShowEditPostDialogStore"

// 게시물 수정 대화상자
const EditPostDialog = () => {
  const showEditDialog = useShowEditDialogStore((state) => state.showEditDialog)
  const setShowEditDialog = useShowEditDialogStore((state) => state.setShowEditDialog)
  const posts = usePostStore((state) => state.posts)
  const setPosts = usePostStore((state) => state.setPosts)
  const selectedPost = useSelectedPostStore((state) => state.selectedPost)
  const setSelectedPost = useSelectedPostStore((state) => state.setSelectedPost)

  // 게시물 업데이트
  const updatePost = async () => {
    try {
      const response = await fetch(`/api/posts/${selectedPost?.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selectedPost),
      })
      const data = await response.json()
      setPosts(posts.map((post) => (post.id === data.id ? data : post)))
      setShowEditDialog(false)
    } catch (error) {
      console.error("게시물 업데이트 오류:", error)
    }
  }

  return (
    <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시물 수정</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={selectedPost?.title || ""}
            onChange={(e) => selectedPost && setSelectedPost({ ...selectedPost, title: e.target.value })}
          />
          <Textarea
            rows={15}
            placeholder="내용"
            value={selectedPost?.body || ""}
            onChange={(e) => selectedPost && setSelectedPost({ ...selectedPost, body: e.target.value })}
          />
          <Button onClick={updatePost}>게시물 업데이트</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default EditPostDialog
