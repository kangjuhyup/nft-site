import { WriteContractResult } from "@wagmi/core";
import { useContractWrite } from "wagmi";

export interface NFTParams {
    name? : string,
    symbol? : string,
    baseUrl? : string,
}

export interface useNFTHookResponse {
    data : WriteContractResult|undefined,
    isLoading : boolean,
    isSuccess : boolean,
    send : ( param:NFTParams )=>void
}

export const useNFTHooks = () => {
    const abi = require('/public/abi/nft_deployer.json');


    const {data,isLoading,isSuccess,write} = useContractWrite({
        address: '0xC62230B9F4BDB6286f86f5bCeEe15F715167ECE0',
        abi: abi.abi,
        functionName: 'DeployNFT',
    })

    const send = (param:NFTParams) => {
        const { name, symbol, baseUrl } = param;
        if(!name) throw Error('invaild name')
        if(!symbol) throw Error('invaild Symbol')
        write({
            args : [name,symbol,baseUrl?? 'https://']
        });
    }

    return {
        data : data, 
        isLoading : isLoading, 
        isSuccess : isSuccess,
        send : send 
    }
}