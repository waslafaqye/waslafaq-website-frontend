import * as React from 'react';
import {SocialMediaElement} from "@/components/elements/ContactUs/SocialMediaElement";
import SocialMediaData from "@/data/SocialMediaData";


type Props = {
    socialLinks: SocialMediaData,
};
export const SocialMediaSection = (props: Props) => {
    return (
        <div className={'flex mt-6 px-3  gap-5'}>
            {
                props.socialLinks.socialMediaList.map(link => <SocialMediaElement key={link.id} url={link.url}/>)
            }

        </div>
    );
};