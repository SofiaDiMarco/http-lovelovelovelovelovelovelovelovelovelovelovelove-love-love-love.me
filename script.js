/*
gradient
*/

var nbrCircle=2;
var cmpt=0;
while(cmpt<nbrCircle) {
  document.getElementById('r1').innerHTML=document.getElementById('r1').innerHTML+'<div class="circle"></div>';
  document.getElementById('r1').getElementsByClassName('circle')[cmpt].style.margin='0 0 0 0';
  setTimeout(function(){document.getElementById('r1').getElementsByClassName('circle')[cmpt].style.opacity='0.5';},100);
  document.getElementById('r2').innerHTML=document.getElementById('r2').innerHTML+'<div class="circle"></div>';
  document.getElementById('r2').getElementsByClassName('circle')[cmpt].style.margin='0 0 0 0';
  setTimeout(function(){document.getElementById('r2').getElementsByClassName('circle')[cmpt].style.opacity='0.5';},100);
  document.getElementById('r3').innerHTML=document.getElementById('r3').innerHTML+'<div class="circle"></div>';
  document.getElementById('r3').getElementsByClassName('circle')[cmpt].style.margin='0 0 0 0';
  setTimeout(function(){document.getElementById('r3').getElementsByClassName('circle')[cmpt].style.opacity='0.5';},500);
  document.getElementById('r4').innerHTML=document.getElementById('r4').innerHTML+'<div class="circle"></div>';
  document.getElementById('r4').getElementsByClassName('circle')[cmpt].style.margin='0 0 0 0';
  setTimeout(function(){document.getElementById('r4').getElementsByClassName('circle')[cmpt].style.opacity='0.5';},500);
  cmpt++;
}
setTimeout(function() {
  var cmpt=0;
  while(cmpt<nbrCircle) {
    document.getElementById('r1').getElementsByClassName('circle')[cmpt].style.opacity='0.5';
    document.getElementById('r2').getElementsByClassName('circle')[cmpt].style.opacity='0.5';
    document.getElementById('r3').getElementsByClassName('circle')[cmpt].style.opacity='0.5';
    document.getElementById('r4').getElementsByClassName('circle')[cmpt].style.opacity='0.5';
    cmpt++;
  }
},1000);
setInterval(function(){
  linearMargin=false;
  var cmpt=0;
  while(document.getElementById('r1').getElementsByClassName('circle')[cmpt]) {
    if(cmpt%2==0) {
      linearMargin=false;
    }
    else {
      linearMargin=true;
    }
    var circle=document.getElementById('r1').getElementsByClassName('circle')[cmpt];
    var value1_1=Math.floor((Math.random()*255)+0);
    var value1_2=Math.floor((Math.random()*255)+0);
    var value1_3=Math.floor((Math.random()*255)+0);
    var marginInterval=100;
    var contentSize=500;
    if(parseInt(circle.style.marginTop)+marginInterval<contentSize && parseInt(circle.style.marginTop)+-marginInterval>=0)
      var value2_1=parseInt(circle.style.marginTop)+Math.floor((Math.random()*marginInterval)+-marginInterval);
    else if(parseInt(circle.style.marginTop)+marginInterval<document.body.offsetHeight)
      var value2_1=parseInt(circle.style.marginTop)+Math.floor((Math.random()*marginInterval)+0);
    else
      var value2_1=parseInt(circle.style.marginTop)+-Math.floor((Math.random()*marginInterval)+0);
    if(linearMargin==true)
      value2_2=value2_1;
    else if(parseInt(circle.style.marginLeft)+marginInterval<contentSize && parseInt(circle.style.marginWidth)+-marginInterval>=0)
      var value2_2=parseInt(circle.style.marginLeft)+Math.floor((Math.random()*marginInterval)+-marginInterval);
    else if(parseInt(circle.style.marginLeft)+marginInterval<document.body.offsetHeight)
      var value2_2=parseInt(circle.style.marginLeft)+Math.floor((Math.random()*marginInterval)+0);
    else
      var value2_2=parseInt(circle.style.marginLeft)+-Math.floor((Math.random()*marginInterval)+0);
    var value3_1=Math.floor((Math.random()*200)+10);
    var value3_2=value3_1;
    var value4_1=Math.floor((Math.random()*200)+0);
    circle.style.background='rgb('+value1_1+','+value1_2+','+value1_3+')';
    circle.style.margin=value2_1+'px 0 0 '+value2_2+'px';
    circle.style.width=value3_1+'px';
    circle.style.height=value3_2+'px';
    circle.style.borderRadius=value4_1+'px';
    var circle=document.getElementById('r2').getElementsByClassName('circle')[cmpt];
    circle.style.background='rgb('+value1_1+','+value1_2+','+value1_3+')';
    circle.style.margin=value2_1+'px 0 0 '+value2_2+'px';
    circle.style.width=value3_1+'px';
    circle.style.height=value3_2+'px';
    circle.style.borderRadius=value4_1+'px';
    var circle=document.getElementById('r3').getElementsByClassName('circle')[cmpt];
    circle.style.background='rgb('+value1_1+','+value1_2+','+value1_3+')';
    circle.style.margin=value2_1+'px 0 0 '+value2_2+'px';
    circle.style.width=value3_1+'px';
    circle.style.height=value3_2+'px';
    circle.style.borderRadius=value4_1+'px';
    var circle=document.getElementById('r4').getElementsByClassName('circle')[cmpt];
    circle.style.background='rgb('+value1_1+','+value1_2+','+value1_3+')';
    circle.style.margin=value2_1+'px 0 0 '+value2_2+'px';
    circle.style.width=value3_1+'px';
    circle.style.height=value3_2+'px';
    circle.style.borderRadius=value4_1+'px';
    cmpt++;
  }
},500);

