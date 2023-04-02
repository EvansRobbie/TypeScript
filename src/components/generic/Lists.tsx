import React from 'react'

interface SuperHero {
    firstName: string
    lastName: string
}
interface ItemProps<T>  {
    items: T[]
    onClick: (value:T) => void
}
const Lists = <T extends SuperHero>({items, onClick}: ItemProps<T>) => {
  return (
    <div>
        <h2>List Items</h2>
        {items.map((item, index)=>{
            console.log(item)
            return(
                <div key={index} onClick={()=>onClick(item)}>{item.firstName}</div>
            )
        })}
    </div>
  )
}

export default Lists