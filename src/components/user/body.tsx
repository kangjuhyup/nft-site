'use client'

import InputField from "@/components/common/inputField";
import ApiButton from "../common/button/api/apiButton";
import InputFile from "../common/inputField/inputFile";
import UserBodyController from "./controller";

const UserBody = (props : {
  address : string
}) => {
  const { data, file, setNick,onChangeEvent } = UserBodyController(props);

  return (
    <div
      style={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      <p>User Info</p>
      <img id="preview" src={file}/>
      <InputFile handle={(value)=>onChangeEvent(value)} placeHolder="Profile" />
      <InputField handle={setNick} placeHolder="Symbol" type="symbol" />
      <ApiButton type="set_user_info" param={data()}/>
    </div>
  );
};

export default UserBody;
