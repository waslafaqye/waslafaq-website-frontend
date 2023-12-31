'use client'
import * as React from 'react';
import Image from "next/image";
import {motion} from 'framer-motion';

type Props = {};
export const PageLoader = (props: Props) => {
    return (
        <div className={'select-none flex flex-col items-center justify-center h-screen relative'}>
            <motion.div
                initial={{opacity: 0,}}
                animate={{opacity: 1,}}
                transition={{
                    duration: 1.5,
                    type: 'just',
                }}>
                <Image src={'/images/logo.svg'}
                       className={'h-screen w-screen end-[60%] top-[20%]  lg:top-0 lg:end-[50%] opacity-30 grayscale absolute'}
                       height={100}
                       width={100}
                       alt={'logo'}/>
            </motion.div>

            <div className={'flex flex-col lg:flex-row items-center  justify-center  '}>

                <motion.div
                    initial={{opacity: 0, y: 200}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 1.5,
                        type: 'just',
                    }}>

                    <Image src={'/images/logo.svg'} className={'h-28 w-28'} height={10} width={10} alt={'logo'}/>
                </motion.div>


                <motion.div
                    initial={{opacity: 0, x: -100, width: 0}}
                    animate={{opacity: 1, x: 0, width: 'auto'}}
                    transition={{delay: 2, duration: 1.5, type: 'just',}}>

                    <Image src={'/images/logoText.svg'} className={'h-28 w-auto object-cover '} height={10}
                           width={10}
                           alt={'logo'}/>
                </motion.div>
            </div>


            <motion.p initial={{opacity: 0, x: -100,}}
                      animate={{opacity: 1, x: 0,}}
                      transition={{
                          delay: 2.5,
                          duration: 1,
                          type: 'just',
                      }}
                      className={'mx-auto  mt-10 text-xl'}>
                من الفكرة .. الى الإنتاج
            </motion.p>

        </div>

    );
};