//get the shape
let shape = document.getElementById("shape");

//get the start date from 1970 in milisec
let startTime = new Date().getTime();

//Getting random color of the figure 
let getRandomColor = ()=>{
    //colors may exist like this #dgd345 - combination of up to 6 letters&numbers, so let's get the "array" of all possgible cases and split them with ''
    let lettersAndNumbers = "0123456789ABCDEF".split('');
    //here we will get the color strarting with #
    let color = "#";
    //creating condition that the color should't be bigger than 6 numbers&letters  
    for(let i = 0; i < 6; i++){
        //creating condition that color "#" will randomly combine with lettersAndNumbers "0123456789ABCDEF" 
        //(Math.random function is any number from 0 till 1)
        color += lettersAndNumbers[Math.floor(Math.random() * 16)]; //floor function will get the numbers without decimals and *16 we will get all 16 color in the hexidemical system  
    }
    return color;
}

//make the figure appear after the click
let makeShapeVisible = ()=>{
    //get the random number from the top of the screen
    let distanseFromTop = Math.random()*250;
    //get the figure in the random place from top on the screen
    shape.style.top = distanseFromTop + "px";

    //get the random number from the left of the screen
    let distanseFromLeft = Math.random()*1000;
    //get the figure in the random place from left on the screen
    shape.style.left = distanseFromLeft + "px";

    //Change the width of the figure ramdomly
    let widthOfTheFigure = Math.random()*700 + 50
    //change the width
    shape.style.width = widthOfTheFigure + "px";

    //Change wthe height of the figure ramdomly
    let heightOfTheFigure = Math.random()*200 + 50;
    //change the height
    shape.style.height = heightOfTheFigure + "px";

    shape.style.display = "block"; //this line makes the figure visible

    //set the timer to 0 after the figure's disappeared
    startTime = new Date().getTime();

    //in the one-third of the cases get circles/ovals & in the other one-third of the cases get square/rectangle & in the other one-third of the cases get triangle
    if(Math.random() < 0.3){
        shape.style.borderRadius = "50%";
        shape.style.backgroundColor = getRandomColor(); // random color is here
        shape.style.borderBottom = "0";
    }else if(Math.random() >= 0.3 && Math.random() <= 0.7){
        shape.style.borderRadius = "0%";
        shape.style.backgroundColor = getRandomColor(); // random color is here
        shape.style.borderBottom = "0";
    }else if(Math.random() > 0.7){
        shape.style.borderRadius = "0%";
        shape.style.left = "0";
        shape.style.width = "0";
        shape.style.borderLeft = "50px solid transparent";
        shape.style.borderRight = "50px solid transparent";
        shape.style.borderBottom = "100px solid" + getRandomColor(); // random color is here
        shape.style.backgroundColor = "transparent";
    }
}

//get the shape after the page's loaded (the figure is not visible from the beginning) - call the functon to make it visible (up to 3 sec of delay)
setTimeout(makeShapeVisible, Math.random() * 3000);

//Manipulations with the figure
shape.onclick = ()=>{

    //get the finish time 
    let finishTime = new Date().getTime();

    //get the figure disappear onclick
    shape.style.display = "none";

    //calculate the time between clicks
    let reactionTime = (finishTime - startTime)/1000; //get the reaction time in the seconds 
    document.getElementById("reactionTime").innerHTML = reactionTime + " seconds.";
    setTimeout(makeShapeVisible, Math.random() * 3000);
}