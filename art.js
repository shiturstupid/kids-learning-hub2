const canvas = document.getElementById("whiteboard");
const ctx = canvas.getContext("2d");

let drawing = false;
let isErasing = false;
let brushColor = "#000000";
let lineWidth = 5;

const strokeInput = document.getElementById("strokeColor");
const brushSizeInput = document.getElementById("brushSize");

// 🎨 Update brush color
strokeInput.addEventListener("change", function () {
  brushColor = this.value;
  if (!isErasing) ctx.strokeStyle = brushColor;
});

// 🖌️ Update brush size
brushSizeInput.addEventListener("input", function () {
  lineWidth = parseInt(this.value);
});

canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  const rect = canvas.getBoundingClientRect();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
  ctx.beginPath();
});

canvas.addEventListener("mouseout", () => {
  drawing = false;
  ctx.beginPath();
});

canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!drawing) return;

  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.lineWidth = lineWidth;
  ctx.lineCap = "round";
  ctx.strokeStyle = isErasing ? "#ffffff" : brushColor;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

//Eraser Mode
function activateEraser() {
  isErasing = true;
}

//Brush Mode
function activateBrush() {
  isErasing = false;
  ctx.strokeStyle = brushColor;
}

//Clear Canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// maybe a feature to save my drawing?? idk tho
function saveDrawing() {
  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  const tempCtx = tempCanvas.getContext("2d");

  tempCtx.fillStyle = "#ffffff";
  tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
  tempCtx.drawImage(canvas, 0, 0);

  const link = document.createElement("a");
  link.download = `drawing_${Date.now()}.png`;
  link.href = tempCanvas.toDataURL("image/png");
  link.click();
}


document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("backgroundAudio");

  function ensurePlay() {
    if (audio.paused) {
      audio.play().catch(err => console.log("Autoplay blocked:", err));
    }
  }

  document.getElementById("volUpBtn").addEventListener("click", () => {
    ensurePlay();
    audio.volume = Math.min(audio.volume + 0.1, 1);
  });

  document.getElementById("volDownBtn").addEventListener("click", () => {
    ensurePlay();
    audio.volume = Math.max(audio.volume - 0.1, 0);
  });

  document.getElementById("muteBtn").addEventListener("click", () => {
    ensurePlay();
    audio.muted = !audio.muted;
  });
});
