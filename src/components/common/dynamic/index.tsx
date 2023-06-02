
import dynamic from 'next/dynamic';
import React, { FunctionComponent, PropsWithChildren } from 'react';
const NoSSR: FunctionComponent<PropsWithChildren> = ({ children }) => {
    return(
        <>{children}</>
    )
}
export default dynamic(() => Promise.resolve(NoSSR), {ssr: false,});