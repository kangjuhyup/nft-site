import { createPublicClient, http } from "viem";
import { createConfig, mainnet } from "wagmi";

export const wagmi_config = createConfig({
    autoConnect : true,
    publicClient : createPublicClient({
      chain : mainnet,
      transport : http()
    })
  })