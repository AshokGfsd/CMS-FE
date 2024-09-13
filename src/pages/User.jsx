import { useDispatch, useSelector } from "react-redux";
import "./Contacts.css";
import { selectUser, userActions } from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoutModal from "./../components/Modal/LogoutModel";
import { profile } from "../services/loader";
import { RxAvatar } from "react-icons/rx";
import { toast } from "react-toastify";

const User = () => {
  const { profile: user, log } = useSelector(selectUser);
  const [logout, setLogout] = useState(false);
  const [state, setState] = useState(false);
  const [aim, setAim] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    profile(dispatch, userActions);
  }, []);
  useEffect(() => {
    console.log(user);
  }, [log]);
  return user.email ? (
    <div className="">
      <h1>
        Hi {user.userName} <LogoutModal state={logout} setState={setLogout} />
      </h1>
      <h1>MemberShip: {user.membership}</h1>
      <h2>You can create a 100 contacts</h2>
    </div>
  ) : (
    <div className="dash">
      <h1>User</h1>
      <div className="">
        Please Login or signin To continue
        <br />
        Get more features
      </div>
      <Link className="Button" to={"/login"}>
        Log in
      </Link>
      <Link className="Button" to={"/signin"}>
        Sign in
      </Link>
    </div>
  );
};

export default User;
