import React, { useState } from 'react';
import styles from './CreateArea.module.scss'

function CreateArea() {

    const [note, setNote] = useState({
        title: "",
        content: "",
    })

    function handleChange (event){
         const { name, value } = event.target;

         setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };

         })
    }

  return (
    <div>
        <form>
            <input 
                name="title" 
                onChange={handleChange}
                value={note.title} 
                placeholder="Title of your note"
            />
            <textarea 
                name="content" 
                onChange={handleChange} 
                value={note.content} 
                placeholder="Your note here" 
                rows="3"
            />
            <button>Add</button>
        </form>

    </div>
  )
}

export default CreateArea