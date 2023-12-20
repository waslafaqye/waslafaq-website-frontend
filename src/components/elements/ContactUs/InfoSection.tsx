// @flow
import * as React from 'react';
import {InfoElement} from "@/components/elements/ContactUs/InfoElement";
import {icons} from "lucide-react";
import {SocialMediaSection} from "@/components/elements/ContactUs/SocialMediaSection";
import {FormSection} from "@/components/elements/ContactUs/FormSection";

type Props = {};
export const InfoSection = (props: Props) => {
    return (
        <div className={'flex flex-col  justify-between mt-10 lg:flex-row '}>
            <div>
                <ul>
                    <InfoElement title={'موقعنا'} info={'اليمن - صنعاء - شارع مازدا - جوار بريد مازدا'}
                                 icon={icons['MapPin']}/>
                    <InfoElement title={'أرقام التواصل'} info={'01 / 563636 - 01 / 237638'}
                                 icon={icons['Phone']}/>
                    <InfoElement title={'البريد الالكتروني'} info={'info@waslafaq.com'}
                                 icon={icons['Mail']}/>
                </ul>
                <SocialMediaSection/>
            </div>
            <FormSection/>
        </div>
    );
};