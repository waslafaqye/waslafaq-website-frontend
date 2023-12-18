// @flow
import * as React from 'react';
import {SectionHeader} from "@/components/ui/SectionHeader";
import {ClientItem} from "@/components/elements/OurClients/ClientItem";

type Props = {
    id: string,
};
export const OurClients = (props: Props) => {
    return (
        <section id={props.id} className={'text-center my-24'}>
            <SectionHeader>
                عملائنا
            </SectionHeader>
            <div
                className={' mt-20 grid  place-items-center  grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-28 xl:grid-cols-5'}>
                <ClientItem image={'/images/Client.svg'}/>
                <ClientItem image={'/images/Client.svg'}/>
                <ClientItem image={'/images/Client.svg'}/>
                <ClientItem image={'/images/Client.svg'}/>
                <ClientItem image={'/images/Client.svg'}/>
                <ClientItem image={'/images/Client.svg'}/>
                <ClientItem image={'/images/Client.svg'}/>
                <ClientItem image={'/images/Client.svg'}/>
            </div>
        </section>
    );
};