'use client'
// @flow
import * as React from 'react';
import {SectionHeader} from "@/components/ui/SectionHeader";
import {ServiceCard} from "@/components/elements/Services/ServiceCard";
import SettingsData from "@/data/SettingsData";
import ServicesData from "@/data/ServicesData";

type Props = {
    id: string,
    page: any,
    info: SettingsData,
    services: ServicesData,
};
export const Services = (props: Props) => {

    return (
        <section id={props.id} className={'text-center my-24'}>

            <SectionHeader>{props.info.servicesTitle}</SectionHeader>
            <p className={' w-full lg:w-1/2 mx-auto  mt-7'}>{props.info.servicesSubtitle}</p>

            <div className={"mt-9  lg:flex   h-full  gap-5 text-start"}>

                <div className={'lg:flex  lg:flex-col gap-5  '}>
                    <div className=' lg:flex  gap-5'>
                        <ServiceCard buttonText={props.page.OrderNow} image={props.services.servicesList[0].image}
                                     description={props.services.servicesList[0].description}
                                     title={props.services.servicesList[0].title}/>

                        <ServiceCard buttonText={props.page.OrderNow} image={props.services.servicesList[1].image}
                                     description={props.services.servicesList[1].description}
                                     title={props.services.servicesList[1].title}/>

                    </div>
                    <div className={'h-auto'}>
                        <ServiceCard buttonText={props.page.OrderNow} horizontal={true}
                                     image={props.services.servicesList[3].image}
                                     description={props.services.servicesList[3].description}
                                     title={props.services.servicesList[3].title}/>

                    </div>
                </div>

                <div>
                    <ServiceCard buttonText={props.page.OrderNow} image={props.services.servicesList[2].image}
                                 description={props.services.servicesList[2].description}
                                 title={props.services.servicesList[2].title}/>
                </div>


            </div>
        </section>
    );
};