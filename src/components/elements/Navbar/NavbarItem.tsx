'use client'
import React from "react";
import {Link} from "react-scroll";


export function NavbarItem({children, active = false, className = '', url = ''}: {
    children: React.ReactNode,
    active?: boolean,
    url?: string,
    className?: string
}) {
    return (
        <Link
            activeClass="activeLink"
            to={url}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={' lg:m-2 py-1  px-3 focus:bg-background '} href={url}>
            {children}
        </Link>
    );
}