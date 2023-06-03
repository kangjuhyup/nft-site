
import { useInputFeild } from "@/store/mint";
import { useContractWrite, usePrepareContractWrite, usePrepareSendTransaction, useSendTransaction } from "wagmi";

const TransactionButtonController = () => {
    const abi = require('/public/abi/nft_deployer.json')
    const { name, symbol, baseUrl } = useInputFeild();
    const { config, error } = usePrepareContractWrite({
        // address : process.env.DEPLOYER_ADDRESS ?? '0xabc',
        abi : abi,
        functionName : 'DeployNFT'
    })

    const { data, isLoading, isSuccess, write } = useContractWrite(config)

    // const sendTransaction = () => {
    //     write({
    //         args : [name,symbol,baseUrl]
    //     })
    // }

    return {
        send : write,
        error : error
    }
}

export default TransactionButtonController;