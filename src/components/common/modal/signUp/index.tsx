
'use client';

import useAuth from "@/hooks/api";
import ModalController from "../controller";
import SignUpContrller from "./controller";




const ModalSignUp = (props: { isOpend : boolean, address : string, policy : string }) => {
    
    const { close,isOpend } = ModalController(props.isOpend);
    const { signUp } = SignUpContrller({address : props.address, policy : props.policy});

    const modalStyles = {
      zIndex : '1000',
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "300px",
      padding: "20px",
      backgroundColor: "black",
      borderRadius: "4px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
      flexDirection : "column",
      display: isOpend ? 'block' : 'none',
    };
  
    const messageStyles = {
      textAlign: "center",
      fontSize: "12px",
      fontWeight: "bold",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      maxWidth: "100%",
    };
  
    return (
      <div style={modalStyles}>
        <p style={messageStyles}>서비스를 이용하기 위해 사용약관에 동의해야 합니다.</p>
        <button onClick={()=>{ 
            close()
        }}>Close</button>
        <button onClick={() => {
          signUp();
        }}>Sign In</button>
      </div>
    );
  };
  
  export default ModalSignUp;
  