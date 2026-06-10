import Image from 'next/image'
import { ArticleMetadata } from '../_components/article-metadata'
import { getArticleBySlug } from '@/collections/Articles/fetchers'
import { RichText } from '@/lib/payload/components/rich-text'

interface PageProps {
  params: Promise<{ slug: string }>
}

function relationIsObject<T>(relation: number | T): relation is T {
  return typeof relation !== 'number'
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params

  const article = await getArticleBySlug(slug)

  if (!article) {
    return <p>No Article found</p>
  }

  if (!relationIsObject(article.coverImage)) return null
  if (!relationIsObject(article.author)) return null

  return (
    <div className="prose lg:prose-lg dark:prose-invert">
      {/* title */}
      <h1>{article?.title}</h1>
      {/* metadata */}

      <ArticleMetadata
        intent="post"
        data={{
          author: {
            avatar: article.author.avatar,
            name: article.author.name,
            role: article.author.role,
          },
          publishedAt: new Date(article.publishedAt ?? new Date()),
          readTimeMins: article.readTimeInMins ?? 0,
        }}
        className="not-prose"
      />

      {/* cover image */}
      <Image
        src={article.coverImage.url ?? ''}
        alt="Cover image"
        width={600}
        height={300}
        className="w-full rounded-md object-center object-cover"
      />

      {/* content */}
      <RichText lexicalData={article.content} />
    </div>
  )
}
