// This component helps to filter/search the specfic activity you searching for
import React from 'react'
// 12.11.3 reciving the serach and setSerrach ,descructuring
const SearchItem = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
            id='search'
            role='searchbox'
            placeholder='Search Items'
            type="text"
            //12.11.4 defining the searrch and setSearch in our input
            vaue ={search}
            onChange={(e) => setSearch(e.target.value)}

        />
    </form>
  )
}

export default SearchItem