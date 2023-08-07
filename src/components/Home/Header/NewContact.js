import React, { useState } from "react";
import {
  MDBBtn,
} from "mdb-react-ui-kit";
import Modal from "../../Modal/Modal";

export default function AddContact() {
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <MDBBtn onClick={toggleShow}>
        <i className="fa-solid fa-circle-plus"></i> <span>New Contact</span>
      </MDBBtn>
      <Modal open={basicModal} onClose={() => setBasicModal(false)}>juste un test</Modal>
    </>
  );
}
