import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import _chartUtils from "./utils/chartUtils";
import { IAlphaaCharts } from "./components/IAlphaaCharts";
import { AlphaaChart } from "./components/AlphaaChart";
import { Toggle } from "./components/Toggle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: "waterfall",
      data: {},
    };
  }

  componentDidMount() {
    fetch("https://run.mocky.io/v3/f8d88ddf-41be-4432-9ed8-ef11382fc6a7")
      .then((resp) => resp.json())
      .then((data) => this.setState({ data }));
  }

  handleClick(chartType) {
    this.setState({ chartType: chartType });
  }
  render() {
    var option = _chartUtils.getOption(this.state.chartType, this.state.data);
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
