import React from 'react'


const Advices = (props) => {
  const {advice} = props.data 
  // https://api.adviceslip.com/#object-slip mentions that we need to use "advice" as key. Hence using props.data object & key advice or it can be done as below
  // const {data} = props & then in line h2 can mention as {data.advice} instead of {advice}
  
  return (
    <div>
      <h2>{advice}</h2>
    </div>
  )
}

export default Advices
