// ── Artwork library ──
// Public-domain / openly licensed images from museum collections & Wikimedia
const artworks = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    title: "Mona Lisa",
    artist: "Leonardo da Vinci, c. 1503–1519"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    title: "The Starry Night",
    artist: "Vincent van Gogh, 1889"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Camponotus_flavomarginatus_ant.jpg/1024px-Camponotus_flavomarginatus_ant.jpg",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/280px-PNG_transparency_demonstration_1.png",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Biharwe_entrance.jpg/1024px-Biharwe_entrance.jpg",
    title: "placeholder",
    artist: ""
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/757px-The_Scream.jpg",
    title: "The Scream",
    artist: "Edvard Munch, 1893"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sunflowers_National_Gallery_London.jpg/800px-Sunflowers_National_Gallery_London.jpg",
    title: "Sunflowers",
    artist: "Vincent van Gogh, 1888"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Girl_with_a_Pearl_Earring.jpg/787px-Girl_with_a_Pearl_Earring.jpg",
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer, c. 1665"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Millais_Ophelia.jpg/1280px-Millais_Ophelia.jpg",
    title: "Ophelia",
    artist: "John Everett Millais, 1852"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Gustave_Courbet_-_Bonjour_Monsieur_Courbet_-_Google_Art_Project.jpg/1280px-Gustave_Courbet_-_Bonjour_Monsieur_Courbet_-_Google_Art_Project.jpg",
    title: "Bonjour Monsieur Courbet",
    artist: "Gustave Courbet, 1854"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/El_dos_de_mayo_de_1808_en_Madrid.jpg/1280px-El_dos_de_mayo_de_1808_en_Madrid.jpg",
    title: "The Second of May 1808",
    artist: "Francisco Goya, 1814"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Munch_Det_syke_barn_1885-86.jpg/791px-Munch_Det_syke_barn_1885-86.jpg",
    title: "The Sick Child",
    artist: "Edvard Munch, 1885"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Felis_silvestris_catus_lying_on_rice_straw.jpg/1280px-Felis_silvestris_catus_lying_on_rice_straw.jpg",
    title: "placeholder",
    artist: ""
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Hay_Wain_by_John_Constable.jpg/1280px-The_Hay_Wain_by_John_Constable.jpg",
    title: "The Hay Wain",
    artist: "John Constable, 1821"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Wanderer_above_the_sea_of_fog.jpg/724px-Wanderer_above_the_sea_of_fog.jpg",
    title: "Wanderer Above the Sea of Fog",
    artist: "Caspar David Friedrich, c. 1818"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Birth_of_Venus.jpg/1265px-Birth_of_Venus.jpg",
    title: "The Birth of Venus",
    artist: "Sandro Botticelli, c. 1484–1486"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/814px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
    title: "Self-Portrait",
    artist: "Rembrandt van Rijn, 1659"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884-86.jpg/1280px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884-86.jpg",
    title: "A Sunday on La Grande Jatte",
    artist: "Georges Seurat, 1884–1886"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/1280px-Nighthawks_by_Edward_Hopper_1942.jpg",
    title: "Nighthawks",
    artist: "Edward Hopper, 1942"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1280px-GoldenGateBridge-001.jpg",
    title: "placeholder",
    artist: ""
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bierstadt_Albert_Rocky_Mountains_Lander%27s_Peak.jpg/1280px-Bierstadt_Albert_Rocky_Mountains_Lander%27s_Peak.jpg",
    title: "Rocky Mountains, Lander's Peak",
    artist: "Albert Bierstadt, 1863"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Caravaggio_-_Judith_Beheading_Holofernes.jpg/1280px-Caravaggio_-_Judith_Beheading_Holofernes.jpg",
    title: "Judith Beheading Holofernes",
    artist: "Caravaggio, c. 1598–1599"
  }
].filter(a => a.title !== "placeholder");

