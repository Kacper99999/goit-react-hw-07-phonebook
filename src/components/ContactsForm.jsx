import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { addContact } from "../redux/operations";
import { useDispatch , useSelector} from "react-redux";
import { getContacts } from "../redux/selectors";
import { nanoid } from "nanoid";
import Notiflix from "notiflix";




function ContactsForm (){
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");

  const handleAddContact = (event) => {
    event.preventDefault();
    const now = new Date()
    const form = event.target;
    if(name && phone) {
      let contactExists = contacts.some(con => con.phone === phone)
      if(!contactExists){
        dispatch(addContact({createdAt:now, name: name, phone: phone, id:nanoid()}))
      }
      else{
        Notiflix.Notify.failure("This phone number exists!");
      }
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

export default ContactsForm;