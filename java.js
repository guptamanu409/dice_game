document.querySelector("h1").innerHTML = "Let's Dice";
document.querySelector("footer").innerHTML = "© 2022 Vishal";

document.getElementsByTagName("footer")[0].style.fontFamily = "Ubuntu";

document.querySelector("button").addEventListener("click", function () { //Anonymous Function hai

    //Generating random number1 from 1 to 6
    var num1 = Math.floor(Math.random() * 6) + 1;

    //Generating random number2 from 1 to 6
    var num2 = Math.floor(Math.random() * 6) + 1;

    //Selecting image and setting the attribute for image 1
    document.querySelectorAll("img")[0].setAttribute("src", `images/dice${num1}.png`);


    //Selecting image and setting the attribute for image 2
    document.querySelectorAll("img")[1].setAttribute("src", `images/dice${num2}.png`);

    //Checking the size and see who won

    if (num1 > num2) {
        document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins 😍";
    }

    else if (num2 > num1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins ❤️";
    }

    else {
        document.getElementsByTagName("h1")[0].innerHTML = "Draw 🤝"
    }

});