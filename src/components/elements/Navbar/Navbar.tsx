"use client"

import * as React from "react"
import {PropsWithChildren} from "react"
import Image from "next/image";
import {MobileMenu} from "@/components/elements/Navbar/MobileMenu";
import {NavbarItem} from "@/components/elements/Navbar/NavbarItem";
import Link, {LinkProps} from "next/link";

export default function Navbar() {

    let navItems = [
        {
            title: "الرئيسية",
            url: "#Hero",
            isActive: true,
        }, {
            title: "من نحن",
            url: "#AboutUs",
            isActive: false,
        }, {
            title: "الخدمات",
            url: "#Services",
            isActive: false,
        }, {
            title: "عملائنا",
            url: "#OurClients",
            isActive: false,
        }, {
            title: "اعمالنا",
            url: "#OurProjects",
            isActive: false,
        }, {
            title: "تواصل معنا",
            url: "#ContactUs",
            isActive: false,
        },
    ];


    type AnchorProps = Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        keyof LinkProps
    >;
    type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;
// component definition

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,) => {
        e.preventDefault();


        // const targetId = e.currentTarget.href.replace(/.*\#/, "");
        const elem = document.getElementById('#Services');

        window.scrollTo({
            top: elem?.getBoundingClientRect().top,
            behavior: "smooth",
        });
    };


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

                <MobileMenu/>

                <ul className={'hidden lg:flex items-center backdrop-blur bg-appbarLinksBackground rounded-full'}>
                    {navItems.map(item => (
                        <NavbarItem
                            key={navItems.indexOf(item)}
                            url={item.url}
                            active={item.isActive}>{item.title}</NavbarItem>
                    ))}
                </ul>
            </div>


        </nav>
    )
}