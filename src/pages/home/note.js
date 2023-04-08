import React, { useState,useContext } from "react";
import "./note.css"
import { NoteContext } from '../../context/contex-provider';

function Note(props) {
  const{trash,Delete,Add}=useContext(NoteContext);
  const [note, setNote] = useState({
    title: "",
    content: "",
    date: null,
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
        date: new Date(),
      };
    });
  }

  function submitNote(event) {
    Add(note)
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default Note;
