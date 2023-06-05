import { WriteContractResult } from "@wagmi/core";
import { useContractWrite } from "wagmi";

export interface ERC20Params {
    name? : string,
    symbol? : string,
    totalSupply? : string,
}

export interface useNFTHookResponse {
    data : WriteContractResult|undefined,
    isLoading : boolean,
    isSuccess : boolean,
    send : ( param:ERC20Params )=>void
}

export const useNFTHooks = () => {
    const abi = require('/public/abi/erc20_deployer.json').abi;


    const {data,isLoading,isSuccess,write} = useContractWrite({
        address: '0x',
        abi: abi,
        functionName: 'DeployERC20',
    })

    const send = (param:ERC20Params) => {
        const { name, symbol, totalSupply } = param;
        if(!name) throw Error('invaild name')
        if(!symbol) throw Error('invaild Symbol')
        if(!totalSupply) throw Error('invaild totalSupply')
        write({
            args : [name,symbol,totalSupply]
        });
    }

    return {
        data : data, 
        isLoading : isLoading, 
        isSuccess : isSuccess,
        send : send 
    }
}