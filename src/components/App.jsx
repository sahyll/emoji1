import React from "react";

import emojipedia from "../emojipedia";
import Createcard from "./Createcard";




function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map(Createcard)}
      </dl>
    </div>
  );
}

export default App;
