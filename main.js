'use srict';
const selectButton1 = document.getElementById('select1');
const selectButton2 = document.getElementById('select2');
const selectButton3 = document.getElementById('select3');
const selectButton4 = document.getElementById('select4');
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
let blackOrWhite = ["黒","白","黒","白","黒"];
const instruction = [
  "指示１　白を一つ足して、黒,白,黒,白,黒,白に並ばせなさい！",
  "指示２　黒を一つ足して、黒,白,黒,黒,白,黒,白に並ばせなさい！",
  "指示３　白と黒を入れ替えて、黒,黒,黒,白,白,白に並ばせなさい！",
];
window.onload = ()　=> {
  resultarea.textContent = blackOrWhite;
  instructionareaMessage.textContent = instruction[0];
};
selectButton1.onclick = () => {
 result = blackOrWhite.unshift('黒');
 resultarea.textContent = blackOrWhite;
 changeColor1();
};
selectButton2.onclick = () => {
  blackOrWhite.unshift('白');
 resultarea.textContent = blackOrWhite;
 changeColor2();
};
selectButton3.onclick = () => {
  blackOrWhite.push('黒');
 resultarea.textContent = blackOrWhite;
 changeColor1();
};
selectButton4.onclick = () => {
  blackOrWhite.push('白');
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
if(count === 0 && answer === "黒,白,黒,白,黒,白"){
  instructionarea.textContent = "正解";
  count++;
}else if(count ===0){
  instructionarea.textContent = '不正解';
}else if(count ===1 && answer ==="黒,白,黒,黒,白,黒,白"){
  instructionarea.textContent = "正解";
  count++;
}else if(count ===1){
  instructionarea.textContent = '不正解';
}else if(count ===2 && answer === "黒,黒,黒,白,白,白"){
  instructionarea.textContent = "正解 クリア！！！！";
}else if(count===2){
  instructionarea.textContent = '不正解';
}else{
  return;
}
nextButton.onclick = () => {
  if(count===1) {
    resultarea.textContent = blackOrWhite;
    instructionarea.textContent = instruction[1];
  }else　if(count ===2){
    resultarea.textContent = blackOrWhite;
    instructionarea.textContent = instruction[2];
  }else {
    return;
  }
}}
