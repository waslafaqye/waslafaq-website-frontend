import React from "react";
import {Locale} from "../../../i18n.config";
import {getDictionary} from "@/lib/dictionary";
import {Main} from "@/components/elements/Main/Main";

export default async function Home({params: {lang}}: { params: { lang: Locale } }) {
    //
    //
    // setTimeout(async () => {
    //     const response = await fetch('http://website.waslafaq.net/api/settings');
    //
    //     const data = await response.json();
    //
    //     console.log(data);
    // }, 200000)


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
        <Main navItems={navItems} page={page}/>
    )
}
