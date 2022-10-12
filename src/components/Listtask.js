import React from "react";
import Checkbox from './Checkbox.js';


const List = () => {
    return(
        <ul className="privilegesList subLists">
            <li><Checkbox />clean</li>
            <li><Checkbox />grocery</li>
            <li><Checkbox />invoice</li>
        </ul>
    );
};

export default List;