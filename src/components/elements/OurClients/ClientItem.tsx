// @flow
import * as React from 'react';
import Image from "next/image";

type Props = {
    image: string,
    url?: string,
};
export const ClientItem = (props: Props) => {
    return (
        <div>
            <a href={props.url ?? '#'}>
                <Image src={props.image} alt={'Client Image'}
                       className={'h-28  hover:scale-125 hover:opacity-75 transition-all duration-500 ease-in-out  w-28'}
                       height={5}
                       width={5}/>
            </a>
        </div>
    );
};