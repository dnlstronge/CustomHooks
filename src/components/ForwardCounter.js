
import useCounter from "../Hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  let counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
