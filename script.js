function siempreHambriento(arr) {
    var comida = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "comida") {
            console.log("delicioso");
            comida++;
        }
    }
    if(comida == 0) {
        console.log("tengo hambre")
    }
}   
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"
console.log("---------")

function highPass(arr, cutoff) {
    var filteredArr = [];
        for(var i=0; i<arr.length; i++) {
            if(arr[i] > cutoff) {
                filteredArr.push(arr[i]);
            }
        }
        return filteredArr;
    }
result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]
console.log("---------")

function betterThanAverage(arr) {
    var sum = 0;
    for(i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    var count = 0
    var avg = sum / arr.length;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
console.log("---------")

function reverse(arr) {
    var izq = 0;
    var der = arr.length - 1;
    while(izq < der) {
        var temp = arr[izq];
        arr[izq] = arr[der];
        arr[der] = temp;
        izq++;
        der--;
    }
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
console.log("---------")

function fibonacciArray(n) {
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var prev = fibArr[fibArr.length-1];
        var prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

