//max cookies size 4096 bite
var str = document.cookie;
console.log(" Cookies vertība" + str);

document.cookie = "username=admin";
str = document.cookie;
console.log("Cookies vertība" + str);
