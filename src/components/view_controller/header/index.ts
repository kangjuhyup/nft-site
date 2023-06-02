
import { InjectedConnector } from "@wagmi/core";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const HeaderController = () => {
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector : new InjectedConnector()
    })
    const { disconnect } = useDisconnect()

    return {
        address : address,
        isConnected : isConnected,
        clickConnectWallet : connect,
        clickDisConnectWallet : disconnect,
    }
}

export default HeaderController;