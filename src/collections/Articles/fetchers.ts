import { getPayloadClient } from '@/lib/payload/client'
import { unstable_cache } from 'next/cache'
import { CACHE_TAG_ARTICLES } from './constants'

export async function _getPublishedArticles() {
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

export function getPublishedArticles() {
  return unstable_cache(_getPublishedArticles, [], {
    tags: [CACHE_TAG_ARTICLES],
  })()
}

export async function getArticleBySlug(slug: string) {
  const payload = await getPayloadClient()
  try {
    const article = await payload.find({
      collection: 'articles',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return article.docs[0] ?? null
  } catch (error) {
    console.error('Failed to fetch article', error)
    return null
  }
}
