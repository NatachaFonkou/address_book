import React, { useState } from "react";
import "./styles/InfoPerson.css";

function InfoPerson({contact}) {
  const [activePill, setActivePill] = useState("contact");

  const handlePillClick = (pillId) => {
    setActivePill(pillId);
  };

  if (contact == null) {
    return(
      <div className="s" id="info_person">
        Selectionner un contact
      </div>
    )
  }
  else{
    return (
      <div className="" id="info_person">
        <div className="profile mt-5">
          <img src={contact.profile} alt="profile" />
          <div className="details">
            <h4 className="username">{contact.name} </h4>
            <span className="email">{contact.job}</span>
          </div>
        </div>
        <div className="contact_details mt-5">
          <ul className="nav nav-pills mb-3">
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activePill === "contact" ? "active" : ""
                }`}
                href="#contact"
                onClick={() => handlePillClick("contact")}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activePill === "work" ? "active" : ""}`}
                href="#work"
                onClick={() => handlePillClick("work")}
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activePill === "about" ? "active" : ""}`}
                href="#about"
                onClick={() => handlePillClick("about")}
              >
                About
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div
              id="contact"
              className={`tab-pane fade ${
                activePill === "contact" ? "show active" : ""
              }`}
            >
              <div className="">
                <div className="d-flex justify-content-between mb-2">
                  <div className="phone_details">
                    Phone number <br /> {contact.phone}
                  </div>
                  <div className="phone_icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div className="email_details">
                    Email Address <br /> {contact.email}
                  </div>
                  <div className="email_icon">
                    <i className="fa-regular fa-envelope"></i>
                  </div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div className="chat_details">
                    Chat <br /> marichan
                  </div>
                  <div className="chat_icon">
                    <i className="fa-regular fa-message"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="work"
              className={`tab-pane fade ${
                activePill === "work" ? "show active" : ""
              }`}
            >
              Contenu de la pilule 1
            </div>
            <div
              id="about"
              className={`tab-pane fade ${
                activePill === "about" ? "show active" : ""
              }`}
            >
              Contenu de la pilule 2
            </div>
          </div>
        </div>
      </div>
    );
    
  }
}

export default InfoPerson;
