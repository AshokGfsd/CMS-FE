import "./Dashboard.css";
import { AiOutlineFire } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { userActions, selectUser } from "../features/user/userSlice";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Dashboard = () => {
  const user = useSelector(selectUser);
  const [state, setState] = useState(false);
  const contacts = user.contacts;
  const loading = user.loading;
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    toast.dismiss();
  }, []);

  useEffect(() => {
    if (user.log) {
      // console.log(user.contacts.length);
    }
  }, [user]);

  return user.log ? (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <h3>Total Created Contacts: {contacts.length}</h3>
      <h3>Remainig Create Contact: {100 - contacts.length}</h3>
      <h1>To upgrade silver or gold membership to get more contact space </h1>
      <h4>
        Silver: +500 contacts <br />
        Gold: +1000 contacts
      </h4>
      <p>
        this feature is not applied its available soon!!!
      </p>
    </div>
  ) : (
    <div className="dash">
      <h1>Reach your contacts with CMS </h1>Take your contact management to the
      next level with our intuitive and powerful dashboard! Get a crystal-clear
      view of your contact landscape with key metrics and insights at your
      fingertips. Easily track total contacts, recent interactions, and contact
      distribution to identify trends and opportunities. Save time and boost
      productivity with our centralized and visual platform. Try it now and
      discover a smarter way to manage your contacts!
      <br />
      Please login to see your dashboard
      <br />
      <br />
      <Link className="button" to={"/signin"}>
        Start Today
      </Link>
    </div>
  );
};

export default Dashboard;
