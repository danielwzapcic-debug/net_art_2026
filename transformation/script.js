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
  return Math.floor(a + Math.random() * (b - a + 1));
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function makeShapePath(type, size) {
  ctx.beginPath();
  if (type === 'blob') {
    var pts = rndInt(6, 10);
    for (var i = 0; i <= pts; i++) {
      var angle = (i / pts) * Math.PI * 2 - Math.PI / 2;
      var r = size * rnd(0.72, 1.0);
      var x = CX + Math.cos(angle) * r;
      var y = CY + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
  } else if (type === 'rect') {
    var w = size * rnd(1.1, 1.7);
    var h = size * rnd(0.7, 1.3);
    var x = CX - w / 2;
    var y = CY - h / 2;
    ctx.rect(x, y, w, h);
  } else if (type === 'triangle') {
    var rot = rnd(0, Math.PI * 2);
    for (var i = 0; i < 3; i++) {
      var a = rot + (i / 3) * Math.PI * 2;
      var r = size * rnd(0.85, 1.05);
      var x = CX + Math.cos(a) * r;
      var y = CY + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
  } else if (type === 'star') {
    var pts = rndInt(4, 8);
    var inner = size * rnd(0.38, 0.58);
    var rot = rnd(0, Math.PI * 2);
    for (var i = 0; i < pts * 2; i++) {
      var a = rot + (i / (pts * 2)) * Math.PI * 2;
      var r = i % 2 === 0 ? size : inner;
      var x = CX + Math.cos(a) * r;
      var y = CY + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
  } else if (type === 'ellipse') {
    var rx = size * rnd(0.7, 1.2);
    var ry = size * rnd(0.45, 0.9);
    var rot = rnd(0, Math.PI);
    ctx.ellipse(CX, CY, rx, ry, rot, 0, Math.PI * 2);
  }
}

function draw() {
  ctx.clearRect(0, 0, W, H);

  var pair = pick(palettes);
  var fill = pair[0];
  var stroke = pair[1];
  var size = rndInt(70, 100);
  var types = ['blob', 'rect', 'triangle', 'star', 'ellipse'];
  var type = pick(types);
  var detailType = rndInt(0, 3);

  ctx.save();
  makeShapePath(type, size);
  ctx.fillStyle = fill;
  ctx.fill();

  ctx.save();
  makeShapePath(type, size);
  ctx.clip();
  ctx.strokeStyle = stroke;
  ctx.globalAlpha = 0.3;
  ctx.lineWidth = 1.2;

  if (detailType === 0) {
    var gap = size * 0.13;
    for (var i = CX - size * 2; i < CX + size * 2; i += gap) {
      ctx.beginPath();
      ctx.moveTo(i, CY - size * 2);
      ctx.lineTo(i, CY + size * 2);
      ctx.stroke();
    }
  } else if (detailType === 1) {
    var gap = size * 0.13;
    for (var i = CX - size * 2; i < CX + size * 2; i += gap) {
      ctx.beginPath();
      ctx.moveTo(i, CY - size * 2);
      ctx.lineTo(i + size, CY + size * 2);
      ctx.stroke();
    }
  } else if (detailType === 2) {
    var rings = rndInt(2, 4);
    for (var r = 1; r <= rings; r++) {
      ctx.beginPath();
      ctx.arc(CX, CY, size * (r / rings) * 0.85, 0, Math.PI * 2);
      ctx.stroke();
    }
  } else {
    var gap = size * 0.13;
    for (var i = CY - size * 2; i < CY + size * 2; i += gap) {
      ctx.beginPath();
      ctx.moveTo(CX - size * 2, i);
      ctx.lineTo(CX + size * 2, i);
      ctx.stroke();
    }
  }

  ctx.restore();

  makeShapePath(type, size);
  ctx.strokeStyle = stroke;
  ctx.globalAlpha = 1;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.restore();
}

draw();
