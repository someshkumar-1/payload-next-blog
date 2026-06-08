import { getPayloadClient } from '@/lib/payload/client'

export async function getArticles() {
  const payload = await getPayloadClient()
  try {
    const { docs: articles } = await payload.find({
      collection: 'articles',
      where: { status: { equals: 'published' } },
      select: {
        slug: true,
        title: true,
        contentSummary: true,
        author: true,
        coverImage: true,
        status: true,
        readTimeInMins: true,
        publishedAt: true,
      },
    })
    return articles ?? []
  } catch (error) {
    console.error('Failed to fetch articles', error)
    return []
  }
}
