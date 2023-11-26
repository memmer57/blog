import React from "react"
import Link from "next/link"
import "./BlogPostCard.scss"

export default function BlogPostCard({ post }: { post: IPost }) {
  const formattedDate = new Date(
    post.attributes.publishedAt
  ).toLocaleDateString()

  return (
    <Link href={`/posts/${post.attributes.slug}`} className="blog-post-card">
      <h2>{post.attributes.title}</h2>
      <div className="post-info-container">
        <p>{formattedDate}</p>
        <p>
          Author:{" "}
          {post.attributes.author &&
            post.attributes.author.data.attributes.name}
        </p>
      </div>
    </Link>
  )
}
