/* DARK MODE */
const darkToggle=document.getElementById("darkToggle");
if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
  darkToggle.textContent="Light Mode";
}
darkToggle.onclick=()=>{
  document.body.classList.toggle("dark");
  localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light");
  darkToggle.textContent=document.body.classList.contains("dark")?"Light Mode":"Dark Mode";
};

/* FULL VIEW */
const imageModal=document.getElementById("imageModal");
const modalImg=document.getElementById("modalImg");
document.querySelectorAll(".fullview-btn").forEach(btn=>{
  btn.onclick=()=>{
    imageModal.style.display="flex";
    modalImg.src=btn.dataset.img;
  }
});
imageModal.onclick=e=>{
  if(e.target===imageModal)imageModal.style.display="none";
};

/* COUNTDOWN */
const deadline=new Date("2026-01-04 00:00:00").getTime();
const nextDeadline=new Date("2026-01-12 00:00:00").getTime();
const cd=document.getElementById("countdown");
const nextCd=document.getElementById("nextCountdown");

setInterval(()=>{
  const now=Date.now();

  const d1=deadline-now;
  cd.innerHTML=d1<=0
    ?"⛔ Deadline Tugas Telah Berakhir"
    :`⏳ Deadline: ${Math.floor(d1/86400000)} hari ${Math.floor(d1/3600000)%24} jam ${Math.floor(d1/60000)%60} menit ${Math.floor(d1/1000)%60} detik`;

  const d2=nextDeadline-now;
  nextCd.innerHTML=d2<=0
    ?"🎉 Tugas Baru Telah Dibuka!"
    :`📅 Tugas Selanjutnya: ${Math.floor(d2/86400000)} hari ${Math.floor(d2/3600000)%24} jam ${Math.floor(d2/60000)%60} menit ${Math.floor(d2/1000)%60} detik`;
},1000);

/* STAR PARTICLES */
const canvas=document.getElementById("particleCanvas");
const ctx=canvas.getContext("2d");

function resize(){
  canvas.width=innerWidth;
  canvas.height=innerHeight;
}
resize();
addEventListener("resize",resize);

const stars=[...Array(60)].map(()=>({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  r:Math.random()*4+2,
  dx:(Math.random()-.5)*.3,
  dy:(Math.random()-.5)*.3,
  o:Math.random()*.6+.3
}));

function drawStar(x,y,r,o){
  ctx.save();
  ctx.translate(x,y);
  ctx.beginPath();
  ctx.moveTo(0,-r);
  for(let i=0;i<5;i++){
    ctx.rotate(Math.PI/5);
    ctx.lineTo(0,-r*.5);
    ctx.rotate(Math.PI/5);
    ctx.lineTo(0,-r);
  }
  ctx.closePath();
  ctx.fillStyle=`rgba(99,102,241,${o})`;
  ctx.fill();
  ctx.restore();
}

(function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  stars.forEach(s=>{
    s.x+=s.dx;
    s.y+=s.dy;
    if(s.x<0||s.x>canvas.width)s.dx*=-1;
    if(s.y<0||s.y>canvas.height)s.dy*=-1;
    drawStar(s.x,s.y,s.r,s.o);
  });
  requestAnimationFrame(animate);
})();
