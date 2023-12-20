// @flow
import * as React from 'react';
import GradiantCard from "@/components/ui/GradiantCard";
import Image from "next/image";
import {Title} from "@/components/ui/Title";
import {PrimaryButton} from "@/components/ui/PrimaryButton";
import {icons} from "lucide-react";

type Props = {
    image: string,
    title: string,
    description: string,
    horizontal?: true,
};
export const ServiceCard = (props: Props) => {
    return (
        props.horizontal ?
            <GradiantCard className={' lg:mt-0 mt-10 flex flex-col lg:flex-row items-center gap-x-5'}>
                <Image src={props.image} height={400} width={600}
                       className={`lg:h-32  object-center object-cover rounded-xl h-52 mb-6 lg:mb-0 w-full lg:w-32 `}
                       alt={'Service logo'}/>
                <div>
                    <Title>{props.title}</Title>
                    <p className={'my-6 lg:mb-0'}>{props.description}</p>
                </div>
                <PrimaryButton className={'w-fit !hidden lg:!flex !px-4 !py-7 !rounded-full'}
                               icon={icons['ArrowLeft']}/>
                <PrimaryButton className={'w-full lg:hidden'} icon={icons['ArrowLeft']} title={'اطلب الخدمة'}/>
            </GradiantCard>
            :
            <GradiantCard className={'lg:mt-0 mt-10 flex flex-col h-full justify-between'}>
                <div>
                    <Image src={props.image} height={400} width={600}
                           className={`h-52 object-center object-cover rounded-xl w-full mb-6`}
                           alt={'Service logo'}/>
                    <Title>{props.title}</Title>
                    <p className={'my-6'}>{props.description}</p>
                </div>

                <PrimaryButton className={'w-full'} icon={icons['ArrowLeft']} title={'اطلب الخدمة'}/>
            </GradiantCard>

    );
};