import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/Button'
import { WapperList } from './components/WrapperList'
import { List } from './components/List'

import { Parrafo } from './components/RandomComponent'


function App() {
  // const [count, setCount] = useState(0)  
  //  const buttonText ="Count:";
   return (
    <>
       {/* <h1>Generador de numeros </h1>
      <Button text={buttonText}/>   */}

<Parrafo /> 


       {/* <WapperList/> */}

     {/* <WapperList>
     <List/>
     
     </WapperList> */}
     

   


    </>
   )
}

export default App
