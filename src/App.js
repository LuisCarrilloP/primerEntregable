
import { useState } from "react";

import "./App.css"
import QuoteBox from "./components/QuoteBox";



function App() {

const [ isOn, setIsOn ] = useState(false)

const toggle = () => setIsOn(!isOn)
  return (
        <div className="App">
              <QuoteBox/>
        </div>
      
  );

}

export default App;

