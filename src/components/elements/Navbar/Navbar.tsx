'use client'
import * as React from "react"
import Image from "next/image";
import {MobileMenu} from "@/components/elements/Navbar/MobileMenu";
import {NavbarItem} from "@/components/elements/Navbar/NavbarItem";
import Link from "next/link";
import LocaleSwitcher from "@/components/elements/Navbar/LanguageSwitcher";


export default function Navbar({details = false, navItems}: {
    details: boolean,
    navItems: { title: string, url: string, isActive: boolean }[]
}) {


    return (
        <nav
            className="w-screen  pt-3  bg-background/20 backdrop-blur  z-[9999] fixed h-20">


            <div className={'max-w-7xl flex justify-between items-center mx-auto'}>
                <Link href={'/'} className={'flex h-16'}>
                    <Image src={'/images/logo.svg'} className={'h-auto w-auto'} height={5} width={5} alt={'logo'}/>
                    <Image src={'/images/logoText.svg'} className={'h-auto w-auto hidden md:flex'} height={80}
                           width={200}
                           alt={'logo'}/>
                </Link>

                <div className={'flex gap-4 lg:hidden'}>
                    <LocaleSwitcher/>
                    <MobileMenu links={navItems}/>
                </div>

                <div className={'hidden lg:flex items-center gap-5 '}>


                    <ul className={' flex backdrop-blur bg-appbarLinksBackground rounded-full'}>

                        {navItems.map(item => (
                            <NavbarItem

                                key={navItems.indexOf(item)}
                                url={details ? '' : item.url}
                                details={details}>{item.title}</NavbarItem>
                        ))}
                    </ul>
                    <LocaleSwitcher/>
                </div>


            </div>


        </nav>
    )
}