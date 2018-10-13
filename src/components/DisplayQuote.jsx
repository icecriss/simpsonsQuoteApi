import React from "react";

const DisplayQuote = ({ quotation }) => {
  return (
    <div className="quote">
      <h2>{quotation.character}</h2>
      <img src={quotation.image} alt={`${quotation.character}'s quote`} />
      <p>"{quotation.quote}"</p>
    </div>
  );
};

export default DisplayQuote;
