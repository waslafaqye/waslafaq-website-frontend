'use client'
import * as React from 'react';
import GradiantCard from "@/components/ui/GradiantCard";
import Image from "next/image";
import {Title} from "@/components/ui/Title";
import {LinkButton} from "@/components/ui/LinkButton";

type Props = {
    image: string,
    title: string,
    description: string,
    horizontal?: true,
    buttonText: string,
};
export const ServiceCard = (props: Props) => {
    return (
        props.horizontal ?

            <GradiantCard
                className={' lg:mt-0 mt-10  flex flex-col lg:justify-between lg:flex-row items-center gap-x-5'}>
                <div className={'flex flex-col  lg:flex-row items-center gap-x-5'}>
                    <Image src={props.image} height={400} width={600}
                           className={`lg:h-32  object-center object-cover rounded-xl h-52 mb-6 lg:mb-0 w-full lg:w-32 `}
                           alt={'Service logo'}/>
                    <div>
                        <Title>{props.title}</Title>
                        <p className={'my-6 text-[1.1rem] lg:mb-0'}>{props.description}</p>
                    </div>
                </div>
                <LinkButton className={'w-fit !hidden lg:!flex  !rounded-full'} url={'#ContactUs'}
                            title={props.buttonText}/>
                <LinkButton className={'w-full lg:hidden'} url={'#ContactUs'} title={props.buttonText}/>

            </GradiantCard>
            :
            <GradiantCard className={'lg:mt-0 mt-10 flex flex-col h-full justify-between'}>
                <div>
                    <Image src={props.image} height={400} width={600}
                           className={`h-52 object-center object-cover rounded-xl w-full mb-6`}
                           alt={'Service logo'}/>
                    <Title>{props.title}</Title>
                    <p className={' text-[1.1rem] my-6'}>{props.description}</p>
                </div>
                <LinkButton url={'#ContactUs'} title={props.buttonText}/>
            </GradiantCard>

    );
};