import React from 'react';
import Icon from "@/components/ui/Icon";
import {LucideIcon} from "lucide-react";
import GradiantCard from "@/components/ui/GradiantCard";
import {Title} from "@/components/ui/Title";

interface props {
    icon: LucideIcon,
    title: string,
    description: string,
}

function OurVisionCard(props: props) {
    return (
        <GradiantCard className={'hover:bg-white/10 w-full transition-all duration-300 '}>
            <div className={'bg-background  w-fit p-3 mb-5 rounded-2xl'}>
                <Icon name={props.icon} color={'white'} size={40} opacity={0.6}/>
            </div>
            <Title>{props.title}</Title>
            <p>{props.description}</p>
        </GradiantCard>
    );
}

export default OurVisionCard;