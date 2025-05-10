import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchContacts from "../../redux/contacts/operations";
import { selectContacts, selectError, selectLoading } from "../../redux/contacts/slice";
import ContactForm from "../../components/contactform/ContactForm";
import ContactList from "../../components/contactlist/ContactList";

const ContactsPage = () => {
    const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default ContactsPage;