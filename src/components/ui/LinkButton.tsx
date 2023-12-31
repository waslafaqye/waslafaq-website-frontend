// @flow
import * as React from 'react';
import {Link} from "react-scroll";

type Props = {
    title: string,
    url: string,

    className?: string,

};
export const LinkButton = (props: Props) => {
    return (
        <Link
            activeClass="activeLink"
            to={props.url}
            spy={true}
            smooth={true}
            offset={-100}
            duration={1500}
            className={` ${props.className} rounded-xl text-xl lg:w-fit text-center justify-center shadow-none py-[8px] px-[15px] flex items-center bg-primary `}
            href={props.url}>
            {props.title}
        </Link>
    );
};