let gameSqn=[];
let userSqn=[];

let btns=["btn1","btn2","btn3","btn4"];

let started=false;
let level=0;
let highest=0;

let h2=document.querySelector("h2");

document.addEventListener("keydown",function(){
  if(started == false){
  started=true;

  levelup();
}
})

function btnFlash(rndBtn){
  
  rndBtn.classList.add("flash");
  setTimeout(function (){
    rndBtn.classList.remove("flash");
  },200);
}

function levelup() {
  userSqn=[];
  level++;
  h2.innerText = `Level ${level}`;

  let rndInd = Math.floor(Math.random() * 4);
  let rndColor = btns[rndInd];

  let randBtn = document.querySelector(`.${rndColor}`);
  gameSqn.push(rndColor);
  console.log(gameSqn);

  btnFlash(randBtn);
}

function CheckBtn(ind){
if(gameSqn[ind]==userSqn[ind]){
  if(userSqn.length==gameSqn.length){
    setTimeout(levelup,1000);
  }
}
else{
  console.log("wrong sequence");
  h2.innerHTML=`game Over ! YOUR SCORE WAS <br>${level}</br> press any key to start again !!!`;
  let high=document.querySelector(".high");
  if(highest<level){
  high.innerText =`highest Score : ${level}`;
  gameReset();
  }
}
}

function btnPress(){
let btn=this;
btnFlash(btn);

 userColor=btn.getAttribute("id");
userSqn.push(userColor);
CheckBtn(userSqn.length-1);
}

let allBtn=document.querySelectorAll(`.btn`);
for(btn of allBtn){
  btn.addEventListener("click",btnPress);
}

 function gameReset(){
started=false;
gameSqn=[];
userSqn=[];
level=0;
}