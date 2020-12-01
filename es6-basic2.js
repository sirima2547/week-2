//Keyword let == block code
//Keyword let ==> function code
//Keyword let == block code amd static variable
const orange = 12 ;
let apple = 15;
var banana = 10;
{
   var banana = 5;//replace => banana10
   console.log (banana + 5);//15
}
orange = 10;
console.log(orange);//?
console.log(banana + 10);//15
console.log(apple);//15
