import React from 'react'

type Person ={
    name:{
        firstName:string
        lastName: string
    }
}
const Person = ({name}: Person) => {
    // console.log(name.firstName)
  return (
    <div>
        
        {name.firstName} {name.lastName}
    </div>
  )
}

export default Person