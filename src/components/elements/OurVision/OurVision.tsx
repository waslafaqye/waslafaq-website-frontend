'use client'
import React from 'react';
import {icons} from "lucide-react";
import OurVisionCard from "@/components/elements/OurVision/OurVisionCard";
import SettingsData from "@/data/SettingsData";
import {motion} from 'framer-motion';

interface props {
    id: string,
    info: SettingsData,
}

function OurVision(props: props) {
    return (
        <section id={props.id}>
            <div className={'flex flex-col md:flex-row gap-10'}>
                <motion.div
                    initial={{opacity: 0, y: -150}}
                    viewport={{once: true}}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        type: 'just',
                    }}
                >

                    <OurVisionCard icon={icons['Eye']} title={props.info.visionTitle}
                                   description={props.info.visionSubtitle}/>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: -160}}
                    viewport={{once: true}}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        type: 'just',
                    }}
                >
                    <OurVisionCard icon={icons['Target']} title={props.info.goalTitle}
                                   description={props.info.goalSubtitle}/>
                </motion.div>
            </div>
            <motion.div
                initial={{opacity: 0, y: -180}}
                viewport={{once: true}}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                    type: 'just',
                }}

                className={'mt-10 md:w-1/2 flex mx-auto'}>
                <OurVisionCard icon={icons['MessageCircle']} title={props.info.messageTitle}
                               description={props.info.messageSubtitle}/>
            </motion.div>
        </section>
    );
}

export default OurVision;