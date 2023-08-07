import React, { useState } from "react";
import "./styles/Header.css";
import AddContact from "./Header/NewContact";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { SORT_CONTACT, addContact, sortContact } from "../../services/actions/contact.action";

function Header({ filter }) {
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);

  // const [filter, setFilter] = useState(false)

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

  // const filterContact = () => {
  //   filter = true;
  //   if (filter) {
  //     dispatch(sortContact());
  //   }
  // };
  // const contacts = useSelector((state) => state.contactReducer);
  // console.log(contacts["contacts"]);

  return (
    <div className="d-flex justify-content-between" id="header">
      <div className="header_title">
        <h1>Address Book</h1>
      </div>
      <div className="filter d-flex">
        <button className="filter_icon" onClick={()=>{
          dispatch({
            type: SORT_CONTACT,
          });
        }}>
          <i className="fa-solid fa-filter"> </i>
        </button>

        <div className="add_contact" onClick={toggleShow}>
          <i className="fa-solid fa-circle-plus"></i> <span>New Contact</span>
        </div>
        <Modal open={basicModal} onClose={() => setBasicModal(false)}>
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
        </Modal>
      </div>
    </div>
  );
}

export default Header;
