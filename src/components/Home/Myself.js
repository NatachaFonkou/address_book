import React, { useEffect } from "react";
import "../../assets/styles/style.css";
import "./styles/Myself.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, logoutAction } from "../../services/actions/user.action";
import { useNavigate } from "react-router-dom";

function Myself() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };

  const userId = localStorage.getItem("userId");
  const user = useSelector((state) => state.userReducer.user);

  useEffect(() => {
    if (userId) {
      dispatch(getUserById(userId));
    } else {
      
      navigate("/login");
    }
  }, [dispatch, userId, navigate]);

  return (
    <div className="myself fixed-left">
      <div className="profile">
        <h1 className="name mb-5">{user.name}</h1>
        <img src={user.profile} alt="profile" />
        <div className="details">
          <h4 className="username">{user.name}</h4>
          <span className="email">{user.email}</span>
        </div>
      </div>
        

      <div className="profile_details mt-5">
        <div className="birth mb-3">
          <i className="fa-solid fa-calendar"></i> <span>21-09-2001</span>
        </div>
        <div className="phone mb-3">
          <i className="fa-solid fa-phone"></i> <span>0705459542</span>
        </div>
        <div className="user mb-3">
          <i className="fa-regular fa-circle-user"></i>{" "}
          <span>Ngu Hanh Son, Da Nang</span>
        </div>
      </div>

      <div className="deconnexion" onClick={logout}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        Deconnexion
      </div>
    </div>
  );
}

export default Myself;

