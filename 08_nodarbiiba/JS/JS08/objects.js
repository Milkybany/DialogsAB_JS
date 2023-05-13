//p
//funkcijas 2 varianti
/*
1.
const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };
  
  console.log(factorial(3)); // 6
 2. 
  const factorial = function fac(n) {
    return if(n < 2) return 1;
    else(n * fac(n - 1));
  };
  
  console.log(factorial(3)); // 6
  */

const discrete_variable = 4;
const array_example = ['a','b'];
const function_example = function name_for_internal_use(x){return x*x;};

const car = {type:"Fiat", model:"500", color:"white"};

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};