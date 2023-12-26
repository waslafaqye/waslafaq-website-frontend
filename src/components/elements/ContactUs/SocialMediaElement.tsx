// @flow
import * as React from 'react';
import GradiantCard from "@/components/ui/GradiantCard";
import {SocialIcon} from "react-social-icons";

type Props = {

    url: string,
};
export const SocialMediaElement = (props: Props) => {
    return (
        <GradiantCard className={'px-[8px] py-[10px]     w-fit rounded-[22px] '}>
            <SocialIcon url={props.url} color={'white'} className={'!h-[2.6rem]'} fgColor={'#ffffff'}
                        bgColor={'transparent'}/>
        </GradiantCard>

    );
};