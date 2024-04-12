import { useState } from "react";

export const Button = props => {
     // const[text] = props ; 
     const[count,setCount] = useState(0);
    function handlerButton()    {
        setCount(count+5);
       
    }  
    const resetCounter = () => {
        setCount(0);
      };
    
    return( 
        <div>
        <button onClick={handlerButton} style={{ marginRight: "20px",
                                                    backgroundColor: "green",
                                                    color: "white",
                                                    border: "none", 
                                                    padding: "12px",
                                                    borderRadius: "10px" 
                                                }}>  Iniciar 
        </button>
        <button onClick={resetCounter}style={{   marginRight: "20px",
                                                 backgroundColor: "red   ",
                                                 color: "white", 
                                                 border: "none", 
                                                 padding: "12px",
                                                  borderRadius: "10px"
                                             }}>     Resetear
         </button>
         <div style={{paddingTop:"25px",
                     fontSize:"50px",
                     textAlign:"center"
                     }}> {count}</div>
         </div> 
    );
} 