// @flow

import * as React from 'react';
import {SectionHeader} from "@/components/ui/SectionHeader";
import {InfoSection} from "@/components/elements/ContactUs/InfoSection";
import SettingsData from "@/data/SettingsData";
import SocialMediaData from "@/data/SocialMediaData";

type Props = {
    id: string,
    page: any,
    info: SettingsData,
    socialLinks: SocialMediaData,
};
export const ContactUs = (props: Props) => {

    return (
        <section id={props.id} className={'  my-24'}>
            <div className={' w-fit  flex flex-col  '}>
                <SectionHeader className={'!m-0'}>
                    {props.info.contactUsTitle}
                </SectionHeader>
                <p className={'text-xl mt-4'}>{props.info.contactUsSubtitle}</p>
            </div>
            <InfoSection page={props.page} socialLinks={props.socialLinks} info={props.info}/>
        </section>
    );
}