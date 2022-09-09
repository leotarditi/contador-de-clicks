import React from "react";
import '../stylesheets/Count.css';

function Count({ numClicks }) {
  return (
    <div className="count">
      {numClicks}
    </div>
  );
}

export default Count;