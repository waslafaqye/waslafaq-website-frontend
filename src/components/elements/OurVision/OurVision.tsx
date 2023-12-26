import React from 'react';
import {icons} from "lucide-react";
import OurVisionCard from "@/components/elements/OurVision/OurVisionCard";
import SettingsData from "@/data/SettingsData";

interface props {
    id: string,
    info: SettingsData,
}

function OurVision(props: props) {
    return (
        <section id={props.id}>
            <div className={'flex flex-col md:flex-row gap-10'}>
                <OurVisionCard icon={icons['Eye']} title={props.info.visionTitle}
                               description={props.info.visionSubtitle}/>
                <OurVisionCard icon={icons['Target']} title={props.info.goalTitle}
                               description={props.info.goalSubtitle}/>
            </div>
            <div className={'mt-10 md:w-1/2 flex mx-auto'}>
                <OurVisionCard icon={icons['MessageCircle']} title={props.info.messageTitle}
                               description={props.info.messageSubtitle}/>
            </div>
        </section>
    );
}

export default OurVision;