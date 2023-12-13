import React from "react";
import Link from "next/link";

export function NavbarItem({children, active = false, className = ''}: {
    children: React.ReactNode,
    active?: boolean,
    className?: string
}) {
    return (
        <li className={`px-5   ${active ? 'activeLink' : ''}  ${className}`}>
            <Link className={' px-20 md:px-0 focus:bg-background active:bg-background'} href={'#'}>
                {children}
            </Link>
        </li>
    );
}
