import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import "../../components/Home/styles/NewContact.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../services/actions/contact.action";

export default function Test() {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  const initialState = {
    name: "",
    email: "",
    phone: "",
    profile: null,
  };
  let [newContact, setNewContact] = useState(initialState);

  const dispatch = useDispatch();

  const changeValues = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const submit = () => {
    dispatch(addContact(newContact));
    toggleShow();
  };
  return (
    <>
      <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn>
      <MDBModal
        className="login_modal"
        show={basicModal}
        setShow={setBasicModal}
        tabIndex="-1"
      >
        <MDBModalDialog className="MDBModalDialog">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="col-md-12" id="form_login">
                <form action="post">
                  <h1 className="title">Add New Contact</h1>

                  <div className="mt-4 mb-3">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      id="inputname"
                      className="form-control"
                      required="required"
                      onChange={changeValues}
                    />
                  </div>
                  <div className="mt-4 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelpId"
                      placeholder="Email"
                      name="email"
                      onChange={changeValues}
                    />
                  </div>
                  <div className="mt-4 mb-3">
                    <input
                      type="number"
                      className="form-control"
                      name="phone"
                      placeholder="Phone"
                      required="required"
                      onChange={changeValues}
                    />
                  </div>
                  <div className="mt-4 mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="job"
                      placeholder="Job"
                      id="job"
                      onChange={changeValues}
                    />
                  </div>
                  <div className="mt-4 mb-3">
                    <input
                      type="file"
                      name="profile"
                      id="profile"
                      onChange={changeValues}
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={submit}
                    >
                      Add
                    </button>
                  </div>

                  <hr />
                  <div>
                    <center>
                      <span> Or use your account</span>
                      <div className="social-network text-centered">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-google"></i>
                        <i className="fa-brands fa-linkedin"></i>
                      </div>
                    </center>
                  </div>
                </form>
              </div>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              {/* <MDBBtn>Save changes</MDBBtn> */}
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
