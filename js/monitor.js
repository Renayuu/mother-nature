/*
a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
powered by GSAP : http://www.greensock.com/
*/
var beep = document.createElement('audio');
beep.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/heart_beep.mp3'
var PPath = document.getElementById('pulse') ,
    svg = document.getElementById('svg') , count = 15 , Pulse = new TimelineMax({repeat:-1});
for(var i=0;i<count;i++){
	var svgCln = PPath.cloneNode(true);
	TweenLite.set(svgCln,{stroke:'rgba(19,195,173,'+(count-i)*0.04+')'});
	svg.appendChild(svgCln);
}
var BL = PPath.cloneNode(true); svg.appendChild(BL); BL.setAttribute("class","");
TweenLite.set(PPath,{filter:'url(#glow)'});
Pulse.staggerFromTo(PPath,3.5,{drawSVG:'0% 0%'},{drawSVG:'100% 100%',ease:Power0.easeNone},0.04)
     .staggerFromTo('.myP',3.5,{drawSVG:'0% 3%'},{drawSVG:'100% 103%',ease:Power0.easeNone},0.04,0)
     .fromTo(BL,3.4,{drawSVG:'0%'},{drawSVG:'100%',ease:Power0.easeNone},0)
     .fromTo(BL,1.5,{opacity:0.05,strokeWidth:9},{strokeWidth:4,opacity:0.01},'-=1.5')
     .add(function(){Pulse.timeScale(5)},0.75)
		 .add(function(){Pulse.timeScale(1)},2.6)
		 .add(function(){beep.play()},0.75)
// a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW 