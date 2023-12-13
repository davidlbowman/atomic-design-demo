import Button from '@/atoms/Button'
import Image from 'next/image'

interface BookCardProps {
    title: string
    author: string
    coverImageUrl: string
}

export default function BookCard({ title, author, coverImageUrl }: BookCardProps) {
    return (
        <div className='w-48 bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>
            <Image
                src={coverImageUrl}
                alt={`Cover of ${title}`}
                width={200}
                height={319}
                priority
                className='transition-opacity duration-300 ease-in-out hover:opacity-90'
            />
            <div className='p-2'>
                <h3 className='text-sm font-bold truncate'>{title}</h3>
                <p className='text-xs text-gray-600 truncate'>{author}</p>
                <Button className='text-xs mt-2 w-full'>More Details</Button>
            </div>
        </div>
    )
}
