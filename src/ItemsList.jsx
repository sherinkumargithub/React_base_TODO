import React from 'react'
// after importing the ItemsList.jsx file here as the same we importing the icon file 
// 11.3 now these import file are importing into the LineItems.jsx file
// import { FaTrashAlt } from "react-icons/fa";
import LineItems from './LineItems';

// now linking the Content.jsx file using destructuring method
const ItemsList = ({items, handleCheck, handleDelete}) => {
  return (
    // prefer sematic tag all the time
            <ul>
                {items.map((itemss) => (


// ---11.3 now furter doing the same thing , creating a component for <li> and making another prop drilling , so we coping the li to the LienItems.jsx

                     <LineItems
                    // 11.4 --  here you have to notice that in  LineItems itemss is mapping the item , so here we have declare itemss insted of intem.
                        itemss = {itemss}
                        // 11.5 -- here console throwing the error due to key, we didnt mention key here 
                        key={itemss.id}
                        handleCheck = {handleCheck}
                        handleDelete = {handleDelete}
                      />          
                    // <li className='item' key={itemss.id}>
                    //     <input 
                    //     type="checkbox"
                    //     // 1 onchange in event while clicking the checkbox
                    //     // now passing the id through the parameter but here we have to create a anonymous function to pass the itemss.id
                    //     onChange={() => handleCheck(itemss.id)}
                    //     checked = {itemss.checked}
                    //      />
           
                    //     <label 
                    //     // 5 this helps to strick out the task what we completed in todo app
                    //     style={(itemss.checked) ? {textDecoration: 'line-through'} : null}
                    //     /* 4 for double click to checkbox tick by coping the same function which we used */
                    //     onDoubleClick={() => handleCheck(itemss.id)}>{itemss.item}</label>
                    //     {/* <button>Delete</button>*/}
                    //     <FaTrashAlt 
                    //     role="button"
                    //     // 2 deleteing the todo activity
                    //     onClick = {() => handleDelete(itemss.id)}
                    //     tabIndex= "0"/>
                    // </li>

                ))}
            </ul>
  )
}

export default ItemsList