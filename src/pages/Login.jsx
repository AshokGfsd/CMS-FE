import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../components/Modal/LoginModel";
import { selectUser } from "../features/user/userSlice";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user.log) {
      navigate("/");
    }
  }, [user.log]);
  return (
    <div style={{ visibility: "hidden" }}>
      <LoginModal />
    </div>
  );
};

export default Login;
