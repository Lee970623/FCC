function checkCashRegister(price, cash, cid) {
  var balance = cash - price;
  var change = [];
  var status = "OPEN";
  var unit = [100.0, 20.0, 10.0, 5.0, 1.0, 0.25, 0.1, 0.05, 0.01];
  cid.reverse().forEach(function (item, index) {
    if (item[1] > 0 && balance >= unit[index]) {
      if (balance >= item[1]) {
        change.push([item[0], item[1]]);
        balance = (balance - item[1]).toFixed(2) - 0;
        item[1] = 0;
      } else {
        let temp = parseInt(balance / unit[index]) * unit[index];
        change.push([item[0], temp]);
        balance = (balance - temp).toFixed(2) - 0;
        item[1] -= temp;
      }
    }
  });
  if (balance === 0) {
    if (cid.every((item) => !item[1])) {
      status = "CLOSED";
      cid.reverse().forEach(item => {
        if (!change.find(v => v[0] === item[0])) {
          change.push(item)
        }
      })
    }
  } else if (balance > 0) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }
  return { status, change };
}

console.log(
  // checkCashRegister(19.5, 20, [
  //   ["PENNY", 0.01],
  //   ["NICKEL", 0],
  //   ["DIME", 0],
  //   ["QUARTER", 0],
  //   ["ONE", 0],
  //   ["FIVE", 0],
  //   ["TEN", 0],
  //   ["TWENTY", 0],
  //   ["ONE HUNDRED", 0],
  // ])
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
