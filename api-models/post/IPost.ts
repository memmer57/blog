type IPost = {
  id: number
  attributes: {
    title: string
    releaseDate: string
    content: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    slug: string

    author: {
      data: IAuthor
    }
    tags: {
      data: ITag[]
    }
  }
}
