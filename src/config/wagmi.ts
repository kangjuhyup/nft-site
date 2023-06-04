import { InjectedConnector } from "@wagmi/core";
import { createPublicClient, http } from "viem";
import { configureChains, createConfig, mainnet } from "wagmi";
import { publicProvider } from 'wagmi/providers/public'
import { karam } from "./chain";


const { chains, publicClient } = configureChains(
  [karam],
  [publicProvider()]
)

export const wagmi_config = createConfig({
    autoConnect : true,
    connectors : [new InjectedConnector({chains})],
    publicClient
  })