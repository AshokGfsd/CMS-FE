import { useState } from "react";
import { AiFillFire, AiOutlineDelete } from "react-icons/ai";
import { RxDrawingPin, RxTarget, RxUpdate } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import "./ContactCard.css";
import contactServices from "../../services/contactServices";
import { selectUser, userActions } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import ContactModal from "../Modal/ContactModal";

export const ContactCard = ({ contact, state: sugg }) => {
  const [currentId, setCurrentId] = useState();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [state, setState] = useState(false);
  const contactLoading = user.contactLoading;
  const contacts = user.contacts;
  const data = {
    ...contact,
  };
  const addHandler = () => {
    setState("add");
  };
  const updateHandler = () => {
    setState("Update");
    setCurrentId(contact._id);
  };
  const deleteFoodHandler = () => {
    toast.loading("Please Wait...");
    setCurrentId(contact._id);
    dispatch(userActions({ type: "DELETE_CONTACT_LOADING" }));
    console.log(contacts)
    const final = contacts.filter((data) => data._id !== contact._id);
    contactServices
      .delete(contact._id)
      .then((response) => {
        dispatch(
          userActions({
            type: "DELETE_CONTACT_SUCCESS",
            payload: [...final],
          })
        );
        const { message } = response.data;
        toast.dismiss();
        toast.success(message);
      })
      .catch((e) => {
        const message = e.response.data.message;
        toast.dismiss();
        return toast.error(message);
      });
  };
  return (
    <div
      data-deleting={contactLoading.deleting && currentId === contact._id}
      className="contactCard"
    >
      <h4>{contact.firstName + " " + contact.lastName}</h4>
      <p>{contact.phoneNumber}</p>     
      <p>{contact.email}</p>
      <p>{contact.address}</p>

    
      <AiOutlineDelete
        onClick={deleteFoodHandler}
        className="contactCard__delete"
      />
      <ContactModal state={state} setState={setState} data={data} />
      {sugg ? (
        <RxDrawingPin onClick={addHandler} className="add_pin" />
      ) : (
        <RxUpdate onClick={updateHandler} className="add_pin" />
      )}
    </div>
  );
};
