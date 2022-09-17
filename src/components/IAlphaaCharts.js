import React from "react";
class Summary extends React.Component {
  render() {
    return (
      <div className="summary center">
        <br></br>
        <b>Summary : </b>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

function Information(props) {
  return (
    <div className="summary center">
      <p>{props.content}</p>
    </div>
  );
}

class IAlphaaCharts extends React.Component {
  render() {
    var content = "";
    switch (this.props.chartType) {
      case "waterfall":
        content =
          "A waterfall chart shows a running total as values are added or subtracted. It's useful for understanding how an initial value (for example, net income) is affected by a series of positive and negative values.";
        break;
      case "net-difference":
        content =
          "This chart shows net difference between two fields. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        break;
      default:
        content = "This is a default chart";
    }
    return <Summary content={content} />;
  }
}

export { Information, IAlphaaCharts };
