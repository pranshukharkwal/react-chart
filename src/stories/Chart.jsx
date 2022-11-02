import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AlphaaChart } from "../components/AlphaaChart";
import defaultData from "../data/default.json";
import _chartUtils from "../utils/chartUtils";

export const Chart = ({ data, chartType, ...props }) => {
  let [op, setOp] = React.useState({});
  let [ct , setCt] = React.useState(chartType);
  useEffect(() => {
    var { option, ...remaining } = _chartUtils.getOption(chartType, data, null);
    console.log(option);
    setOp(option);
    setCt(chartType)
  }, [data , chartType]);
  return <AlphaaChart chartType={ct} option={op} />;
};

Chart.propTypes = {
  data: PropTypes.object,
  chartType: PropTypes.oneOf(["waterfall", "net-difference"]),
};

Chart.defaultProps = {
  data: defaultData,
  chartType: "waterfall",
};
