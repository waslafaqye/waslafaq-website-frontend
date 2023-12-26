// @flow
import * as React from 'react';
import {Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger} from "@/components/ui/sheet";
import Icon from "@/components/ui/Icon";
import {icons} from "lucide-react";
import Image from "next/image";
import {NavbarItem} from "@/components/elements/Navbar/NavbarItem";

type Props = {
    links: { title: string, url: string, isActive: boolean }[],
};
export const MobileMenu = (props: Props) => {
    return (
        <div>
            <Sheet>
                <SheetTrigger
                    className={'bg-white/20 lg:hidden  items-center   backdrop-blur shadow-none h-12 w-12 rounded-xl'}>
                    <Icon
                        center={true}
                        name={icons['Menu']}
                        color={'white'}
                        size={20}
                        opacity={0.7}/>
                </SheetTrigger>
                <SheetContent side={"left"} className={'z-[10000] bg-background !text-end'}>
                    <SheetHeader className={'flex flex-row items-center justify-between '}>
                        <Image src={'/images/logo.svg'} className={'h-12 w-12 '} height={5} width={5}
                               alt={'logo'}/>
                        <SheetClose
                            className={' !flex bg-white/20 lg:hidden  !m-0   backdrop-blur shadow-none p-3 rounded-xl'}>
                            <Icon
                                center={true}
                                name={icons['X']}
                                color={'white'}
                                size={20}
                                opacity={0.7}/></SheetClose>
                    </SheetHeader>
                    <ul className={' mt-20 flex flex-col  h-[80%] text-center gap-y-5'}>

                        {props.links.map(item => (
                            <NavbarItem
                                key={props.links.indexOf(item)}
                                url={item.url}
                            >{item.title}</NavbarItem>
                        ))}
                    </ul>
                </SheetContent>
            </Sheet>
        </div>
    );
};