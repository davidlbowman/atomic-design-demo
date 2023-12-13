import SocialIcon from '@/atoms/SocialIcon'

export default function BookstoreFooter() {
    return (
        <footer className='w-full bg-gray-200 p-4 flex justify-center items-center'>
            <div className='flex space-x-4'>
                <SocialIcon platform='twitter' username='davidlbowman' />
                <SocialIcon platform='linkedin' username='davidlbowman' />
            </div>
        </footer>
    )
}
