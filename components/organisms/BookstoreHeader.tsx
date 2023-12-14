import Link from 'next/link'
import Heading from '@/atoms/Heading'
import SearchBar from '@/molecules/SearchBar'

export default function BookstoreHeader() {
    return (
        <header className='bg-white shadow p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href='/'>
                    <Heading level={1} className='text-2xl font-bold'>
                        Welcome to My Bookstore
                    </Heading>
                </Link>
                <SearchBar />
            </div>
        </header>
    )
}
