import React from "react";
import { useState , useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filtersSlice";
import css from "./Filter.module.css"


function Filter(){
    const [filter, setfilter] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterContacts(filter));
    },[filter])

    return(
        <>
        <input className={css.input} type="text" placeholder="Find contact" onChange={(e) => setfilter(e.target.value)}/>
        </>
 )
}

export default Filter;