import React, { useContext } from "react";
import { AppContext } from "../../App";
import View from "../../components/view/View";

export default function Counter() {
  //   const [counterValue, setCounterValue] = useState(0);
  const { counterValue, setCounterValue } = useContext(AppContext);
  const increment = () => {
    setCounterValue(counterValue + 1);
  };
  const decrement = () => {
    setCounterValue(counterValue - 1);
  };

  return (
    <div className="border border-purple-600 m-20 shadow rounded p-4">
      <button
        class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => increment()}
      >
        Increment
      </button>
      <View counterValue={counterValue} />
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => decrement()}
      >
        Decrement
      </button>
    </div>
  );
}
