import React, { useState } from "react";
import "./styles/Auth.style.css";
import { useDispatch } from "react-redux";
import { registerAction } from "../../services/actions/user.action";
import { useNavigate } from "react-router-dom";

function Register() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    job: "",
    profile: null,
  };

  let [newUser, setNewUser] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeValues = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const submit = () => {
    if (newUser) {
      dispatch(registerAction(newUser));
    } else {
      navigate("/");
    }
  };
  
  const login = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="register" id="form_login">
        <form action="post">
          <h1 className="title">Register Here</h1>

          <div className="input-group mb-3">
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Name"
              aria-describedby="prefixId"
              onChange={changeValues}
            />
          </div>
          <div className="mt-4 mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              aria-describedby="emailHelpId"
              placeholder="Email"
              onChange={changeValues}
            />
          </div>
          <div className="mt-4 mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              aria-describedby="emailHelpId"
              placeholder="Password"
              onChange={changeValues}
            />
          </div>
          <div className="mt-4 mb-3">
            <input
              type="number"
              className="form-control"
              name="phone"
              placeholder="Phone"
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
            <button type="button" className="btn btn-success" onClick={submit}>
              Register
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
        <div className="text-center" onClick={login}>
          <button
            type="button"
            className="btn btn-transparent mt-3"
            id="message_login"
          >
            <i className="fa fa-arrow-left" aria-hidden="true"></i> Login
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Register;
