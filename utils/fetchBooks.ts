import { bookList } from '@/data/bookList'

export function fetchBookBySlug(slug: string) {
    return bookList.find(book => book.slug === slug)
}

export function fetchAllBookSlugs() {
    return bookList.map(book => book.slug)
}
