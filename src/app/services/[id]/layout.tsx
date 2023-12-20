// @flow
import * as React from 'react';
import ServiceDetails from "@/app/services/[id]/page";
import Navbar from "@/components/elements/Navbar/Navbar";
import {Footer} from "@/components/elements/Footer/Footer";


export default function Layout({params}: { params: { id: string } }) {
    const id = params.id;
    return (
        <div className={'flex min-h-screen select-none flex-col items-center relative'}>
            <Navbar/>
            <div className={' max-w-7xl pt-28 px-4 mx flex flex-col gap-y-10 '}>
                <ServiceDetails id={id}/>
                <Footer/>
            </div>
        </div>
    );
};