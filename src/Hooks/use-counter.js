import { useEffect, useState } from "react";


const useCounter = (forwards = true) => {
    
const [counter, setCounter] = useState(0);
      
        useEffect(() => {
        if(forwards === true) {
          const interval = setInterval(() => {
            if(forwards) {
            setCounter((prevCounter) => prevCounter + 1);}
            if(!forwards) {
            setCounter((prevCounter) => prevCounter - 1)
            }
          }, 1000);
          return () => clearInterval(interval);
        } 
       
          
        }, [forwards]);
        return counter
    }
export default useCounter;