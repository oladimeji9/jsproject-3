
exports.aritGeo = function(arr) {

    var arithmetic = false,
    geometric = false,
    d1 = arr[1] - arr[0],
    d2 = arr[2] - arr[1],
    r1 = arr[1] / arr[0],
    r2 = arr[2] / arr[1];

    if (d1 === d2) {
        arithmetic = true;
    }
    if (r1 === r2) {
        geometric = true;
    }

    if (arithmetic) {
        return "Arithmetic";
    }
    else if (geometric) {
        return "Geometric";
    }
    else if (arr.length === 0) {
        return 0;
    }
    else if (!arithmetic || !geometric) {
        return -1;
    }
}
