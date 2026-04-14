(function() {

  var c = document.getElementById('c');
  var ctx = c.getContext('2d');

  var colors = [
    '#c0392b',
    '#2980b9',
    '#27ae60',
    '#f39c12',
    '#8e44ad',
    '#16a085',
    '#d35400',
    '#2c3e50',
    '#1a5276',
    '#922b21'
  ];

  function rnd(a, b) {
    return a + Math.random() * (b - a);
  }

  function ri(a, b) {
    return Math.floor(rnd(a, b + 1));
  }

  function pick(a) {
    return a[Math.floor(Math.random() * a.length)];
  }

  function draw() {
    ctx.clearRect(0, 0, 300, 300);

    var cx = 150;
    var cy = 150;
    var size = ri(55, 130);
    var color = pick(colors);
    var kind = ri(0, 3);

    ctx.fillStyle = color;
    ctx.lineWidth = 2;

    if (kind === 0) {
      var w = size * rnd(0.9, 1.6);
      var h = size * rnd(0.7, 1.3);
      ctx.fillRect(cx - w / 2, cy - h / 2, w, h);

    } else if (kind === 1) {
      var rot = rnd(0, Math.PI * 2);
      ctx.beginPath();
      for (var i = 0; i < 3; i++) {
        var a = rot + (i / 3) * Math.PI * 2;
        var x = cx + Math.cos(a) * size;
        var y = cy + Math.sin(a) * size;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();

    } else if (kind === 2) {
      ctx.beginPath();
      ctx.arc(cx, cy, size, 0, Math.PI * 2);
      ctx.fill();

    } else {
      var pts = ri(4, 8);
      var inner = size * rnd(0.35, 0.55);
      var rot = rnd(0, Math.PI * 2);
      ctx.beginPath();
      for (var i = 0; i < pts * 2; i++) {
        var a = rot + (i / (pts * 2)) * Math.PI * 2;
        var r = i % 2 === 0 ? size : inner;
        var x = cx + Math.cos(a) * r;
        var y = cy + Math.sin(a) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
    }
  }

  document.getElementById('btn').addEventListener('click', draw);
  draw();

})();();
