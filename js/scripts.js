var bmiWeight = parseInt(prompt("What is your weight?"));
var bmiHeight = parseInt(prompt("What is your height in inches?"));

// alert(bmiWeight + bmiHeight);

// alert(bmiCalcForWeight);

// alert(bmiCalcForHeight);

var bmiResult = function (bmiWeight, bmiHeight) {
return (bmiWeight * 703) / (bmiHeight^2);
};

alert(bmiResult(bmiWeight, bmiHeight));
