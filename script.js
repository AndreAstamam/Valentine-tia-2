setInterval(()=>{
  const h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "❤";
  h.style.left = Math.random()*100+"vw";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),6000);
},500);

window.addEventListener("click", () => {
  const music = document.getElementById("bgm");
  if (music.paused) {
    music.play();
  }
}, { once: true });