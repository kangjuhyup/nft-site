
import { useEffect } from "react";
import { usePrepareContractWrite, usePrepareSendTransaction, useSendTransaction } from "wagmi";

const TransactionButtonController = () => {
    const abi = require('/public/abi/nft_deployer.json')
    const { config, error } = usePrepareContractWrite({
        address : process.env.DEPLOYER_ADDRESS,
        abi : abi,
        functionName : 'DeployNFT'
    })

    useEffect(() => {
        console.log('request : ' ,request)
    },[request])

    const { sendTransaction } = useSendTransaction(request)
    return {
        send : sendTransaction,
        error : error
    }
}

export default TransactionButtonController;