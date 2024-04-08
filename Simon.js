let gameseq = [];
let userseq = [];

let btns = ["Red","Green","Orange","Purple"];

let started = false ;
let level = 0 ;

let  h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    
    if(started == false){
        console.log("Game has started") ;
        started = true ;

        levelup();
    }
   
})

function gameflash(btn) {
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove ("gameflash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove ("userflash");
    }, 250);
}

function levelup() {
    userseq = [];
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3 );
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randBtn);
}

function checkAns(idx) {
    if (userseq[idx]=== gameseq[idx]) {
        if (userseq.length == gameseq.length){
            setTimeout(levelup,1000);
                }
    }
    else{
        h3.innerHTML =`Game Over! Your score was <b>${level} </b>. <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnpress() {
    let btn = this ;
    userflash(btn) ;

    UserColor = btn.getAttribute("id");
    userseq.push(UserColor); 
    console.log(userseq);

    checkAns(userseq.length-1) ;
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    gameseq =[];
    userseq = [];
    level = 0;
    started = false ;
}