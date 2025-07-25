let btn1=document.querySelector("#btn1");
let likes=0;
btn1.onclick=() =>{
    console.log("button 1 was clicked");
    likes+=1;
    console.log(likes);
};

let btn2=document.querySelector("#btn2");
btn2.onclick=() =>{
    console.log("b1");
};
btn2.onclick=() =>{
    console.log("b2");
};

let btn3=document.querySelector("#btn3");
btn3.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}; 

btn3.addEventListener("click",()=>{
    console.log("button 3 clicked- handler task1");
})
btn3.addEventListener("click",()=>{
    console.log("button 3 clicked- handler task2");
})