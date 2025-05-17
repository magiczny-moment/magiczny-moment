import { serverQueryContent } from '#content/server'
import type SitemapEntry from '@nuxtjs/sitemap'

export default defineEventHandler(async (event): Promise<SitemapEntry[]> => {
  const docs = await serverQueryContent(event, '/oferta')
    .only(['_path', 'updatedAt'])
    .find()

  return docs.map(doc => ({
    loc: doc._path,
    lastmod: doc.updatedAt ?? new Date().toISOString().split('T')[0], // YYYY-MM-DD
  }))
})