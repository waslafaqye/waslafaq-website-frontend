// @flow
import * as React from 'react';

type Props = {
    children: React.ReactNode,
    className?: string,
};
export const SectionHeader = (props: Props) => {
    return (
        <div
            className={`text-5xl font-semibold gradiantText capitalize w-fit mx-auto text-transparent bg-clip-text ${props.className}`}>
            {props.children}
        </div>
    );
};