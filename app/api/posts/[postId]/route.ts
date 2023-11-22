import { conflictResponse, successResponse } from "@/helpers/apiHelper"

/**
 * @swagger
 * /api/posts/{postId}:
 *   get:
 *     description: Returns blog post by slug.
 *     responses:
 *       200:
 *          description: Success
 */
export async function GET(
  req: Request,
  { params }: { params: { postSlug: string } }
) {
  try {
    const postSlug = params.postSlug

    return successResponse("To the moon! 🚀 Someday...")
  } catch (e) {
    return conflictResponse()
  }
}
