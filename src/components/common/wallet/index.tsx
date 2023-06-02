'use client';

import styled from "styled-components"
import wallet from "public/wallet.svg"
import WalletController from "@/components/view_controller/wallet";

const WalletButton = styled.button`
    display: inline-flex;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 2.25rem;
    font-size: 1rem;
    background: #228be6;
    &:hover {
    background: #339af0;
    }
    &:active {
    background: #1c7ed6;
    }
    & > img {
    width: 100%;
    height: 100%;
    }
`

const Wallet = () => {

    const { 
        isConnected,
        address,
        clickConnectWallet,
        clickDisConnectWallet 
    } = WalletController();

    return (
        <>
        {isConnected ?
        <p>Connected</p>
        :
        <WalletButton onClick={()=>clickConnectWallet()}>
        <img src={wallet} alt="Wallet" />
        </WalletButton>
        }

        </>
    )
}

export default Wallet;