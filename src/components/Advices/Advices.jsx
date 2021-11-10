import React from 'react'


const Advices = (props) => {
  const {slip} = props.data
  // https://api.adviceslip.com/#object-slip mentions that we need to use "advice" as key which is under object slip. Hence assigning slip to props.data object & then using slip.advice (as advice is the key) 
  console.log(slip.advice);
  return (
    <div>
      <h2>{slip.advice}</h2>
    </div>
  )
}

export default Advices
