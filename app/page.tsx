import BookstoreHeader from '@/organisms/BookstoreHeader'
import BookGrid from '@/organisms/BookGrid'
import BookstoreFooter from '@/organisms/BookstoreFooter'
import { bookList } from '@/data/bookList'

export default function Home() {
    return (
        <div className='flex flex-col min-h-screen justify-between'>
            <BookstoreHeader />
            <main className='flex-grow'>
                <BookGrid bookList={bookList} />
            </main>
            <BookstoreFooter />
        </div>
    )
}
