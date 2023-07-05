const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
const dpr = window.devicePixelRatio;

const canvasWidth = 300;
const canvasHeight = 300;
// // css와 캔버스 자체 크기를 같게 설정해야 한다.
canvas.style.width = canvasWidth + "px";
canvas.style.height = canvasHeight + "px";
// dpr device pixel ratio, 높을수록 더 선명한 디스플레이
// dpr만큼 배율을 올려서 그려주면 디스플레이에 맞는 선명한 이미지를 제공할 수 있다.
canvas.width = canvasWidth * dpr;
canvas.height = canvasHeight * dpr;
ctx.scale(dpr, dpr);
ctx.fillRect(10, 10, 50, 50);
