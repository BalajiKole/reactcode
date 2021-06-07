import React from 'react'

const UserContext = React.createContext("tqPP")

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

// set default value const UserContext = React.createContext("TQPP") and in app.js simple call  <ComponentC /> it will work
// default value only use doesnot matching above Provider in the component tree 

// context type properties 
 export default UserContext;