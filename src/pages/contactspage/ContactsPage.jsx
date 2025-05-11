import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchContacts from "../../redux/contacts/operations";
import { selectContacts, selectError, selectLoading } from "../../redux/contacts/slice";
import ContactForm from "../../components/contactform/ContactForm";
import ContactList from "../../components/contactlist/ContactList";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import './ContactsPage.css'

const ContactsPage = () => {
    const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      <input
        type="text"
        className="contact-page-i"
        value={filter}
        onChange={handleFilterChange}
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList contacts={filteredContacts} />
    </div>
  );
}

export default ContactsPage;