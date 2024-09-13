import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Outlet, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userActions } from "../features/user/userSlice";
import { fetchContacts, profile } from "../services/loader";
import { toast } from "react-toastify";
import userServices from "../services/userServices";

const Mainpage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    profile(dispatch, userActions);
    fetchContacts(dispatch, userActions);
  }, []);
  useEffect(() => {
    if (user.log) {
      toast.dismiss();
    }
  }, [user.profile]);

  useEffect(() => {
    if (user.log) {
    }
  }, [user.profile, state]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default Mainpage;
