import { conflictResponse, successResponse } from "@/helpers/apiHelper"

export const dynamic = "force-dynamic"

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
      headers: {
        accept: "application/json",
        cache: "no-store",
        Authorization: `${process.env.STRAPI_AUTH}`,
      },
    })
    const json = await res.json()

    return successResponse({ posts: json.data })
  } catch (e) {
    return conflictResponse()
  }
}
