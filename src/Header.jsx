import React from 'react'

const  Header = ({title}) => {
  return (
    <header>
      {/* props inserting */}
        <h1>{title}</h1>
     </header>
  )
}

// default value when props doesnt work in somecases, like fetching the data from api
Header.defaultPages = {
  title: "To Do List"
  // CH-14 
  // title:"Courses List"
}
export default Header