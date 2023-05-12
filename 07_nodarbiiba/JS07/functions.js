function counter(){
    let text = "";
    let i = 1;
    while (i <= 20) {
      console.log("i: " + i);
      console.log("i%2: " + (i % 2));
      if (i % 2 == 0) {
        text += "<br>" + i;
      }
      i++;
    }
    document.getElementById("demo_function_1").innerHTML = text;
  }
  
  counter();
  
  text = "";
  i = 1;
  while (i <= 20) {
    console.log("i: " + i);
    console.log("i%2: " + (i % 3));
    if (i % 3 == 0) {
      text += "<br>" + i;
    }
    i++;
  }
  
  document.getElementById("demo_function_2").innerHTML = text;