//max cookies size 4096 bite


var str = document.cookie;
console.log(" Cookies vertība:" + str);

document.cookie = "username=admin_1";
str = document.cookie;
console.log("Cookies vertība:" + str);

document.cookie = "username=admin_2";
str = document.cookie;
console.log("Cookies vertība:" + str);


// https://stackoverflow.com/questions/13154552/how-can-i-set-a-cookie-with-expire-time
display();
function display() { 
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*15;
    now.setTime(expireTime);
    document.cookie = 'cookie=ok;expires='+now.toUTCString()+';path=/';
    console.log(document.cookie);
  }