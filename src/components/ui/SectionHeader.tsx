'use client'
import {motion} from 'framer-motion';
import * as React from 'react';

type Props = {
    children: React.ReactNode,
    className?: string,
};
export const SectionHeader = (props: Props) => {
    return (
        <motion.div
            initial={{opacity: 0, y: -50}}
            viewport={{once: true}}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 1.5,
                type: 'just',
            }}
            className={`text-5xl font-semibold gradiantText capitalize w-fit mx-auto text-transparent bg-clip-text ${props.className}`}>
            {props.children}
        </motion.div>
    );
};