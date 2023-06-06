

const TransactionType = {
    DEPLOY_NFT : 'deploy_nft',
    DEPLOY_ERC20 : 'deploy_erc20',
  } as const
  export type TRANSACTION_TYPE = typeof TransactionType[keyof typeof TransactionType];

const TransactionButtonController = (type : TRANSACTION_TYPE,hook : any) => {

    const sendTransaction = async (param:any) => {
        if(!hook) throw Error('invaild hook');
        switch(type) {
            case TransactionType.DEPLOY_NFT :
                hook.send(param);
            break;
            case TransactionType.DEPLOY_ERC20 : 
            break;
        }
    }

    return {
        send : sendTransaction,
        isLoading : hook?.isLoading,
        isSuccess : hook?.isSuccess,
        txData : hook?.data
    }
}

export default TransactionButtonController;