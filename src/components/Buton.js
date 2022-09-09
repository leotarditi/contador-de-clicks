import React from "react";
import '../stylesheets/Buton.css';

function Buton({ text, isClick, manageClick }) {
  return (
    <button
      className={isClick ? 'button-click' : 'button-reboot'}
      onClick={manageClick} >
      {text}
    </button>
  );
}

export default Buton;