var h1Bg = document.querySelector("h1");
var squere = document.querySelectorAll(".squere");
var guessColor = document.querySelector("#rgb");
var gameStateText = document.querySelector("#state");
var gameMode = 6;
var resetButton = document.querySelector("#resetButton");
var mudahButton = document.querySelector("#mudah");
var sulitButton = document.querySelector("#sulit");
var gameButton = document.querySelectorAll("button");
var color = ganerateRandomColor(6);
var pickColor = color[randomNumber(squere.length)];
guessColor.textContent = pickColor.toUpperCase();

// menjalanakan fungsi di bawah untuk memulai game
colorMapping(squere, color);
colorComparison(squere);

// reset button
resetButton.addEventListener("click", function(){
    color = ganerateRandomColor(gameMode);
    pickColor = color[randomNumber(gameMode)];
    guessColor.textContent = pickColor.toUpperCase();
    h1Bg.style.backgroundColor = "aquamarine";
    resetButton.textContent = "Ganti Warna";
    colorMapping(squere, color);
    colorComparison(squere);
});

// active button
mudahButton.addEventListener("click", function(){
    mudahButton.classList.add("selected");
    sulitButton.classList.remove("selected")
    gameMode = 3;
    color = ganerateRandomColor(gameMode);
    guessColor.textContent = pickColor.toUpperCase();
    pickColor = color[randomNumber(gameMode)];
    colorMapping(squere, color);
    colorComparison(squere);
});

sulitButton.addEventListener("click", function(){
    mudahButton.classList.remove("selected");
    sulitButton.classList.add("selected")
    gameMode = 6;
    color = ganerateRandomColor(gameMode);
    guessColor.textContent = pickColor.toUpperCase();
    pickColor = color[randomNumber(gameMode)];
    colorMapping(squere, color);
    colorComparison(squere);
});

// fungsi-fungsi berada dibawah sini:

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

// fungsi mapping color ke box yang sudah kita buat

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
                this.style.backgroundColor = "aquamarine";
    
                // saat salah memilih akan muncul tulisan coba lagi
                gameStateText.textContent = "Coba lagi!";
    
            }
        });
    }
}