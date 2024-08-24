// import React from 'react'
// Chapter 18 -- CRUD operation
// here in this apiRequest file helps to sync our backend json to the server side
// so that if we create a new to-do lsit mean it will automatically save in a backed json server , so that we can easily CREATE a file. 

const apiRequest = async (url = '', objectObj = null, errMess = null ) => {
    // url heps to read, objectObj helps to create
    try{
        const response = await fetch(url, objectObj)
        if(!response.ok) throw Error ('Please reload the app')
    }
    catch(err){
        errMess = err.Message
    }
    finally{
        return errMess
    }
}

export default apiRequest