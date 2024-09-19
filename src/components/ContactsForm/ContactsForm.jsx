import React from "react";
import { useState } from "react";
import { addContact } from "../../redux/operations";
import { useDispatch , useSelector} from "react-redux";
import { getContacts } from "../../redux/selectors";
import { nanoid } from "nanoid";
import Notiflix from "notiflix";
import css from "./ContactsForm.module.css";




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
        <form className={css.form} onSubmit={handleAddContact}>
          <input className={css.input} type="text" placeholder="Name" onChange={e=>setName(e.target.value)}/>
          <input className={css.input} type="number" placeholder="Phone" onChange={e=>setPhone(e.target.value)}/>
          <button className={css.button} type="submit">ADD CONTACT</button>
        </form>
      </>
  )
}

export default ContactsForm;