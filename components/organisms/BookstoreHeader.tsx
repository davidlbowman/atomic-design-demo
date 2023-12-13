import Heading from '@/atoms/Heading'
import SearchBar from '@/molecules/SearchBar'

export default function BookstoreHeader() {
    return (
        <div className='text-center p-4'>
            <Heading level={1} className='text-2xl'>
                Welcome to My Bookstore
            </Heading>
            <Heading level={2} className='text-xl mb-4'>
                Find Your Next Great Read
            </Heading>
            <SearchBar />
        </div>
    )
}
