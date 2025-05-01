// TODO
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
