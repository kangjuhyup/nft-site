import { useERC20Hooks } from "@/hooks/transaction/erc20";
import { useNFTHooks } from "@/hooks/transaction/nft";


const TransactionType = {
    DEPLOY_NFT : 'deploy_nft',
    DEPLOY_ERC20 : 'deploy_erc20',
  } as const
  export type TRANSACTION_TYPE = typeof TransactionType[keyof typeof TransactionType];

const TransactionButtonController = (type : TRANSACTION_TYPE) => {
    let hook:any;

    switch(type) {
        case TransactionType.DEPLOY_NFT : 
            hook = useNFTHooks();
            break;
        case TransactionType.DEPLOY_ERC20 :
            hook = useERC20Hooks();
            break;
    }
    

    return {
        send : hook.send,
        isLoading : hook.isLaoding,
        isSuccess : hook.isSuccess,
        txData : hook.data
    }
}

export default TransactionButtonController;