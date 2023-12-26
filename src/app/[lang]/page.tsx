import React from "react";
import {Locale} from "../../../i18n.config";
import {getDictionary} from "@/lib/dictionary";
import {Main} from "@/components/elements/Main/Main";
import {getInitialInfo} from "@/lib/gettingWebsiteInfo";
import {gettingServices} from "@/lib/gettingServices";
import {gettingClients} from "@/lib/gettingClients";
import {gettingProjects} from "@/lib/gettingProjects";
import {gettingSocialMedia} from "@/lib/gettingSocialMedia";

export default async function Home({params: {lang}}: { params: { lang: Locale } }) {


    const data = JSON.stringify(await getInitialInfo(lang))
    const services = JSON.stringify(await gettingServices(lang))
    const clients = JSON.stringify(await gettingClients(lang))
    const projects = JSON.stringify(await gettingProjects(lang))
    const socialLinks = JSON.stringify(await gettingSocialMedia(lang))


    const {page} = await getDictionary(lang);
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
        <Main socialLinks={socialLinks} projects={projects} clients={clients} services={services} data={data}
              navItems={navItems} page={page}/>
    )
}
