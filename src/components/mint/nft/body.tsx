'use client'

import TransactionButton from "@/components/common/button/transactionButton/transactionButton";
import InputField from "@/components/common/inputField";
import MintNFTBodyController from "./controller";

const MintNFTBody = () => {

    const {setName,setSymbol,setBaseUrl,data} = MintNFTBodyController();
  return (
    <div
      style={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <p>MINT</p>
      <InputField handle={setName} placeHolder="Name" type="name" />
      <InputField handle={setSymbol} placeHolder="Symbol" type="symbol" />
      <InputField handle={setBaseUrl}placeHolder="Repisotory Base Url" type="baseUrl"/>
      <TransactionButton type="deploy_nft" param={data()} />
    </div>
  );
};

export default MintNFTBody;
