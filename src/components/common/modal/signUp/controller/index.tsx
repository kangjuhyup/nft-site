import useAuth from "@/hooks/api";
import { useEffect } from "react";
import { useSignMessage } from "wagmi";

const SignUpContrller = (props : {
  address : string,
  policy : string
}) => {
  const { signUp, loading, error } = useAuth();
  const { data, signMessage } = useSignMessage();
  const sign = async () => {
    signMessage({message : props.policy});
  }

  useEffect(() => {
    if(!data) return;
    const a = async () => {
      const signup = await signUp({
        address : props.address,
        signature : data
      })
      console.log(signup);
    }
    a();
  },[data]);

  return {
    signUp : sign,
  };
};
export default SignUpContrller;
