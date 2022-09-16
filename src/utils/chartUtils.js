function getWaterfallOption(data) {
  console.log("Data received in function ", data.data);
  var positive = [],
    negative = [],
    help = [],
    categories = [];
  var option = {
    title: {
      text: "Waterfall",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    height: "400px",
    xAxis: {
      type: "category",
      splitLine: { show: false },
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
      },
      {
        name: "negative",
        type: "bar",
        stack: "all",
        data: negative,
        itemStyle: {
          color: "#f33",
        },
      },
    ],
  };

  if (data && data.data) {
    var newData = [];
    data.data.forEach((category) => {
      newData.push({
        difference: Math.round(category.d__2022sale - category.d__2021sale),
        subcategory: category.subcategory,
      });
    });
    newData.sort((a, b) => {
      return b.difference - a.difference;
    });

    for (var i = 0, sum = 0; i < newData.length; ++i) {
      categories.push(newData[i].subcategory);
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

    option.xAxis.data = categories;
    option.series[0].data = help;
    option.series[1].data = positive;
    option.series[2].data = negative;
  }
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
