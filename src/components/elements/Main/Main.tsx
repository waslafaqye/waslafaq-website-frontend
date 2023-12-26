'use client'
// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {GradiantCircle} from "@/components/ui/GradiantCircle";
import Navbar from "@/components/elements/Navbar/Navbar";
import {Hero} from "@/components/elements/Hero/Hero";
import {Toaster} from "@/components/ui/toaster";
import {PageLoader} from "@/components/elements/PageLoader/PageLoader";
import SettingsData from "@/data/SettingsData";
import ServicesData from "@/data/ServicesData";
import ClientsData from "@/data/ClientsData";
import OurProjectsData from "@/data/OurProjectsData";
import SocialMediaData from "@/data/SocialMediaData";
import {AboutUs} from '../AboutUs/AboutUs';
import OurVision from "@/components/elements/OurVision/OurVision";
import {Services} from "@/components/elements/Services/Services";
import {OurClients} from "@/components/elements/OurClients/OurClients";
import {ContactUs} from "@/components/elements/ContactUs/ContactUs";
import {Footer} from "@/components/elements/Footer/Footer";
import {OurProjects} from '../OurProjects/OurProjects';

type Props = {
    navItems: { title: string, url: string, isActive: boolean }[]
    page: any,
    data: string,
    services: string,
    clients: string,
    projects: string,
    socialLinks: string,

};
export const Main = (props: Props) => {

    const info: SettingsData = JSON.parse(props.data);
    const services: ServicesData = JSON.parse(props.services);
    const clients: ClientsData = JSON.parse(props.clients);
    const projects: OurProjectsData = JSON.parse(props.projects);
    const socialLinks: SocialMediaData = JSON.parse(props.socialLinks);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000)
    }, [])


    if (isLoading) {
        return <PageLoader/>
    } else {
        return (
            <main className="flex min-h-screen select-none flex-col items-center relative ">
                <GradiantCircle right={false}/>
                <GradiantCircle right={true} top={true}/>
                <Navbar info={info} navItems={props.navItems} details={false}/>
                <Hero info={info.hero} page={props.page} id={'#Hero'}/>
                <div className={' max-w-7xl flex flex-col gap-y-10 lg:px-10'}>
                    <AboutUs info={info} page={props.page} id={'#AboutUs'}/>
                    <OurVision info={info} id={'#OurVision'}/>
                    <Services services={services} info={info} page={props.page} id={'#Services'}/>
                    <OurClients clients={clients} info={info} page={props.page} id={'#OurClients'}/>
                    <OurProjects projects={projects} info={info} page={props.page} id={'#OurProjects'}/>
                    <ContactUs socialLinks={socialLinks} info={info} page={props.page} id={'#ContactUs'}/>
                    <Footer page={props.page} navItems={props.navItems}/>
                </div>
                <Toaster/>
            </main>
        );
    }


};