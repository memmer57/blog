import { conflictResponse, successResponse } from "@/helpers/apiHelper"

/**
 * @swagger
 * /api/posts:
 *   get:
 *     description: Returns all blog posts.
 *     responses:
 *       200:
 *          description: Success
 */
export async function GET() {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}/blog-posts?populate=*`, {
      cache: "no-cache",
      headers: {
        accept: "application/json",
        Authorization: `${process.env.STRAPI_AUTH}`,
      },
      next: { revalidate: 0 },
    })
    const json = await res.json()

    return successResponse({ posts: json.data })
  } catch (e) {
    return conflictResponse()
  }
}
