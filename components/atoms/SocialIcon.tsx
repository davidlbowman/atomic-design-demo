import Image from 'next/image'
import Link from 'next/link'

interface SocialIconProps {
    platform: 'twitter' | 'linkedin'
    username: string
}

export default function SocialIcon({ platform, username }: SocialIconProps) {
    const baseUrl = platform === 'twitter' ? 'https://twitter.com/' : 'https://linkedin.com/in/'
    const href = `${baseUrl}${username}`
    const altText = `David's ${platform.charAt(0).toUpperCase() + platform.slice(1)}`

    return (
        <Link href={href} target='_blank' rel='noopener noreferrer' className='inline-block'>
            <Image
                src={`/${platform}.svg`}
                alt={altText}
                height={48}
                width={48}
                className='h-6 w-6'
            />
        </Link>
    )
}
