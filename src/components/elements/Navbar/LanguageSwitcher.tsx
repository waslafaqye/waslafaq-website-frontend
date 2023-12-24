'use client'

import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {i18n} from '../../../../i18n.config'


import * as React from "react"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {icons} from "lucide-react";
import Icon from "@/components/ui/Icon";


export default function LocaleSwitcher() {
    const pathName = usePathname()


    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }


    const [position, setPosition] = React.useState("bottom")
    let urlLocale = pathName.split('/')[1];
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger
                    className={'lg:rounded-full flex !m-0 !py-2.5 px-3 text-lg lg:bg-appbarLinksBackground focus-visible:!ring-0 bg-white/20   items-center backdrop-blur shadow-none  rounded-xl   '}>
                    <Icon name={icons['Flag']}
                          color={'white'}
                          className={'me-2'}
                          size={20}/>
                    {urlLocale}
                </DropdownMenuTrigger>
                <DropdownMenuContent className=" mt-2 p-2 rounded-xl">
                    <DropdownMenuLabel
                        className={urlLocale === 'en' ? "text-start" : 'text-end'}>{urlLocale === 'en' ? "Set language" : "حدد اللغة"}</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>

                        {i18n.locales.map(locale => {
                            return (
                                <DropdownMenuRadioItem
                                    className={` hideIcon ${urlLocale === locale ? 'bg-primary mt-2 !text-white hover:!text-slate-500 ' : ""}  ${urlLocale === 'en' ? "text-start" : 'text-end'}  rounded-xl   px-3 text-slate-500`}
                                    value={locale} key={locale}>
                                    <Link
                                        href={redirectedPathName(locale)}
                                        className={`w-full`}>
                                        {locale === "en" ? "English" : "العربية"}
                                    </Link>
                                </DropdownMenuRadioItem>
                            )
                        })}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )

}