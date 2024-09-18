import {useState, useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux'; 
import { fetchContacts } from '../redux/operations';
import { nanoid } from 'nanoid';
import ContactsForm from '/src/components/ContactsForm';
import Filter from '/src/components/Filter'
import ContactList from '/src/components/ContactList';
import '/src/components/styles.css';

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
