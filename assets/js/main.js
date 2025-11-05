

// custom cursor init
function mousecursor() {
  if ($("body")) {
      const e = document.querySelector(".cursor"),
          t = document.querySelector(".cursor-follow");
      let n, i = 0,
          o = !1;
      window.onmousemove = function (s) {
          o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
      }, $("body").on("mouseenter", "a, .cursor-pointer", function () {
          e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
      }), $("body").on("mouseleave", "a, .cursor-pointer", function () {
          $(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
      }), e.style.visibility = "visible", t.style.visibility = "visible"
  }
};

$(function () {
  mousecursor();
});













// !function(e){"use strict";function t(){e(window).scrollTop()>=80?e(".separateweb-header").addClass("sticky"):e(".separateweb-header").removeClass("sticky")}e(function(){e(window).scroll(t),t()}),e(window).on("load",function(){e(".counter").counterUp({delay:10,time:4500})}),e(window).on("load",function(){e(".video-popup").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160})});const o=document.querySelector(".separateweb-text .texts");window.addEventListener("scroll",function(){o.style.transform=`rotate(${.2*window.scrollY}deg)`}),e(document).ready(function(){var t=document.querySelector(".progress-wrap path"),o=t.getTotalLength();t.style.transition=t.style.WebkitTransition="none",t.style.strokeDasharray=o+" "+o,t.style.strokeDashoffset=o,t.getBoundingClientRect(),t.style.transition=t.style.WebkitTransition="stroke-dashoffset 10ms linear";var r=function(){var r=e(window).scrollTop(),s=e(document).height()-e(window).height(),n=o-r*o/s;t.style.strokeDashoffset=n};r(),e(window).scroll(r);jQuery(window).on("scroll",function(){jQuery(this).scrollTop()>50?jQuery(".progress-wrap").addClass("active-progress"):jQuery(".progress-wrap").removeClass("active-progress")}),jQuery(".progress-wrap").on("click",function(e){return e.preventDefault(),jQuery("html, body").animate({scrollTop:0},550),!1})});new Rellax(".separateweb",{horizontal:!1});document.querySelectorAll(".s-e-p-a-r-a-t-e-w-e-b-ðŸ¤™").forEach(e=>{let t;document.addEventListener("mousemove",o=>{const r=(e=>{const o={x:e.clientX,y:e.clientY,width:40,height:40,radius:"50%"},r={};if(null!=t){const{top:e,left:o,width:s,height:n}=t.getBoundingClientRect(),i=window.getComputedStyle(t).borderTopLeftRadius;r.x=o+s/2,r.y=e+n/2,r.width=s,r.height=n,r.radius=i}return{...o,...r}})(o);((e,t)=>{e.style.setProperty("--x",`${t.x}px`),e.style.setProperty("--y",`${t.y}px`),e.style.setProperty("--width",`${t.width}px`),e.style.setProperty("--height",`${t.height}px`),e.style.setProperty("--radius",t.radius),e.style.setProperty("--scale",t.scale)})(e,r)}),document.querySelectorAll(".âºï¸Ž").forEach(e=>{e.addEventListener("mouseenter",()=>t=e),e.addEventListener("mouseleave",()=>t=void 0)})}),e(window).on("scroll",function(){var t=e(this).scrollTop();e(".h-sw1").css({transform:"translateX("+.5*t+"px)"})}),e(window).on("scroll",function(){var t=e(this).scrollTop();e(".h-sw2").css({transform:"translateX("+-.5*t+"px)"})})}(jQuery);










