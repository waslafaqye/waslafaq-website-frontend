import Navbar from "@/components/elements/Navbar/Navbar";
import OurVision from "@/components/elements/OurVision/OurVision";
import {Services} from "@/components/elements/Services/Services";
import {OurClients} from "@/components/elements/OurClients/OurClients";
import {OurProjects} from "@/components/elements/OurProjects/OurProjects";
import {ContactUs} from "@/components/elements/ContactUs/ContactUs";
import React from "react";
import {Toaster} from "@/components/ui/toaster";
import {Footer} from "@/components/elements/Footer/Footer";
import {Hero} from "@/components/elements/Hero/Hero";
import {AboutUs} from "@/components/elements/AboutUs/AboutUs";
import {GradiantCircle} from "@/components/ui/GradiantCircle";

export default function Home() {
    return (
        <main className="flex min-h-screen select-none flex-col items-center relative ">

            <GradiantCircle right={false}/>
            <GradiantCircle right={true} top={true}/>
            <Navbar/>
            <Hero id={'#Hero'}/>
            <div className={' max-w-7xl flex flex-col gap-y-10 lg:px-10'}>
                <AboutUs id={'#AboutUs'}/>
                <OurVision id={'#OurVision'}/>
                <Services id={'#Services'}/>
                <OurClients id={'#OurClients'}/>
                <OurProjects id={'#OurProjects'}/>
                <ContactUs id={'#ContactUs'}/>
                <Footer/>
            </div>

            <Toaster/>

        </main>

    )
}
