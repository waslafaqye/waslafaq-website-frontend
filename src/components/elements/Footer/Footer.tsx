// @flow
'use client'
import * as React from 'react';
import Image from "next/image";
import {NavbarItem} from '../Navbar/NavbarItem';
import {useRouter} from "next/navigation";

type Props = {
    details?: boolean,
    navItems: { title: string, url: string, isActive: boolean }[],

};
export const Footer = (props: Props) => {
    let date: Date = new Date()

    const router = useRouter();


    const handleRoute = () => {
        if (props.details) {
            router.back();
        }
    }


    return (
        <footer className={'mt-10 mb-5 text-center  w-full '}>
            <div className={'flex items-center lg:justify-between   flex-col lg:flex-row'}>
                <div className={'flex h-16'}>
                    <Image src={'/images/logo.svg'} className={'h-auto w-auto'} height={5} width={5} alt={'logo'}/>
                    <Image src={'/images/logoText.svg'} className={'h-auto w-auto hidden md:flex'} height={80}
                           width={200}
                           alt={'logo'}/>
                </div>
                <ul className={'flex flex-col my-4 gap-y-10 lg:flex-row justify-center  items-center '}>
                    {
                        props.navItems.map((item) =>
                            <NavbarItem key={item.url}
                                        details={props.details}
                                        url={item.url}>{item.title}</NavbarItem>
                        )
                    }
                </ul>
            </div>
            <div className={'h-[2px] rounded-full opacity-75 my-4 bg-appbarLinksBackground w-full'}></div>
            <p className={'opacity-75'}>جميع الحقوق محفوظة لدى وصل افاق {date.getFullYear()}</p>
        </footer>
    );
};