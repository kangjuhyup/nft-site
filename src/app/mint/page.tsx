'use client'

import Header from "@/components/common/header"
import { wagmi_config } from "@/config/wagmi";
import { WagmiConfig } from "wagmi";

export default function Mint(){
    console.log('loadMint');
    return (
    <WagmiConfig config={wagmi_config}>
      <div>
          <Header/>
          <p>MINT</p>
      </div>
      </WagmiConfig>
      )
    }