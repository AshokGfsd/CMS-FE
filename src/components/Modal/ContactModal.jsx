import "./Modal.css";
import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import contactServices from "./../../services/contactServices";
import { selectUser, userActions } from "../../features/user/userSlice";
import { toast } from "react-toastify";

const ContactModal = ({ state, setState, data }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phoneNumber: "",
  });
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const contacts = user.contacts;

  useEffect(() => {
    if (data) {
      const { _id, firstName, lastName, address, email, phoneNumber } = data;

      setFormData({
        ...formData,
        _id,
        firstName,
        lastName,
        address,
        email,
        phoneNumber,
      });
    }
  }, []);
  const formDataHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    toast.loading("Please Wait...");
    console.log(formData);
    if (state == "Update") {
      contactServices
        .update(formData)
        .then((response) => {
          const final = contacts.map((d) =>
            data._id !== d._id ? d : response.data.updatedContact
          );
          dispatch(
            userActions({
              type: "UPDATE_CONTACT_SUCCESS",
              payload: [...final],
            })
          );
          const { message } = response.data;
          toast.dismiss();
          toast.success(message);
        })
        .catch((e) => {
          console.log(e);
          const message = e.response.data.message;
          toast.dismiss();
          return toast.error(message);
        });
    } else {
    dispatch(userActions({ type: "ADD_CONTACT_LOADING" }));
    contactServices
      .post(formData)
      .then((response) => {
        if (data) {
          dispatch(userActions({ type: "ADD_CONTACT_LOADING" }));
          dispatch(
            userActions({
              type: "ADD_CONTACT_SUCCESS",
              payload: { contacts: final },
            })
          );
        }
        dispatch(
          userActions({
            type: "ADD_CONTACT_SUCCESS",
            payload: {
              ...response.data.savedcontact,
            },
          })
        );
        const { message } = response.data;
        toast.dismiss();
        console.log("what")
        toast.success(message);
        if (data) {
          return;
        }
        setFormData(() => ({
          firstName: "",
          lastName: "",
          address: "",
          email: "",
          phoneNumber: "",
        }));
      })
      .catch((e) => {
        dispatch(userActions({ type: "ADD_DATA_FAILURE" }));
        const message = e.response.data.message;
        toast.dismiss();
        return toast.error(message);
      });
    }
  };

  return (
    <Dialog.Root open={state} onOpenChange={setState}>
      <Dialog.Trigger>open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add contact</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Add contact here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="firstName">
              First Name
            </label>
            <input
              className="Input"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="Input"
              name="lastName"
              value={formData.lastName}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="email">
              Email
            </label>
            <input
              className="Input"
              name="email"
              value={formData.email}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              className="Input"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="address">
              Address
            </label>
            <input
              className="Input"
              name="address"
              value={formData.address}
              onChange={(e) => formDataHandler(e)}
            />
          </fieldset>
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green" onClick={submitHandler}>
                {state} contact
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <RxCross2 />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ContactModal;
