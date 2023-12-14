import BookCard from '@/molecules/BookCard'
import { Book } from '@/types/book'

interface BookGridProps {
    bookList: Book[]
}

export default function BookGrid({ bookList }: BookGridProps) {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 p-4 mx-auto w-full place-items-center'>
            {bookList.map(({ id, title, author, coverImage, slug }) => (
                <BookCard
                    key={id}
                    title={title}
                    author={author}
                    coverImageUrl={coverImage}
                    slug={slug}
                />
            ))}
        </div>
    )
}
