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
      <div className="tag-container">
        {post.attributes.tags.data.map((tag) => (
          <span key={tag.id} className="tag">
            {tag.attributes.name}
          </span>
        ))}
      </div>
      <div className="post-info-container">
        <p>{formattedDate}</p>
        {post.attributes.createdBy &&
          post.attributes.createdBy.firstname +
            " " +
            post.attributes.createdBy.lastname}
      </div>
    </Link>
  )
}
