
import useAuth from "@/hooks/api";
import { authState } from "@/store/auth";
import { InjectedConnector } from "@wagmi/core";
import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const WalletController = () => {
    const { address, isConnected } = useAccount()
    const { getPolicy, loading, error } = useAuth();
    const [policy,setPolicy] = useState<string>();
    const { isAuth, setAuth } = authState();
    const check = async () => {
        const policy = await getPolicy({address : `${address}` });
        console.log(policy);
        if(policy.success) {
            setAuth(false);
            setPolicy(policy.policy)
        }
        else setAuth(true);
      }
    const { connect } = useConnect({
        connector : new InjectedConnector()
    })
    const { disconnect } = useDisconnect();

    useEffect(() => {
        if(isConnected) check();
    },[isConnected,address]);

    return {
        address : address,
        isConnected : isConnected,
        clickConnectWallet : connect,
        clickDisConnectWallet : disconnect,
        isSigned : isAuth,
        policy : policy,
    }
}

export default WalletController;