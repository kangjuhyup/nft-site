'use client';

import InputField from "@/components/common/inputField"
import Wallet from "@/components/common/wallet"
import Button from "@/components/common/transactionButton"
import WalletController from "@/components/controller/wallet";

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
              <div style={{position:"relative", display:"flex", flexDirection:"column"}}>
                <p>MINT</p>
                <InputField placeHolder="Name" type="name" />
                <InputField placeHolder="Symbol" type="symbol" />
                <InputField placeHolder="Repisotory Base Url" type="baseUrl" />
                <Button />
              </div>
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