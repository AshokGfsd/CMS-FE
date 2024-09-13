import { useEffect, useState } from "react";
import SignModal from "../components/Modal/SigninModel";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../features/user/userSlice";

const Sign = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user.log) {
      navigate("/");
    }
  }, [user.log]);
  return (
    <div style={{ visibility: "hidden" }}>
      <SignModal />
    </div>
  );
};

export default Sign;