// ── Shape descriptors ──
const shapeNames = [
  "tessellated bloom", "recursive spiral", "stochastic polygon",
  "harmonic burst", "fractal scatter", "orbital lattice",
  "concentric disruption", "asymmetric fold", "woven vertices",
  "collapsed prism", "radiant scatter", "angular nebula"
];

// ── Color palettes for shapes ──
const palettes = [
  ["#ff6b6b","#feca57","#ff9ff3","#54a0ff"],
  ["#00d2d3","#ff9f43","#48dbfb","#1dd1a1"],
  ["#a29bfe","#fd79a8","#fdcb6e","#6c5ce7"],
  ["#dfe6e9","#b2bec3","#636e72","#2d3436"],
  ["#e17055","#d63031","#74b9ff","#0984e3"],
  ["#55efc4","#00cec9","#fd79a8","#e84393"],
  ["#ffeaa7","#fdcb6e","#e17055","#d63031"],
];

// ── DOM refs ──
const bgLayer      = document.getElementById('bg-layer');
const canvas       = document.getElementById('shape-canvas');
const ctx          = canvas.getContext('2d');
const restScreen   = document.getElementById('rest-screen');
const activeScreen = document.getElementById('active-screen');
const artTitleEl   = document.getElementById('art-title');
const artArtistEl  = document.getElementById('art-artist');
const shapeLabelEl = document.getElementById('shape-label');
const resetBtn     = document.getElementById('reset-btn');

let isActive = false;
let lastIndex = -1;

// ── Resize canvas ──
function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', () => { resizeCanvas(); if (isActive) drawShape(); });

// ── Pick a random item, avoid repeats ──
function pickRandom(arr, lastIdx) {
  let idx;
  do { idx = Math.floor(Math.random() * arr.length); } while (idx === lastIdx && arr.length > 1);
  return { item: arr[idx], idx };
}

// ── Draw a generative shape ──
function drawShape() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const { item: palette } = pickRandom(palettes, -1);
  const cx = canvas.width  / 2;
  const cy = canvas.height / 2;
  const type = Math.floor(Math.random() * 4);

  if (type === 0) drawStarburst(cx, cy, palette);
  else if (type === 1) drawConcentricPolygons(cx, cy, palette);
  else if (type === 2) drawScatterBloom(cx, cy, palette);
  else drawSpiralArcs(cx, cy, palette);
}

