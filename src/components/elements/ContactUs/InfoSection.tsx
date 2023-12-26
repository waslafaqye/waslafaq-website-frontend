import * as React from 'react';
import {InfoElement} from "@/components/elements/ContactUs/InfoElement";
import {icons} from "lucide-react";
import {SocialMediaSection} from "@/components/elements/ContactUs/SocialMediaSection";
import {FormSection} from "@/components/elements/ContactUs/FormSection";
import SettingsData from "@/data/SettingsData";
import SocialMediaData from "@/data/SocialMediaData";

type Props = {
    info: SettingsData,
    socialLinks: SocialMediaData,
    page: any,

};
export const InfoSection = (props: Props) => {
    return (
        <div className={'flex flex-col  justify-between mt-10 lg:flex-row '}>
            <div>
                <ul>
                    <InfoElement title={props.info.locationTitle} info={props.info.locationSubtitle}
                                 icon={icons['MapPin']}/>
                    <InfoElement title={props.info.phoneTitle} info={props.info.phoneSubtitle}
                                 icon={icons['Phone']}/>
                    <InfoElement title={props.info.emailTitle} info={props.info.emailSubTitle}
                                 icon={icons['Mail']}/>
                </ul>
                <SocialMediaSection socialLinks={props.socialLinks}/>
            </div>
            <FormSection page={props.page}/>
        </div>
    );
};