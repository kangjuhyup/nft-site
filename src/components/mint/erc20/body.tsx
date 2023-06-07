'use client'

import InputField from "@/components/common/inputField";
import Button from "@/components/common/transactionButton";
import MintERC20BodyController from "./controller";

const MintERC20Body = () => {

    const {setName,setSymbol,setTotalSupply,data} = MintERC20BodyController();
  return (
    <div
      style={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <p>MINT ERC20</p>
      <InputField handle={setName} placeHolder="Name" type="name" />
      <InputField handle={setSymbol} placeHolder="Symbol" type="symbol" />
      <InputField handle={setTotalSupply} placeHolder="Total Supply" type="totalSupply"/>
      <Button type="deploy_erc20" param={data()} />
    </div>
  );
};

export default MintERC20Body;
