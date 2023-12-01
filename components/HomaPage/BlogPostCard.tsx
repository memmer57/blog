"use client"

import React from "react"
import Link from "next/link"
import "./BlogPostCard.scss"
import { useTheme } from "@/context/themeContext"
import { formatDate } from "@/helpers/stringFormatHelper"

export default function BlogPostCard({ post }: { post: IPost }) {
  const { theme } = useTheme()

  return (
    <Link
      href={`/posts/${post.attributes.slug}`}
      className={`blog-post-card ${theme}`}
    >
      <h2>{post.attributes.title}</h2>
      <div className="tag-container">
        {post.attributes.tags.data.map((tag) => (
          <span
            key={tag.id}
            className="tag"
            style={{ backgroundColor: tag.attributes.color }}
          >
            {tag.attributes.name}
          </span>
        ))}
      </div>
      <div className="post-info-container">
        <p>{formatDate(post.attributes.publishedAt)}</p>
        {post.attributes.createdBy && (
          <p>
            Author:{" "}
            <b>
              {post.attributes.createdBy.firstname +
                " " +
                post.attributes.createdBy.lastname}
            </b>
          </p>
        )}
      </div>
    </Link>
  )
}
