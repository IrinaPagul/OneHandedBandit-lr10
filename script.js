const iconsDiv = document.getElementById("icons");
const userName = document.getElementById("userName");
const genButton = document.getElementById("generate");
const roundText = document.getElementById("roundText");
const coinsText = document.getElementById("coins");

const iconsMap = new Map([
    [1, "./icons/icon1.png"],
    [2, "./icons/icon2.png"],
    [3, "./icons/icon3.png"],
    [4, "./icons/icon4.png"],
    [5, "./icons/icon5.png"],
    [6, "./icons/icon6.png"],
    [7, "./icons/icon7.png"],
    [8, "./icons/icon8.png"],
    [9, "./icons/icon9.png"]
])
const keys = Array.from(iconsMap.keys()); 
const img1 = document.createElement("img");
img1.id = "icon1";
iconsDiv.appendChild(img1);
const img2 = document.createElement("img");
img2.id = "icon2";
iconsDiv.appendChild(img2);

const img3 = document.createElement("img");
img3.id = "icon3";
iconsDiv.appendChild(img3);
let coins = 0;
let img1Data = { key: 0 }; 
let img2Data = { key: 0 };
let img3Data = { key: 0 };
let round = 0;
function Start() {
    if (name != ''){
        if (round == 3){
            alert("It's the end of game!");
            genButton.disabled = true;
            if (coins != 0){alert(`YOU WIN ${coins} COINS!`);}
            else if (coins == 0){alert("YOU LOST!");}
        }
        else{
            Generate(img1, img1Data);
            Generate(img2, img2Data);
            Generate(img3, img3Data);
            round ++;
            roundText.innerHTML = `${round}/ 3`;
            if (img1Data.key === img2Data.key && img2Data.key === img3Data.key){
                coins +=10;
                coinsText.innerHTML = `${coins} coins`;
            }
        }  
    } 
    else{      
        name = prompt("Enter your name: ");
        if (name == '') {alert("ENTER NAME!");
        } else {userName.innerHTML = name; }
    }
}
function Generate(image, data){
    let randomIcon = Math.floor(Math.random() * iconsMap.size) + 1 ;
    let selectedIcon = iconsMap.get(randomIcon);
    image.src = selectedIcon;
    data.key = randomIcon;
}
Generate(img1, img1Data);
Generate(img2, img2Data);
Generate(img3, img3Data);



