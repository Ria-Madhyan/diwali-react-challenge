import React, {useEffect, useState} from 'react'
import Advices from './components/Advices/Advices'

const App = () => {
  const [changeAdvice, setChangeAdvice] = useState(true); 
  const [advice, setAdvice] = useState(null)

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(res => res.json())
      .then(data => setAdvice(data))      
      .catch(err => console.log(err))
  }, [changeAdvice]);

  return (
    <>
    <button onClick={() => setChangeAdvice(!changeAdvice)}>Click Me</button>
    {advice && <Advices data={advice}/>}
    
    </>
  )
}

export default App
