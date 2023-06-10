import useAuth from "@/hooks/api";

const ApiType = {
    SIGN_UP : "sign_up",
  SET_USER_INFO: "set_user_info",
} as const;
export type API_TYPE = (typeof ApiType)[keyof typeof ApiType];

const ApiButtonController = (type: API_TYPE) => {
  const { signUp, getPolicy, setInfo, loading, error } = useAuth();

  switch (type) {
    case ApiType.SET_USER_INFO:
      return {
        setInfo: setInfo,
        loading: loading,
        error: error,
      };
  }
};

export default ApiButtonController;
