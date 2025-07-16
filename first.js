// let n=100;
// for(let i=2;i<=n;i++){
//     let isPrime=true;
//     for(let j=2;j<=Math.sqrt(i);j++){
//         if(i%j===0){
//             isPrime=false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(i+" is a prime number");
//     }
// }


// let n=prompt("Enter a number:");
// let isPrime=true;
// if(num<=1){
//     isPrime=false;
// }
// else{
// for(let i=2;i<=Math.sqrt(num);i++){
//     if(num%i==0){
//         isPrime=false;
//         break;
//     }
// }
// }
// if(isPrime){
//     alert(n+" is a prime number");
// }
// else{
//     alert(n+" is not a prime number");
// }


//while loop
// let i=1;
// while(i<=5){
//     console.log("Hello");
//     i++;
// }


//do-while
// let i=1;
// do{
//     console.log("Count is:"+i);
//     i++;
// }
// while(i<10);


// let name="Madhu";
// let o=`Hello guys,\nThis is\t ${name}`;
// console.log(o);
// let n="kar";
// console.log(name+n);
// console.log("Madhu"+n);
// console.log(`Madhu${n}`);


// let n=prompt("Which tabel do you want:");

// for(let i=1;i<=10;i++){
//     console.log(n+"*"+i+"="+n*i);
// }


// let str="carrer";
// let str1="buses";
// console.log(str[1]);
// console.log(str1.length);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.slice(1,3));
// console.log(str.replace("r","i"));
// console.log(str.concat(str1));
// console.log(str.charAt(2));



// let word="alpha";
// let count=0;
// let vowels=['a','e','i','o','u','A','E','I','O','U'];
// for(let i=0;i<word.length;i++){
//     if(vowels.includes(word[i])){
//         count++;
//     }
// }
// console.log(count);


// let m=prompt("Enter a month(num):");
//     switch(m){
//         case "1":
//             console.log("Jan");
//             break;
//         case "2":
//             console.log("Feb");
//             break;
//         case "3":
//             console.log("Mar");
//             break;
//         case "4":
//             console.log("Apr");
//             break;
//         case "5":
//             console.log("May");
//             break;
//         case "6":
//             console.log("Jun");
//             break;
//         case "7":
//             console.log("Jul");
//             break;
//         case "8":
//             console.log("Aug");
//             break;
//         case "9":
//             console.log("Sep");
//             break;
//         case "10":
//             console.log("Oct");
//             break;
//         case "11":
//             console.log("Nov");
//             break;
//         case "12":
//             console.log("Dec");
//             break;
//         default:
//             console.log("Enter a valid number");
//  }

// let n=prompt("Enter the motnth(num):");
// let m=Number(n);
// let mon=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
// if(m>=1 && m<=12){
//     console.log(mon[m-1]);
// }else{
// console.log("Enter a valid number.");
// }


// let n=prompt("Enter a number:");
// let m=Number(n);
// for(let i=1;i<=Math.sqrt(m);i++){
//     if(m%i===0){
//         console.log(i);
//     if(i!==m/i){
//         console.log(m/i);
//     }
//     }
// }


let n=prompt("Enter a number:");
let m=Number(n);
let f=1;
if(m>0){
    while(m>0){
        f=f*m;
        m--;
    }
    console.log(f);
}
else{
    console.log("Enter a valid number.")
}
