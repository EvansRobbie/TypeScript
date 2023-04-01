import React from 'react'

type PersonList ={
    names:{
        firstName: string
        lastName: string
    }[]
}
const PersonList = ({names}:PersonList) => {
//    console.log(names)
  return (
    <div>
        {names.map((name, index)=>{
            return (
                <h2 key={index}>{name.firstName} {name.lastName}</h2>
            )
        })}
    </div>
  )
}

export default PersonList