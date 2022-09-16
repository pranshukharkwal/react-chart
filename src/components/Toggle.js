import React from "react";
function Choice(props) {
  return (
    <button className="choice" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Toggle(props) {
  return (
    <div>
      <Choice value="Waterfall" onClick={props.waterfallClick} />
      <Choice value="Net Difference" onClick={props.netDifferenceClick} />
    </div>
  );
}

export { Toggle };
