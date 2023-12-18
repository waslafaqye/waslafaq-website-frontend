// @flow
import * as React from 'react';
// @ts-ignore
import {SplideSlide} from "@splidejs/react-splide";
import Image from "next/image";
import GradiantCard from "@/components/ui/GradiantCard";
import {Title} from '@/components/ui/Title';

type Props = {
    title: string,
    image: string,
    description: string,
};
export const ProjectCard = (props: Props) => {
    return (
        <SplideSlide>
            <GradiantCard className={'me-7'}>
                <Image height={400} width={400} className={'h-60 w-full rounded-xl  object-cover mb-4'}
                       src={props.image}
                       alt="Image 1"/>
                <Title>
                    {props.title}
                </Title>
                <p className={'mt-2'}>{props.description}</p>
            </GradiantCard>
        </SplideSlide>

    );
};