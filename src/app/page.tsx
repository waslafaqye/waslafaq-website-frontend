import Navbar from "@/components/elements/Navbar/Navbar";
import OurVision from "@/components/elements/OurVision/OurVision";
import {Services} from "@/components/elements/Services/Services";

export default function Home() {
    return (
        <main className="flex min-h-screen select-none flex-col items-center">
            <Navbar/>
            <div className={'pt-28 flex flex-col gap-y-10 lg:px-10'}>
                <OurVision id={'#ourVision'}/>
                <Services id={'#Services'}/>
            </div>
        </main>
    )
}
