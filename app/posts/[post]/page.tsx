import PostPage from "@/components/PostPage/PostPage"

export default function Home({ params }: { params: { post: string } }) {
  return <PostPage params={params} />
}
