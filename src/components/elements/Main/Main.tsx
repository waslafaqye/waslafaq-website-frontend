'use client'
// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {GradiantCircle} from "@/components/ui/GradiantCircle";
import Navbar from "@/components/elements/Navbar/Navbar";
import {Hero} from "@/components/elements/Hero/Hero";
import {AboutUs} from "@/components/elements/AboutUs/AboutUs";
import OurVision from "@/components/elements/OurVision/OurVision";
import {Services} from "@/components/elements/Services/Services";
import {OurClients} from "@/components/elements/OurClients/OurClients";
import {OurProjects} from "@/components/elements/OurProjects/OurProjects";
import {ContactUs} from "@/components/elements/ContactUs/ContactUs";
import {Footer} from "@/components/elements/Footer/Footer";
import {Toaster} from "@/components/ui/toaster";
import {PageLoader} from "@/components/elements/PageLoader/PageLoader";

type Props = {
    navItems: { title: string, url: string, isActive: boolean }[]
    page: any,
};
export const Main = (props: Props) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000)
    }, [])


    if (!isLoading) {
        return <PageLoader/>
    } else {
        return (
            <main className="flex min-h-screen select-none flex-col items-center relative ">
                <GradiantCircle right={false}/>
                <GradiantCircle right={true} top={true}/>
                <Navbar navItems={props.navItems} details={false}/>
                <Hero page={props.page} id={'#Hero'}/>
                <div className={' max-w-7xl flex flex-col gap-y-10 lg:px-10'}>
                    <AboutUs page={props.page} id={'#AboutUs'}/>
                    <OurVision id={'#OurVision'}/>
                    <Services page={props.page} id={'#Services'}/>
                    <OurClients page={props.page} id={'#OurClients'}/>
                    <OurProjects header={props.page.Projects} id={'#OurProjects'}/>
                    <ContactUs page={props.page} id={'#ContactUs'}/>
                    <Footer navItems={props.navItems}/>
                </div>
                <Toaster/>
            </main>
        );
    }


};