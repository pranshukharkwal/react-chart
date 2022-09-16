function getWaterfallOption(data) {
  var option = {
    xAxis: {
      type: "category",
      splitLine: { show: false },
      data: ["Total", "Rent", "Utilities", "Transportation", "Meals", "Other"],
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
  return option;
}

function getNetDifferenceOption(data) {
  var option = {
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
  return option;
}

function getOption(chartType, data) {
  console.log("chartType", data);
  let option;
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
  return option;
}

module.exports = { getOption };
