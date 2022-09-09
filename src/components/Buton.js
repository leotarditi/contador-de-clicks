import React from "react";
import '../stylesheets/Buton.css';

function Buton({ text, isClick, manageClick }) {
  return (
    <Buton
      className={isClick ? 'button-click' : 'button-reboot'}
      onClick={manageClick} >
      {text}
    </Buton>
  )
}

export default Buton;