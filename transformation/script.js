var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');
var W = 280;
var H = 280;
var CX = 140;
var CY = 140;

var palettes = [
  ['#e8c4b8', '#c97d6a'],
  ['#b8cfe8', '#5a7fa8'],
  ['#c4e8c4', '#5a9a6a'],
  ['#e8e0b8', '#b8963a'],
  ['#d4b8e8', '#8a5ab8'],
  ['#b8e8e4', '#3a9a94'],
  ['#e8b8d0', '#b83a70'],
  ['#dde8b8', '#7a9a3a']
];

function rnd(a, b) {
  return a + Math.random() * (b - a);
}

function rndInt(a, b) {
  return Math.floor(rnd(a, b + 1));
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function addStripes(size) {
  var gap = size * 0.13;
  ctx.lineWidth = 1.2;
  for (var i = -size * 2; i < size * 2; i += gap) {
    ctx.beginPath();
    ctx.moveTo(CX - size + i, CY - size * 2);
    ctx.lineTo(CX - size + i, CY + size * 2);
    ctx.stroke();
  }
}

function addDiagonals(size) {
  var gap = size * 0.13;
  ctx.lineWidth = 1.2;
  for (var i = -size * 2; i < size * 2; i += gap) {
    ctx.beginPath();
    ctx.moveTo(CX + i, CY - size * 2);
    ctx.lineTo(CX + i + size, CY + size * 2);
    ctx.stroke();
  }
}

function addRings(size) {
  var rings = rndInt(2, 4);
  ctx.lineWidth = 1;
  for (var r = 1; r <= rings; r++) {
    ctx.beginPath();
    ctx.arc(CX, CY, size * (r / rings) * 0.85, 0, Math.PI * 2);
    ctx.stroke();
  }
}

function addHorizontal(size) {
  var gap = size * 0.13;
  ctx.lineWidth = 1.2;
  for (var i = -size * 2; i < size * 2; i += gap) {
    ctx.beginPath();
    ctx.moveTo(CX - size * 2, CY + i);
    ctx.lineTo(CX + size * 2, CY + i);
    ctx.stroke();
  }
}

function addDetail(stroke, size) {
  var type = rndInt(0, 3);
  ctx.save();
  ctx.strokeStyle = stroke;
  ctx.globalAlpha = 0.3;
  if (type === 0) addStripes(size);
  else if (type === 1) addDiagonals(size);
  else if (type === 2) addRings(size);
  else addHorizontal(size);
  ctx.restore();
}

function drawBlob(fill, stroke, size) {
  var pts = rndInt(6, 11);
  ctx.beginPath();
  for (var i = 0; i <= pts; i++) {
    var angle = (i / pts) * Math.PI * 2 - Math.PI / 2;
    var r = size * rnd(0.72, 1.0);
    var x = CX + Math.cos(angle) * r;
    var y = CY + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  addDetail(stroke, size);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

function drawRect(fill, stroke, size) {
  var w = size * rnd(1.1, 1.7);
  var h = size * rnd(0.7, 1.3);
  var x = CX - w / 2;
  var y = CY - h / 2;
  var jit = size * 0.06;
  function j() { return rnd(-jit, jit); }
  ctx.beginPath();
  ctx.moveTo(x + j(), y + j());
  ctx.lineTo(x + w + j(), y + j());
  ctx.lineTo(x + w + j(), y + h + j());
  ctx.lineTo(x + j(), y + h + j());
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  addDetail(stroke, Math.min(w, h) / 2);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

function drawTriangle(fill, stroke, size) {
  var rot = rnd(0, Math.PI * 2);
  ctx.beginPath();
  for (var i = 0; i < 3; i++) {
    var a = rot + (i / 3) * Math.PI * 2;
    var r = size * rnd(0.85, 1.05);
    var x = CX + Math.cos(a) * r;
    var y = CY + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  addDetail(stroke, size * 0.7);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

function drawStar(fill, stroke, size) {
  var pts = rndInt(4, 8);
  var inner = size * rnd(0.38, 0.58);
  var rot = rnd(0, Math.PI * 2);
  ctx.beginPath();
  for (var i = 0; i < pts * 2; i++) {
    var a = rot + (i / (pts * 2)) * Math.PI * 2;
    var r = i % 2 === 0 ? size : inner;
    var x = CX + Math.cos(a) * r;
    var y = CY + Math.sin(a) * r;
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  addDetail(stroke, size * 0.6);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

function drawEllipse(fill, stroke, size) {
  var rx = size * rnd(0.7, 1.2);
  var ry = size * rnd(0.5, 1.0);
  var rot = rnd(0, Math.PI);
  ctx.save();
  ctx.translate(CX, CY);
  ctx.rotate(rot);
  ctx.beginPath();
  ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.restore();
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  var pair = pick(palettes);
  var fill = pair[0];
  var stroke = pair[1];
  var size = rndInt(70, 105);
  var shapes = [drawBlob, drawRect, drawTriangle, drawStar, drawEllipse];
  var chosen = pick(shapes);
  chosen(fill, stroke, size);
}

draw();});
