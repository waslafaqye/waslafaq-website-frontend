// @flow
import * as React from 'react';
import {SectionHeader} from "@/components/ui/SectionHeader";
import {ClientItem} from "@/components/elements/OurClients/ClientItem";
import SettingsData from "@/data/SettingsData";
import ClientsData from "@/data/ClientsData";

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
                    props.clients.clientsList.map(client => <ClientItem key={client.id} image={client.logo}
                                                                        url={client.url}/>)
                }

            </div>
        </section>
    );
};