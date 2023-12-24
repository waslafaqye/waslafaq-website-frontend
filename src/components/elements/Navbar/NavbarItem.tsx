'use client'
import React from "react";
import {Link} from "react-scroll";
import {usePathname, useRouter} from "next/navigation";


export function NavbarItem({children, details = false, className = '', url = ''}: {
    children: React.ReactNode,
    details?: boolean,
    url?: string,
    className?: string
}) {


    const pathName = usePathname();

    const router = useRouter();


    const handleRoute = () => {
        if (details) {
            console.log(pathName);
            const locale = pathName.split('/')[1];
            console.log(locale);
            router.replace(`/${locale}/#`)
        }
    }

    return (
        <Link
            activeClass="activeLink"
            to={url}
            onClick={handleRoute}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={' lg:m-2 py-1  px-3 focus:bg-background '} href={url}>
            {children}
        </Link>
    );
}