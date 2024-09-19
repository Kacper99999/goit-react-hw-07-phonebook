import React from "react";
import { useState , useEffect } from "react";
import { useDispatch } from "react-redux";
import { filterContacts } from "../../redux/filtersSlice";


function Filter(){
    const [filter, setfilter] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterContacts(filter));
    },[filter])

    return(
        <>
        <input type="text" onChange={(e) => setfilter(e.target.value)}/>
        </>
 )
}

export default Filter;