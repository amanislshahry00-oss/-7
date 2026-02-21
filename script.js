<script src="script.js"></script>
</body>
// 1. حركة Glow متدرجة
// ============================
const glow = document.createElement("div");
glow.style.position = "fixed";
glow.style.width = "500px";
glow.style.height = "500px";
glow.style.background = "radial-gradient(circle,#ff00cc55,transparent 70%)";
glow.style.top = "-200px";
glow.style.left = "-200px";
glow.style.zIndex = "-1";
glow.style.transition = "all 2s ease";
document.body.appendChild(glow);

let x = 0;
let y = 0;
setInterval(() => {
  x = Math.random() * 100;
  y = Math.random() * 100;
  glow.style.transform = `translate(${x}px, ${y}px)`;
}, 3000);

// ============================
// 2. Scroll Animation (fade in)
// ============================
const faders = document.querySelectorAll('.card');
const appearOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.style.opacity = "1";
    entry.target.style.transform = "translateY(0)";
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.opacity = "0";
  fader.style.transform = "translateY(30px)";
  fadersOnScroll = appearOnScroll.observe(fader);
});

// ============================
// 3. زر Glow عند الضغط
// ============================
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
  btn.addEventListener('mousedown', () => {
    btn.style.boxShadow = "0 0 35px rgba(0,245,255,1)";
  });
  btn.addEventListener('mouseup', () => {
    btn.style.boxShadow = "0 0 20px rgba(255,0,204,0.6)";
   
</body>
  });
});
