import React from 'react'


const Advices = (props) => {
  const {advices} = props.data
  return (
    <div>
      <h2>{advices}</h2>
    </div>
  )
}

export default Advices
