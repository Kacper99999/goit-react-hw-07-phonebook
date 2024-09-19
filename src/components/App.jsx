import {} from 'react';
import ContactsForm from '/src/components/ContactsForm/ContactsForm';
import Filter from '/src/components/Filter/Filter'
import ContactList from '/src/components/ContactList/ContactList';


export default function App() {
return (
  <>
  <h1>Phonebook</h1>
    <ContactsForm/>
    <Filter/>
    <ContactList/>
  </>
);

}
