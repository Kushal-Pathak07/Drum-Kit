//for detecting user is clicked on button
let n = document.querySelectorAll(".drum").length;
for(let i = 0; i < n; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        let ch = this.innerHTML;
        makeSound(ch);
        makeAnimation(ch);
    });
}

//for detecting keyboard is pressed
document.addEventListener("keypress",function(e){
    makeSound(e.key); //parameter(here 'e').key will specify which key is pressed 
    makeAnimation(e.key);
})

function makeSound(key)
{
    switch (key) 
    {
        case "s":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "f":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "g":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "h":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            let kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        default:
            break;
    }
}

//function for making animation in button at time of click or keypress
function makeAnimation(currentKey)
{
    let currButton = document.querySelector("."+currentKey);
    currButton.classList.add("pressed");
    setTimeout(function(){
        currButton.classList.remove("pressed");
    }, 150);
}