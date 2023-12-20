// @flow
import * as React from 'react';
import GradiantCard from "@/components/ui/GradiantCard";
import Icon from "@/components/ui/Icon";
import {LucideIcon} from "lucide-react";

type Props = {
    icon: LucideIcon,
    url: string,
};
export const SocialMediaElement = (props: Props) => {
    return (
        <a href={props.url}>
            <GradiantCard className={'p-5 w-fit rounded-[22px] '}>
                <Icon name={props.icon} center={true} color={'white'} size={24}/>
            </GradiantCard>
        </a>
    );
};