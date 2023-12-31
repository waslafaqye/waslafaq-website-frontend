// @flow
import {motion} from 'framer-motion';
import * as React from 'react';
import Image from 'next/image';

type Props = {};
export const CompanyLogo = (props: Props) => {
    return (
        <div className={'flex flex-col lg:flex-row items-center  justify-center h-screen '}>
            <motion.div
                initial={{y: 200, opacity: 0,}}
                animate={{y: 0, opacity: 1,}}
                transition={{

                    duration: 1.5,
                    type: 'spring',

                }}
            >
                <Image src={'/images/logo.svg'} className={'h-28 w-28'} height={10} width={10} alt={'logo'}/>
            </motion.div>

            <motion.div
                initial={{x: -50, display: 'hidden', width: '0px', opacity: 0,}}
                animate={{x: 0, display: 'flex', width: 'auto', opacity: 1,}}
                transition={{
                    delay: 2,
                    duration: 1.5,
                    type: 'spring',

                }}>
                <Image src={'/images/logoText.svg'} className={'h-28 w-auto object-cover origin-left '} height={10}
                       width={10}
                       alt={'logo'}/>
            </motion.div>
        </div>
    );
};