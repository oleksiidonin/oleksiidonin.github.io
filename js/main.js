var fontS,popUpBool=!1;const body=document.querySelector("body"),menuButtons=document.querySelector(".menu"),burger=document.querySelector(".burger"),burger_plus=document.querySelector(".burger .plus"),menuItems=document.querySelector(".menu__conteiner"),menuBg=document.querySelector(".menuBg"),headerLink=document.querySelectorAll(".menu__list li"),mainVideo=document.querySelector(".main__video"),mainLogo=document.querySelector(".main_preloader");var main_preloader_padding;const isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};function setHeaderlinkOpenClass(n){n.classList.toggle("menuLink_open")}function hideMainMenu(){burger_plus.classList.toggle("openPlus"),menuBg.classList.toggle("openMenuBg"),menuBg.addEventListener("transitionend",backMenuZindex)}function backMenuZindex(){menuItems.style.visibility="hidden",menuBg.removeEventListener("transitionend",backMenuZindex),menuButtons.addEventListener("click",menuButtonsFun)}function menuButtonsFun(n){if(isMobile.any()&&(menuButtons.removeEventListener("click",menuButtonsFun),n.target.closest(".burger")))if(burger_plus.classList.contains("openPlus")){let n=0;body.style.overflow="visible";for(var e=headerLink.length-1;e>=0;e--){setTimeout(setHeaderlinkOpenClass,n,headerLink[e]);n+=500/headerLink.length}setTimeout(hideMainMenu,500)}else{menuItems.style.visibility="visible",body.style.overflow="hidden",menuButtons.style.zIndex="10",menuItems.style.width="100%",menuItems.style.height="100%",burger_plus.classList.toggle("openPlus"),menuBg.classList.toggle("openMenuBg");let n=500,e=0;for(const t of headerLink){setTimeout(setHeaderlinkOpenClass,n,t);n+=n/headerLink.length,e++,4==e&&menuButtons.addEventListener("click",menuButtonsFun)}}}function mobileMenuIsOpened(){body.style.overflow="hidden",menuBg.removeEventListener("transitionend",mobileMenuIsOpened)}function setFontSize(){let n=document.documentElement.clientWidth/1440*15,e=document.documentElement.clientHeight/900*15;fontS=(n+e)/2,document.documentElement.style.fontSize=fontS+"px"}isMobile.any()?document.body.classList.add("_touch"):document.body.classList.add("_pc"),menuButtons.addEventListener("click",menuButtonsFun),menuButtons.addEventListener("mouseover",(function(n){if(!isMobile.any()&&n.target.closest(".menu__link")){n.target.closest(".menu__link").querySelector(".menu__link-line").classList.toggle("openLineMenu")}})),menuButtons.addEventListener("mouseout",(function(n){if(!isMobile.any()&&n.target.closest(".menu__link")){n.target.closest(".menu__link").querySelector(".menu__link-line").classList.toggle("openLineMenu")}})),document.querySelectorAll('a[href^="#"').forEach((n=>{n.addEventListener("click",(function(n){console.log("tut"),n.preventDefault();parseInt(window.innerWidth);if(isMobile.any()){let n=0;body.style.overflow="visible";for(var e=headerLink.length-1;e>=0;e--){setTimeout(setHeaderlinkOpenClass,n,headerLink[e]);n+=500/headerLink.length}setTimeout(hideMainMenu,500)}let t=this.getAttribute("href").substring(1);const r=document.getElementById(t).getBoundingClientRect().top-0;window.scrollBy({top:r,behavior:"smooth"})}))}));var num,numGor,numBrands=106;const moreBtn=document.querySelector(".works .loadMore__conteiner"),bannersConteiner=document.querySelector(".works__conteiner"),popUpBannersConteiner=document.querySelector(".popUp__conteiner");var content={brand:[{numBanners:"1"},{numBanners:"1"},{numBanners:"1"},{numBanners:"1"},{numBanners:"1"},{numBanners:"1"},{numBanners:"2"},{numBanners:"1"},{numBanners:"1"},{numBanners:"1"},{numBanners:"1"},{numBanners:"1"},{numBanners:"1"},{numBanners:"3"},{numBanners:"2"},{numBanners:"1"},{numBanners:"3"},{numBanners:"1"},{numBanners:"3"},{numBanners:"4"},{numBanners:"3"},{numBanners:"3"},{numBanners:"2"},{numBanners:"1"},{numBanners:"3"},{numBanners:"9"},{numBanners:"1"},{numBanners:"1"},{numBanners:"1"},{numBanners:"1"},{numBanners:"2"},{numBanners:"4"},{numBanners:"2"},{numBanners:"1"},{numBanners:"1"},{numBanners:"2"},{numBanners:"1"},{numBanners:"2"},{numBanners:"3"},{numBanners:"1"},{numBanners:"7"},{numBanners:"1"},{numBanners:"1"},{numBanners:"2"},{numBanners:"2"},{numBanners:"1"},{numBanners:"1"},{numBanners:"1"},{numBanners:"1"},{numBanners:"5"},{numBanners:"1"},{numBanners:"6"},{numBanners:"5"},{numBanners:"2"},{numBanners:"5"},{numBanners:"1"},{numBanners:"5"},{numBanners:"15"},{numBanners:"2"},{numBanners:"2"},{numBanners:"2"},{numBanners:"4"},{numBanners:"3"},{numBanners:"2"},{numBanners:"2"},{numBanners:"9"},{numBanners:"2"},{numBanners:"2"},{numBanners:"1"},{numBanners:"8"},{numBanners:"1"},{numBanners:"4"},{numBanners:"1"},{numBanners:"2"},{numBanners:"6"},{numBanners:"4"},{numBanners:"15"},{numBanners:"2"},{numBanners:"2"},{numBanners:"2"},{numBanners:"1"},{numBanners:"19"},{numBanners:"18"},{numBanners:"3"},{numBanners:"5"},{numBanners:"3"},{numBanners:"6"},{numBanners:"2"},{numBanners:"3"},{numBanners:"5"},{numBanners:"10"},{numBanners:"5"},{numBanners:"3"},{numBanners:"10"},{numBanners:"2"},{numBanners:"20"},{numBanners:"3"},{numBanners:"16"},{numBanners:"11"},{numBanners:"48"},{numBanners:"29"},{numBanners:"12"},{numBanners:"109"},{numBanners:"22"},{numBanners:"18"},{numBanners:"2"}]};function initContent(){let n,e=parseInt(document.documentElement.clientWidth)-main_preloader_padding,t=Math.floor((e-10*fontS)/300);t>1?(n=Math.floor((e-10*fontS-300*t)/(t-1)),n<fontS?(t--,t>1?(n=Math.floor((e-10*fontS-300*t)/(t-1)),bannersConteiner.style.gap=n+"px",popUpBannersConteiner.style.gap=n+"px"):(bannersConteiner.style.gap=2*fontS+"px",popUpBannersConteiner.style.gap=2*fontS+"px")):(bannersConteiner.style.gap=n+"px",popUpBannersConteiner.style.gap=n+"px")):(bannersConteiner.style.gap=2*fontS+"px",popUpBannersConteiner.style.gap=2*fontS+"px"),(num=2*Math.ceil(window.innerHeight/600)*t)<1&&(num=4),addNewBanners(),null!=moreBtn&&(moreBtn.onclick=function(){addNewBanners()})}function showBanner(n){document.getElementById(n.id).parentElement.innerHTML="<div class='bannerStopBtn' id='"+n.id+"' onclick='hideBanner(this)'></div><iframe allowTransparency src='../img/content/brand"+n.id+"/ban"+content.brand[n.id-1].numBanners+"/index.html' frameborder='0' align='left'></iframe><div class='loaderConteiner' style='position: absolute; margin: 0px;'><div class='loader' style='position: absolute; margin: 0px;'></div></div> "}function hideBanner(n){let e=document.getElementById(n.id);1==content.brand[n.id-1].numBanners?e.parentElement.innerHTML="<div class='bannerPlayBtn' id='"+n.id+"' onclick='showBanner(this)'><img src='img/icons/play.svg'></img></div><div class='bannerImg'><img src='../img/content/brand"+n.id+"/ban"+content.brand[n.id-1].numBanners+"/img.jpg'></div>":e.parentElement.innerHTML="<div class='bannerPlayBtn' id='"+n.id+"' onclick='showBanner(this)'><img src='img/icons/play.svg'></img></div><div class='bannerImg'><img src='../img/content/brand"+n.id+"/ban"+content.brand[n.id-1].numBanners+"/img.jpg'></div><div class='moreBanners' id='"+n.id+"' onclick='showBrandBanners(this)'><a>More brand banners</a><img src='../img/icons/moreBrandBanners.svg'></div>"}function addNewBanners(){for(var n=num;n>0;n--)if(numBrands>0){let n=document.createElement("div"),e="banner";n.setAttribute("class",e),1==content.brand[numBrands-1].numBanners?n.innerHTML="<div class='bannerPlayBtn' id='"+numBrands+"' onclick='showBanner(this)'><img src='img/icons/play.svg'></img></div><div class='bannerImg'><img src='../img/content/brand"+numBrands+"/ban"+content.brand[numBrands-1].numBanners+"/img.jpg'></div>":n.innerHTML="<div class='bannerPlayBtn' id='"+numBrands+"' onclick='showBanner(this)'><img src='img/icons/play.svg'></img></div><div class='bannerImg'><img src='../img/content/brand"+numBrands+"/ban"+content.brand[numBrands-1].numBanners+"/img.jpg'></div><div class='moreBanners' id='"+numBrands+"' onclick='showBrandBanners(this)'><a>More brand banners</a><img src='../img/icons/moreBrandBanners.svg'></div>",bannersConteiner.appendChild(n),0==--numBrands&&null!=moreBtn&&(moreBtn.style.display="none")}else null!=moreBtn&&(moreBtn.style.display="none")}const popUp=document.querySelector(".popUp"),popUpCloseBtn=document.querySelector(".popUp .plus"),morePopUpBtn=document.querySelector(".popUp .loadMore__conteiner");var curBrand,numBrandBanners;function showBrandBanners(n){let e=document.querySelectorAll(".popUp__conteiner .banner");if(popUp.scrollTo(0,0),e.length>0)for(var t=e.length-1;t>=0;--t)popUpBannersConteiner.removeChild(e[t]);morePopUpBtn.style.display="flex",body.style.overflow="hidden",popUpBool=!0,popUp.classList.toggle("activePopUp"),curBrand=n.id,numBrandBanners=content.brand[n.id-1].numBanners,addNewPopUpBanners(),null!=morePopUpBtn&&(morePopUpBtn.onclick=function(){addNewPopUpBanners()})}function showBrandBanner(n){let e=document.getElementById(n.id),t=n.id.replace(/[^0-9,.]/g," ");t=t.split(" ").join(""),e.parentElement.innerHTML="<div class='bannerStopBtn' id='"+n.id+"' onclick='hideBrandBanner(this)'></div><iframe allowTransparency src='../img/content/brand"+curBrand+"/ban"+t+"/index.html' frameborder='0' align='left'></iframe><div class='loaderConteiner' style='position: absolute; margin: 0px;'><div class='loader' style='position: absolute; margin: 0px;'></div></div> "}function hideBrandBanner(n){let e=document.getElementById(n.id),t=n.id.replace(/[^0-9,.]/g," ");t=t.split(" ").join(""),e.parentElement.innerHTML="<div class='bannerPlayBtn' id='"+n.id+"' onclick='showBrandBanner(this)'><img src='img/icons/play.svg'></img></div><div class='bannerImg'><img src='../img/content/brand"+curBrand+"/ban"+t+"/img.jpg'></div>"}function addNewPopUpBanners(){document.getElementById("banners");for(var n=num;n>0;n--)if(numBrandBanners>0){var e=document.createElement("div");e.setAttribute("class","banner"),e.innerHTML="<div class='bannerPlayBtn' id='b"+numBrandBanners+"' onclick='showBrandBanner(this)'><img src='img/icons/play.svg'></img></div><div class='bannerImg'><img src='../img/content/brand"+curBrand+"/ban"+numBrandBanners+"/img.jpg'></div>",popUpBannersConteiner.appendChild(e),0==--numBrandBanners&&(morePopUpBtn.style.display="none")}else 0==numBrandBanners&&(morePopUpBtn.style.display="none")}popUp.addEventListener("click",(function(n){n.target.closest(".popUp")&&(n.target.closest(".loadMore__conteiner")||(popUp.classList.toggle("activePopUp"),body.style.overflow="visible",popUpBool=!1))}));var canvas,stage,exportRoot,anim_container,dom_overlay_container,fnStartAnimation,videoG=!1,videoV=!1,videoPlay=!1;function resizeWindow(){numBrands=106,setFontSize(),setVideo();let n=document.querySelectorAll(".works__conteiner .banner");if(n.length>0)for(var e=n.length-1;e>=0;--e)bannersConteiner.removeChild(n[e]);if(initContent(),popUpBool){if(n=document.querySelectorAll(".popUp__conteiner .banner"),popUp.scrollTo(0,0),n.length>0)for(e=n.length-1;e>=0;--e)popUpBannersConteiner.removeChild(n[e]);morePopUpBtn.style.display="flex",numBrandBanners=content.brand[curBrand-1].numBanners,addNewPopUpBanners(),null!=morePopUpBtn&&(morePopUpBtn.onclick=function(){addNewPopUpBanners()})}}function setVideo(){let n=window.innerWidth,e=window.innerHeight;videoPlay&&(null!=mainLogo&&null!=mainLogo&&(mainLogo.classList.contains("closeMainLogo")||(mainLogo.style.paddingRight="0px",mainLogo.classList.toggle("closeMainLogo"),mainLogo.addEventListener("transitionend",(function(){createjs.Ticker.removeEventListener("tick",stage),body.removeChild(mainLogo)})))),n>e?videoG||(mainVideo.innerHTML='<video disablePictureInPicture controlsList="nodownload" autoplay muted loop preload="auto" class="main-background__video"><source type="video/webm" src="media/movie.webm"><source type="video/mp4" src="media/movie.mp4"></video>',videoG=!0,videoV=!1):videoV||(mainVideo.innerHTML='<video disablePictureInPicture controlsList="nodownload" autoplay muted loop preload="auto" class="main-background__video"><source type="video/webm" src="media/movie_vert.webm"><source type="video/mp4" src="media/movie_vert.mp4"></video>',videoG=!1,videoV=!0))}function initIntro(){main_preloader_padding=window.innerWidth-mainLogo.offsetWidth,mainLogo.style.paddingRight=main_preloader_padding+"px",initContent(),canvas=document.getElementById("canvas"),anim_container=document.getElementById("animation_container"),dom_overlay_container=document.getElementById("dom_overlay_container");var n=AdobeAn.getComposition("3864B68DEA8C496080DFE7CFA06C4595");n.getLibrary();handleComplete({},n)}function handleComplete(n,e){var t=e.getLibrary(),r=(e.getSpriteSheet(),document.getElementById("_preload_div_"));r.style.display="none",canvas.style.display="block",exportRoot=new t.logo_vert,stage=new t.Stage(canvas),fnStartAnimation=function(){stage.addChild(exportRoot),createjs.Ticker.setFPS(t.properties.fps),createjs.Ticker.addEventListener("tick",stage)},function(n,e,i,o){var a,s,d=1;function m(){var m=t.properties.width,u=t.properties.height,l=window.innerWidth,c=window.innerHeight,B=window.devicePixelRatio||1,p=l/m,g=c/u,v=1;n&&("width"==e&&a==l||"height"==e&&s==c?v=d:i?1==o?v=Math.min(p,g):2==o&&(v=Math.max(p,g)):(l<m||c<u)&&(v=Math.min(p,g))),canvas.width=m*B*v,canvas.height=u*B*v,canvas.style.width=anim_container.style.width=dom_overlay_container.style.width=r.style.width=m*v+"px",canvas.style.height=anim_container.style.height=dom_overlay_container.style.height=r.style.height=u*v+"px",stage.scaleX=B*v,stage.scaleY=B*v,a=l,s=c,d=v,stage.tickOnUpdate=!1,stage.update(),stage.tickOnUpdate=!0}window.addEventListener("resize",m),m()}(!0,"both",!0,1),AdobeAn.compositionLoaded(t.properties.id),fnStartAnimation()}window.addEventListener("resize",resizeWindow,!1),window.onload=function(){setFontSize(),setVideo(),initIntro()};