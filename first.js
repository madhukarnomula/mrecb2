function a(name){
    console.log("hello friends, I am "+name)
}
a("Madhu")


let c=5;
let b=10;
console.log(b+c);
console.log(b-c);
console.log(b/c);
console.log(b%c);
console.log(b*c);
console.log(b**c);


let e=2;
let f=6;
console.log(e++);
console.log(++f);
console.log(e);


let m=4;
let n=7;
console.log(m--);
console.log(--n);
console.log(m);


let g=4;
console.log(g+=2);//6
console.log(g-=1);//5
console.log(g/=2);//2.5
console.log(g*=4);//10
console.log(g**=2);//100
console.log(g%3);//1


let i=7;
let j="7";
console.log(i==j);//true
console.log(i===j);//false
console.log(i!=j);//false
console.log(i!==j)//true


let x=6,y=2;
let c1=x>y;
let c2= x===96;
console.log(c1 && c2);//false
console.log(c1 || c2);//true
console.log(!c1);//false


let a1=-14;
if(a1>0){
    console.log(a1+" is +ve");
}
else{
    console.log(a1+" is -ve");
}


//let a2=20;
// let a2=prompt("Enter age:");
// if(a2<18){
//     console.log("Minor");
// }
// else if(a2>60){
//     console.log("Senior citizen");
// }
// else{
//     console.log("Middle");
// }


//ternary operator
// let age=prompt("Enter age:");
// let r= age>18? console.log("Adult"):console.log("Not an adult");

// let sal=prompt("Enter salary:");
// let r1=sal>50000? console.log("Good Salary"):console.log("Low salary");


//switch
let fruit="apple";
switch(fruit){
    case "apple":
        console.log("Apple is ₹100/kg");
        break;
    case "banana":
        console.log("Banana is ₹40/dozon");
        break;
    case "mango":
        console.log("Mango is ₹50/kg");
        break;
    default:
        console.log("Fruit does not available");
}


for(let i=0;i<5;i++){
    console.log("Hello");
}
console.log("loop has ended");

//for-of
let fruits=["apple","banana","mango"];
for(let fruit of fruits){
    console.log(fruit);
}

//for-in
let student={
    name:"Akhil",
    age:21,
    course:"B.Tech"
};
for(let key in student){
    console.log(key+": "+student[key]);
}


let num=prompt("Enter a number:");
if(num%5===0){
    console.log(num+" is divisible by 5");
}
else{
    console.log(num+" is not divisible by 5");
}


for(i=1;i<=100;i++){
    if(i%2==0){
        console.log(i+" is a even number");
    }
}


for(i=1;i<=100;i++){
    if(i%2!=0){
        console.log(i+" is a odd number");
    }
}


let marks=prompt("Enter marks:");
if(marks>=90&&marks<=100){
    console.log("Grade A");
}
else if(marks>=80&&marks<=89){
    console.log("Grade B");
}
if(marks>=70&&marks<=79){
    console.log("Grade C");
}
else if(marks>=600&&marks<=69){
    console.log("Grade D");
}
else if(marks>=50&&marks<=59){
    console.log("Grade E");
}
else{
    console.log("Fail");
}



//patterns
// for(let i=1;i<=5;i++){

//     for(let j=1;j<=i;j++){
//         console.log("*");
//     }
// }