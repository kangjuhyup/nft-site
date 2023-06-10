'use client';

import Wallet from "@/components/common/wallet"
import WalletController from "@/components/common/wallet/controller";
import UserBody from "@/components/user/body";

export default function User() {
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
              <UserBody/>
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