function drawStarburst(cx, cy, palette) {
  const spokes = 6 + Math.floor(Math.random() * 10);
  const layers = 3 + Math.floor(Math.random() * 4);
  for (let l = layers; l > 0; l--) {
    const r1 = (canvas.height * 0.08) * l;
    const r2 = r1 * (0.4 + Math.random() * 0.4);
    const offset = (Math.PI * 2 / spokes) * (Math.random() * 0.5);
    ctx.beginPath();
    for (let i = 0; i <= spokes * 2; i++) {
      const angle = (i * Math.PI) / spokes + offset;
      const r = i % 2 === 0 ? r1 : r2;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = palette[l % palette.length] + 'a0';
    ctx.strokeStyle = palette[(l + 1) % palette.length];
    ctx.lineWidth = 0.8;
    ctx.fill();
    ctx.stroke();
  }
}

function drawConcentricPolygons(cx, cy, palette) {
  const count = 5 + Math.floor(Math.random() * 7);
  const sides = 3 + Math.floor(Math.random() * 8);
  const maxR  = Math.min(canvas.width, canvas.height) * 0.42;
  for (let i = count; i > 0; i--) {
    const r     = (maxR / count) * i;
    const rot   = (i * 0.18) + Math.random() * 0.3;
    const alpha = 0.15 + (i / count) * 0.45;
    ctx.beginPath();
    for (let s = 0; s <= sides; s++) {
      const angle = (s / sides) * Math.PI * 2 + rot;
      const x = cx + Math.cos(angle) * r;
      const y = cy + Math.sin(angle) * r;
      s === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    const col = palette[i % palette.length];
    ctx.fillStyle   = col + Math.floor(alpha * 255).toString(16).padStart(2,'0');
    ctx.strokeStyle = col;
    ctx.lineWidth   = 1.2;
    ctx.fill();
    ctx.stroke();
  }
}

function drawScatterBloom(cx, cy, palette) {
  const petals  = 40 + Math.floor(Math.random() * 60);
  const maxSize = Math.min(canvas.width, canvas.height) * 0.45;
  for (let i = 0; i < petals; i++) {
    const angle  = Math.random() * Math.PI * 2;
    const dist   = Math.random() * maxSize;
    const x      = cx + Math.cos(angle) * dist;
    const y      = cy + Math.sin(angle) * dist;
    const size   = 8 + Math.random() * (maxSize * 0.12);
    const sides  = 3 + Math.floor(Math.random() * 6);
    const rot    = Math.random() * Math.PI * 2;
    const alpha  = 0.25 + Math.random() * 0.55;
    const col    = palette[i % palette.length];
    ctx.beginPath();
    for (let s = 0; s <= sides; s++) {
      const a = (s / sides) * Math.PI * 2 + rot;
      const px = x + Math.cos(a) * size;
      const py = y + Math.sin(a) * size;
      s === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle   = col + Math.floor(alpha * 255).toString(16).padStart(2,'0');
    ctx.strokeStyle = col + '55';
    ctx.lineWidth   = 0.5;
    ctx.fill();
    ctx.stroke();
  }
}

function drawSpiralArcs(cx, cy, palette) {
  const arms   = 3 + Math.floor(Math.random() * 5);
  const maxR   = Math.min(canvas.width, canvas.height) * 0.44;
  const turns  = 2 + Math.random() * 3;
  const steps  = 200;
  for (let arm = 0; arm < arms; arm++) {
    const armOffset = (arm / arms) * Math.PI * 2;
    const col = palette[arm % palette.length];
    ctx.beginPath();
    ctx.strokeStyle = col + 'cc';
    ctx.lineWidth   = 1.5 + Math.random() * 2.5;
    for (let s = 0; s <= steps; s++) {
      const t     = s / steps;
      const angle = t * turns * Math.PI * 2 + armOffset;
      const r     = t * maxR;
      const x     = cx + Math.cos(angle) * r;
      const y     = cy + Math.sin(angle) * r;
      s === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
}

// ── Ripple effect ──
function spawnRipple(x, y) {
  const el = document.createElement('div');
  el.className = 'ripple';
  const size = 80;
  el.style.cssText = `width:${size}px;height:${size}px;left:${x - size/2}px;top:${y - size/2}px;`;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 800);
}

// ── Activate transformation ──
function activate(e) {
  if (isActive) return;
  isActive = true;

  spawnRipple(e.clientX, e.clientY);

  const { item: art, idx } = pickRandom(artworks, lastIndex);
  lastIndex = idx;

  bgLayer.style.backgroundImage = `url('${art.url}')`;
  bgLayer.classList.add('visible');
  canvas.classList.add('visible');
  restScreen.classList.add('hidden');
  activeScreen.classList.add('visible');

  artTitleEl.textContent  = art.title;
  artArtistEl.textContent = art.artist;

  const { item: shapeName } = pickRandom(shapeNames, -1);
  shapeLabelEl.textContent = shapeName;

  drawShape();
}

// ── Reset ──
function reset() {
  isActive = false;
  bgLayer.classList.remove('visible');
  canvas.classList.remove('visible');
  restScreen.classList.remove('hidden');
  activeScreen.classList.remove('visible');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


restScreen.addEventListener('click', activate);
resetBtn.addEventListener('click', reset);

// Also trigger on keypress (spacebar / enter)
document.addEventListener('keydown', (e) => {
  if (!isActive && (e.code === 'Space' || e.code === 'Enter')) {
    activate({ clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 });
  }
  if (isActive && e.code === 'Escape') reset();
});
