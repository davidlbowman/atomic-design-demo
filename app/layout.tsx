import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import BookstoreHeader from '@/organisms/BookstoreHeader'
import BookstoreFooter from '@/organisms/BookstoreFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Atomic Designs for NextATX',
    description: 'Created by David Bowman & ChatGPT'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={`${inter.className} flex flex-col min-h-screen`}>
                <BookstoreHeader />
                {children}
                <BookstoreFooter />
            </body>
        </html>
    )
}
