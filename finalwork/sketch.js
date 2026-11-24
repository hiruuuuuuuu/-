
let N = 16;

let sx = [];
let sy = [];
let ex = [];
let ey = [];

let progress = 0;
let moving = false;

function setup() {
  createCanvas(700, 700);

  // 最初のフォーメーション
  for (let i = 0; i < N; i++) {
    let angle = PI + PI * i / (N - 1);

    sx[i] = 350 + 180 * cos(angle);
    sy[i] = 200 + 120 * sin(angle);
  }

  // 移動後のフォーメーション
  for (let i = 0; i < N; i++) {
    ex[i] = 100 + (i % 8) * 70;
    ey[i] = 450 + Math.floor(i / 8) * 90;
  }
}

function draw() {
  background(255);

  fill(0);
  textSize(20);
  text("16人のフォーメーション移動", 200, 40);

  if (moving && progress < 1) {
    progress += 0.01;
  }

  let t = progress * progress * (3 - 2 * progress);

  // 16個の点を移動させる
  for (let i = 0; i < N; i++) {
    let x = lerp(sx[i], ex[i], t);
    let y = lerp(sy[i], ey[i], t);

    fill(30, 100, 220);
    noStroke();
    circle(x, y, 18);
  }

  fill(0);
  textSize(16);
  text("SPACE：移動開始", 20, 650);
  text("R：最初に戻る", 20, 680);
}

function keyPressed() {
  if (key === ' ') {
    moving = true;
  }

  if (key === 'r' || key === 'R') {
    progress = 0;
    moving = false;
  }
}
