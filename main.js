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
const instructionarea = document.querySelector('#instructionsarea > span');
let result;
let count = 0;
let answer;

let blackOrWhite = ["黒","白","黒","白","黒"];
const instruction = [
  "指示１　白を一つ足して、黒,白,黒,白,黒,白に並ばせなさい！",
  "指示２　黒を一つ足して、黒,白,黒,黒,白,黒,白に並ばせなさい！",
  "指示３　白と黒を入れ替えて、黒,黒,黒,白,白,白に並ばせなさい！",
];
window.onload = ()　=> {
  resultarea.textContent = blackOrWhite;
  instructionarea.textContent = instruction[0];
};
selectButton1.onclick = () => {
 result = blackOrWhite.unshift('黒');
 resultarea.textContent = blackOrWhite;
};
selectButton2.onclick = () => {
  blackOrWhite.unshift('白');
 resultarea.textContent = blackOrWhite;
};
selectButton3.onclick = () => {
  blackOrWhite.push('黒');
 resultarea.textContent = blackOrWhite;
};
selectButton4.onclick = () => {
  blackOrWhite.push('白');
 resultarea.textContent = blackOrWhite;
};
selectButton5.onclick = () => {
  blackOrWhite.shift();
 resultarea.textContent = blackOrWhite;
};
selectButton6.onclick = () => {
  blackOrWhite.pop();
 resultarea.textContent = blackOrWhite;
};
selectButton7.onclick = () => {
 blackOrWhite.reverse();
 resultarea.textContent = blackOrWhite;
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