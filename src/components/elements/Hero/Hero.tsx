// @flow
'use client'
import * as React from 'react';
import {PrimaryButton} from "@/components/ui/PrimaryButton";
import {Button} from "@/components/ui/button";
import Icon from "@/components/ui/Icon";
import {icons} from "lucide-react";

type Props = {
    id: string,
    page: any,
};
export const Hero = (props: Props) => {

    return (
        <section id={props.id}
                 className={"h-screen bg-[url('/images/app1.png')] relative mb-5  bg-no-repeat bg-cover bg-center  w-screen"}>
            <div
                className={'hero-gradiantMobile md:hero-gradiant absolute flex flex-col   justify-center   h-screen w-screen'}>
                <div className={' lg:w-1/3 mx-auto lg:mx-60 text-center lg:text-start '}>
                    <p className={'font-bold drop-shadow-xl [word-spacing:5px] leading-[4rem]   w-fit text-5xl'}>
                        شركة برمجية متخصصة في تقديم عدة خدمات حيث يلتقي الابداع والتنفيذ
                    </p>
                    <p className={'mt-6 text-xl'}>
                        تعرف على خدماتنا ومنتجاتنا وشارك معنا النجاح
                    </p>
                    <div className={'flex flex-col md:flex-row gap-6 mt-6 w-fit mx-auto lg:mx-0 '}>
                        <PrimaryButton className={'!text-center !justify-center lg:justify-between'}
                                       title={props.page.OrderNow}/>
                        <Button
                            className={` rounded-xl text-lg bg-transparent border-[2px] border-primary  shadow-none p-[22px] flex items-center justify-between`}>
                            <span className={'me-3'}>{props.page.KnowMore}</span>
                            <Icon name={icons['DownloadCloud']} color={'white'} size={20}/>
                        </Button>
                    </div>

                </div>

            </div>

            <div
                className={'h-20 w-screen  absolute bottom-0 bg-gradient-to-t  from-background   to-100%  to-transparent '}></div>

        </section>
    );
};