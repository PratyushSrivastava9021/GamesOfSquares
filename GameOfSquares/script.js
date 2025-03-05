let s1 = document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
    // s1.style.backgroundColor = "red";
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${r}</h1>`;
});

s1.addEventListener("mouseleave",function(){
    // s1.style.backgroundColor = "white";
    s1.innerHTML = "<h1>1</h1>";
});

let s2 = document.getElementById("sq2");
let clr = "red";
s2.addEventListener("mouseenter",function(){
    if(clr=="red"){
        s2.style.backgroundColor = "red";
        clr = "green";
    }
    else if(clr=="green"){  //clr=="red"
        s2.style.backgroundColor = "green";
        clr = "blue";
    }
    else{
        s2.style.backgroundColor = "blue";
        clr = "red"; 
    }
});

s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor = "white";
});
 
// rgb (a,b,c) where a,b,c lies bw 0 to 255
let s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor= `rgb(${r1},${r2},${r3})`;
})
s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor= "white";
})

let s4 = document.getElementById("sq4");
s4.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
    s2.style.backgroundColor = `rgb(${r2},${r3},${r1})`;
    s3.style.backgroundColor = `rgb(${r3},${r1},${r2})`;
})
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
})