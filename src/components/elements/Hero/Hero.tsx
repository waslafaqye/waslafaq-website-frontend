// @flow
'use client'
import * as React from 'react';
import Icon from "@/components/ui/Icon";
import {icons} from "lucide-react";
import HeroData from "@/data/HeroData";
import {LinkButton} from "@/components/ui/LinkButton";
import {motion} from 'framer-motion';

type Props = {
    id: string,
    page: any,
    info: HeroData,

};
export const Hero = (props: Props) => {


    return (
        <section id={props.id}
                 style={{backgroundImage: `url(${props.info.image})`}}
                 className={`h-screen  relative mb-5   bg-no-repeat bg-cover bg-center  w-screen`}>
            <div
                className={'hero-gradiantMobile md:hero-gradiant absolute flex flex-col   justify-center   h-screen w-screen'}>
                <div


                    className={' lg:w-1/3  mx-1 lg:mx-60 text-center lg:text-start '}>

                    <motion.p initial={{opacity: 0, y: 50}}

                              viewport={{once: true}}
                              whileInView={{
                                  opacity: 1,
                                  y: 0,
                              }}
                              transition={{
                                  duration: 1.5,
                                  type: 'just',
                              }}
                              className={'font-bold drop-shadow-xl px-2 lg:px-0 lg:[word-spacing:5px] lg:leading-[4rem]   w-fit text-3xl lg:text-5xl'}>
                        {props.info.heading}
                    </motion.p>
                    <motion.p initial={{opacity: 0, y: 50}}

                              viewport={{once: true}}
                              whileInView={{
                                  opacity: 1,
                                  y: 0,
                              }}
                              transition={{

                                  duration: 1.8,
                                  type: 'just',
                              }} className={'mt-6 text-xl'}>
                        {props.info.subHeading}
                    </motion.p>
                    <div className={'flex flex-col md:flex-row gap-6 mt-6 w-fit px-2 lg:px-0 mx-auto lg:mx-0 '}>
                        <motion.div initial={{opacity: 0, y: 50}}

                                    viewport={{once: true}}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 2,
                                        type: 'just',
                                    }}>
                            <LinkButton title={props.page.OrderNow} url={"#ContactUs"}/>
                        </motion.div>
                        <motion.a
                            initial={{opacity: 0, y: 50}}

                            viewport={{once: true}}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 2.1,
                                type: 'just',
                            }}
                            href={props.info.profileUrl}
                            onClick={() => {
                            }}
                            className={` rounded-xl text-lg bg-transparent border-[2px] border-primary  shadow-none py-[8px] px-[15px] flex items-center justify-between`}>
                            <span className={'me-3'}>{props.page.KnowMore}</span>
                            <Icon name={icons['DownloadCloud']} color={'white'} size={20}/>
                        </motion.a>
                    </div>

                </div>

            </div>

            <div
                className={'h-20 w-screen  absolute bottom-0 bg-gradient-to-t  from-background   to-100%  to-transparent '}></div>

        </section>
    );
};