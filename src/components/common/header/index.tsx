'use client'

import HeaderController from "@/components/view_controller/header";
import { useEffect, useState } from "react";

const Header = () => {
    // const [hasMounted, setHasMounted] = useState(false);

    // useEffect(() => {
    //     setHasMounted(true);
    // }, [])

    // if (!hasMounted) return null;
    
    const { 
        isConnected,
        address,
        clickConnectWallet,
        clickDisConnectWallet 
    } = HeaderController();


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
