function bug1()
{
  var string = "";
  var counter = 0;
  while(counter <= 20)
   {
      string = string + counter + ", ";
      counter = counter + 2;
   } 
 string = string.substring(0, string.length-2);
  console.log(string);
  //should print: "0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20"
}