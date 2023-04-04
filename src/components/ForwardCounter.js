
import useCounter from "../Hooks/use-counter";

import Card from "./Card";


// state created inside useCounter becomes tied to this component: 

const ForwardCounter = () => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
