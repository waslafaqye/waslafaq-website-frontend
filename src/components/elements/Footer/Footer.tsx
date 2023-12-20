// @flow
import * as React from 'react';
import Image from "next/image";
import {NavbarItem} from '../Navbar/NavbarItem';

type Props = {};
export const Footer = (props: Props) => {
    let date: Date = new Date()

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
                    <NavbarItem>الرئيسية</NavbarItem>
                    <NavbarItem>من نحن</NavbarItem>
                    <NavbarItem>الخدمات</NavbarItem>
                    <NavbarItem>العملاء</NavbarItem>
                    <NavbarItem>اعمالنا</NavbarItem>
                    <NavbarItem>تواصل معنا</NavbarItem>
                </ul>
            </div>
            <div className={'h-[2px] rounded-full opacity-75 my-4 bg-appbarLinksBackground w-full'}></div>
            <p className={'opacity-75'}>جميع الحقوق محفوظة لدى وصل افاق {date.getFullYear()}</p>
        </footer>
    );
};