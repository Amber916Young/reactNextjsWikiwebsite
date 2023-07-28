import React from 'react';

export const HrLine = () => {
    return (
        <hr className={`my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50 `} />
);
};


export const VrLineShort = () => {
    return (
        <hr className={`h-6 border-l border-grey-whiter `} />
    );
};

export const VrLineLong = () => {
    return (
        <hr className={`ml-6 h-12 border-l border-purple-lighter `} />
    );
};