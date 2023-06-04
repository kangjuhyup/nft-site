'use client';

import InputField from "@/components/common/inputField"
import Wallet from "@/components/common/wallet"
import Button from "@/components/common/transactionButton"

export default function Mint(){
    return (
        <>
        <Wallet></Wallet>
        <div>
            <p>MINT</p>
            <InputField placeHolder="Name" type="name"/>
            <InputField placeHolder="Symbol" type="symbol"/>
            <InputField placeHolder="Repisotory Base Url" type="baseUrl"/>
            <Button/>
        </div>
        </>
      )
    }