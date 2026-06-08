import { ArticleCard } from './_components/article-card'

export default async function BlogIndexPage() {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      <ArticleCard
        href="/blog/how-to-create-a-blog-with-nextjs-13"
        title="How to create a blog with Next.js 13"
        summary="Learn how to create a blog with Next.js 13, the latest version of the popular React framework. This tutorial will guide you through the process of setting up a blog, creating posts, and deploying your site."
        coverImage="https://via.assets.so/img.jpg?w=600&h=300&bg=6b7280&f=png"
        publishedAt={new Date('2026-01-01T10:00:00Z')}
        readTimeMins={5}
        author={{
          avatar: 'https://via.assets.so/img.jpg?w=40&h=40&bg=6b7280&f=png',
          name: 'John Doe',
          role: 'Author',
        }}
      />
    </div>
  )
}
