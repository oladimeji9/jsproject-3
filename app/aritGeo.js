
var aritGeo = function(arr) {
  var arithmetic = [];
  var geometric = [];
  var isArithmetic = false;
  var isGeometric = false;
   
  for(var i = 0; i < arr.length; i++){
    arithmetic.push(arr[i+1] - arr[i]);
    geometric.push(arr[i+1] / arr[i]);
  }
  
  for(var j = 0; j < arithmetic.length-1; j++){
    if(arithmetic[j+1] === arithmetic[j]){
      isArithmetic = true;
    }
    if(geometric[j+1] === geometric[j]){
      isGeometric = true;
    }
  }
  
  if(isArithmetic) {
    return "Arithmetic";
  }
  if (isGeometric) {
    return "Geometric";
  }
  if (arr.length === 0) {
    return 0;
  }
  else if(!isArithmetic && !isArithmetic) {
    return -1;
  }  
}

module.exports = aritGeo;
