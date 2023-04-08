import React, { useContext } from "react";
import "./important.css"
import {NoteContext} from "../../context/contex-provider";
import ImportantItem from "./importantItem";

function Important(){
    const{trash}=useContext(NoteContext);
    

    return(
        <div className="important">
            
        </div>
    )
}

export default Important;