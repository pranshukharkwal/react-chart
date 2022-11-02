import React from 'react';
import { Chart } from './Chart';
import dummyData from "../data/dummy.json"
import defaultData from "../data/default.json"
export default {
  title: 'Example/Chart',
  component: Chart
}

const Template = (args) => <Chart {...args} />;

export const WaterfallDefault = Template.bind({});

export const NetDifferenceDefault = Template.bind({});
NetDifferenceDefault.args = {
  chartType : "net-difference"
}

export const WaterfallDummy = Template.bind({});
WaterfallDummy.args = {
  data : dummyData
}

export const NetDifferenceDummy = Template.bind({});
NetDifferenceDummy.args = {
  data : dummyData,
  chartType : "net-difference"
}