import React, { useEffect, useState } from "react";
import Myself from "../../components/Home/Myself";
import InfoPerson from "../../components/Home/InfoPerson";
import Header from "../../components/Home/Header";
import UserItem from "../../components/Home/UserItem";
import "../../components/Home/styles/Home.style.css";
import {
  getContacts,
} from "../../services/actions/contact.action";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";

function Home() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  
  console.log(contacts);

  const [contact, setContact] = useState();


  return (
    <div className="conteneur">
      <Modal />
      <Myself />
      <div className="body">
        <Header />
        <div className="content">
          <div className="contact_list">
            {contacts["contacts"]?.map((u) => (
              <UserItem key={u.id} user={u} onClick={() => setContact(u)} />
            ))}
          </div>
          <InfoPerson
            contact={contact}
            style={{ paddingRight: 0, paddingLeft: 0 }}
          />
        </div>
      </div>
    </div>
  );
}

export { Home };
