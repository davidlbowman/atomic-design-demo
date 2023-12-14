import BookGrid from '@/organisms/BookGrid'
import { bookList } from '@/data/bookList'

export default function Home() {
    return (
        <main className='flex-grow flex flex-col md:flex-row items-center justify-center p-4 gap-16 w-full'>
            <BookGrid bookList={bookList} />
        </main>
    )
}
