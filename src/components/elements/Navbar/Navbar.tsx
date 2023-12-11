"use client"

import * as React from "react"
import {NavbarItem} from "@/components/elements/Navbar/NavbarItem";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import {icons} from "lucide-react";

export default function Navbar() {


    return (
        <nav
            className="w-full flex pt-3  bg-background/20 backdrop-blur justify-between items-center z-[9999] fixed h-20">


            <div className={'flex h-16'}>
                <Image src={'/images/logo.svg'} className={'h-auto w-auto'} height={5} width={5} alt={'logo'}/>
                <Image src={'/images/logoText.svg'} className={'h-auto w-auto hidden md:flex'} height={80} width={200}
                       alt={'logo'}/>
            </div>

            <Button className={'bg-white/20 lg:hidden flex  backdrop-blur shadow-none h-12 rounded-xl'}><Icon
                name={icons['Menu']}
                color={'white'}
                size={20}
                opacity={0.7}/>
            </Button>

            <ul className={'hidden lg:flex items-center backdrop-blur bg-appbarLinksBackground rounded-full'}>
                <NavbarItem active={true}>الرئيسية</NavbarItem>
                <NavbarItem>من نحن</NavbarItem>
                <NavbarItem>الخدمات</NavbarItem>
                <NavbarItem>العملاء</NavbarItem>
                <NavbarItem>اعمالنا</NavbarItem>
                <NavbarItem>تواصل معنا</NavbarItem>
            </ul>

        </nav>
    )
}