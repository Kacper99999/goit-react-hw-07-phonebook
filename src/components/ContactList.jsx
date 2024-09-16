import React from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../redux/operations";
import { getContacts } from "../redux/selectors";

function ContactList(){
  const contacts = useSelector(getContacts);
    return(
     <>
      <ul>
      {contacts.map((con) => {
        <li key={con.id}>
          {con.name}:{con.number}
        </li>
      })}
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