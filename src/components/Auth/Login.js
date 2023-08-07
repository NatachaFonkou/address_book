import React, { useState } from "react";
import "./styles/Auth.style.css";
import { useDispatch } from "react-redux";
import { loginAction } from "../../services/actions/user.action";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/style.css";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    if(email!== null && password !== null){
      dispatch(loginAction(email, password));
    }else {
      navigate("/");
    }
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <div className="login" id="form_login">
      <form action="post">
        <h1 className="title">Login Here</h1>

        <div className="mt-4 mb-3">
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelpId"
            placeholder="Email"
            required 
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-4 mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required 
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button type="button" className="btn btn-success" onClick={login}>
            Login
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
        <div className="text-center" onClick={register}>
          <button
            type="button"
            className="btn btn-transparent mt-3"
            id="message_login"
          >
            Register <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </div>
    // </div>
    // </div>
  );
}

export default Login;
