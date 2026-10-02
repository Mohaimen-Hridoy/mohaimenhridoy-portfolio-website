const $=(s)=>document.querySelector(s);
const navbar=$("#navbar"), menuBtn=$("#menuBtn"), mobileNav=$("#mobileNav"), themeToggle=$("#themeToggle"), glow=$("#cursorGlow");
window.addEventListener("scroll",()=>navbar.classList.toggle("scrolled",scrollY>15));
menuBtn?.addEventListener("click",()=>mobileNav.classList.toggle("open"));
mobileNav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>mobileNav.classList.remove("open")));
const saved=localStorage.getItem("theme"); if(saved==="light")document.documentElement.dataset.theme="light";
themeToggle?.addEventListener("click",()=>{const light=document.documentElement.dataset.theme==="light";document.documentElement.dataset.theme=light?"dark":"light";localStorage.setItem("theme",light?"dark":"light")});
window.addEventListener("pointermove",(e)=>{if(glow){glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px"}});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const el=document.querySelector(a.getAttribute("href"));if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth",block:"start"})}}));
