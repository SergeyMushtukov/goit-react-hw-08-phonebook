import css from './ContactList.module.css';
import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/contacts-selectors';

const getVisibleList = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts =  useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleList = getVisibleList(contacts, filter);

  return (
    <ul className={css.list}>
      {visibleList.map((contact) => (
        <Contact key={contact.id} contact={contact}></Contact>
      ))}
    </ul>
  );
};
