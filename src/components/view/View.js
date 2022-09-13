import React from "react";

export default function View({ counterValue }) {
  console.log(counterValue);
  return <div>Counter Value:{counterValue}</div>;
}
