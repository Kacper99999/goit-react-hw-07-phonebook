import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, delateContact } from "../../redux/operations";
import { getContacts, getFilter } from "../../redux/selectors";
import { FaTimes } from "react-icons/fa";
import css from "./ContactList.module.css"

function ContactList(){
  const contacts = useSelector(getContacts);
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().startsWith(filters));


  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])


  const handleDelate = (event) => {
    dispatch(delateContact(event))
  }
    return(
     <>
     {filteredContacts === "" ? (
      <ul className={css.ul}>
      {contacts.length > 0 ? (
        contacts.map((con) => (
        <li className={css.li} key={con.id}>
          {con.name} : {con.phone} <button className={css.button} onClick={() => handleDelate(con.id)}><FaTimes/></button>
        </li>
      ))) : (
        <p>no contacts</p>
      )}
      </ul> ) : (
        <ul className={css.ul}>
          {filteredContacts.map((con) => (
            <li className={css.li} key={con.id}>
              {con.name} : {con.phone} <button className={css.button} onClick={() => handleDelate(con.id)}><FaTimes/></button>
            </li>
          ))}
        </ul>

      )
  }
     </>
    )
}

export default ContactList