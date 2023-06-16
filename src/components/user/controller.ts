import useAuth from "@/hooks/api";
import { useEffect, useState } from "react";

const UserBodyController = (props : {
  address : string
}) => {
  const [file, setFile] = useState<any>();
  const [nickName, setNickName] = useState<string>();

  const {getInfo} = useAuth();

  useEffect(() => {
    const firstRender = async () => {
      console.log('props.address chainged');
      console.log(await getInfo({address : props.address }));

    }
    firstRender();
  },[props.address]);

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
