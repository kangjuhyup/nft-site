import React from "react";

const Modal = (props: { message: string }) => {
  const modalStyles = {
    backgroundColor: "lightgray",
    padding: "20px",
    borderRadius: "4px",
    textAlign: "center",
    width : "30%"
  };

  const messageStyles = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    overflowWrap: "break-word", // or 'word-wrap: break-word'
  };

  return (
    <div style={modalStyles}>
      <p style={messageStyles}>{props.message}</p>
    </div>
  );
};

export default Modal;
