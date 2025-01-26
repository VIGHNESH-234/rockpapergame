let userscore=0;
let compscore=0;

let block=document.querySelectorAll(".block");
let block1=document.querySelector("#he");
let block2=document.querySelector("#update");
let block3=document.querySelector("#update1");
let winner=(userWin)=>{
   if(userWin){
    console.log("s");
    block1.innerText="WIN";
    userscore++;
     block2.innerText=userscore;
  }
   else{
    console.log("n");
    block1.innerText="loose";
    compscore++;
     block3.innerText=compscore;
   }
}
let draw=()=>{
  console.log("DRAW")
  block1.innerText="draw";
}
let compchoice=()=>{
  let guess=["rock","papper","sciccor"];
  let random=Math.floor(Math.random()*3);
  return guess[random ];
}
let playgame=(user)=>{
  console.log("you  clicked",user);
  let comp=compchoice();
  console.log("comp clicked",comp);
  if(user===comp){
    draw();
  }
  else {
    let userWin=true;
    if(user==="sciccor"){
      userWin=comp=="Rock"?true:false;
    }
    else if(user==="Rock"){
      userWin=comp=="papper"?true:false;
    }
    else{
      userWin=comp=="sciccor"?true:false;
    }
    winner(userWin);
  }
}
block.forEach((block)=>{
  block.addEventListener("click",()=>{
    let user=block.getAttribute("id");
    playgame(user);
  })
})




 


