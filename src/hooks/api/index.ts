import { useState } from "react";
import { GetPolicyDto } from "./dto/getPolicy";
import { setInfoDto } from "./dto/setInfo";
import { SignUpDto } from "./dto/signUp";

import { getCookie } from "cookies-next";




const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPolicy = async (data: GetPolicyDto) => {
    setLoading(true);
    try {
      const url = `http://127.0.0.1:8000/auth/getPolicy?address=${encodeURIComponent(
        data.address
      )}`;
      const response = await fetch(url);
      if(response.ok) {
        const jsonData = await response.json();
        return jsonData;
      } else if (response.status === 613) {
        return { success : false }
      } else {
        throw Error('failed call API')
      }
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (data: SignUpDto) => {
    const { address, signature } = data;
    setLoading(true);
    try {
      const url = "http://127.0.0.1:8000/auth/signUp";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address, signature }),
      });
      if(response.ok) {
        const jsonData = await response.json();
        return jsonData;
      } else if (response.status === 613) {
        return { success : false }
      } else {
        throw Error('failed call API')
      }

    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const setInfo = async (dto : setInfoDto) => {
    setLoading(true);
    try {
      const { file, address ,nickName } = dto;
      const url = "http://127.0.0.1:8000/auth/setInfo";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${getJwtToken()}`
        },
        body: JSON.stringify({ file, address, nickName }),
      });
      if(response.ok) {
        const jsonData = await response.json();
        return jsonData;
      } else {
        throw Error('failed call API')
      }

    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    getPolicy,
    signUp,
    setInfo
  };
};

const getJwtToken = () => {
  let cookie;
  if(!document) {
    const getServersideProps = ((req:any,res:any) => {
      getCookie('jwt',{req,res});
      return { props : {} }
    })
    return getServersideProps;
  } else {
    cookie = getCookie('jwt');
    if(!cookie) throw Error('invaild jwt in cookies');
    return cookie;
  }
  
}

export default useAuth;