const numDivs = 10;
const colors = ['pink', 'hotpink', 'blue', 'pink', 'lime'];
const explodingCard = document.getElementsByClassName('exploding-card')[0];
const explosion = document.getElementsByClassName('explosion')[0];
const colorDelay = 100;

for (let i = 0; i < numDivs; i++) {
  let duplicate = explosion.cloneNode();
  duplicate.style.background = colors[(i + 1) % colors.length];
  duplicate.style.animationDelay = `${(i + 1) * colorDelay}ms`;
  explodingCard.appendChild(duplicate);
}

const explosions = document.getElementsByClassName('explosion');

explodingCard.addEventListener("mousedown", ev => {
  [].forEach.call(explosions, explosion => {      
    explosion.style.left = `${ev.clientX}px`;
    explosion.style.top = `${ev.clientY}px`;
  });
});

explodingCard.addEventListener("mousemove", ev => {
  [].forEach.call(explosions, explosion => {
    explosion.style.left = `${ev.clientX}px`;
    explosion.style.top = `${ev.clientY}px`;
  })
});



/*
popup infinite
*/


const popupContainer = document.querySelector("#popup-container");
const messages = [
  "i love you!",
  "you have the best laugh.",
  "i appreciate you.",
  "you're wonderful.",
  "you have cute elbows.",
  "thank you for being you.",
  "you make babies smile.",
  "you just made my day.",
  "i like the way you are.",
  "you are stunning.",
  "i am really glad we met.",
  "you're a great listener.",
  "you're inspiring.",
  "you look great today.",
  "you smell really good.",
  "you're one of a kind.",
  "you radiate warmth.",
  "💍?",
  "you are effervescent.",
  "your energy is infectious!",
  "you’re truly a gem",
  "<3",
  "you have a cute nose",
  "and cute eyes",
  "i’m your biggest fan",
  "ʕ•͡-•ʔ",
  "your passion motives me",
  "thank you for existing.",
  "you are my world",
  "🧸❤️?",
  "how did I get so lucky?",
  "you have a heart of gold",
  "You are a true leader",
  "your work is inspiring",
  "❥★♛❀♡𝕀 𝕝𝕠𝕧𝕖 𝕪𝕠𝕦♡❀♛★❥",
  "your creativity is unique",
  "you are a true blessing",
  "your eyelash is cute",
  "i love your new shoes",
  "that totally suit you",
  "keep it up",
  "i love your neck",
  "💝💝💝💝",
  "i love everything about u",
  "ur perfect",
  "your lips are so lovely",
  "your skin is so soft!",
  "your jawline is so defined",
  "<3<3<3<3",
  "your dimples are adorable",
  "your lips are so kissable",
  "your skin is so fresh",
  "you have a radiant glow",
  "your smile is contagious",
  "your style is impeccable",
  "you have perfect poise",
  "you are a true beauty",
  "you are limitless",
  "your grace is enviable",
  "you are a great leader",
  "your inner beauty shines",
  "❤❤❤❤",
  "💋💋💋💋",
  "i love your face",
  "💜💜💜💜",
  "⋆｡ ﾟ ☁︎｡⋆｡ ﾟ ☾ ﾟ ｡⋆",
  "are u for real?",
  "˙ᵕ˙",
  "🥺🫶🏻💞",
  "(⑅ •͈ᴗ•͈ )∟ᵒᵛᵉ૫૦∪",
  "🌹",
  "⋆˙⟡♡",
  "-`♡´-",
  "u have a nice face",
  "you are amazing!",
  "you look stunning today",
  "you are incredible!",
  "you are pure magic.",
  "you inspire me.",
  "you are shining bright.",
  "you are truly beautiful.",
  "you are a blessing.",
  "you are making waves.",
  "you light up rooms.",
  "you are simply perfect.",
  "you are a superstar.",
  "you make me happy.",
  "you are a hero.",
  "you are so talented.",
  "you are unforgettable.",
  "you have a kind heart.",
  "you are a legend.",
  "you are full of grace.",
  "you are one-of-a-kind.",
  "you are a champion.",
  "you are an angel.",
  "you are so admirable.",
  "you are a rockstar.",
  "you are so lovable.",
  "you are a miracle.",
  "you are a delight.",
  "you are such fun.",
  "you are a wonder.",
  "you are truly amazing.",
  "you are outstanding.",
  "you are a treasure.",
  "you are so special.",
  "you are a blessing.",
  "you are a genius.",
  "you are an innovator.",
  "you are so inspiring.",
  "you are pure genius.",
  "you are a powerhouse.",
  "you are an achiever.",
  "you are so charming.",
  "you are a gift.",
  "you are wonderful.",
  "you are so talented.",
  "you are the bomb.",
  "you are a legend.",
  "you are so magical.",
  "you are so talented.",
  "you are irreplaceable.",
  "you are awesome sauce.",
  "you are a dream.",
  "you are so vibrant.",
  "you are my sunshine.",
  "you are always glowing.",
  "you are so thoughtful.",
  "you are so friendly.",
  "you are unforgettable.",
  "you are a blessing.",
  "you are the bee's knees.",
  "you are so charismatic.",
  "you are radiant.",
  "you are so loving.",
  "you are so positive.",
  "(>‿♥)",
  "❁❁❁❁❁❁❁❁❁❁❁",
  "☻︎i love u☻︎",
  "(づ˶•༝•˶)づ♡",
  "u and me 🖇",
  "♡ ♡ ♡",
  "*(*❦ω❦)*",
  "𖨆♡𖨆",
  "✯¸.•´*¨`*•✿ ✿•*`¨*`•.¸✯",
  "you are one-in-a-million.",
  "you are pure joy.",
  "you are the light.",
  "you are always dazzling.",
  "you are unstoppable.",
  "you are incredibly talented.",
  "you are so impressive.",
  "you are the real deal.",
  "you are so unique.",
  "you are the greatest.",
  "you are so lovely.",
  "you are always inspiring.",
  "you are so attractive.",
  "you are a true winner.",
  "you are so special.",
  "you are so intelligent.",
  "you are so fabulous.",
  "you are a genius.",
  "you are so brilliant.",
  "you are so adorable.",
  "you are always shining.",
  "you are so powerful.",
  "you are simply gorgeous.",
  "you are the best.",
  "you are so charming.",
  "you are so captivating.",
  "you are so magical.",
  "you are always wonderful.",

  
  
  
  
  // Add more messages here
];

