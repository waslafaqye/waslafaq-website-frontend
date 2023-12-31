'use client'
// @flow
import * as React from 'react';
import {SectionHeader} from "@/components/ui/SectionHeader";
import Image from "next/image";
import SettingsData from "@/data/SettingsData";
import {LinkButton} from "@/components/ui/LinkButton";
import {motion} from 'framer-motion';


type Props = {
    id: string,
    page: any,
    info: SettingsData,
};
export const AboutUs = (props: Props) => {

    return (
        <section id={props.id}
                 className={'flex mb-40  flex-col lg:flex-row justify-center items-center gap-6 lg:justify-end '}>
            <motion.div
                initial={{opacity: 0, x: 50}}
                viewport={{once: true}}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    duration: 1.5,
                    type: 'just',
                }}
            >
                <Image src={'/images/aboutUs.svg'} alt={''} height={70} width={70}
                       className={'h-auto  scale-125 w-auto'}/>
            </motion.div>
            <div

                className={' text-center lg:text-start  mt-10 justify-center  flex flex-col  lg:w-1/2 '}>

                <SectionHeader className={'lg:!m-0 '}>
                    {props.info.aboutUsTitle}
                </SectionHeader>

                <motion.div className={'my-10 text-xl'}>{props.info.aboutUsSubtitle}</motion.div>
                <motion.div
                    initial={{opacity: 0, y: -50}}
                    viewport={{once: true}}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.5,
                        type: 'just',
                    }}
                >
                    <LinkButton title={props.page.Services} url={"#Services"}/>
                </motion.div>
            </div>

        </section>
    );
};