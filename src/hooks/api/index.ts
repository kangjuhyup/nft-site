import { useState } from "react";
import { GetPolicyDto } from "./dto/getPolicy";
import { SetInfoDto } from "./dto/setInfo";
import { SignUpDto } from "./dto/signUp";

import { getCookie } from "cookies-next";
import { SignInDto } from "./dto/signIn";
import { GetInfoDto } from "./dto/getInfo";

const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPolicy = async (data: GetPolicyDto) => {
    setLoading(true);
    try {
      const url = `http://localhost:8000/auth/getPolicy?address=${encodeURIComponent(
        data.address
      )}`;
      const response = await fetch(url);
      if (response.ok) {
        const jsonData = await response.json();
        return jsonData;
      } else if (response.status === 613) {
        return { success: false };
      } else {
        throw Error("failed call getPolicy API");
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
      const url = "http://localhost:8000/auth/signUp";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address, signature }),
      });
      if (response.ok) {
        const jsonData = await response.json();
        return jsonData;
      } else if (response.status === 613) {
        return { success: false };
      } else {
        throw Error("failed call signUp API");
      }
    } catch (error) {
      setError(error);
      console.log("catchError");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (dto: SignInDto) => {
    setLoading(true);
    try {
      const { address } = dto;
      const url = "http://localhost:8000/auth/signIn";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address }),
      });
      if (response.ok) {
        const jsonData = await response.json();
        return jsonData;
      } else if (response.status === 614) {
        return { success: false };
      } else {
        throw Error("failed call signUp API");
      }
    } catch (error) {
      console.log("signIn Error : ", error);
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const setInfo = async (dto: SetInfoDto) => {
    setLoading(true);
    try {
      const { file, address, nickName } = dto;
      const url = "http://localhost:8000/auth/setInfo";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getJwtToken()}`,
        },
        body: JSON.stringify({ file, address, nickName }),
      });
      if (response.ok) {
        const jsonData = await response.json();
        return jsonData;
      } else {
        throw Error("failed call setInfo API");
      }
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const getInfo = async (dto:GetInfoDto) => {
    setLoading(true);
    try {
      const { address } = dto;
      const url = "http://localhost:8000/auth/getInfo";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getJwtToken()}`,
        },
        body: JSON.stringify({ address }),
      });
      if (response.ok) {
        const jsonData = await response.json();
        return jsonData;
      } else {
        throw Error("failed call setInfo API");
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
    signIn,
    setInfo,
    getInfo,
  };
};

const getJwtToken = () => {
  let cookie;
  if (!document) {
    const getServersideProps = (req: any, res: any) => {
      getCookie("jwt", { req, res });
      return { props: {} };
    };
    return getServersideProps;
  } else {
    cookie = getCookie("jwt");
    if (!cookie) throw Error("invaild jwt in cookies");
    return cookie;
  }
};

export default useAuth;
