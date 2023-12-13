import Label from '@/atoms/Label'
import Input from '@/atoms/Input'
import Button from '@/atoms/Button'

export default function SearchBar() {
    return (
        <div className='flex flex-col items-center gap-2 w-full max-w-xs mx-auto'>
            <Label htmlFor='search' className='self-start'>
                Search for a Book:
            </Label>
            <Input
                type='text'
                id='search'
                name='search'
                placeholder='Type a book title...'
                className='w-full'
            />
            <Button className='w-full'>Search</Button>
        </div>
    )
}
