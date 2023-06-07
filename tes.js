function world(name, tybe, numbr) {
  let test = "";
  test += "my name is" + name + "i am " + numbr + tybe;
  return test;
}
console.log(world("aya", "women", "30"));
///////
function reuseblefunction(a, b) {
  console.log(a - b);
}
reuseblefunction(10, 5);
////////////
var myglobal = 10;
function fun2() {
  var output = "";
  if (typeof myglobal != "undefined") {
    output += "myglobalis" + myglobal;
  }

  console.log(output);
}
fun2();

//////////
function switchfunction(num) {
var aqns = "";
  switch (num) {
    case 1:
      aqns = "alpa";
      break;

    case 2:
      aqns = "beta";
      break;

    case 3:
      aqns = "asd";
      break;
     
  }
return aqns;
}
console.log(switchfunction(3));
