import React from 'react'

type GreetProp ={
    name: string
    messageCount: number
    isLoggedIn: boolean
}
const Greet = ({name, messageCount, isLoggedIn}: GreetProp) => {
  return (
    <div>
        {isLoggedIn ?  <h2>Welcome {name}. You have {messageCount} unread messages.</h2>: <h2>Welcome Guest</h2> }
       
    </div>
  )
}

export default Greet