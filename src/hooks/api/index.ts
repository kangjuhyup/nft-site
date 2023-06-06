import { useState } from "react";

export interface GetPolicyDto {
  address: string;
}

export interface SignUpDto {
  address: string;
  signature: string;
}

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

  return {
    loading,
    error,
    getPolicy,
    signUp,
  };
};

export default useAuth;
