import * as React from 'react';
import {InfoElement} from "@/components/elements/ContactUs/InfoElement";
import {icons} from "lucide-react";
import {SocialMediaSection} from "@/components/elements/ContactUs/SocialMediaSection";
import {FormSection} from "@/components/elements/ContactUs/FormSection";
import SettingsData from "@/data/SettingsData";
import SocialMediaData from "@/data/SocialMediaData";
import postRequest from "@/lib/submitPost";
import {Dialog, DialogContent, DialogTrigger,} from "@/components/ui/dialog"
import Map from "@/components/elements/Map/Map";
import {motion} from 'framer-motion';


type Props = {
    info: SettingsData,
    socialLinks: SocialMediaData,
    page: any,
};
export const InfoSection = (props: Props) => {
    return (
        <div className={'flex flex-col  justify-between mt-10 lg:flex-row '}>
            <div>
                <ul className={'flex flex-col gap-6'}>
                    <Dialog>
                        <DialogTrigger
                            className={'text-start'}>
                            <motion.div
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
                            >
                                <InfoElement
                                    title={props.info.locationTitle}
                                    info={props.info.locationSubtitle}
                                    icon={icons['MapPin']}/>
                            </motion.div>
                        </DialogTrigger>
                        <DialogContent className={'h-[80vh] p-0 !rounded-3xl border-none max-w-screen-lg !w-screen'}>
                            <Map lat={props.info.lat} long={props.info.long}/>
                        </DialogContent>
                    </Dialog>
                    <a href={`tel:${props.info.phoneSubtitle}`}>
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            viewport={{once: true}}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 2.0,
                                type: 'just',
                            }}
                        >
                            <InfoElement title={props.info.phoneTitle} info={props.info.phoneSubtitle}
                                         icon={icons['Phone']}/>
                        </motion.div>
                    </a>
                    <a href={`mailto:${props.info.emailSubTitle}`}>
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            viewport={{once: true}}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 2.1,
                                type: 'just',
                            }}
                        >
                            <InfoElement title={props.info.emailTitle} info={props.info.emailSubTitle}
                                         icon={icons['Mail']}/>
                        </motion.div>
                    </a>
                </ul>
                <SocialMediaSection socialLinks={props.socialLinks}/>
            </div>
            <FormSection page={props.page} action={postRequest}/>
        </div>
    );
};