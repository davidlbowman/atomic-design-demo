import { fetchAllBookSlugs } from '@/utils/fetchBooks'

export default async function sitemap() {
    const baseUrl = 'https://atomic-design-demo.vercel.app'
    const slugs = fetchAllBookSlugs()
    const bookPaths = slugs.map(slug => {
        return {
            url: `${baseUrl}/books/${slug}`,
            lastmod: new Date(),
            changefreq: 'monthly',
            priority: 0.5
        }
    })

    return [
        {
            url: baseUrl,
            lastmod: new Date(),
            changefreq: 'daily',
            priority: 1
        },
        ...bookPaths
    ]
}
