import React from "react";
import { useContext } from "react";
import {BiRecycle} from"react-icons/bi"
import {TbTrashX} from"react-icons/tb"
import { NoteContext } from "../../context/contex-provider";
function BinItem(props){
    const { note,setnote,settrash, trash, Delete, Add, Edit,Recycle,DeletePermanantly} = useContext(NoteContext);

    return(
        <div className="BinItem">
        
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <div className="BinIcons">
            <button data-tooltip="Recycle" > <BiRecycle onClick={()=>Recycle(props.id)} style={{ fontSize: 20 }}/></button>
            <button data-tooltip="Delete Permanantly"><TbTrashX onClick={()=>DeletePermanantly(props.id)} style={{ fontSize: 20 }}/></button>
            </div>
           
        </div>
        
    )
}

export default BinItem;