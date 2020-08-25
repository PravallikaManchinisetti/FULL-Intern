//comparisons
//==,===,!=,!==,>,<,>=,<=



a=12;b=20;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=12;b='xyz';
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=12;b=undefined;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=12;b=true;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=1;b=true;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=12;b=123n;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=undefined;b=20;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=undefined;b=true;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=undefined;b='undefined';
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=undefined;b=0;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=undefined;b=54n;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=undefined;b=null;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=null;b=0;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=undefined;b=null;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=null;b=98;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=null;b=false;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=null;b='null';
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=true;b=1;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=true;b='true';
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a=true;b=1n;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a='xyz';b='xyz'
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

a='0';b=0;
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);


//loops
//for,for in,fof of,while,do while, break,continue,label


/*
for (i=0; i<5; i++)                                   //for
  console.log('hello')

a="hello"
for (i=0; i<5; i++)
  console.log(a)


a='hello';                                           
for (let i = 0; i < 5; i++) {
    a='bye';
    console.log(a); 
    }
  


 for (i = 0; i < 10; i++) {                              //break//continue
  if (i== 2) {
    break;i=i+1;
  }console.log(i);
}

i = 0;                                                   //do while
do {
  i += 1;
  console.log(i);
} while (i < 5);

 
var t = 0;                                               //while
var i = 0;
while (i < 5) {
  t += t + i;
  i++;
}console.log(t);


 

var a1 =  true && true;                                     //logical operator
console.log(a1);
var o1 =  true || true; 
console.log(01);
var n1 = !true;
console.log(n1);

const foo = null ?? 'default string';                       //leftExpr ?? rightExpr//Nullish coalescing 

console.log(foo);

expr='Oranges';                                             //switch cases
switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
      default:
    console.log('abc');
}

console.log("def");

*/


