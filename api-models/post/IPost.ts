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
      firstname: string
      lastname: string
    }

    updatedBy: {
      firstname: string
      lastname: string
    }

    tags: {
      data: ITag[]
    }
  }
}
