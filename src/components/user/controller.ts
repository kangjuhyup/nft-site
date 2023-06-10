import { useState } from "react";

const UserBodyController = () => {
  const [file, setFile] = useState<any>();
  const [nickName, setNickName] = useState<string>();

  const handleImage = (value: any) => {
    if(!value) return;
    var render = new FileReader();
    render.onload = (e) => {
      console.log(e.target?.result);
      setFile(e.target?.result);
    };
    render.readAsDataURL(value)
  };

  const getData = () => {
    return {
      file : file,
      nickName : nickName
    }
  }

  return {
    file : file,
    setNick: setNickName,
    data: getData,
    onChangeEvent: handleImage,
  };
};

export default UserBodyController;
