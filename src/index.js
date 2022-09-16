import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";

echarts.registerTheme("my_theme", {
  backgroundColor: "#f4cccc",
});

class AlphaaChart extends React.Component {
  render() {
    return <ReactEcharts option={this.props.option} />;
  }
}

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

function getOption(chartType) {
  let option = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };
  if (chartType === "waterfall") {
    option = {
      xAxis: {
        type: "category",
        splitLine: { show: false },
        data: [
          "Total",
          "Rent",
          "Utilities",
          "Transportation",
          "Meals",
          "Other",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Placeholder",
          type: "bar",
          stack: "Total",
          itemStyle: {
            borderColor: "transparent",
            color: "transparent",
          },
          emphasis: {
            itemStyle: {
              borderColor: "transparent",
              color: "transparent",
            },
          },
          data: [0, 1700, 1400, 1200, 300, 0],
        },
        {
          name: "Life Cost",
          type: "bar",
          stack: "Total",
          label: {
            show: true,
            position: "inside",
          },
          data: [2900, 1200, 300, 200, 900, 300],
        },
      ],
    };
  }
  return option;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: "waterfall",
    };
  }
  handleClick(chartType) {
    this.setState({ chartType: chartType });
  }
  render() {
    var option = getOption(this.state.chartType);
    return (
      <div>
        <AlphaaChart chartType={this.state.chartType} option={option} />
        <IAlphaaCharts chartType={this.state.chartType} />
        <Toggle
          waterfallClick={() => this.handleClick("waterfall")}
          netDifferenceClick={() => this.handleClick("net-difference")}
        />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
