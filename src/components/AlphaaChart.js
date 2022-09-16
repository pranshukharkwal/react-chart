import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import { darkTheme } from "../themes/dark";

echarts.registerTheme("my_theme", darkTheme);
class AlphaaChart extends React.Component {
  render() {
    if (this.props.chartType === "waterfall")
      return <ReactEcharts option={this.props.option} theme={"my_theme"} />;
    else return <ReactEcharts option={this.props.option} />;
  }
}

export { AlphaaChart };
