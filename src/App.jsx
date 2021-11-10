import React, {useEffect, useState} from 'react'
import Advices from './components/Advices/Advices'

const App = () => {
  const [isTrue, setIsTrue] = useState(true); 
  useEffect(() => {
    console.log("load");
  }, []);

  return (
    <button onClick={() => setIsTrue(!isTrue)}>Click Me</button>
  )
}

export default App
