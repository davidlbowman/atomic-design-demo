import Heading from '@/atoms/Heading'
import BookCard from '@/molecules/BookCard'
import { bookList } from '@/data/bookList'

export default function BookDetailPage({ params }: { params: { slug: string } }) {
    const book = bookList.find(book => book.slug === params.slug)

    if (!book) {
        return (
            <main className='flex-grow flex flex-col min-h-screen items-center justify-center'>
                <Heading level={1} className='text-xl font-bold'>
                    Book not found
                </Heading>
            </main>
        )
    }

    return (
        <main className='flex-grow flex flex-col md:flex-row items-center justify-center p-4 gap-16 w-full'>
            <div className='md:flex-1 flex justify-end text-right'>
                <div>
                    <Heading level={1} className='text-2xl font-bold'>
                        {book.title}
                    </Heading>
                    <Heading level={2} className='text-xl'>
                        {book.author}
                    </Heading>
                    <p className='text-lg max-w-md'>{book.description}</p>
                </div>
            </div>
            <div className='md:flex-1 flex justify-start'>
                <BookCard
                    title={book.title}
                    author={book.author}
                    coverImageUrl={book.coverImage}
                    slug={book.slug}
                />
            </div>
        </main>
    )
}
