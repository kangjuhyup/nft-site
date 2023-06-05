
'use client';

import ModalController from "@/components/controller/modal";


const Modal = (props: { isOpend : boolean, message : string }) => {
    
    const { close,isOpend } = ModalController(props.isOpend);

    const modalStyles = {
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
        <p style={messageStyles}>{props.message}</p>
        <button onClick={()=>{ 
            close()
        }}>Close</button>
      </div>
    );
  };
  
  export default Modal;
  