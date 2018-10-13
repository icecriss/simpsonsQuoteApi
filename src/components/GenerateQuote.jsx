import React from "react";

const GenerateQuote = ({ selectQuote }) => {
  return (
    <div className="App">
      <button onClick={selectQuote}>Get random Quote</button>
    </div>
  );
};

export default GenerateQuote;
