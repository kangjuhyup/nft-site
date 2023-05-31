'use client'

import { useEffect } from "react";
import HeaderViewController from "@/components/view_controller/header";

const Header = () => {
    
    const { 
        isConnected,
        address,
        clickConnectWallet,
        clickDisConnectWallet 
    } = HeaderViewController();

    useEffect(() => {
        console.log('loadHeader')
    },[]);

    return (

        <div>
            <h1>RIVER KANG NFT-SITE</h1>
            {isConnected ?
                <div>
                     <p>{address}</p>
                    <button onClick={() => clickDisConnectWallet()}>DISCONNECT WALLET</button>
                </div>
                :
                <div>
                    <button onClick={() =>clickConnectWallet()}>CONNECT WALLET</button>
                </div>
            }
           
        </div>
        )
}

export default Header;
