var h1Bg = document.querySelector("h1");
var squere = document.querySelectorAll(".squere");
var guessColor = document.querySelector("#rgb");
var gameStateText = document.querySelector("#state");
var gameMode = 6;
var resetButton = document.querySelector("#resetButton");
var mudahButton = document.querySelector("#mudah");
var sulitButton = document.querySelector("#sulit");
var mode = document.querySelectorAll(".mode")
var gameButton = document.querySelectorAll("button");
var color = ganerateRandomColor(6);
var pickColor = color[randomNumber(squere.length)];

// menjalanakan fungsi di bawah untuk memulai game
startGame();

// reset button
resetButton.addEventListener("click", function(){
    resetBtn(gameMode);
});

// tingkat kesulitan button

for(var i = 0; i < mode.length; i++){
    mode[i].addEventListener("click", function(){
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Mudah" ? gameMode = 3 : gameMode = 6;
        resetBtn(gameMode);
    });
}

// fungsi untuk memetakan warna ke box
function changeColor(gColor){
    for(var i = 0; i < squere.length; i++){
        squere[i].style.backgroundColor = gColor;
    }
}

// fungsi untuk mengambil random number
function randomNumber(maxNumber){
    return Math.floor(Math.random() * maxNumber)
}

// fungsi untuk menggenerate random color
function ganerateRandomColor(num){
    var arr = [];

    for(var i = 0; i < num; i++){
        arr.push("rgb("+ randomNumber(256) + ", " + randomNumber(255) + ", " + randomNumber(255) + ")");
    }

    return arr;
}

// fungsi untuk memetakan warna sesuai dengan jumlah array colArr

function colorMapping(divArr, colArr){
    for(var i = 0; i < divArr.length; i++){
        //mapping semua warna yang sudah di masukan ke dalam box
        if(colArr[i]){
            divArr[i].style.backgroundColor = colArr[i];
            divArr[i].style.display = "block";
        } else {
            divArr[i].style.display = "none";
        }
    }
}

// fungsi untuk menentukan salah benernya pilihak kita
function colorComparison(divArr){
    for(var i = 0; i < divArr.length; i++){
        divArr[i].addEventListener("click", function(){
            if(pickColor === this.style.backgroundColor){
                
                // merubah span yang berada di div menu agar tertulis win!
                gameStateText.textContent = "Win!";
                resetButton.textContent = "Lagi?";
    
                // saat sudah benar memilih, semua warna ikut berubah
                changeColor(pickColor);
                h1Bg.style.backgroundColor = pickColor;
    
            } else {
                
                // merubah agar saat salah memilih warna box akan menghilang
                this.style.backgroundColor = "crimson";
    
                // saat salah memilih akan muncul tulisan coba lagi
                gameStateText.textContent = "Coba lagi!";
    
            }
        });
    }
}

function resetBtn(tingkatKesulitan){
    color = ganerateRandomColor(tingkatKesulitan);
    pickColor = color[randomNumber(tingkatKesulitan)];
    guessColor.textContent = pickColor.toUpperCase();    
    gameStateText.textContent = "";
    colorMapping(squere, color);
    colorComparison(squere);
    h1Bg.style.backgroundColor = "rgb(92, 90, 193)";
    resetButton.textContent = "Ganti Warna";
}

function startGame(){
    guessColor.textContent = pickColor.toUpperCase();
    colorMapping(squere, color);
    colorComparison(squere);
}