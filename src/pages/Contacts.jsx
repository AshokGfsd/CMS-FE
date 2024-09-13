import { RxTarget } from "react-icons/rx";
import { useSelector } from "react-redux";
import { ContactCard } from "../components/ContactCard/ContactCard";
import ContactModal from "../components/Modal/ContactModal";
import { PlaceholderCard } from "../components/PlaceholderCard/PlaceholderCard";
import "./Contacts.css";
import { selectUser } from "../features/user/userSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contacts = () => {
  const user = useSelector(selectUser);
  const [state, setState] = useState(false);
  const contacts = user.contacts;
  const loading = user.loading;
  const contactLoading = user.contactLoading;
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (!user.log) {
      toast.info("Please log-in");
      navigate("/");
    }
  }, []);
  const handleClick = () => {
    setState("Add");
  };
  return (
    <div className="contacts">
      {loading && <h4>Loading...</h4>}

      <div className="contacts__container">
        <div className="contacts__container">
          <h1>Contacts</h1>
          {contacts.length == 0 && <h2>no Contacts created</h2>}
          {contactLoading.adding && <PlaceholderCard />}
          {contacts.map((contact) => (
            <ContactCard key={contact._id} contact={contact} />
          ))}
        </div>
      </div>
      <ContactModal state={state} setState={setState} />
      <button onClick={handleClick}>
        <RxTarget />
      </button>
    </div>
  );
};

export default Contacts;
