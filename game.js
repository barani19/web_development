let currentMole;
let currentplant;
let currentenemy;
let score = 0 ;
let gameover = false;


window.onload = function(){
    SetGame();

}

function SetGame(){
    for(let i = 0 ; i< 9 ; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectile);
        document.getElementById("board").appendChild(tile);
    }
   
    setInterval(createmole,500);  // 1000 milliseconds = 1 sec
    setInterval(createplant,800);
    setInterval(createenemy,800);
    
   
}

function getrandom(){
    // math.random --> (0-1) * 9 --> range bt 0-9 maybe floating numbers so use float() to round down
    num = Math.floor(Math.random() * 9);
    return num.toString();
}

function createmole(){
    if(gameover == true){
        document.getElementById("soong").play();
        document.getElementById("song").pause();
        return  ;
    }
    else{
        document.getElementById("song").play();
    }
    if(currentMole){
        currentMole.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src =  "mole.png";
    let num = getrandom();
    if(currentplant && currentplant.id==num){
        return;
    }
    if(currentenemy && currentenemy.id==num){
        return;
    }
    currentMole = document.getElementById(num);
    currentMole.appendChild(mole);
}

function createplant(){
    if(gameover == true){
        return  document.getElementById("soong").play();
    }

    if(currentplant){
        currentplant.innerHTML='';
    }
    
   
    let plant = document.createElement("img");
    plant.src = "plant.png";
    let num = getrandom();
    if(currentMole && currentMole.id==num){
        return;
    }
    if(currentenemy && currentenemy.id==num){
        return;
    }
    currentplant = document.getElementById(num);
    currentplant.appendChild(plant);
}

function createenemy(){
    if(gameover == true){
        return  document.getElementById("soong").play();
    }

    if(currentenemy){
        currentenemy.innerHTML='';
    }
   
   
    let enemy = document.createElement("img");
    enemy.src = "enemy.png";
    let num = getrandom();
    if(currentMole && currentMole.id==num){
        return;
    }
    if(currentplant && currentplant.id==num){
        return;
    }
    currentenemy = document.getElementById(num);
    currentenemy.appendChild(enemy);
}



function selectile(){
    if(gameover == true){
        return  document.getElementById("soong").play();
    }

    if(this == currentMole){
        score += 10;
        document.getElementById("score").innerHTML = score.toString();
    }
    else if(this == currentplant || this == currentenemy){
        gameover = true;
        document.getElementById("score").innerHTML = "GAME OVER : "+ score.toString();
    }
}



