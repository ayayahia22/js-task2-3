let tasksArray = [
  ["Nathalie Nader Nabil", "Task 01", "Option 2"],
  ["Youssef Mohamed Ahmed Mohamed Youssef", "Task 01", "Option 1"],
  ["Salma Nasreldin", "Task 01", "Option 1"],
  ["Engy Mostafa", "Task 01", "Option 1"],
  ["Engy Mostafa", "Task 01", "Option 1"],
  ["Engy ahmed mostafa ", "Task 01", "Option 1"],
  ["Abdelhay Nader Abdelhay Abozayed", "Task 01", "Option 1"],
  ["Abdelrahman Shemies", "Task 01", "Option 1"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["Youssef Fathy Mahmoud", "Task 01", "Option 1"],
  ["Mark Bassem", "Task 01", "Option 1"],
  ["Anas Ahmed", "Task 01", "Option 1"],
  ["Adham Hesham", "Task 01", "Option 1"],
  ["Mohamed Ahmed Fahmi", "Task 01", "Option 1"],
  ["rola wafi", "Task 01", "Option 1"],
  ["Moataz Youssef", "Task 01", "Option 2"],
  ["Ahmad Salama", "Task 01", "Option 1"],
  ["Mohamed Ahmed Fahmi", "Task 01", "Option 1"],
  ["Ahmad Salama Abdelaziz", "Task 01", "Option 2"],
  ["Kareem Ramzi El-Tahlawi", "Task 01", "Option 1"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["rola wafi", "Task 01", "Option 2"],
  ["Mohamed Fahmi", "Task 01", "Option 1"],
  ["Mohamed Fahmi", "Task 01", "Option 2"],
  ["Alaa Ahmed", "Task 01", "Option 2"],
  ["Abdelrahman Shemies", "Task 01", "Option 1"],
  ["Nathalie Nader", "Task 01", "Option 1"],
  ["Mariam Ahmed", "Task 01", "Option 1"],
];


var newArray = Array.prototype.concat.apply([], tasksArray);
console.log(newArray); 


var arrayOut = [];
var count = 0;
var start = false;
for (i = 0; i < newArray.length; i++) {
    for (j = 0; j < arrayOut.length; j++) {
          if ( newArray[i] == arrayOut[j] ) {
               start = true;
          }
     }
    count++;
if (count == 1 && start == false) {
       arrayOut.push(newArray[i]);
   }
   start = false;
   count = 0;
}
console.log(arrayOut);












