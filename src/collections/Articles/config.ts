import type { CollectionConfig } from 'payload'
import { gnerateSlugHook } from './hooks/generate-slug.hook'

import { generateContentSummaryHook } from './hooks/genrate-content-summary.hook'
import { convertLexicalToPlaintext } from '@payloadcms/richtext-lexical/plaintext'
import { revalidateTag } from 'next/cache'
import { CACHE_TAG_ARTICLES } from './constants'

export const Articles: CollectionConfig = {
  slug: 'articles',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      hooks: {
        beforeValidate: [gnerateSlugHook],
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'contentSummary',
      type: 'textarea',
      required: true,
      hooks: {
        beforeValidate: [generateContentSummaryHook],
      },
    },
    {
      name: 'readTimeInMins',
      type: 'number',
      defaultValue: 0,
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            // ensure thta the dat is not stored in DB
            delete siblingData.readTimeInMins
          },
        ],
        afterRead: [
          ({ data }) => {
            const text = convertLexicalToPlaintext({ data: data?.content })
            const wordsPerMinute = 200
            const words = text.trim().split(/\s+/).length
            return Math.max(1, Math.ceil(words / wordsPerMinute))
          },
        ],
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'article-authors',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      admin: {
        condition: (data) => data.status === 'published',
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
  ],
  hooks: {
    afterChange: [() => revalidateTag(CACHE_TAG_ARTICLES, '')],
  },
}
