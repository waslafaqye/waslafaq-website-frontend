// @flow
import * as React from 'react';

type Props = {
    right?: boolean,
    top?: boolean,
};
export const GradiantCircle = (props: Props) => {
    return (
        <div
            className={`gradiant-circle hidden lg:absolute ${props.right ? '   lg:-right-[150%]' : '-left-[150%]'} ${props.top ? 'bottom-20' : ''} `}></div>
    );
};