'use client'
import * as React from 'react';
import {SectionHeader} from "@/components/ui/SectionHeader";
import {InfoSection} from "@/components/elements/ContactUs/InfoSection";
import SettingsData from "@/data/SettingsData";
import SocialMediaData from "@/data/SocialMediaData";
import {motion} from 'framer-motion';

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
                <motion.p
                    initial={{opacity: 0, x: -50}}
                    viewport={{once: true}}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 1.8,
                        type: 'just',
                    }}

                    className={'text-xl mt-4'}>{props.info.contactUsSubtitle}</motion.p>
            </div>
            <InfoSection page={props.page} socialLinks={props.socialLinks} info={props.info}/>

        </section>
    );
}