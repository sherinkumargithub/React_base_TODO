import React from 'react'
// 5useState is hook/method/function inbuilt in react
// import { useState } from 'react';
// icon from npm react icon package
// import { FaTrashAlt } from "react-icons/fa";
// inserting the icon like a component

// 11.2 ItemsList file importing
import ItemsList from './ItemsList';

// THIS COMMANDED CODE INCLUDES THE CONCEPT OF CLICK EVENTS AND USESTATE HOOK ----------------------------------------
// const Content = () => {
//     // again on 6 for useState
//     const [name, setName] = useState("Make");

//     function handleNameChange(){
//         const names =["Earn", "Grow", "Give"];
//         const int = Math.floor(Math.random()*3);
//         // return names[int];
//         setName(names[int])
//     }
//     // passing without parameter, 
//     const handleClick = () => {
//         console.log('You have to achive failure')
//     }
//     // passing with parameter and used for double click event 
//     const handleClick2 = (name) => {
//         console.log(`You have to achive failure ${name}`)
//     }
//     // event handling the object
//     const handleClick3 = (e) =>{
//         console.log(e.target.innerText)
//     }
//     // useState
//     // const array = useState()
//     const [count, setCount] = useState(99)
//     // increment function
//     function incrementFunctin(){
//         // setCount(count + 1) the logic doesnt work i you repeat it again and again like moving to next 2 consicutive numbers
//         setCount((previousCount) => {return previousCount + 1})
//         // setCount((previousCount) => {return previousCount + 1})
//     }
//     // same as decrement function
//     function decrementFunction(){
//         setCount((previousCount) => {return previousCount - 1})
//         // or
//         setCount(previousCount => previousCount -1)
//     }


//   return (
//     <main>
//         {/*4 on double click here in p */}
//     {/* <p onDoubleClick={() => handleClick2('sherin')}>Lets {handleNameChange()} Money</p> */}
//     {/*1with out parameter  */}
//     {/* <button onClick={handleClick}>WIN</button> */}
//     {/*2 with parameter */}
//     {/* <button onClick={() => handleClick2('Sherin')}>Win</button> */}
//     {/* 3event object using (e) */}
//     {/* <button onClick={(e) => handleClick3(e)}>Enama kanu</button> */}

//     {/* 5useState */}
//     {/* <p>Lets grow money</p>
//     <button>Stock price</button>
//     <button onClick={decrementFunction}>-</button>
//     <span>{count}</span>
//     <button onClick={incrementFunctin}>+</button> */}

//     {/* 6 changing word onclick */}
//     <p>Lets {name} Money</p>
//     <button onClick={handleNameChange}>Changing</button>

//     </main>
//   )
// }







// KEYS AND VALUES ---------------------------------------------------
// now receving the properties using destructuring of object in props
const Content = ( {items, handleCheck, handleDelete} ) => {

// CH - 11 PROPS AND KEYS SO NOW I COPY THIS AND PASTE IT ON THE APP.JS NOW I COMMAND IT ALL    

    // // useState - because here the to do list constently change their state in intems consist inside the list.
    // const [items, setItems] = useState(
    //     [
    //         {   id:1,
    //             checked: true,
    //             item: "Practice Coding"
    //         },
    //         {   id:2,
    //             checked: false,
    //             item: "Eat Healthy"
    //         },
    //         {   id:3,
    //             checked: false,
    //             item: "Going to the Gym"
    //         }

    // ])
    // // 1 onchange event
    // const handleCheck = (id) => {
    //     // console.log(`id: ${id}`)
    //     const listItems = items.map((itemss) =>
    //         // here refering the keys of a item
    //         itemss.id === id ? {...itemss, checked: !itemss.checked} : itemss
    //     )
    //     setItems(listItems)

    //     // for the loading purpose of a new state of list we have to store the existing state of list in our localstorage.setitem(key, value)
    //     // here the setItem was different refer js
    //     localStorage.setItem("todo_list", JSON.stringify(listItems))
    // }


    // // 2 handle delete of trash in todo activity(items)
    // const handleDelete = (id) => {
    //     // here we use the same vaariable beacuse all are inside the one list ,which doest cause any error
    //     const listItems = items.filter((itemss) => 
    //         itemss.id !== id 
    //     )
    //     setItems(listItems)
    //     //3 here we can store the state my calling the local storage
    //     localStorage.setItem("todo_list", JSON.stringify(listItems))
    // }


    // for the default data of items we passing the parameter on array inside the method called useState.
/*
    // map - here we can sort inherit the array by passing the parapmenter as a fuction so its also callled HOF (Higer order function) - this type of methods are the good aleternate to the loop and conditional statement
    // mapping the object(items) inside the array eg
    const numbers = [-4, -7 ,0,1,5,7,8]
    // const itemss = numbers.map(n => ({numbers:n}))
    // console.log(itemss)

    // filter - same as map and also her we can giv a conditional statement inside the function parameter.
    // const itemss = numbers.filter(n => n>=0)

    // and also we can combine and give both the method 
    const itemss = numbers.filter(n => n<=0).map(n => ({numbers:n}))
    console.log(itemss)
*/


    return(
        //17.4.2 -- now we declarin the fragement tag insted of main tag so the we can wrrite a code for displaying the error information in a content display
        <>
            { /* 6 to print the list is empty while the items all are delted we ,we using a conditional ternary operrator to buid a logic that when their is a length in list mean print it otherwise else print 'your list is empty */ }
            {(items.length) ? (

                // now remember that all the logic inside the  <ul> tag was copied to the ItemList.jsx file -----11.2 
                // 11.2 -- and  now as the like App.js file now defineing the ItemsList component here

                <ItemsList 
                   items = {items}
                   handleCheck = {handleCheck}
                   handleDelete = {handleDelete}
                />


            // <ul>
            //     {items.map((itemss) => (
            //         <li className='item' key={itemss.id}>
            //             <input 
            //             type="checkbox"
            //             // 1 onchange in event while clicking the checkbox
            //             // now passing the id through the parameter but here we have to create a anonymous function to pass the itemss.id
            //             onChange={() => handleCheck(itemss.id)}
            //             checked = {itemss.checked}
            //              />
           
            //             <label 
            //             // 5 this helps to strick out the task what we completed in todo app
            //             style={(itemss.checked) ? {textDecoration: 'line-through'} : null}
            //             /* 4 for double click to checkbox tick by coping the same function which we used */
            //             onDoubleClick={() => handleCheck(itemss.id)}>{itemss.item}</label>
            //             {/* <button>Delete</button>*/}
            //             <FaTrashAlt 
            //             role="button"
            //             // 2 deleteing the todo activity
            //             onClick = {() => handleDelete(itemss.id)}
            //             tabIndex= "0"/>
            //         </li>

            //     ))}
            // </ul>
            ) : (
                <p>Your list of Activity is empty</p>
            )
            }
        </>
    )
}



 

export default Content