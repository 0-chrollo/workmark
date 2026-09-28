(function(){
    var t=document.querySelector('.ptrack'),p=document.getElementById('pPrev'),n=document.getElementById('pNext');
    if(!t||!p||!n)return;
    var reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    function step(){var c=t.querySelector('.pcard');return c?c.offsetWidth+18:300}
    function upd(){p.disabled=t.scrollLeft<=4;n.disabled=t.scrollLeft>=t.scrollWidth-t.clientWidth-4}
    p.addEventListener('click',function(){t.scrollBy({left:-step(),behavior:reduce?'auto':'smooth'})});
    n.addEventListener('click',function(){t.scrollBy({left:step(),behavior:reduce?'auto':'smooth'})});
    t.addEventListener('scroll',upd,{passive:true});
    window.addEventListener('resize',upd);
    upd();
  })();