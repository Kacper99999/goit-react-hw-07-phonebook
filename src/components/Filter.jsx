import React from "react";
import { useState , useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector , useDispatch } from "react-redux";
import { getFilter } from "../redux/selectors";
import { filterContacts } from "../redux/filtersSlice";


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

// Filter.propTypes = {
//     search : PropTypes.func
// }

export default Filter;