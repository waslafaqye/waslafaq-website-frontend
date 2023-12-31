// @flow

// @ts-ignore
import {SplideSlide} from "@splidejs/react-splide";
import React from "react";
import GradiantCard from "@/components/ui/GradiantCard";
import {Title} from "@/components/ui/Title";
import Image from "next/image";
import {motion} from "framer-motion";

type Props = {
    title: string,
    image: string,
    description: string,
    duration: number,
};
export const ProjectCard = (props: Props) => {
    return (
        <SplideSlide>


            <motion.div

                initial={{opacity: 0, y: -50}}
                viewport={{once: true}}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: props.duration,
                    type: 'just',
                }}
            >

                <GradiantCard className={' hidden lg:block me-7'}>
                    <Image height={400} width={400} className={'h-60 w-full rounded-xl  object-cover mb-4'}
                           src={props.image}
                           alt="Image 1"/>
                    <Title>
                        {props.title}
                    </Title>
                    <p className={'mt-2'}>{props.description}</p>
                </GradiantCard>
            </motion.div>

            <motion.div

                initial={{opacity: 0, x: -50}}
                viewport={{once: true}}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    duration: props.duration,
                    type: 'just',
                }}
                className={'gradiantCard lg:hidden  hover:bg-white/10  transition-all duration-300'}>

                <Image height={400} width={400} className={'h-60 w-full px-5 pt-6 pb-4  rounded-xl  object-cover mb-4'}
                       src={props.image}
                       alt="Image 1"/>


                <div className={'mx-auto text-center pb-6'}>
                    <p className={'font-bold  text-xl   lg:w-fit lg:text-2xl'}>
                        {props.title}
                    </p>
                    <p className={'mt-2 mx-auto w-[90%]'}>{props.description}</p>
                </div>

            </motion.div>


        </SplideSlide>

    );
};