// import logo from './logo.svg';
// import './App.css';

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
// css styles
import './todo.css'
import { useEffect, useState } from 'react';
import AddItems from "./AddItems";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";

function App() {
  // chapter 17 -- creating a API url for the local host
  const API_URL = 'http://localhost:3500/items';

  // Props and prop drilling chapter 11 copied code from content.jsx

  // useState - because here the to do list constently change their state in intems consist inside the list.
  const [items, setItems] = useState(
    // 12.10 here we trying to maintain the added item by the user input even though the page was refreshed
    // 12.10.1 so for that purpose now we are delete/command the default list of items.

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

// ]

// 12.10.3 now to fetch the local storage data to print the user listed value, we pasing the JSON parse inside the useState as the parapemeter.
// due to ch 15,16 this json storage was shifted to a useEffect hook ,ref note
// JSON.parse(localStorage.getItem('todo_list'))
[]
);

// chapter 12.1 creating a useState for the change in activity inside a addItem file by the user.
// here the default state is empty
const [newItem, setNewItem] = useState('')

// 12.11.1 now creating useState for the changes while searching for the item
const [search, setSearch] = useState('')

// ch 17.3.1 -- handling the errors,so we create useState variable for the handling purpose
const [fetchError, setFetchError] = useState(null)

// ch 17.5.1 -- now creating a useState for the loading purpose
const [isLoading, setIsLoading] = useState(true)

// chp 15,16 useEffect and local storage method to define
useEffect(
  () => {
    // ch 17
    // JSON.parse(localStorage.getItem('todo_list'))

    // ch17.1 to fetch the url, here async concept uses 
    const fetchItems = async () =>{
      try{
        const response = await fetch(API_URL);
        // console.log(response)
        // ch 17.3.2 now setting the error based on our condition, if the api was not recived
        if (!response.ok) throw Error("Data not recived");
        const listItems = await response.json();
        console.log(listItems)
        setItems(listItems)

        // 17.3.3
        setFetchError(null)
      }
      catch (err){
        // console.log(err.stack)
        // 17.3.4
        setFetchError(err.message)
      }
      // 17.5.2 -- finally concept in try, catch method helps to display the final solution for the function
      finally{
        setIsLoading(false)
      }
    }
    // function call
    // 17.4 --- time delay while loading the page
    setTimeout(()=>{
    (async ()=> await fetchItems())()
  }, 2000)
  }, []
)

// (12.9) very important portion to add our enterer item in our form to our listed default item in our list.
// refer ch 18 -- doing the async here,
const addItem = async (item) => {
  //12.9.1 generate unique id -- to make our id unique -- i have little bit confusion in this part
  const id = items.length ? items[items.length -1].id +1 : 1;
  // 12.9.2 creating a new item in the same structure as listItems ---- creating a variable which have to be in the same structure of listItems (a array)
  const addNewItem = {id, checked:false, item}
  //12.9.3 now linking/join our new item in our existing array item
  const listItems = [...items, addNewItem]

  //12.9.4 update state an our local storage ----- here we go , now we can set our adding items through setItem , useState option
  setItems(listItems)

  // ch17 fetch api --here these local storage is not needed cause of our api storage
  // localStorage.setItem("todo_list", JSON.stringify(listItems))

  // chapter 18 crud operation refer note and apiRequest.js file
  // ch 18.1 - helps to CREATE AND READ
  const postOptions = {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(addNewItem)
    }
    
    // ch 18 , actual work to creat a file and syncing the files
    // here we putting async and await 
    const result = await apiRequest(API_URL,postOptions)
    if(result) setFetchError(result)
}
 


// 1 onchange event

const handleCheck = async (id) => {
    // console.log(`id: ${id}`)
    const listItems = items.map((itemss) =>
        // here refering the keys of a item
        itemss.id === id ? {...itemss, checked: !itemss.checked} : itemss
    )
    setItems(listItems)

    // for the loading purpose of a new state of list we have to store the existing state of list in our localstorage.setitem(key, value)
    // here the setItem was different refer js
    // localStorage.setItem("todo_list", JSON.stringify(listItems))


    // 18.2 - CRUD - Here in this we can see tha UPDATE option thorugh this handle check
    // these below updateItem helps to fetch the single item from the list
    const updateItem = listItems.filter((item) => item.id===id)
    // now the same as create and read for the update
    const updateOptions = {
      method: 'PATCH',
      headers: {
      'Content-Type': 'application/json'
      },
      // the code inside the body helps to denote the particular checkbox in the list
      body: JSON.stringify({checked: updateItem[0].checked})
      }
      
      // ch 18 , actual work to creat a file and syncing the files
      // here we putting async and await
      // for the more specifies the id we do reqUrl
      const reqUrl = `${API_URL}/${id}` 
      const result = await apiRequest(reqUrl,updateOptions)
      if(result) setFetchError(result)

}


// 2 handle delete of trash in todo activity(items)
// adding async here for the 18 ch need
const handleDelete = async (id) => {
    // here we use the same vaariable beacuse all are inside the one list ,which doest cause any error
    const listItems = items.filter((itemss) => 
        itemss.id !== id 
    )
    setItems(listItems)
    //3 here we can store the state my calling the local storage
    localStorage.setItem("todo_list", JSON.stringify(listItems))


    // 18.3 -- DELETE 
    const deleteOptions = {
      method: 'DELETE'
    }
    const reqUrl = `${API_URL}/${id}` 
    const result = await apiRequest(reqUrl,deleteOptions)
    if(result) setFetchError(result)
}

// ch 12.2 handling the submit/ the plus sybloled button , which helps to add the item inside the list while user write and submit .
const handleSubmit = (e) =>{
  // (12.7)to avoid the default behaviour to reload 
  e.preventDefault();
  // console.log('submitted')
  //{12.8)} if required attribute not mentioned mean --- and also now after declating some activity by the user and press enter mean again the input label should be empty then only the user can able to add more activities based on their needs
  if(!newItem) return;
  console.log(newItem)
  // 12.9.5 (function call) to update a new added item in our list
  addItem(newItem)
  // now after that adding a new item again
  setNewItem('')
}


  return (
    <div className="App">
      {/* props*/}
      <Header title= "Courses List"/>
      {/* now propdrilling through the properties of content.jsx */}
      {/* chapter 12 --- AddItems.jsx file - declaring the component */}
      <AddItems 
          newItem = {newItem}
          setNewItem = {setNewItem}
          handleSubmit = {handleSubmit}
      />
      {/* chapter 12.11 adding search component */}
      <SearchItem
      // 12.11.2 declearing the search and setSearrch variables
      search ={search}
      setSearch = {setSearch}
      />

      {/* 17.4 -- now defing the main tag here , so that we can show our api error to the client , what the error made it the site */}
      <main>
        {/* 17.4.3 -- now inside the main tag we deploying the error to the clint */}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}

        {/* 17.5.3 as the same befor , we defing the loading time in p element*/}
        {isLoading && <p>Loading...</p>}

        {/* 17.6 -- TO avoid the overlaping content , list of activity is empty in screen while loading . {!isLoading && <content/>}*/}
        {!isLoading && !fetchError && 
          <Content 
            // items = {items}
            // setItems = {setItems}

            // 12.11.5 now for the searchItem component ,to display the data what we fetch or write
            items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}

            handleCheck= {handleCheck}
            handleDelete = {handleDelete}
          />
        }
      </main>
      {/* now same comes to footer */}
      <Footer  
      length = {items.length}
      // we can name kind name ,here the length is a method with denotes the length of the items
      />
    </div>
  )
  // function
  // function handleNameChanges(){
  //   const names = ["Ragini", "Sherifa", "Dharshini"]
  //   const int = Math.floor(Math.random()*3);
  //   return names[int]
  // }
  // return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //       {/* Sherin Kumar */}
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Sherin You Can!
    //     </a>
    //   </header>
    // </div>
    
  //   <div>
  //     I am Sherin Kumar 
  //     <p>My lover name is {handleNameChanges()} ,but I lose here anyway..</p>
  //     {/* random names change in "sherin" */}
  //   </div>
  // );
}

export default App;
