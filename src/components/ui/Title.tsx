// @flow
import * as React from 'react';

type Props = {
    children: React.ReactNode,

};
export const Title = (props: Props) => {
    return (
        <h1 className={'font-bold  w-fit text-2xl'}>
            {props.children}
        </h1>
    );
};