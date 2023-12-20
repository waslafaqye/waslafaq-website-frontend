// @flow
import * as React from 'react';
import {SocialMediaElement} from "@/components/elements/ContactUs/SocialMediaElement";
import {icons} from "lucide-react";

type Props = {};
export const SocialMediaSection = (props: Props) => {
    return (
        <div className={'flex mt-6 gap-5'}>
            <SocialMediaElement icon={icons['Facebook']} url={'#'}/>
            <SocialMediaElement icon={icons['Twitter']} url={'#'}/>
            <SocialMediaElement icon={icons['Instagram']} url={'#'}/>
            <SocialMediaElement icon={icons['Youtube']} url={'#'}/>
          
        </div>
    );
};