const cur=document.getElementById('cur'),curRing=document.getElementById('cur-ring');
let cx=0,cy=0;
document.addEventListener('mousemove',e=>{cx=e.clientX;cy=e.clientY;cur.style.left=cx+'px';cur.style.top=cy+'px';});
(function a(){curRing.style.left=cx+'px';curRing.style.top=cy+'px';requestAnimationFrame(a);})();

document.getElementById('themeBtn').addEventListener('click',function(){
  const d=document.documentElement,isDark=d.getAttribute('data-theme')=='dark';
  d.setAttribute('data-theme',isDark?'light':'dark');
  this.textContent=isDark?'🌙':'☀️';
});

const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      e.target.querySelectorAll('.skill-fill').forEach(f=>{
        f.style.transform='scaleX('+( parseFloat(getComputedStyle(f).getPropertyValue('--w'))||1)+')';
      });
    }
  });
},{threshold:0.12});
document.querySelectorAll('.reveal,.reveal-l,.skill-item').forEach(el=>io.observe(el));

function showCat(id,el){
  document.querySelectorAll('.skill-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.scat-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('cat-'+id).classList.add('active');
  el.classList.add('active');
  setTimeout(()=>{
    document.querySelectorAll('#cat-'+id+' .skill-item').forEach(item=>{
      item.classList.add('visible');
      item.querySelectorAll('.skill-fill').forEach(f=>{
        f.style.transform='scaleX(0)';
        setTimeout(()=>{f.style.transform='scaleX('+( parseFloat(getComputedStyle(f).getPropertyValue('--w'))||1)+')';},60);
      });
    });
  },50);
}

function showExp(id,el){
  document.querySelectorAll('.exp-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.exp-tab').forEach(b=>b.classList.remove('active'));
  document.getElementById('exp-'+id).classList.add('active');
  el.classList.add('active');
}

const secs=document.querySelectorAll('section[id]');
window.addEventListener('scroll',()=>{
  let c='';
  secs.forEach(s=>{if(window.scrollY>=s.offsetTop-120)c=s.id;});
  document.querySelectorAll('.nav-links a').forEach(a=>{a.classList.toggle('active',a.getAttribute('href')=='#'+c);});
});

function handleForm(e){
  e.preventDefault();
  const f=e.target;f.style.opacity='.5';f.style.pointerEvents='none';
  setTimeout(()=>{f.style.display='none';document.getElementById('msg-ok').style.display='block';},700);
}

setTimeout(()=>{
  document.querySelectorAll('#cat-backend .skill-item').forEach(item=>{
    item.classList.add('visible');
    item.querySelectorAll('.skill-fill').forEach(f=>{
      f.style.transform='scaleX('+( parseFloat(getComputedStyle(f).getPropertyValue('--w'))||1)+')';
    });
  });
},900);
