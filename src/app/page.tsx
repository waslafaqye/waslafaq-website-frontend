import Navbar from "@/components/elements/Navbar/Navbar";
import OurVision from "@/components/elements/OurVision/OurVision";

export default function Home() {
    return (
        <main className="flex min-h-screen  flex-col items-center">
            <Navbar/>
            <div className={'pt-28 lg:px-10'}>
                <OurVision id={'#ourVision'}/>
            </div>
        </main>
    )
}
