// @flow
import * as React from 'react';

type Props = {
    children: React.ReactNode,
};
export const SectionHeader = (props: Props) => {
    return (
        <div
            className={'text-5xl font-semibold gradiantText text-transparent bg-clip-text'}>
            {props.children}
        </div>
    );
};