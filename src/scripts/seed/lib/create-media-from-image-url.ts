import { faker } from '@faker-js/faker'
import { Payload } from 'payload'

export async function createMediaFromImageUrl(payload: Payload, imageUrl: string) {
  try {
    const res = await fetch(imageUrl)
    const arrBuffer = await res.arrayBuffer()
    const buffer = Buffer.from(arrBuffer)

    const mimetype = res.headers.get('content-type') || 'image/jpeg'
    const fileSize = buffer.length
    const fileName = res.url.split('/').pop()?.split('?')[0]

    if (!fileName) {
      throw new Error('Could not extract file name from URL')
    }

    return await payload.create({
      collection: 'media',
      draft: true,
      data: {
        alt: faker.lorem.words(3),
      },
      file: {
        data: buffer,
        name: fileName,
        mimetype,
        size: fileSize,
      },
    })
  } catch (error) {
    console.warn('Error creating media from image URL:', error)
  }
}
