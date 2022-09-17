function getWaterfallOption(data) {
  var positive = [],
    negative = [],
    help = [],
    total = [],
    categories = [];
  var option = {
    legend: {},
    title: {
      text: "Waterfall",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      splitLine: { show: true },
      axisLine: {
        lineStyle: {
          width: 1,
          color: "black",
          shadowColor: "black",
          shadowOffsetY: 2,
        },
      },
      axisLabel: {
        interval: 0,
      },
      data: [],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "bar",
        stack: "all",
        itemStyle: {
          normal: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
          },
          emphasis: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
          },
        },
        data: help,
      },
      {
        name: "positive",
        type: "bar",
        stack: "all",
        data: positive,
        label: {
          normal: {
            show: true,
            position: "top",
          },
        },
        axisLine: {
          symbol: "arrow",
          lineStyle: {
            type: "dashed",
          },
        },
        itemStyle: {
          color: "#bef1c6",
        },
      },
      {
        name: "negative",
        type: "bar",
        stack: "all",
        data: negative,
        itemStyle: {
          color: "#f5b4c4",
        },
        label: {
          normal: {
            show: true,
            position: "bottom",
          },
        },
      },
      {
        name: "total",
        type: "bar",
        stack: "all",
        data: total,
        itemStyle: {
          color: "#c8e7f9",
        },
        label: {
          normal: {
            show: true,
            position: "middle",
          },
        },
      },
    ],
  };

  if (data && data.data) {
    var newData = [];
    data.data.forEach((category) => {
      newData.push({
        difference:
          Math.round((category.d__2022sale - category.d__2021sale) * 100) / 100,
        subcategory: category.subcategory,
      });
    });
    newData.sort((a, b) => {
      return b.difference - a.difference;
    });
    var sum = 0;
    for (var i = 0; i < newData.length; ++i) {
      categories.push(newData[i].subcategory);
      total.push("-");
      if (newData[i].difference >= 0) {
        positive.push(newData[i].difference);
        negative.push("-");
      } else {
        positive.push("-");
        negative.push(-newData[i].difference);
      }

      if (i === 0) {
        help.push(0);
      } else {
        sum += newData[i - 1].difference;
        if (newData[i].difference < 0) {
          help.push(sum + newData[i].difference);
        } else {
          help.push(sum);
        }
      }
    }
    sum += newData[newData.length - 1].difference;
    sum = Math.round(sum * 100) / 100;
    positive.push("-");
    negative.push("-");
    help.push("-");
    total.push(sum);
    categories.push("Total");

    option.xAxis.data = categories;
    option.series[0].data = help;
    option.series[1].data = positive;
    option.series[2].data = negative;
    option.series[3].data = total;
  }
  return option;
}

function getNetDifferenceOption(data) {
  var option = {
    title: {
      text: "Net Difference",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      axisLine: {
        lineStyle: {
          width: 1,
          color: "black",
          shadowColor: "black",
          shadowOffsetY: 2,
        },
      },
      data: [],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        // data: [120, 200, 150, 80, 70, 110, 130],
        data: [],
        type: "bar",
        label: {
          normal: {
            show: true,
            position: "top",
          },
        },
        stack: "all",
      },
      {
        // data: [120, 200, 150, 80, 70, 110, 130],
        data: [],
        type: "bar",
        label: {
          normal: {
            show: true,
            position: "bottom",
          },
        },
        stack: "all",
        itemStyle: {
          color: "#f33",
        },
      },
    ],
  };
  if (data && data.data) {
    var categories = [],
      positive = [],
      negative = [];
    data.data.forEach((category) => {
      var value =
        Math.round((category.d__2022sale - category.d__2021sale) * 100) / 100;
      if (value < 0) {
        negative.push(value);
        positive.push("-");
      } else {
        negative.push("-");
        positive.push(value);
      }
      categories.push(category.subcategory);
    });
  }
  option.xAxis.data = categories;
  option.series[0].data = positive;
  option.series[1].data = negative;
  return option;
}

function getOption(chartType, data, inputData) {
  let option, usingInputData;
  console.log("Received input data", inputData);
  try {
    usingInputData = true;
    var inputObj = JSON.parse(inputData);
    switch (chartType) {
      case "waterfall":
        option = getWaterfallOption(inputObj);
        break;
      case "net-difference":
        option = getNetDifferenceOption(inputObj);
        break;
      default:
        option = {};
    }
  } catch {
    console.log("Failed");
    usingInputData = false;
    switch (chartType) {
      case "waterfall":
        option = getWaterfallOption(data);
        break;
      case "net-difference":
        option = getNetDifferenceOption(data);
        break;
      default:
        option = {};
    }
  }
  return { option, usingInputData };
}

module.exports = { getOption };
