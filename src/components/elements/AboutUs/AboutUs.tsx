'use client'
// @flow
import * as React from 'react';
import {SectionHeader} from "@/components/ui/SectionHeader";
import Image from "next/image";
import SettingsData from "@/data/SettingsData";
import {LinkButton} from "@/components/ui/LinkButton";


type Props = {
    id: string,
    page: any,
    info: SettingsData,
};
export const AboutUs = (props: Props) => {

    return (
        <section id={props.id}
                 className={'flex mb-40  flex-col lg:flex-row justify-center items-center gap-6 lg:justify-end '}>
            <div>
                <Image src={'/images/aboutUs.svg'} alt={''} height={70} width={70}
                       className={'h-auto  scale-125 w-auto'}/>
            </div>
            <div className={' text-center lg:text-start  mt-10 justify-center  flex flex-col  lg:w-1/2 '}>
                <SectionHeader className={'lg:!m-0 '}>
                    {props.info.aboutUsTitle}
                </SectionHeader>
                <p className={'my-10 text-2xl'}>{props.info.aboutUsSubtitle}</p>
                <LinkButton title={props.page.Services} url={"#Services"}/>
            </div>

        </section>
    );
};