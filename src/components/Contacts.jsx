import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { addContact } from "../redux/operations";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";



function Contacts (){
  const dispatch = useDispatch();
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");

  const handleAddContact = (event) => {
    event.preventDefault();
    const now = new Date()
    const form = event.target;
    if(name && phone) {
      dispatch(addContact({createdAt:now, name: name, phone: phone, id:nanoid()}))
    }
    form.reset();
  }
  

  return(
      <>
        <form onSubmit={handleAddContact}>
          <input type="text" placeholder="Name" onChange={e=>setName(e.target.value)}/>
          <input type="number" placeholder="Phone" onChange={e=>setPhone(e.target.value)}/>
          <button type="submit">ADD CONTACT</button>
        </form>
      </>
  )
}

// Contacts.propTypes = {
//   handleChange: PropTypes.func,
//   handleChange2: PropTypes.func,
//   handleSubmit: PropTypes.func
// }

export default Contacts;