1.
const print = () => {
    console. log("print fun is Done")
}
print ();    

2.
const add = (j,k) => {
    let result = j+k;
    console.log(result);
}
add(77,75)

4.
const arrowFunction = () => {
    console.log("This is an Arrow Function");
  };
  
  arrowFunction();
  
 5.
 var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();

6.
var x = 21;
girl();
console.log(x);
function girl() {
  console.log(x);
  var x = 20;
}
girl();

7.
var x = 21;
a();
b();
console.log(a);
a = function () {
  x = 20;
  console.log(x);
};
b = function () {
  x = 40;
  console.log(x);
};
//errorbyrefreance

8.

const factorial = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  
    return result;
  };
  
  console.log(factorial(7));