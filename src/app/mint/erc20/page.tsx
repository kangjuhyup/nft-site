'use client';

import Wallet from "@/components/common/wallet"
import WalletController from "@/components/common/wallet/controller";
import MintERC20Body from "@/components/mint/erc20/body";

export default function Mint() {
  const {
    isConnected,
  } = WalletController();

  return (
    <>
      <div style={{height:"100vh", width:"100%", display:"flex", alignItems: "center", justifyContent: "center", flexDirection:"column" , backgroundColor:"gray" }}>
        <Wallet></Wallet>
        <div>
          {
            isConnected ?
              <MintERC20Body/>
              :
              <div>
                <p>You must connect your wallet to use it.</p>
              </div>
          }

        </div>
      </div>
    </>
  )
}