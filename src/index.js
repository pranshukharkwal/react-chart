import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import _chartUtils from "./utils/chartUtils";
import { IAlphaaCharts, Information } from "./components/IAlphaaCharts";
import { AlphaaChart } from "./components/AlphaaChart";
import { Toggle } from "./components/Toggle";
import { DataInput } from "./components/DataInput";
import { Sidebar } from "./components/Sidebar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartType: "waterfall",
      data: {},
      inputData: "",
      profit: "",
      loss: "",
      net: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://run.mocky.io/v3/f8d88ddf-41be-4432-9ed8-ef11382fc6a7")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ data });
      });
  }

  handleClick(chartType) {
    this.setState({ chartType: chartType });
  }

  handleChange(event) {
    this.setState({ inputData: event.target.value });
  }

  render() {
    var { option, usingInputData, profit, loss, net } = _chartUtils.getOption(
      this.state.chartType,
      this.state.data,
      this.state.inputData
    );
    return (
      <div className="main row">
        <div className="col s10">
          <AlphaaChart chartType={this.state.chartType} option={option} />
          <IAlphaaCharts chartType={this.state.chartType} />
          <Toggle
            waterfallClick={() => this.handleClick("waterfall")}
            netDifferenceClick={() => this.handleClick("net-difference")}
          />
          <DataInput
            handleChange={(e) => this.handleChange(e)}
            inputData={this.state.inputData}
          />
          {usingInputData ? (
            <Information content={"Using input data to plot charts"} />
          ) : (
            <Information
              content={
                "Using default data fetched from API. Not using input data either becuase it is empty, or not properly formatted"
              }
            />
          )}
        </div>
        <Sidebar profit={profit} loss={loss} net={net} />
      </div>
    );
  }
}

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);
