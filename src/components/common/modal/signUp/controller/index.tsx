import useAuth from "@/hooks/api";
import { authState } from "@/store/auth";
import { useEffect, useState } from "react";
import { useSignMessage } from "wagmi";

const SignUpContrller = (props : {
  address : string,
  policy : string,
}) => {
  const { signUp, loading, error } = useAuth();
  const { data, signMessage } = useSignMessage();
  const {isAuth, setAuth} = authState();
  
  const sign = async () => {
    signMessage({message : props.policy});
  }

  const closeModal = () => {
    setAuth(true);
}

  useEffect(() => {
    if(!data) return;
    const a = async () => {
      const signup = await signUp({
        address : props.address,
        signature : data
      })
      closeModal();
    }
    a();
  },[data]);

  return {
    signUp : sign,
    isAuth : isAuth,
  };
};
export default SignUpContrller;
