import * as React from 'react';

import Navbar from "@/components/elements/Navbar/Navbar";
import {Footer} from "@/components/elements/Footer/Footer";
import ServiceDetails from "@/app/[lang]/services/[id]/page";
import {Locale} from "../../../../../i18n.config";
import {getDictionary} from "@/lib/dictionary";


export default async function Layout({params}: { params: { id: string, lang: Locale } }) {
    const id = params.id;

    const {page} = await getDictionary(params.lang);

    let navItems = [
        {
            title: `${page.Home}`,
            url: "#Hero",
            isActive: true,
        }, {
            title: `${page.AboutUs}`,
            url: "#AboutUs",
            isActive: false,
        }, {
            title: `${page.Services}`,
            url: "#Services",
            isActive: false,
        }, {
            title: `${page.Clients}`,
            url: "#OurClients",
            isActive: false,
        }, {
            title: `${page.Projects}`,
            url: "#OurProjects",
            isActive: false,
        }, {
            title: `${page.ContactUS}`,
            url: "#ContactUs",
            isActive: false,
        },
    ];

    return (
        <div className={'flex min-h-screen select-none flex-col items-center relative'}>
            <Navbar navItems={navItems} details={true}/>
            <div className={' max-w-7xl pt-28 px-4 mx flex flex-col gap-y-10 '}>
                <ServiceDetails id={id}/>
                <Footer page={page} navItems={navItems} details={true}/>
            </div>
        </div>
    );
};