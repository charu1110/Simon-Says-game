let gamesqn=[];
let usersn=[];
let highest=0;

let start=false;
let level=0;

let buttons=["btn1","btn2","btn3","btn4"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(start==false){
    start=true;
    levelup();
}
})

function flashbtn(button){
  button.classList.add("flash");
  setTimeout(function(){
    button.classList.remove("flash");
  } ,200);
}

function levelup(){
  usersn=[];
    level++;
    h2.innerText=`LEVEL ${level}`;
    let randInd=Math.floor(Math.random()*3);
    let randColor=buttons[randInd];
    let randBtn=document.querySelector(`.${randColor}`);
    gamesqn.push(randColor);
    flashbtn(randBtn);
}

function checkAns(idx){
  if(usersn[idx]==gamesqn[idx]){
    if(usersn.length==gamesqn.length){
      setTimeout(levelup,1000);
    }
  }
  else{
    highest=Math.max(level,highest);
    h2.innerText=`wrong key pressed \t your score is ${level} !!\n\npress any key to start again \n heighest score : ${highest}`;
    reset();
  }
}

function btnPress(){
  let btn=this;
  flashbtn(btn);
  let color=btn.getAttribute("id");
  usersn.push(color);

  checkAns(usersn.length-1);

}


let allBtns=document.querySelectorAll(".button");
for(btn of allBtns){
btn.addEventListener("click",btnPress);
}
function reset(){
  start=false;
  gamesqn=[];
  usersn=[];
  level=0;

}