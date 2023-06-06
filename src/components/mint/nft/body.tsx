'use client'

import InputField from "@/components/common/inputField";
import Button from "@/components/common/transactionButton";
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
      <Button type="deploy_nft" param={data} />
    </div>
  );
};

export default MintNFTBody;
