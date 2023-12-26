'use client'
import * as React from 'react';
import {useEffect, useState} from 'react';
import {SectionHeader} from "@/components/ui/SectionHeader";
// @ts-ignore
import {Splide, SplideSlide, SplideTrack} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {ArrowLeft} from "lucide-react";
import {Button} from "@/components/ui/button";
import SettingsData from "@/data/SettingsData";
import OurProjectsData from "@/data/OurProjectsData";
import {ProjectCard} from "@/components/elements/OurProjects/ProjectCard";

type Props = {
    id: string,
    page: any,
    info: SettingsData,
    projects: OurProjectsData,
};


export const OurProjects = (props: Props) => {

    const [perPageCount, setPerPageCount] = useState(3);

    function resizeScreen() {
        setPerPageCount(1);

        if (window.screen.width > 768) {
            setPerPageCount(2);
        }
        if (window.screen.width > 1000) {
            setPerPageCount(3);
        }
    }

    useEffect(() => {

        resizeScreen();
        window.addEventListener('resize', (size) => {
            resizeScreen()
        });
        return window.removeEventListener('resize', (size) => {
            resizeScreen()
        });
    }, []);

    return (
        <section id={props.id} className={'my-24   md:w-[95%]  mx-auto  '}>
            <Splide hasTrack={false} className={'relative '} options={{
                rewind: true,
                direction: props.page.direction,
                perPage: perPageCount,
                updateOnMove: true,
                autoplay: true,
                //pauseOnHover: false,
                pagination: true,
                //type:'loop',
                //autoHeight: true,
                //autoWidth: true,
                gap: 0,
            }} aria-label="My Favorite Images">
                <div className={'flex justify-between'}>
                    <div
                        className={' w-fit  flex flex-col items-center justify-center lg:items-start lg:justify-start  '}>
                        <SectionHeader className={'!m-0'}>
                            {props.info.projectsTitle}
                        </SectionHeader>
                        <p className={'text-xl mx-auto text-center w-fit mt-4'}>{props.info.projectsSubtitle}</p>
                    </div>
                    <div className="splide__arrows relative hidden md:flex me-14 ">
                        <Button
                            className="splide__arrow splide__arrow--prev !opacity-100 !shadow-none !h-12 !p-0 !w-12 !rounded-2xl hover:!bg-primary !bg-sliderInactiveArrowBackground"><ArrowLeft
                            className={'!h-6 !w-6 !fill-none'}/>
                        </Button>
                        <Button
                            className="splide__arrow splide__arrow--next !opacity-100 !shadow-none !h-12 !w-12 !bg-sliderInactiveArrowBackground hover:!bg-primary !rounded-2xl">
                            <ArrowLeft
                                className={'!h-6 !w-6 !fill-none'}/>
                        </Button>
                    </div>
                </div>
                <SplideTrack className={'mt-10  mx-auto'}>


                    {
                        props.projects.ourProjectList.map(project => <ProjectCard
                            key={project.id}
                            description={project.description}
                            image={project.image}
                            title={project.title}/>)
                    }


                </SplideTrack>

                {/*<div*/}
                {/*    className={'h-40 bottom-0 w-10 bg-gradient-to-r from-background to-transparent backdrop-blur  z-10 absolute end-0'}>*/}

                {/*</div>*/}

            </Splide>

        </section>
    );
};