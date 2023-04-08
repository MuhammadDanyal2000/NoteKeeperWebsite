import React, { useState, useContext } from "react";
import { FaRegEdit } from 'react-icons/fa';
import { TbTrash } from 'react-icons/tb';
import { FaRegStar } from 'react-icons/fa';
import { NoteContext } from "../../context/contex-provider";

function NewNote(props) {
    const { note, trash, Delete, Add, Edit } = useContext(NoteContext);

    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);
    const [editing, setEditing] = useState(false);
    const [color, setColor] = useState("");
    const [Starcolor, setStarColor] = useState('#f5f1f1');
    const [isImportant, setIsImportant] = useState(false);
    const [importantItems, setImportantItems] = useState([]);
   

    function handleClick(Starid) {
        setIsImportant(!isImportant); 
        const ImportantNotes = note[Starid];


        if (isImportant === true) {
            
            setImportantItems(prevItems => prevItems.filter(item => item !== ImportantNotes));
            setStarColor("#ffc5dd")


        } else {
            
            setImportantItems(prevItems => [...prevItems, ImportantNotes]);
            setStarColor("#f5f1f1")

        }
        console.log(importantItems)
    }



    const handleColorChange = (event) => {
        setColor(event.target.value);
    };


    function handleTitleChange(e) {
        setTitle(e.target.value)
    }
    function handleContentChange(e) {
        setContent(e.target.value)
    }
    function EditNote() {
        setEditing(true)
    }
    function SaveNote() {
        setEditing(false)
        // props.OnEdit(props.id, title, content);
        Edit(props.id, title, content);
    }
    // function DeleteNote() {
    //     props.OnDelete(props.id)
    //     // console.log(props.id);
    // }

    return (
        
        
            <div className="newnote" style={{ backgroundColor: color, position: 'relative' }}>
                <p id="time" style={{ position: 'absolute', top: -35, left: 1, fontSize: 'small', fontStyle: "italic", color: ' #534e53' }}>
                    {props.time.toLocaleString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    })}</p>
                {editing ?

                    <input
                        style={{ backgroundColor: color }}
                        placeholder="Title..."
                        name="title"
                        onChange={handleTitleChange}
                        value={title}

                    /> :
                    <h3>{props.title}</h3>
                }
                {editing ?
                    <textarea
                        style={{ backgroundColor: color }}
                        placeholder="Take Note..."
                        name="content"
                        onChange={handleContentChange}
                        value={content}

                    /> :
                    <p>{props.content}</p>

                }<div className="buttons">
                <div className="bttn">
                    <button data-tooltip="Edit" onClick={EditNote}><FaRegEdit style={{ fontSize: 20 }} /></button>
                    <button data-tooltip="Delete"><TbTrash onClick={() => Delete(props.id)} style={{ fontSize: 20 }} /></button>
                    <button data-tooltip="Important"><FaRegStar onClick={() => handleClick(props.id)} style={{ fontSize: 20 }} /></button>

                </div>
                <div className="colors">
                    <button className="purple" value={"#AA77FF"} onClick={handleColorChange}></button>
                    <button className="pink" value={"#ffc5dd"} onClick={handleColorChange}></button>
                    <button className="blue" value={"#a7d2ff"} onClick={handleColorChange}></button>
                </div>
                </div>
                <button className={editing ? "save" : "li"} onClick={SaveNote}>Save</button>




            </div>
    )
}

export default NewNote;
// "#669751","#ffc5dd","#a7d2ff"
