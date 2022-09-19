import React from "react";

function Sidebar(props) {
  return (
    <div id="slide-out" className="side-nav fixed">
      <ul className="collection with-header">
        <li class="collection-header">
          <h4>Summary</h4>
        </li>
        <li className="collection-item">
          <div>
            Profit
            <div className="secondary-content">{props.profit}</div>
          </div>
        </li>
        <li className="collection-item">
          <div>
            Loss
            <div className="secondary-content">{props.loss}</div>
          </div>
        </li>
        <li className="collection-item">
          <div>
            Net
            <div className="secondary-content">{props.net}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export { Sidebar };
