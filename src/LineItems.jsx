// now as the same prop drilling process , we maken a separate compontent from ListItems.jsx (ul --> li) --11.3
import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
const LineItems = ({itemss, handleCheck, handleDelete}) => {
  return (

                   <li className='item' /*key={itemss.id}*/>
                    {/* we mention key in ItemsList.jsx so we not need to recive the key here */}
                        <input 
                        type="checkbox"
                        // 1 onchange in event while clicking the checkbox
                        // now passing the id through the parameter but here we have to create a anonymous function to pass the itemss.id
                        onChange={() => handleCheck(itemss.id)}
                        checked = {itemss.checked}
                         />
           
                        <label 
                        // 5 this helps to strick out the task what we completed in todo app
                        style={(itemss.checked) ? {textDecoration: 'line-through'} : null}
                        /* 4 for double click to checkbox tick by coping the same function which we used */
                        onDoubleClick={() => handleCheck(itemss.id)}>{itemss.item}</label>
                        {/* <button>Delete</button>*/}
                        <FaTrashAlt 
                        role="button"
                        // 2 deleteing the todo activity
                        onClick = {() => handleDelete(itemss.id)}
                        tabIndex= "0"
                        // aria label is screen labeling technology which helps the developer to read about behid the scene code 11.6
                        aria-label={`Delete ${itemss.itemss}`}
                        />
                        
                    </li>
  )
}

export default LineItems