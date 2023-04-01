import React from 'react'

type StyleProps ={
    styles: React.CSSProperties
}
const Container = ({styles}: StyleProps) => {
    // style props
  return (
    <div style={styles}>Text Goes Here</div>
  )
}

export default Container