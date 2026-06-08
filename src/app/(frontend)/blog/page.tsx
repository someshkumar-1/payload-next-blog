import { getPublishedArticles } from '@/collections/Articles/fetchers'
import { ArticleCard } from './_components/article-card'

function relationIsObject<T>(relation: number | T): relation is T {
  return typeof relation !== 'number'
}

export default async function BlogIndexPage() {
  const articles = await getPublishedArticles()

  if (!articles.length) {
    return <p>No articles found</p>
  }

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {articles.map(
        ({ id, title, slug, contentSummary, coverImage, publishedAt, readTimeInMins, author }) => {
          if (!relationIsObject(coverImage)) return null
          if (!relationIsObject(author) || !relationIsObject(author.avatar)) return null

          return (
            <ArticleCard
              key={id}
              href={`/blog/${slug}`}
              title={title}
              summary={contentSummary}
              coverImage={coverImage}
              publishedAt={new Date(publishedAt ?? new Date())}
              readTimeMins={readTimeInMins ?? 0}
              author={{
                avatar: author.avatar,
                name: author.name,
                role: author.role,
              }}
            />
          )
        },
      )}
    </div>
  )
}
