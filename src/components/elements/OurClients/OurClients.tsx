'use client'
import * as React from 'react';
import {SectionHeader} from "@/components/ui/SectionHeader";
import {ClientItem} from "@/components/elements/OurClients/ClientItem";
import SettingsData from "@/data/SettingsData";
import ClientsData from "@/data/ClientsData";
import {motion} from 'framer-motion';

type Props = {
    id: string,
    page: any,
    info: SettingsData,
    clients: ClientsData,
};
export const OurClients = (props: Props) => {
    return (
        <section id={props.id} className={'text-center my-24'}>
            <SectionHeader>
                {props.info.clientTitle}
            </SectionHeader>
            <div
                className={' mt-20 grid  place-items-center  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-28 xl:grid-cols-5'}>
                {
                    props.clients.clientsList.map((client, index) =>
                        <motion.div key={client.id}
                                    initial={{opacity: 0, y: -50}}
                                    viewport={{once: true}}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: index * 0.5,
                                        type: 'just',
                                    }}
                        >
                            <ClientItem image={client.logo}
                                        url={client.url}/>
                        </motion.div>
                    )
                }

            </div>
        </section>
    );
};