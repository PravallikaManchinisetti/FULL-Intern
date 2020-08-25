//arithmetic operation
/*a=10;b='20';
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a='10';b='20';
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a=10;b='xyz';
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a='xyz';b='xyz';
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a=10;b='1';
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a=10;b=undefined;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a=10;b;//undefined
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a=10;b=null;//null is converting into 0 
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

console.log(myCar1);

a=null;b=null;//null is converting into 0 
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a=false;b=null;//null and false are converting into 0 
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a='false';b=null;//null is converting into 0 
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a='xyz';b=null;//null is converting into 0 
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a='false';b=null;//null is converting into 0 
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a=null;d=Number(a);
c=BigInt(d);b=4n
console.log(c+b);
console.log(c-b);
console.log(c*b);
console.log(c/b);
console.log(c%b);
console.log(c**b);


a=10;b=true;
console.log(a+b);//boolean is converting into number
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a=10;b='true';
console.log(a+b);//true is taking as string
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a='true';b=true;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
/*
a=true;b=4n;//cannot mix bigint with the other types
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);


a=10;b=7n;
c=BigInt(a)
console.log(c+b);
console.log(c-b);
console.log(c*b);
console.log(c/b);
console.log(c%b);
console.log(c**b);

a='xyz';b=7n;//cannot mix big with other types
c=BigInt(a)
console.log(c+b);
console.log(c-b);
console.log(c*b);
console.log(c/b);
console.log(c%b);
console.log(c**b);

a=true;
c=BigInt(a);b=3n;
console.log(c+b);
console.log(c-b);
console.log(c*b);
console.log(c/b);
console.log(c%b);
console.log(c**b);


a=true;b=true;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a='true';b='true';
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

a=10;b;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);


console.log(true===1);
console.log(true===true);
console.log(true==1);
console.log(true==1);
*/



var myCar = {
    make: 'Ford',
   'model': 'Mustang',
    9: 1969    
};console.log(myCar);

console.log(myCar.make);
console.log(myCar['make']);
console.log(myCar[9]);

myCar.color='red';
console.log(myCar);

delete myCar.color;
console.log(myCar);

console.log(Object.values(myCar).length);
console.log(Object.keys(myCar).length);
//fruits = ['Apple', 'Banana']
//console.log(fruits.length)

