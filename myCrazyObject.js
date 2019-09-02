var myCrazyObject = {
    "name": "Stupid object",
    "some array": [7, 9, {purpose: "confusion", number: 123}, 3.3],
    "random animal": "banana shark"
};
function monitorCount(rows, columns) {
    return rows * columns;
  };
  
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
  };
  
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost);
  const plantNeedsWater = function (day) {
    if (day ==='Wednesday') {
      return true;
    } else {
      return false;
    }
  };