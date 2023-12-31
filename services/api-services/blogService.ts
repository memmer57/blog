import { get } from "../requestHelpers"

export async function requestPostDetail(postId: string): Promise<IPost> {
  return await get<IPost>(`/posts/${postId}`)
}

export async function requestAllPublishedPosts(): Promise<{
  status: number
  posts: IPost[]
}> {
  return await get<{
    status: number
    posts: IPost[]
  }>("/posts")
}
