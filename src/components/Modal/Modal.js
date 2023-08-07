import React from "react";
import "./Modal.style.css";
import { MDBBtn } from "mdb-react-ui-kit";

function Modal({children, open, onClose}) { 

  return (
    <>
      {open &&
        <div className="custom-modal" onClick={onClose}>
          <div className="custom-modal-content" onClick={(e) => {
            e.stopPropagation()
          }}>
           {children}
          </div>
        </div>
      }
    </>
  );
}

export default Modal;
