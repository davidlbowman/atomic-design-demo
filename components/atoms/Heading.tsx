import { ReactNode } from 'react'

interface HeadingProps {
    level: 1 | 2 | 3 | 4 | 5 | 6
    children: ReactNode
    className?: string
}

export default function Heading({ level, children, className = '' }: HeadingProps) {
    const Tag = `h${level}` as `h${HeadingProps['level']}`
    return <Tag className={className}>{children}</Tag>
}
