import { useState } from "react"
import { Button } from "../../../shared/ui/Button/ui"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../shared/ui/Dialog/ui"
import { Input } from "../../../shared/ui/Input/ui"
import { Textarea } from "../../../shared/ui/Textarea/ui"
import { useShowAddDialogStore } from "../model/useShowAddDialogStore"
import { usePostStore } from "../../post/model/usePostStore"

interface NewPost {
  title: string
  body: string
  userId: number
}

// 게시물 추가 대화상자
const AddPostDialog = () => {
  const showAddDialog = useShowAddDialogStore((state) => state.showAddDialog)
  const setShowAddDialog = useShowAddDialogStore((state) => state.setShowAddDialog)
  const posts = usePostStore((state) => state.posts)
  const setPosts = usePostStore((state) => state.setPosts)

  const [newPost, setNewPost] = useState<NewPost>({ title: "", body: "", userId: 1 })

  // 게시물 추가
  const addPost = async () => {
    try {
      const response = await fetch("/api/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      })
      const data = await response.json()
      setPosts([data, ...posts])
      setShowAddDialog(false)
      setNewPost({ title: "", body: "", userId: 1 })
    } catch (error) {
      console.error("게시물 추가 오류:", error)
    }
  }

  return (
    <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>새 게시물 추가</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="제목"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <Textarea
            rows={30}
            placeholder="내용"
            value={newPost.body}
            onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          />
          <Input
            type="number"
            placeholder="사용자 ID"
            value={newPost.userId}
            onChange={(e) => setNewPost({ ...newPost, userId: Number(e.target.value) })}
          />
          <Button onClick={addPost}>게시물 추가</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default AddPostDialog
