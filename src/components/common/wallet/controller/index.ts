
import useAuth from "@/hooks/api";
import { InjectedConnector } from "@wagmi/core";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const WalletController = () => {
    const { address, isConnected } = useAccount()
    const { getPolicy, loading, error } = useAuth();
    const [isSigned, setSigned] = useState<boolean>(false);
    const [policy,setPolicy] = useState<string>();
    const check = async () => {
        const policy = await getPolicy({address : `${address}` });
        console.log(policy);
        if(policy.success) setPolicy(policy.policy);
        else setSigned(true);
      }
    const { connect } = useConnect({
        connector : new InjectedConnector()
    })
    const { disconnect } = useDisconnect();

    useEffect(() => {
        if(isConnected) check();
    },[isConnected]);

    return {
        address : address,
        isConnected : isConnected,
        clickConnectWallet : connect,
        clickDisConnectWallet : disconnect,
        isSigned : isSigned,
        policy : policy,
    }
}

export default WalletController;