// Generate a random number between min and max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create and display a pop-up window
function createPopup(message) {
  const popup = document.createElement("div");
  popup.classList.add("popup");

  // Set the pop-up's position
  const x = getRandomNumber(0, window.innerWidth - 200);
  const y = getRandomNumber(0, window.innerHeight - 200);
  popup.style.left = `${x}px`;
  popup.style.top = `${y}px`;

  // Set the pop-up's content
  popup.innerHTML = `
    <input type="text" value="${message}">
    <button class="close-button">Close</button>
  `;

  popupContainer.appendChild(popup);

  // Close the pop-up when the close button is clicked
  const closeButton = popup.querySelector(".close-button");
  closeButton.addEventListener("click", function() {
    popup.style.display = "none";
  });

  popup.style.display = "block";
}

// Display pop-ups at different times
for (let i = 30; i < 5000; i++) {
  setTimeout(function() {
    createPopup(messages[i % messages.length]);
  }, i * 1000);
}


/*
affirmation game              
*/

const screens = document.querySelectorAll(".screen");
const chooseAffirmationButtons = document.querySelectorAll(".choose-affirmation-btn");
const startButton = document.getElementById("start-btn");
const startButton2 = document.getElementById("start-btn2");
const startButton3 = document.getElementById("start-btn3");
const startButton4 = document.getElementById("start-btn4");
const startButton5 = document.getElementById("start-btn5");
const startButton6 = document.getElementById("start-btn6");
const gameContainer = document.getElementById("game-container");
const timeElement = document.getElementById("time");
const lovescoreElement = document.getElementById("lovescore");
const message = document.getElementById("message");
let seconds = 0;
let lovescore = 0;
let selectedAffirmation = {};

