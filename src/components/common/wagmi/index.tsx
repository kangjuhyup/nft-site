'use client'

import { wagmi_config } from "@/config/wagmi"
import React from "react"
import { WagmiConfig } from "wagmi"

const Wagmi = ({children}: {children: React.ReactNode}) => {
    return (
        <WagmiConfig config={wagmi_config}>{children}</WagmiConfig>
    )
}

export default Wagmi;