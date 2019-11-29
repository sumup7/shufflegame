'use srict';

const firstItem = '黒';
const secondItem = '白';

document.getElementById('meseage1').innerText = `${firstItem}${secondItem}並び替えゲーム`;
document.getElementById('meseage2').innerText = `配列の勉強がしたくて作りました。\n指示にしたがって${firstItem}と${secondItem}を並び替えて遊びましょう！`;

const selectButton1 = document.getElementById('select1');
selectButton1.innerText = `先頭に${firstItem}を追加`;
const selectButton2 = document.getElementById('select2');
selectButton2.innerText = `先頭に${secondItem}をを追加`;
const selectButton3 = document.getElementById('select3');
selectButton3.innerText = `末尾に${firstItem}を追加`;
const selectButton4 = document.getElementById('select4');
selectButton4.innerText = `末尾に${secondItem}を追加`;
const selectButton5 = document.getElementById('select5');
const selectButton6 = document.getElementById('select6');
const selectButton7 = document.getElementById('select7');
const answerButton = document.getElementById('answer');
const nextButton = document.getElementById('next');
const resetButton = document.getElementById('reset');
const resultarea = document.querySelector('#resultarea > h1');
const instructionareaMessage = document.querySelector('#instructionsarea > span');
const instructionarea = document.getElementById('instructionsarea');
const meseage1 = document.getElementById('meseage1');
const meseage2 = document.getElementById('meseage2');
const body = document.body;
let result;
let count = 0;
let answer;
let degree = 0;

function rotateHeader() {
  degree = degree + 6;
  degree = degree % 360;
  if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
    resultarea.className = 'face';
  } else {
    resultarea.className = 'back';
  }
  resultarea.style.transform = 'rotateY(' + degree +  'deg)';
}
setInterval(rotateHeader, 150);

function changeColor1(){
  body.className = 'off';
  meseage1.className ='meseageWhite';
  meseage2.className ='meseageWhite';
  instructionarea.className = 'instructionsareaWhite';
  instructionareaMessage.className = 'instructionsareMesageOff';
}

function changeColor2(){
  body.className = 'on';
  meseage1.className ='meseageBlack';
  meseage2.className ='meseageBlack';
  instructionarea.className = 'instructionsareaBlack';
  instructionareaMessage.className = 'instructionsareMesageOn';
}

let blackOrWhite = [firstItem,secondItem,firstItem,secondItem,firstItem];
const instruction = [
  `指示１　${secondItem}を一つ足して、${firstItem},${secondItem},${firstItem},${secondItem},${firstItem},${secondItem}に並ばせなさい！`,
  `指示２　${firstItem}を一つ足して、${firstItem},${secondItem},${firstItem},${firstItem},${secondItem},${firstItem},${secondItem}に並ばせなさい！`,
  `指示３　${secondItem}と${firstItem}を入れ替えて、${firstItem},${firstItem},${firstItem},${secondItem},${secondItem},${secondItem}に並ばせなさい！`,
];
window.onload = ()　=> {
  resultarea.textContent = blackOrWhite;
  instructionareaMessage.textContent = instruction[0];
};
selectButton1.onclick = () => {
 result = blackOrWhite.unshift(firstItem);
 resultarea.textContent = blackOrWhite;
 changeColor1();
};
selectButton2.onclick = () => {
  blackOrWhite.unshift(secondItem);
 resultarea.textContent = blackOrWhite;
 changeColor2();
};
selectButton3.onclick = () => {
  blackOrWhite.push(firstItem);
 resultarea.textContent = blackOrWhite;
 changeColor1();
};
selectButton4.onclick = () => {
  blackOrWhite.push(secondItem);
 resultarea.textContent = blackOrWhite;
 changeColor2();
};
selectButton5.onclick = () => {
  blackOrWhite.shift();
 resultarea.textContent = blackOrWhite;
 changeColor1();
};
selectButton6.onclick = () => {
  blackOrWhite.pop();
 resultarea.textContent = blackOrWhite;
 changeColor2();
};
selectButton7.onclick = () => {
 blackOrWhite.reverse();
 resultarea.textContent = blackOrWhite;
 changeColor1();
};
resetButton.onclick = () => {
  location.reload();
};

answerButton.onclick = () => {
  answer = blackOrWhite.toString();
  if (count === 0 && answer === `${firstItem},${secondItem},${firstItem},${secondItem},${firstItem},${secondItem}`) {
    instructionareaMessage.textContent = "正解";
    count++;
  } else if (count === 0) {
    instructionareaMessage.textContent = '不正解';
  } else if (count === 1 && answer === `${firstItem},${secondItem},${firstItem},${firstItem},${secondItem},${firstItem},${secondItem}`) {
    instructionareaMessage.textContent = '正解';
    count++;
  } else if (count === 1) {
    instructionareaMessage.textContent = '不正解';
  } else if (count === 2 && answer === `${firstItem},${firstItem},${firstItem},${secondItem},${secondItem},${secondItem}`) {
    instructionareaMessage.textContent = '正解 クリア！！！！';
  } else if (count === 2) {
    instructionareaMessage.textContent = '不正解';
  } else {
    return;
  }
}

nextButton.onclick = () => {
  if (count === 1) {
    resultarea.textContent = blackOrWhite;
    instructionareaMessage.textContent = instruction[1];
  } else if (count === 2) {
    resultarea.textContent = blackOrWhite;
    instructionareaMessage.textContent = instruction[2];
  } else {
    return;
  }
}
