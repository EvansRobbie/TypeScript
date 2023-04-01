import React from 'react'

type ButtonProps = {
    handleClick: (events: React.MouseEvent<HTMLButtonElement>, id: number) =>void
}

const Button = ({handleClick}:ButtonProps) => {
  return (
   <button onClick={(events)=>handleClick(events, 1)}>Cllick</button>
  )
}

export default Button