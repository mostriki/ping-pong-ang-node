// constructor
function Calculator(skinName) {
  this.skin = skinName;
}

// prototype turns pingPong into a method
Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output;
};

// exporting our calculator obj with node
exports.calculatorModule = Calculator;
