import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(
    <div
      className="flex justify-center items-center fixed"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        left: " 0",
        right: "0",
        bottom: "0",
        top: "0",
        zIndex: "10",
      }}
    >
      {children}
    </div>,
    elRef.current
  );
};

export default Modal;
