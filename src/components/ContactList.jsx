import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../redux/operations";
import { getContacts } from "../redux/selectors";

function ContactList(){
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
  console.log(contacts);
    return(
     <>
      <ul>
      {contacts.length > 0 ? (
        contacts.map((con) => (
        <li key={con.id}>
          {con.name}:{con.phone}
        </li>
      ))) : (
        <p>no contacts</p>
      )}
      </ul>
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