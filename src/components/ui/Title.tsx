// @flow
import * as React from 'react';

type Props = {
    children: React.ReactNode,

};
export const Title = (props: Props) => {
    return (
        <h1 className={'font-bold  text-3xl'}>
            {props.children}
        </h1>
    );
};