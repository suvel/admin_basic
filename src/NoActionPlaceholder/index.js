import React from "react";
import "./style.css";
import sad_emoji from "../asset/sad_emoji.png";

function NoActionPlaceholder() {
  return (
    <div className="NoActionPlaceholder">
      <img src={sad_emoji} />
      <p>select row to view option to manipulate the table</p>
    </div>
  );
}

export default NoActionPlaceholder;
