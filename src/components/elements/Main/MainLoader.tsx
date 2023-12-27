'use client'
import * as React from 'react';
import {useEffect, useState} from 'react';
import {PageLoader} from "@/components/elements/PageLoader/PageLoader";

type Props = {
    children: React.ReactNode,
};
export const MainLoader = (props: Props) => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5000)
    }, [])


    if (isLoading) {
        return <PageLoader/>
    } else {
        return (
            <div>
                {
                    props.children
                }
            </div>
        );
    }
};