import { requestAllPublishedPosts } from "@/services/api-services/blogService"
import "./PostPage.scss"
import { remark } from "remark"
import html from "remark-html"
import { notFound } from "next/navigation"

export default async function PostPage({
  params,
}: {
  params: { post: string }
}) {
  try {
    const postsResponse = await requestAllPublishedPosts()

    const posts = postsResponse.posts
    const post = posts.find((post) => post.attributes.slug === params.post)

    if (!post) {
      return notFound()
    }

    const processedContent = await remark()
      .use(html)
      .process(post.attributes.content)
    const postContentHtml = processedContent.toString()

    return (
      <div className="postpage">
        <div className="post-wrapper">
          <h1>{post.attributes.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: postContentHtml }} />
        </div>
      </div>
    )
  } catch (error) {
    return notFound()
  }
}
