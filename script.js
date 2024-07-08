//global variable 

var a;
a = 10
console.log(a);


var c =20;
var d = 10;
console.log("result is ",c+d*a);



//string variable

var s = "adarsh";
console.log("type is", typeof s );

//boolean type

var p = true;
console.log("type is :",typeof p);


//number
console.log("type is",typeof a)


//block variable 
{
    let x;
    x = 10;
    let y;
    y = 20;

    console.log(x*y ,typeof x, typeof y)

}
// x and y is block elements so they can't access from outside 
console.log(x*y);