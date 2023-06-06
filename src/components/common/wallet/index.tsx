"use client";

import styled from "styled-components";
import Image from "next/image";
import WalletController from "./controller";
import ModalSignUp from "../modal/signUp";

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
  background: #ffffff;
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
`;

const Wallet = () => {
  const { isConnected, address, clickConnectWallet, clickDisConnectWallet, isSigned, policy } =
    WalletController();

  return (
    <>
      {isConnected ? 
      <div>
          {!isSigned ? 
                
                <div>
                <ModalSignUp isOpend={true} address={`${address}`} policy={policy!}/>

            </div>
            
            :
            <div>
                <p>Connected : {address}</p>
              <button onClick={() => clickDisConnectWallet()}>Disconnect</button>
                </div>
        }
      </div>
         : (
        <WalletButton onClick={() => clickConnectWallet()}>
          <Image src="/wallet.svg" alt="Wallet" width={150} height={150} />
        </WalletButton>
      )}
    </>
  );
};

export default Wallet;