startButton.addEventListener("click", () => screens[0].classList.add("up"));
startButton2.addEventListener("click", () => screens[0].classList.add("up"));
startButton3.addEventListener("click", () => screens[0].classList.add("up"));
startButton4.addEventListener("click", () => screens[0].classList.add("up"));
startButton5.addEventListener("click", () => screens[0].classList.add("up"));
startButton6.addEventListener("click", () => screens[0].classList.add("up"));

const increaseLovescore = () => {
  lovescore++;
  if (lovescore > 19) message.classList.add("visible");
  lovescoreElement.innerHTML = `Lovescore: ${lovescore}`;
};

const addAffirmation = () => {
  setTimeout(createAffirmation, 1000);
  setTimeout(createAffirmation, 1500);
};

const catchAffirmation = function () {
  increaseLovescore();
  this.classList.add("caught");
  setTimeout(() => this.remove, 2000);
  addAffirmation();
};

const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
};

const createAffirmation = () => {
  const affirmation = document.createElement("div");
  affirmation.classList.add("affirmation");
  const { x, y } = getRandomLocation();
  affirmation.style.top = `${y}px`;
  affirmation.style.left = `${x}px`;
  affirmation.innerHTML = `<img src="${selectedAffirmation.src}" 
  alt="${selectedAffirmation.alt}" 
  style="transform: rotate(${Math.random() * 360}deg)" />`;
  affirmation.addEventListener("click", catchAffirmation);
  gameContainer.appendChild(affirmation);
};

const increaseTime = () => {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeElement.innerHTML = `Time: ${m}:${s}`;
  seconds++;
};

const startGame = () => setInterval(increaseTime, 1000);

chooseAffirmationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");
    const src = image.getAttribute("src");
    const alt = image.getAttribute("alt");
    selectedAffirmation = { src, alt };
    screens[1].classList.add("up");
    setTimeout(createAffirmation, 1000);
    startGame();
  });
});

/*
affirmation game ending
*/


