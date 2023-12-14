import { fetchAllBookSlugs } from '@/utils/fetchBooks'

export default async function sitemap() {
    const baseUrl = 'https://atomic-design-demo.vercel.app/'
    const slugs = fetchAllBookSlugs()
    const bookPaths = slugs.map(slug => {
        return {
            url: baseUrl + slug,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.5
        }
    })

    return [
        {
            url: 'https://atomic-design-demo.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1
        },
        ...bookPaths
    ]
}
