import { useContext, useState } from 'react';
import "./home.css"
import Note from './note';
import NewNote from './newNotes';
import "./note.css"
import { NoteContext } from '../../context/contex-provider';

function Home() {
  
  const{note,trash,Delete,Add}=useContext(NoteContext);
  return (
    <div>
      <Note />
      <div className='NewNoteContainer'>
        {note.map((e, index) => {
        
          return (
            <NewNote
              time={e.date}
              id={index}
              title={e.title}
              content={e.content}
            />
          )
        })}
      </div>

    </div>
  );
}

export default Home;
