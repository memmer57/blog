"use client"

import { requestAllPublishedPosts } from "@/services/api-services/blogService"
import "./HomePage.scss"
import BlogPostCard from "./BlogPostCard"
import { useEffect, useState } from "react"
import Loading from "../LoadingScreen"

export default function HomePage() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    requestAllPublishedPosts().then((res) => {
      res.posts.sort((a: any, b: any) => {
        const dateA = new Date(a.attributes.publishedAt).getTime()
        const dateB = new Date(b.attributes.publishedAt).getTime()
        return dateB - dateA
      })
      setPosts(res.posts)
    })
  }, [])

  if (!posts.length) return <Loading />

  return (
    <div className="home-page">
      {posts
        .filter((post) => post.attributes.createdBy.id === 4)
        .map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
    </div>
  )
}
