import React from 'react'

type HeadingProp = {
    children: string
}
const Heading = ({children}: HeadingProp) => {
  return (
    <div>{children}</div>
  )
}

export default Heading