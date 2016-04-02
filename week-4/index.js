// On click white button set colors white
document.getElementById('whiteButton').onclick = switchToWhite;

// On click grey button set colors gray 
document.getElementById('grayButton').onclick = switchToGrey;



//function to make colors white 
function switchToWhite(){
        //change background
        document.body.style.backgroundColor = "white"; 
        //change text colors
        document.body.style.color = "black";
}

// funciton to make colors gray 
function switchToGrey(){
        //change background
        document.body.style.backgroundColor = "gray";
        //change text colors
        document.body.style.color = "white"; 
}