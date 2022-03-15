//This file is created to demanstrate various concepts being tought

console.log(3 < 2 < 1);//returns true.
//It only expects two numbers at a time
//So '3 < 2' evaluates false which is coerced into 0,
//This means the final statement is.
console.log(false<1); /*or*/ console.log(0<1);
//Both evalutate true because false is equal to zero.

console.log(1<2<3);//1<2 evaluates true
console.log(true<3)//also returns true because true=1, and 1<3.

