import Image from 'next/image'
import Input from '@/atoms/Input'
import Label from '@/atoms/Label'

export default function SearchBar() {
    return (
        <div className='relative'>
            <Input
                type='text'
                id='search'
                name='search'
                placeholder='Type a book title...'
                className='pl-10 pr-4'
            />
            <Label htmlFor='search' className='sr-only'>
                Search for a Book:
            </Label>
            <div className='absolute left-0 top-0 bottom-0 flex items-center justify-center pl-2'>
                <Image src='/magnifyingGlass.webp' alt='Search' height={20} width={20} priority />
            </div>
        </div>
    )
}
