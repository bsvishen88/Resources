// var imageArray = ["./images/dice1.png", "./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png", "./images/dice6.png"];

function changeImage()
{
    var dicePlay1 = (Math.floor(Math.random() * 6) + 1);
    var newImagePath1 = "./images/dice"+ dicePlay1 + ".png";
    document.querySelector(".img1").setAttribute("src",newImagePath1);

    var dicePlay2 = (Math.floor(Math.random() * 6) + 1);
    var newImagePath2 = "./images/dice"+ dicePlay2 + ".png";
    document.querySelector(".img2").setAttribute("src",newImagePath2);

    if(dicePlay1==dicePlay2)
    {
        document.querySelector("h1").textContent="Draw";
    }
    else if(dicePlay1<dicePlay2)
    {
        document.querySelector("h1").textContent="Player 2 Wins";
    }
    else
    {
        document.querySelector("h1").textContent="Player 1 Wins";
    }
    
}
window.onload = function() {
    if (sessionStorage.getItem('refreshed')) {
        changeImage();
    } else {
        // Set the flag to indicate the page has been refreshed
        sessionStorage.setItem('refreshed', 'true');
    }
};

