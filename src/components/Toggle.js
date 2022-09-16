import React from "react";
function Choice(props) {
  return (
    <button
      className="choice btn waves-effect waves-light"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

function Toggle(props) {
  return (
    <div className="center">
      <Choice value="Waterfall" onClick={props.waterfallClick} />
      <Choice value="Net Difference" onClick={props.netDifferenceClick} />
    </div>
  );
}

export { Toggle };
