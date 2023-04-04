import { useEffect, useState } from "react";


const useCounter = (forwards = true) => {
    
const [counter, setCounter] = useState(0);
      
        useEffect(() => {
        if(forwards === true) {
          const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
          }, 1000);
          return () => clearInterval(interval);
        } else { 
          const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter -1)
          }) 
          return () => clearInterval(interval);}
          
        }, []);
        return counter
    }
export default useCounter;