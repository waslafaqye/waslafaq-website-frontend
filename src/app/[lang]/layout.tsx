import type {Metadata} from 'next'
import Favicon from '../favicon.ico';
import './globals.css'
import React from "react";
import localFont from "next/font/local";
import {i18n, Locale} from "../../../i18n.config";


const bahij = localFont({
    src: [
        {
            path: '../../fonts/bold.ttf',
            weight: 'bold',
        },
        {
            path: '../../fonts/SemiBold.ttf',
            weight: '600',
        },
        {
            path: '../../fonts/SemiLight.ttf',
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

export async function generateStaticParams() {
    return i18n.locales.map(locale => ({lang: locale}))
}

export default function RootLayout({children, params}: { children: React.ReactNode, params: { lang: Locale } }) {
    return (
        <html lang={params.lang} dir={params.lang === 'en' ? 'ltr' : 'rtl'}>
        <body className={`${bahij.className} text-textColor`}>

        {children}

        </body>
        </html>
    )
}
