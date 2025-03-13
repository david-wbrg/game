const click = ['win', 'lose'];

function flipCoin(array) {
    const randomIndexValue = Math.floor(Math.random() * click.length);
    return array[randomIndexValue];
  }
  
function displayResult(boxID){
    const randomElement = flipCoin(click);
    document.querySelector(".displayResult").innerText = randomElement;

    clicked(randomElement, boxID)
}

function clicked(click, boxID){
  if (click === "win"){
    document.getElementsByClassName('box')[boxID].style.backgroundColor = "orange";

    let gameOver = true;
    let boxes = document.getElementsByClassName('box');
   
    for(let i=0; i < boxes.length; i++){

      if(boxes[i].style.backgroundColor !== "orange"){
        gameOver = false;
        break;
      }
    }

    if(gameOver === true){
      document.getElementById('win').style.display = "block";
    }
  }
  else{
    let boxes = document.getElementsByClassName('box');
   
    for(let i=0; i < boxes.length; i++){
      boxes[i].style.backgroundColor = "blueviolet";
    }

  }
}

