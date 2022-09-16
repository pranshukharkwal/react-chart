import React from "react";
class Summary extends React.Component {
  render() {
    return (
      <div className="summary">
        <p>{this.props.content}</p>
      </div>
    );
  }
}

class IAlphaaCharts extends React.Component {
  render() {
    var content = "";
    switch (this.props.chartType) {
      case "waterfall":
        content = "This is a waterfall chart";
        break;
      case "net-difference":
        content = "This chart shows net difference between two fields";
        break;
      default:
        content = "This is a default chart";
    }
    return <Summary content={content} />;
  }
}

export { IAlphaaCharts };
