import { createContext, useState } from "react";

export const NoteContext = createContext(null);

export const NoteContextProvider = (props) => {
    const [note, setnote] = useState([])
    const [trash, settrash] = useState([])
    // const [Starcolor, setStarColor] = useState('#f5f1f1');
    // const [isImportant, setIsImportant] = useState(false);
    // const [importantItems, setImportantItems] = useState([]);
  

    function Add(newnote) {
    setnote((preVNote) => {
      return (
        [...preVNote, newnote]
      )

    })
  }
  

    function Delete(nodeId) {
        const deletedNote = note[nodeId];
        const newNotes = note.filter((item, index) => index !== nodeId);
        setnote(newNotes);
        settrash(prevTrash => [...prevTrash, deletedNote]);
        // console.log("trash",JSON.stringify(trash));
        
    }
    
    function Edit(nodeId, title, content) {
      // console.log(nodeId);
      setnote(prevNote => {
        return prevNote.filter((item, index) => {
          if (index === nodeId) {
            item.title = title;
            item.content = content;
          }
          return item;
        });
      });
    }
    function Recycle(id){
      const Recycleitems=trash[id];
      // console.log(Recycleitems)
      setnote((prevNote)=>
      [...prevNote,Recycleitems])
      const trashnotes = trash.filter((item, index) => index !== id);
      settrash(trashnotes);

      // console.log(note);
  }
  function DeletePermanantly(id){
    if (window.confirm("Are you sure you want to permanently delete this item?")) {
    const PermanantDelete = trash.filter((item, index) => index !== id);
    settrash(PermanantDelete);
  }}
    const contextValue = {
        note,
        trash,
        Delete,
        Add,
        Edit,
        setnote,
        settrash,
        Recycle,
        DeletePermanantly
       
    };

    return (
        <NoteContext.Provider value={contextValue}>
            {props.children}
        </NoteContext.Provider>
    );
};

