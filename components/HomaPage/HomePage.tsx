import { requestAllPublishedPosts } from "@/services/api-services/blogService"
import "./HomePage.scss"
import BlogPostCard from "./BlogPostCard"
import { notFound } from "next/navigation"

export default async function HomePage() {
  try {
    let postsResponse = await requestAllPublishedPosts()

    const posts = postsResponse.posts

    const sortedPosts = posts.sort((a, b) => {
      const dateA = new Date(a.attributes.publishedAt).getTime()
      const dateB = new Date(b.attributes.publishedAt).getTime()
      return dateB - dateA
    })

    return (
      <div className="homepage">
        {sortedPosts
          .filter((post) => post.attributes.createdBy.id === 1)
          .map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
      </div>
    )
  } catch (error) {
    return notFound()
  }
}
