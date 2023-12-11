import React from "react";
import Link from "next/link";

export function NavbarItem({children, active = false}: { children: React.ReactNode, active?: boolean }) {
    return (
        <li className={`px-5 ${active ? 'activeLink' : ''}`}>
            <Link href={'#'}>
                {children}
            </Link>
        </li>
    );
}
