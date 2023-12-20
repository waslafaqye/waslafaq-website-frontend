// @flow

import * as React from 'react';
import {Button} from "@/components/ui/button";
import {icons, LucideIcon} from "lucide-react";
import Icon from "@/components/ui/Icon";

type Props = {
    icon?: LucideIcon,
    title?: string,
    className?: string,

};
export const PrimaryButton = (props: Props) => {
    return (
        <Button className={`${props.className} rounded-xl text-xl  shadow-none p-6 flex items-center justify-between`}>
            {props.title}
            {props.icon && <Icon name={props.icon ?? icons['ArrowLeft']} color={'white'} size={25}/>}
        </Button>
    );
};