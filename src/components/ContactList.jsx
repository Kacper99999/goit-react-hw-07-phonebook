import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts, delateContact } from "../redux/operations";
import { getContacts, getFilter } from "../redux/selectors";
import { FaTimes } from "react-icons/fa";

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
      <ul>
      {contacts.length > 0 ? (
        contacts.map((con) => (
        <li key={con.id}>
          {con.name} : {con.phone} <button onClick={(e) => handleDelate(con.id)}><FaTimes/></button>
        </li>
      ))) : (
        <p>no contacts</p>
      )}
      </ul> ) : (
        <ul>
          {filteredContacts.map((con) => (
            <li key={con.id}>
              {con.name} : {con.phone} <button onClick={(e) => handleDelate(con.id)}><FaTimes/></button>
            </li>
          ))}
        </ul>

      )
  }
     </>
    )
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string
//     })
//   ).isRequired,
//   filter: PropTypes.string,
//   filteredContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ).isRequired,
//   removeContact: PropTypes.func,
// };

export default ContactList