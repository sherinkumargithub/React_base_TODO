// Chapter12
// here we creating a form like button to add the activites based on user need and expirence
// React_Controled components

import React from 'react'
// importing icons
import { FaPlus } from 'react-icons/fa'
// chapter14 "useRef" -- it helps to move back to the autofocus on input while clicking the plus button in which near to the plus button.It heps to refer back to original position on the pointor and also it doesnt focus as longer in the plus sybmbol.
import { useRef } from 'react'
// (12.4)reciving the data through pasing the destrucured function inside a parameter 
const AddItems = ({newItem, setNewItem, handleSubmit}) => {
  // creating a variable for the declaration of useRef (14.1)
  const inputRef = useRef()
  return (
    // 12.6
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItems">Add Activity</label>
        <input 
          // 14.2
          ref={inputRef}
           autoFocus
           id='addItems'
           placeholder='Add Items'
           type="text" 
           required
          // (12.5) now giving a value as empty we know that now linkking the value to the newItem and setNewItem.
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <button 
           type='submit' 
           aria-label='Add Items'
          //  14.3
          onClick={(e)=> inputRef.current.focus()}
        > 
            <FaPlus/>     
        </button>
    </form>
  )
}

export default AddItems
// styling the component in App.css(refer that)