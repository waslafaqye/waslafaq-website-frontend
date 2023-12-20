// @flow
import * as React from 'react';
import {SectionHeader} from "@/components/ui/SectionHeader";
import {InfoSection} from "@/components/elements/ContactUs/InfoSection";

type Props = {
    id: string,
};
export const ContactUs = (props: Props) => {
    return (
        <section id={props.id} className={'  my-24'}>
            <div className={' w-fit  flex flex-col  '}>
                <SectionHeader className={'!m-0'}>
                    تواصل معنا
                </SectionHeader>
                <p className={'text-xl mt-4'}>منتجات رقمية تلبي كافة احتياجك ورغباتك ويسعد بها عملائك</p>
            </div>

            <InfoSection/>
        </section>
    );
}