import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Button } from './components/Button'
import { WapperList } from './components/WrapperList'
import { List } from './components/List'

import { Parrafo } from './components/RandomComponent'
import { CompWithProps } from './components/CompWithProps'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)  
  //  const buttonText ="Count:";
  const inputText = "    ";

   return (
    <>
       {/* <h1>Generador de numeros </h1>
      <Button text={buttonText}/>   */}

{/* <Parrafo />  */}
<CompWithProps text={inputText} outputElement="p" />

       {/* <WapperList/> */}

     {/* <WapperList>
     <List/>
     
     </WapperList> */}
   </>
   )
}

export default App
