import { logicalExpression } from "@babel/types";
import React, { useState } from "react";

const Description = () => {
  const [state, setState] = useState({
    price: "$25.00",
    description: "Cord lace",
  });

  const handleClick = () => {
    setState({
      ...state,
      description: "Knee-length dress",
      price: "$25.00",
    });
  };
  return <div>This is {state.description}. </div>;
};
