type IPost = {
  id: number
  attributes: {
    title: string
    content: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    slug: string

    createdBy: {
      id: number
      firstname: string
      lastname: string
    }

    updatedBy: {
      id: number
      firstname: string
      lastname: string
    }

    tags: {
      data: ITag[]
    }
  }
}
