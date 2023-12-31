// @flow
import * as React from 'react';
import GradiantCard from "@/components/ui/GradiantCard";
import Icon from '@/components/ui/Icon';
import {LucideIcon} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";

type Props = {
    icon: LucideIcon,
    title: string,
    info: string,
};
export const InfoElement = (props: Props) => {
    return (
        <li className={'flex items-center p-3 gap-6 rounded-3xl duration-300 hover:bg-appbarLinksBackground'}>
            <GradiantCard className={'p-5 rounded-[22px] h-fit'}>
                <Icon name={props.icon} center={true} color={'white'} size={24}/>
            </GradiantCard>
            <div className={'flex flex-col justify-start items-start'}>
                <SectionHeader className={'!text-lg !m-0'}>{props.title}</SectionHeader>
                <p>{props.info}</p>
            </div>
        </li>
    );
};