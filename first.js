//let a=[32,13,56,34,89,99,54];
// console.log(a);
// console.log(a.length);
// a[0]=99;
// console.log(a);
// console.log(a.toString());
// console.log(a.join("_"));
// a.pop();//removes last element
// console.log(a);
// a.push(100);//adds element at last
// console.log(a);
// a.shift();//removes first element
// console.log(a);
// a.unshift(100);//add the element at first
// console.log(a);
// delete a[3];
// console.log(a);
// console.log(a.concat([24,66,245,341]));
// console.log(a.slice(2,5));


// let Fruits=["apple","orange","banana","mango"];
// console.log(Fruits);
// Fruits.pop();
// console.log(Fruits);
// Fruits.push("kiwi");
// console.log(Fruits);
// console.log(Fruits.length);
// console.log(Fruits[1]);
// Fruits[2]="papaya";
// console.log(Fruits);
// let result=Fruits.toString();
// console.log(result);

// let marks=[];
// let sum=0;
// for(let i=0;i<9;i++){
//     marks[i]=Number(prompt("Enter marks of subject-"+(i+1)));
//     sum=sum+marks[i];
// }
// console.log(marks);
// console.log("Total marks:"+sum);
// let avg=sum/9;
// console.log("Average marks:"+avg);

let tab=[];
let total=0;
let n=Number(prompt("Enter number of tablets:"));
for(let i=0;i<n;i++){
    tab[i]=Number(prompt("Enter the price of tablet-"+(i+1)+":"));
    total+=tab[i];
}
console.log("Total Bill:₹"+total);
if(total>=1000){
    let discount=total*0.2;
    payable=total-discount;
    console.log("Discount(%):20%");
    console.log("Discount:₹"+discount);
    console.log("Final amount:₹"+payable);
}
else if(total<1000){
    let discount=total*0.1;
    payable=total-discount;
    console.log("Discount(%):10%");
    console.log("Discount:₹"+discount);
    console.log("Final amount:₹"+payable);
}