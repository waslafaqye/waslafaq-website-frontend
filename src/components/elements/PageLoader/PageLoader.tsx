// @flow
import * as React from 'react';
import Image from "next/image";

type Props = {};
export const PageLoader = (props: Props) => {
    return (
        <div className={'select-none h-screen relative'}>
            <Image src={'/images/logo.svg'}
                   className={'h-screen w-screen end-[60%] top-[20%]  lg:top-0 lg:end-[50%] opacity-30 grayscale absolute'}
                   height={100}
                   width={100}
                   alt={'logo'}/>
            <div className={'flex flex-col lg:flex-row items-center  justify-center h-screen '}>
                <Image src={'/images/logo.svg'} className={'h-28 w-28'} height={10} width={10} alt={'logo'}/>

                <Image src={'/images/logoText.svg'} className={'h-28 w-auto '} height={10}
                       width={10}
                       alt={'logo'}/>
            </div>
        </div>

    );
};