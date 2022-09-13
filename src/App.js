import "./App.css";
import Counter from "./pages/page1/Counter";
import { createContext, useState } from "react";
import Counter2 from "./pages/page2/Counter2";
import { Provider } from "react-redux";
import store from "./redux/store";

export const AppContext = createContext();

function App() {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="bg-purple-600 mx-96 my-8 p-2 text-xl font-bold text-white shadow mb-8">
          Context API And Redux
        </h1>
        <AppContext.Provider value={{ counterValue, setCounterValue }}>
          <Counter />
        </AppContext.Provider>
        <Counter2 />
      </div>
    </Provider>
  );
}

export default App;
