
import { useInputFeild } from "@/store/mint";
import { useContractWrite, usePrepareContractWrite, usePrepareSendTransaction, useSendTransaction } from "wagmi";

const TransactionButtonController = () => {
    const abi = require('/public/abi/nft_deployer.json');
    console.log(abi);
    const { name, symbol, baseUrl } = useInputFeild();

    const { data, isLoading, isSuccess, write } = useContractWrite({
        address: '0xC62230B9F4BDB6286f86f5bCeEe15F715167ECE0',
        abi: abi.abi,
        functionName: 'DeployNFT',
      })
     
    

    const sendTransaction = async () => {
        if(!name) throw Error('invaild name')
        if(!symbol) throw Error('invaild Symbol')
        write({
            args : [name,symbol,baseUrl??'https://']
        })
    }

    return {
        send : sendTransaction,
    }
}

export default TransactionButtonController;