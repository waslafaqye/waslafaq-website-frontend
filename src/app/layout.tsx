import type {Metadata} from 'next'
import Favicon from './favicon.ico';
import './globals.css'
import React from "react";
import localFont from "next/font/local";


const bahij = localFont({
    src: [
        {
            path: '../fonts/bold.ttf',
            weight: 'bold',
        },
        {
            path: '../fonts/SemiBold.ttf',
            weight: '600',
        },
        {
            path: '../fonts/SemiLight.ttf',
            weight: '200',
        },
    ]
})

export const metadata: Metadata = {
    title: 'Waslafaq',
    description: 'Waslafaq official website',
    icons: {
        icon: Favicon.src,
    },
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="ar" dir={'rtl'}>
        <body className={`${bahij.className} text-textColor`}>{children}</body>
        </html>
    )
}
