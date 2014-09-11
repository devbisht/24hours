window.Chart=function(v,m){function A(a,c,b,d){s.tooltips.push(new M(a,c,b,d))}function J(a){var c,b;if(0<s.tooltips.length){s.savedState=null==s.savedState?v.getImageData(0,0,v.canvas.width,v.canvas.height):s.savedState;var d=0,l;for(l in s.tooltips){c=v.canvas;var h=0;for(b=0;c;)h+=c.offsetLeft+c.clientLeft,b+=c.offsetTop+c.clientTop,c=c.offsetParent;if(0<window.pageXOffset||0<window.pageYOffset)h-=window.pageXOffset,b-=window.pageYOffset;else if(0<document.body.scrollLeft||0<document.body.scrollTop)h-=
document.body.scrollLeft,b-=document.body.scrollTop;c=h;c=a.clientX-c;b=a.clientY-b;s.tooltips[l].inRange(c,b)&&(s.tooltips[l].render(c,b),d++)}0==d&&v.putImageData(s.savedState,0,0)}}function y(a,c,b){a=D((a-c.graphMin)/(c.steps*c.stepValue),1,0);return b*c.steps*a}function B(a,c,b,d){function l(){f+=h;var e=a.animation?D(r(f),null,0):1;d.clearRect(0,0,n,u);a.scaleOverlay?(b(e),c()):(c(),b(e));if(1>=f)K(l);else if("function"==typeof a.onAnimationComplete)a.onAnimationComplete()}var h=a.animation?
1/D(a.animationSteps,Number.MAX_VALUE,1):1,r=E[a.animationEasing],f=a.animation?0:1;"function"!==typeof c&&(c=function(){});K(l)}function F(a,c,b,d,l,h){var r;a=Math.floor(Math.log(d-l)/Math.LN10);l=Math.floor(l/(1*Math.pow(10,a)))*Math.pow(10,a);d=Math.ceil(d/(1*Math.pow(10,a)))*Math.pow(10,a)-l;a=Math.pow(10,a);for(r=Math.round(d/a);r<b||r>c;)a=r<b?a/2:2*a,r=Math.round(d/a);c=[];C(h,c,r,l,a);return{steps:r,stepValue:a,graphMin:l,labels:c}}function C(a,c,b,d,l){if(a)for(var h=1;h<b+1;h++)c.push(G(a,
{value:(d+l*h).toFixed(0!=l%1?l.toString().split(".")[1].length:0)}))}function C(a,c,b,d,l){if(a)for(var h=1;h<b+1;h++)c.push(G(a,{value:(d+l*h).toFixed(0!=l%1?l.toString().split(".")[1].length:0)}))}function D(a,c,b){return!isNaN(parseFloat(c))&&isFinite(c)&&a>c?c:!isNaN(parseFloat(b))&&isFinite(b)&&a<b?b:a}function z(a,c){var b={},d;for(d in a)b[d]=a[d];for(d in c)b[d]="object"===typeof c[d]&&a[d]?z(a[d],c[d]):c[d];return b}function G(a,c){var b=!/\W/.test(a)?L[a]=L[a]||G(document.getElementById(a).innerHTML):
new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+a.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return c?b(c):b}function N(a,c,b){var d=document.createElement("div"),l;d.style.color=c;document.body.appendChild(d);c=window.getComputedStyle(d).color;d.style.color=b;l=window.getComputedStyle(d).color;
var h=/rgb *\( *([0-9]{1,3}) *, *([0-9]{1,3}) *, *([0-9]{1,3}) *\)/;b=h.exec(c);var r=h.exec(l);l=Math.round(parseFloat(b[1]));c=Math.round(parseFloat(b[2]));b=Math.round(parseFloat(b[3]));var f=Math.round(parseFloat(r[1])),h=Math.round(parseFloat(r[2])),r=Math.round(parseFloat(r[3]));l=parseInt((l-f)*a+f);c=parseInt((c-h)*a+h);a=parseInt((b-r)*a+r);d.parentNode.removeChild(d);return"rgb("+l+","+c+","+a+")"}var s=this,E={linear:function(a){return a},easeInQuad:function(a){return a*a},easeOutQuad:function(a){return-1*
a*(a-2)},easeInOutQuad:function(a){return 1>(a/=0.5)?0.5*a*a:-0.5*(--a*(a-2)-1)},easeInCubic:function(a){return a*a*a},easeOutCubic:function(a){return 1*((a=a/1-1)*a*a+1)},easeInOutCubic:function(a){return 1>(a/=0.5)?0.5*a*a*a:0.5*((a-=2)*a*a+2)},easeInQuart:function(a){return a*a*a*a},easeOutQuart:function(a){return-1*((a=a/1-1)*a*a*a-1)},easeInOutQuart:function(a){return 1>(a/=0.5)?0.5*a*a*a*a:-0.5*((a-=2)*a*a*a-2)},easeInQuint:function(a){return 1*(a/=1)*a*a*a*a},easeOutQuint:function(a){return 1*
((a=a/1-1)*a*a*a*a+1)},easeInOutQuint:function(a){return 1>(a/=0.5)?0.5*a*a*a*a*a:0.5*((a-=2)*a*a*a*a+2)},easeInSine:function(a){return-1*Math.cos(a/1*(Math.PI/2))+1},easeOutSine:function(a){return 1*Math.sin(a/1*(Math.PI/2))},easeInOutSine:function(a){return-0.5*(Math.cos(Math.PI*a/1)-1)},easeInExpo:function(a){return 0==a?1:1*Math.pow(2,10*(a/1-1))},easeOutExpo:function(a){return 1==a?1:1*(-Math.pow(2,-10*a/1)+1)},easeInOutExpo:function(a){return 0==a?0:1==a?1:1>(a/=0.5)?0.5*Math.pow(2,10*(a-1)):
0.5*(-Math.pow(2,-10*--a)+2)},easeInCirc:function(a){return 1<=a?a:-1*(Math.sqrt(1-(a/=1)*a)-1)},easeOutCirc:function(a){return 1*Math.sqrt(1-(a=a/1-1)*a)},easeInOutCirc:function(a){return 1>(a/=0.5)?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)},easeInElastic:function(a){var c=1.70158,b=0,d=1;if(0==a)return 0;if(1==(a/=1))return 1;b||(b=0.3);d<Math.abs(1)?(d=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/d);return-(d*Math.pow(2,10*(a-=1))*Math.sin((1*a-c)*2*Math.PI/b))},easeOutElastic:function(a){var c=
1.70158,b=0,d=1;if(0==a)return 0;if(1==(a/=1))return 1;b||(b=0.3);d<Math.abs(1)?(d=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/d);return d*Math.pow(2,-10*a)*Math.sin((1*a-c)*2*Math.PI/b)+1},easeInOutElastic:function(a){var c=1.70158,b=0,d=1;if(0==a)return 0;if(2==(a/=0.5))return 1;b||(b=1*0.3*1.5);d<Math.abs(1)?(d=1,c=b/4):c=b/(2*Math.PI)*Math.asin(1/d);return 1>a?-0.5*d*Math.pow(2,10*(a-=1))*Math.sin((1*a-c)*2*Math.PI/b):0.5*d*Math.pow(2,-10*(a-=1))*Math.sin((1*a-c)*2*Math.PI/b)+1},easeInBack:function(a){return 1*
(a/=1)*a*(2.70158*a-1.70158)},easeOutBack:function(a){return 1*((a=a/1-1)*a*(2.70158*a+1.70158)+1)},easeInOutBack:function(a){var c=1.70158;return 1>(a/=0.5)?0.5*a*a*(((c*=1.525)+1)*a-c):0.5*((a-=2)*a*(((c*=1.525)+1)*a+c)+2)},easeInBounce:function(a){return 1-E.easeOutBounce(1-a)},easeOutBounce:function(a){return(a/=1)<1/2.75?1*7.5625*a*a:a<2/2.75?1*(7.5625*(a-=1.5/2.75)*a+0.75):a<2.5/2.75?1*(7.5625*(a-=2.25/2.75)*a+0.9375):1*(7.5625*(a-=2.625/2.75)*a+0.984375)},easeInOutBounce:function(a){return 0.5>
a?0.5*E.easeInBounce(2*a):0.5*E.easeOutBounce(2*a-1)+0.5}};this.tooltips=[];defaults={tooltips:{background:"black",fontFamily:"'Arial'",fontStyle:"normal",fontColor:"white",fontSize:"12px",labelTemplate:"<%=label%>: <%=value%>",height:24,padding:{top:4,right:8,bottom:4,left:8},position:"bottom center",offset:{left:0,top:0},border:{width:0,color:"black",radius:4},showShadow:!0,shadow:{color:"rgba(0,0,0,0.9)",blur:8,offsetX:0,offsetY:0},showHighlight:!0,highlight:{stroke:{width:1,color:"rgba(230,230,230,0.25)"},
fill:"rgba(255,255,255,0.25)"}}};m=m?z(defaults,m):defaults;var M=function(a,c,b,d){this.ctx=a;this.areaObj=c;this.data=b;this.y=this.x=this.highlightState=this.savedState=null;this.inRange=function(a,b){if(this.areaObj.type)switch(this.areaObj.type){case "rect":return a>=this.areaObj.x&&a<=this.areaObj.x+this.areaObj.width&&b>=this.areaObj.y&&b<=this.areaObj.y+this.areaObj.height;case "circle":return Math.pow(a-this.areaObj.x,2)+Math.pow(b-this.areaObj.y,2)<Math.pow(this.areaObj.r,2);case "shape":for(var c=
this.areaObj.points,d=!1,e=-1,n=c.length,p=n-1;++e<n;p=e)(c[e].y<=b&&b<c[p].y||c[p].y<=b&&b<c[e].y)&&a<(c[p].x-c[e].x)*(b-c[e].y)/(c[p].y-c[e].y)+c[e].x&&(d=!d);return d}};this.render=function(b,c){this.ctx.shadowColor=void 0;this.ctx.shadowBlur=0;this.ctx.shadowOffsetX=0;this.ctx.shadowOffsetY=0;null==this.savedState&&(this.ctx.putImageData(s.savedState,0,0),this.savedState=this.ctx.getImageData(0,0,this.ctx.canvas.width,this.ctx.canvas.height));this.ctx.putImageData(this.savedState,0,0);if(m.tooltips.showHighlight)if(null==
this.highlightState){this.ctx.strokeStyle=m.tooltips.highlight.stroke.color;this.ctx.lineWidth=m.tooltips.highlight.stroke.width;this.ctx.fillStyle=m.tooltips.highlight.fill;switch(this.areaObj.type){case "rect":this.ctx.strokeRect(this.areaObj.x,this.areaObj.y,this.areaObj.width,this.areaObj.height);this.ctx.fillStyle=m.tooltips.highlight.fill;this.ctx.fillRect(this.areaObj.x,this.areaObj.y,this.areaObj.width,this.areaObj.height);break;case "circle":this.ctx.beginPath();this.ctx.arc(this.areaObj.x,
this.areaObj.y,this.areaObj.r,0,2*Math.PI,!1);this.ctx.stroke();this.ctx.fill();break;case "shape":this.ctx.beginPath();this.ctx.moveTo(this.areaObj.points[0].x,this.areaObj.points[0].y);for(var d in this.areaObj.points)this.ctx.lineTo(this.areaObj.points[d].x,this.areaObj.points[d].y);this.ctx.stroke();this.ctx.fill()}this.highlightState=this.ctx.getImageData(0,0,this.ctx.canvas.width,this.ctx.canvas.height)}else this.ctx.putImageData(this.highlightState,0,0);d=b+m.tooltips.offset.left;var f=c+m.tooltips.offset.top,
e=G(m.tooltips.labelTemplate,this.data),n=m.tooltips.padding.left+this.ctx.measureText(e).width+m.tooltips.padding.right,p=m.tooltips.position.split(" "),g=m.tooltips.height;if(m.tooltips.fontSize.match(/[0-9]+(.[0-9]+)?px/))g=parseInt(m.tooltips.fontSize);else if(m.tooltips.fontSize.match(/[0-9]+(.[0-9]+)?(\%|em)/)){g=parseFloat(m.tooltips.fontSize);m.tooltips.fontSize.match(/[0-9]+(.[0-9]+)?\%/)&&(g/=100);var w=this.ctx.canvas.parentNode,w=w||document.body,k=document.createElement("div");k.style.cssText=
"display:inline-block; padding:0; line-height:1; position:absolute; visibility:hidden; font-size:1em";k.appendChild(document.createTextNode("M"));w.appendChild(k);var q=[k.offsetWidth,k.offsetHeight];w.removeChild(k);g*=q[1]}var g=g+(m.tooltips.padding.top+m.tooltips.padding.bottom),t;for(t in p)0==t&&("bottom"==p[t]?f-=g:"center"==p[t]&&(f-=g/2,1==p.length&&(d-=n/2))),1==t&&("right"==p[t]?d-=n:"center"==p[t]&&(d-=n/2));d+n>a.canvas.width&&(d-=d+n-a.canvas.width);0>d&&(d=0);f+g>a.canvas.height&&(f-=
f+g-a.canvas.height);0>f&&(f=0);this.ctx.fillStyle=m.tooltips.background;m.tooltips.showShadow&&(this.ctx.shadowColor=m.tooltips.shadow.color,this.ctx.shadowBlur=m.tooltips.shadow.blur,this.ctx.shadowOffsetX=m.tooltips.shadow.offsetX,this.ctx.shadowOffsetY=m.tooltips.shadow.offsetY);m.tooltips.border.radius?(t=12<m.tooltips.border.radius?12:m.tooltips.border.radius,this.ctx.beginPath(),this.ctx.moveTo(d+t,f),this.ctx.lineTo(d+n-t,f),this.ctx.quadraticCurveTo(d+n,f,d+n,f+t),this.ctx.lineTo(d+n,f+g-
t),this.ctx.quadraticCurveTo(d+n,f+g,d+n-t,f+g),this.ctx.lineTo(d+t,f+g),this.ctx.quadraticCurveTo(d,f+g,d,f+g-t),this.ctx.lineTo(d,f+t),this.ctx.quadraticCurveTo(d,f,d+t,f),this.ctx.fill(),0<m.tooltips.border.width&&(this.ctx.strokeStyle=m.tooltips.border.color,this.ctx.lineWidth=m.tooltips.border.width,this.ctx.stroke()),this.ctx.closePath()):(this.ctx.fillRect(d,f,n,g),0<m.tooltips.border.width&&(this.ctx.fillStyle=m.tooltips.border.color,this.ctx.lineWidth=m.tooltips.border.width,this.ctx.strokeRect(d,
f,n,g)));this.ctx.font=m.tooltips.fontStyle+" "+m.tooltips.fontSize+" "+m.tooltips.fontFamily;this.ctx.fillStyle=m.tooltips.fontColor;this.ctx.textAlign="center";this.ctx.textBaseline="middle";this.ctx.fillText(e,d+n/2,f+g/2);this.x=b;this.y=c}},n=v.canvas.width,u=v.canvas.height;this.savedState=null;window.Touch?(v.canvas.ontouchstart=function(a){a.clientX=a.targetTouches[0].clientX;a.clientY=a.targetTouches[0].clientY;J(a)},v.canvas.ontouchmove=function(a){a.clientX=a.targetTouches[0].clientX;a.clientY=
a.targetTouches[0].clientY;J(a)}):v.canvas.onmousemove=function(a){J(a)};v.canvas.onmouseout=function(a){null!=s.savedState&&v.putImageData(s.savedState,0,0)};window.devicePixelRatio&&(v.canvas.style.width=n+"px",v.canvas.style.height=u+"px",v.canvas.height=u*window.devicePixelRatio,v.canvas.width=n*window.devicePixelRatio,v.scale(window.devicePixelRatio,window.devicePixelRatio));this.PolarArea=function(a,c){s.PolarArea.defaults={scaleOverlay:!0,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,
scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,
onAnimationComplete:null,showTooltips:!0};var b=c?z(s.PolarArea.defaults,c):s.PolarArea.defaults;return new O(a,b,v)};this.Radar=function(a,c){s.Radar.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleShowLine:!0,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!1,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowLabelBackdrop:!0,scaleBackdropColor:"rgba(255,255,255,0.75)",
scaleBackdropPaddingY:2,scaleBackdropPaddingX:2,angleShowLineOut:!0,angleLineColor:"rgba(0,0,0,.1)",angleLineWidth:1,pointLabelFontFamily:"'Arial'",pointLabelFontStyle:"normal",pointLabelFontSize:12,pointLabelFontColor:"#666",pointDot:!0,pointDotRadius:3,pointDotStrokeWidth:1,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null,showTooltips:!0};var b=c?z(s.Radar.defaults,c):s.Radar.defaults;return new P(a,b,v)};
this.Pie=function(a,c){s.Pie.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",segmentStrokeWidth:2,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null,labelFontFamily:"'Arial'",labelFontStyle:"normal",labelFontSize:12,labelFontColor:"#666",labelAlign:"right",showTooltips:!0};var b=c?z(s.Pie.defaults,c):s.Pie.defaults;return new Q(a,b,v)};this.Doughnut=function(a,c){s.Doughnut.defaults={segmentShowStroke:!0,segmentStrokeColor:"#fff",
segmentStrokeWidth:2,percentageInnerCutout:50,animation:!0,animationSteps:100,animationEasing:"easeOutBounce",animateRotate:!0,animateScale:!1,onAnimationComplete:null,showTooltips:!0};var b=c?z(s.Doughnut.defaults,c):s.Doughnut.defaults;return new R(a,b,v)};this.Line=function(a,c){s.Line.defaults={scaleOverlay:!1,scaleOverride:!1,scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",
scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,bezierCurve:!0,pointDot:!0,pointDotRadius:4,pointDotStrokeWidth:2,datasetStroke:!0,datasetStrokeWidth:2,datasetFill:!0,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null,showTooltips:!0};var b=c?z(s.Line.defaults,c):s.Line.defaults;return new S(a,b,v)};this.Bar=function(a,c){s.Bar.defaults={scaleOverlay:!1,scaleOverride:!1,
scaleSteps:null,scaleStepWidth:null,scaleStartValue:null,scaleLineColor:"rgba(0,0,0,.1)",scaleLineWidth:1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleFontFamily:"'Arial'",scaleFontSize:12,scaleFontStyle:"normal",scaleFontColor:"#666",scaleShowGridLines:!0,scaleGridLineColor:"rgba(0,0,0,.05)",scaleGridLineWidth:1,barShowStroke:!0,barStrokeWidth:2,barValueSpacing:5,barDatasetSpacing:1,animation:!0,animationSteps:60,animationEasing:"easeOutQuart",onAnimationComplete:null,showTooltips:!0};var b=c?
z(s.Bar.defaults,c):s.Bar.defaults;return new T(a,b,v)};var O=function(a,c,b){var d,l,h,r,f,e,m;d=Math.min.apply(Math,[n,u])/2;d-=Math.max.apply(Math,[0.5*c.scaleFontSize,0.5*c.scaleLineWidth]);r=2*c.scaleFontSize;c.scaleShowLabelBackdrop&&(r+=2*c.scaleBackdropPaddingY,d-=1.5*c.scaleBackdropPaddingY);f=d;r=r?r:5;e=function(){for(var b=Number.MIN_VALUE,c=Number.MAX_VALUE,d=0;d<a.length;d++)a[d].value>b&&(b=a[d].value),a[d].value<c&&(c=a[d].value);return{maxValue:b,minValue:c,maxSteps:Math.floor(f/
(0.66*r)),minSteps:Math.floor(0.5*(f/r))}}();m=c.scaleShowLabels?c.scaleLabel:null;c.scaleOverride?(h={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]},C(m,h.labels,h.steps,c.scaleStartValue,c.scaleStepWidth)):h=F(f,e.maxSteps,e.minSteps,e.maxValue,e.minValue,m);l=d/h.steps;B(c,function(){for(var a=0;a<h.steps;a++)if(c.scaleShowLine&&(b.beginPath(),b.arc(n/2,u/2,l*(a+1),0,2*Math.PI,!0),b.strokeStyle=c.scaleLineColor,b.lineWidth=c.scaleLineWidth,b.stroke()),c.scaleShowLabels){b.textAlign=
"center";b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;var d=h.labels[a];if(c.scaleShowLabelBackdrop){var w=b.measureText(d).width;b.fillStyle=c.scaleBackdropColor;b.beginPath();b.rect(Math.round(n/2-w/2-c.scaleBackdropPaddingX),Math.round(u/2-l*(a+1)-0.5*c.scaleFontSize-c.scaleBackdropPaddingY),Math.round(w+2*c.scaleBackdropPaddingX),Math.round(c.scaleFontSize+2*c.scaleBackdropPaddingY));b.fill()}b.textBaseline="middle";b.fillStyle=c.scaleFontColor;b.fillText(d,n/2,u/2-l*(a+
1))}},function(d){var g=-Math.PI/2,w=2*Math.PI/a.length,k=1,f=1;c.animation&&(c.animateScale&&(k=d),c.animateRotate&&(f=d));for(var e=0;e<a.length;e++){b.beginPath();b.arc(n/2,u/2,k*y(a[e].value,h,l),g,g+f*w,!1);b.lineTo(n/2,u/2);b.closePath();b.fillStyle=a[e].color;b.fill();if(1<=d&&c.showTooltips){var x=[{x:n/2,y:u/2}],H=y(a[e].value,h,l);x.push({x:n/2+H*Math.cos(g),y:u/2+H*Math.sin(g)});for(var I=0;50>=I;I++)x.push({x:n/2+H*Math.cos(g+I/50*f*w),y:u/2+H*Math.sin(g+I/50*f*w)});A(b,{type:"shape",
points:x},{label:a[e].label,value:a[e].value},"PolarArea")}c.segmentShowStroke&&(b.strokeStyle=c.segmentStrokeColor,b.lineWidth=c.segmentStrokeWidth,b.stroke());g+=f*w}},b)},P=function(a,c,b){var d,l,h,r,f,e,m;a.labels||(a.labels=[]);(function(){d=Math.min.apply(Math,[n,u])/2;r=2*c.scaleFontSize;for(var h=0,g=0;g<a.labels.length;g++){b.font=c.pointLabelFontStyle+" "+c.pointLabelFontSize+"px "+c.pointLabelFontFamily;var l=b.measureText(a.labels[g]).width;l>h&&(h=l)}d-=Math.max.apply(Math,[h,1.5*(c.pointLabelFontSize/
2)]);d-=c.pointLabelFontSize;f=d=D(d,null,0);r=r?r:5})();e=function(){for(var b=Number.MIN_VALUE,c=Number.MAX_VALUE,d=0;d<a.datasets.length;d++)for(var k=0;k<a.datasets[d].data.length;k++)a.datasets[d].data[k]>b&&(b=a.datasets[d].data[k]),a.datasets[d].data[k]<c&&(c=a.datasets[d].data[k]);return{maxValue:b,minValue:c,maxSteps:Math.floor(f/(0.66*r)),minSteps:Math.floor(0.5*(f/r))}}();m=c.scaleShowLabels?c.scaleLabel:null;c.scaleOverride?(h={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,
labels:[]},C(m,h.labels,h.steps,c.scaleStartValue,c.scaleStepWidth)):h=F(f,e.maxSteps,e.minSteps,e.maxValue,e.minValue,m);l=d/h.steps;B(c,function(){var f=2*Math.PI/a.datasets[0].data.length;b.save();b.translate(n/2,u/2);if(c.angleShowLineOut){b.strokeStyle=c.angleLineColor;b.lineWidth=c.angleLineWidth;for(var g=0;g<a.datasets[0].data.length;g++)b.rotate(f),b.beginPath(),b.moveTo(0,0),b.lineTo(0,-d),b.stroke()}for(g=0;g<h.steps;g++){b.beginPath();if(c.scaleShowLine){b.strokeStyle=c.scaleLineColor;
b.lineWidth=c.scaleLineWidth;b.moveTo(0,-l*(g+1));for(var e=0;e<a.datasets[0].data.length;e++)b.rotate(f),b.lineTo(0,-l*(g+1));b.closePath();b.stroke()}c.scaleShowLabels&&(b.textAlign="center",b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily,b.textBaseline="middle",c.scaleShowLabelBackdrop&&(e=b.measureText(h.labels[g]).width,b.fillStyle=c.scaleBackdropColor,b.beginPath(),b.rect(Math.round(-e/2-c.scaleBackdropPaddingX),Math.round(-l*(g+1)-0.5*c.scaleFontSize-c.scaleBackdropPaddingY),
Math.round(e+2*c.scaleBackdropPaddingX),Math.round(c.scaleFontSize+2*c.scaleBackdropPaddingY)),b.fill()),b.fillStyle=c.scaleFontColor,b.fillText(h.labels[g],0,-l*(g+1)))}for(g=0;g<a.labels.length;g++){b.font=c.pointLabelFontStyle+" "+c.pointLabelFontSize+"px "+c.pointLabelFontFamily;b.fillStyle=c.pointLabelFontColor;var e=Math.sin(f*g)*(d+c.pointLabelFontSize),k=Math.cos(f*g)*(d+c.pointLabelFontSize);b.textAlign=f*g==Math.PI||0==f*g?"center":f*g>Math.PI?"right":"left";b.textBaseline="middle";b.fillText(a.labels[g],
e,-k)}b.restore()},function(d){var g=2*Math.PI/a.datasets[0].data.length;b.save();b.translate(n/2,u/2);for(var f=0;f<a.datasets.length;f++){var k=y(a.datasets[f].data[0],h,l);b.beginPath();b.moveTo(0,d*-1*k);if(1<=d&&c.showTooltips){var e=n/2+k*Math.cos(0-Math.PI/2),k=u/2+k*Math.sin(0-Math.PI/2),r=c.pointDot?c.pointDotRadius+c.pointDotStrokeWidth:10;a.labels[0].trim();A(b,{type:"circle",x:e,y:k,r:r},{label:a.labels[0],value:a.datasets[f].data[0]},"Radar")}for(var x=1;x<a.datasets[f].data.length;x++)k=
y(a.datasets[f].data[x],h,l),b.rotate(g),b.lineTo(0,d*-1*k),1<=d&&c.showTooltips&&(e=n/2+k*Math.cos(x*g-Math.PI/2),k=u/2+k*Math.sin(x*g-Math.PI/2),r=c.pointDot?c.pointDotRadius+c.pointDotStrokeWidth:10,a.labels[x].trim(),A(b,{type:"circle",x:e,y:k,r:r},{label:a.labels[x],value:a.datasets[f].data[x]},"Radar"));b.closePath();b.fillStyle=a.datasets[f].fillColor;b.strokeStyle=a.datasets[f].strokeColor;b.lineWidth=c.datasetStrokeWidth;b.fill();b.stroke();if(c.pointDot){b.fillStyle=a.datasets[f].pointColor;
b.strokeStyle=a.datasets[f].pointStrokeColor;b.lineWidth=c.pointDotStrokeWidth;for(e=0;e<a.datasets[f].data.length;e++)b.rotate(g),b.beginPath(),b.arc(0,d*-1*y(a.datasets[f].data[e],h,l),c.pointDotRadius,2*Math.PI,!1),b.fill(),b.stroke()}b.rotate(g)}b.restore()},b)},Q=function(a,c,b){for(var d=0,l=Math.min.apply(Math,[u/2,n/2])-5,h=0;h<a.length;h++)d+=a[h].value;b.fillStyle="black";b.textBaseline="base";B(c,null,function(h){var f=-Math.PI/2,e=1,m=1;c.animation&&(c.animateScale&&(e=h),c.animateRotate&&
(m=h));for(var p=0;p<a.length;p++){var g=m*a[p].value/d*2*Math.PI;b.beginPath();b.arc(n/2,u/2,e*l,f,f+g);b.lineTo(n/2,u/2);b.closePath();b.fillStyle=a[p].color;b.fill();if(a[p].label&&2*(e*l)*g/(2*Math.PI)>c.labelFontSize){var w=function(a){switch(a){case "left":return"right";case "right":return"left";case "center":return a}},k=a[p].labelFontSize||c.labelFontSize+"px";null!=k.match(/^[0-9]+$/g)&&(k+="px");b.font=c.labelFontStyle+" "+k+" "+c.labelFontFamily;b.fillStyle=N(h,a[p].labelColor||"black",
a[p].color);b.textBaseline="middle";var k=-(f+g)+g/2,q=n/2+e*l*Math.cos(k),t=u/2-e*l*Math.sin(k);b.textAlign=a[p].labelAlign||c.labelAlign;textX=function(a,b){switch(a){case "left":return-b+20;case "center":return-b/2}return-10}(b.textAlign,e*l);k<-Math.PI/2&&(k-=Math.PI,b.textAlign=w(b.textAlign),textX=-textX);b.translate(q,t);b.rotate(-k);b.fillText(a[p].label,textX,0);b.rotate(k);b.translate(-q,-t)}if(1<=h&&c.showTooltips){w=[{x:n/2,y:u/2}];w.push({x:n/2+l*Math.cos(f),y:u/2+l*Math.sin(f)});for(k=
0;50>=k;k++)w.push({x:n/2+l*Math.cos(f+k/50*g),y:u/2+l*Math.sin(f+k/50*g)});A(b,{type:"shape",points:w},{label:a[p].label,value:a[p].value},"Pie")}c.segmentShowStroke&&(b.lineWidth=c.segmentStrokeWidth,b.strokeStyle=c.segmentStrokeColor,b.stroke());f+=g}},b)},R=function(a,c,b){for(var d=0,l=Math.min.apply(Math,[u/2,n/2])-5,h=l*(c.percentageInnerCutout/100),m=0;m<a.length;m++)d+=a[m].value;B(c,null,function(f){var e=-Math.PI/2,m=1,p=1;c.animation&&(c.animateScale&&(m=f),c.animateRotate&&(p=f));for(var g=
0;g<a.length;g++){var r=p*a[g].value/d*2*Math.PI;b.beginPath();b.arc(n/2,u/2,m*l,e,e+r,!1);b.arc(n/2,u/2,m*h,e+r,e,!0);b.closePath();b.fillStyle=a[g].color;b.fill();if(1<=f&&c.showTooltips){var k=[];k.push({x:n/2+l*Math.cos(e),y:u/2+l*Math.sin(e)});for(var q=0;50>=q;q++)k.push({x:n/2+l*Math.cos(e+q/50*r),y:u/2+l*Math.sin(e+q/50*r)});k.push({x:n/2+h*Math.cos(e+r),y:u/2+h*Math.sin(e+r)});for(q=50;0<=q;q--)k.push({x:n/2+h*Math.cos(e+q/50*r),y:u/2+h*Math.sin(e+q/50*r)});A(b,{type:"shape",points:k},{label:a[g].label,
value:a[g].value},"Doughnut")}c.segmentShowStroke&&(b.lineWidth=c.segmentStrokeWidth,b.strokeStyle=c.segmentStrokeColor,b.stroke());e+=r}},b)},S=function(a,c,b){var d,l,h,m,f,e,s,p,g,w,k,q,t=0;(function(){d=u;b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;g=1;for(var h=0;h<a.labels.length;h++){var k=b.measureText(a.labels[h]).width;g=k>g?k:g}n/a.labels.length<g?(t=45,n/a.labels.length<Math.cos(t)*g?(t=90,d-=g):d-=Math.sin(t)*g):d-=c.scaleFontSize;d-=5;m=c.scaleFontSize;f=d-=m})();
e=function(){for(var b=Number.MIN_VALUE,c=Number.MAX_VALUE,d=0;d<a.datasets.length;d++)for(var g=0;g<a.datasets[d].data.length;g++)a.datasets[d].data[g]>b&&(b=a.datasets[d].data[g]),a.datasets[d].data[g]<c&&(c=a.datasets[d].data[g]);return{maxValue:b,minValue:c,maxSteps:Math.floor(f/(0.66*m)),minSteps:Math.floor(0.5*(f/m))}}();s=c.scaleShowLabels?c.scaleLabel:"";c.scaleOverride?(h={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]},C(s,h.labels,h.steps,c.scaleStartValue,
c.scaleStepWidth)):h=F(f,e.maxSteps,e.minSteps,e.maxValue,e.minValue,s);l=Math.floor(f/h.steps);(function(){var d=1;if(c.scaleShowLabels){b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;for(var e=0;e<h.labels.length;e++)var l=b.measureText(h.labels[e]).width,d=l>d?l:d;d+=10}w=n-d-g;p=Math.floor(w/(a.labels.length-1));k=n-g/2-w;q=f+c.scaleFontSize/2})();B(c,function(){b.lineWidth=c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;b.beginPath();b.moveTo(n-g/2+5,q);b.lineTo(n-g/2-w-
5,q);b.stroke();0<t?(b.save(),b.textAlign="right"):b.textAlign="center";b.fillStyle=c.scaleFontColor;for(var d=0;d<a.labels.length;d++)b.save(),0<t?(b.translate(k+d*p,q+c.scaleFontSize),b.rotate(-(t*(Math.PI/180))),b.fillText(a.labels[d],0,0),b.restore()):b.fillText(a.labels[d],k+d*p,q+c.scaleFontSize+3),b.beginPath(),b.moveTo(k+d*p,q+3),c.scaleShowGridLines&&0<d?(b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(k+d*p,5)):b.lineTo(k+d*p,q+3),b.stroke();b.lineWidth=c.scaleLineWidth;
b.strokeStyle=c.scaleLineColor;b.beginPath();b.moveTo(k,q+5);b.lineTo(k,5);b.stroke();b.textAlign="right";b.textBaseline="middle";for(d=0;d<h.steps;d++)b.beginPath(),b.moveTo(k-3,q-(d+1)*l),c.scaleShowGridLines?(b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(k+w+5,q-(d+1)*l)):b.lineTo(k-0.5,q-(d+1)*l),b.stroke(),c.scaleShowLabels&&b.fillText(h.labels[d],k-8,q-(d+1)*l)},function(d){function g(b,c){return q-d*y(a.datasets[b].data[c],h,l)}for(var f=0;f<a.datasets.length;f++){b.strokeStyle=
a.datasets[f].strokeColor;b.lineWidth=c.datasetStrokeWidth;b.beginPath();b.moveTo(k,q-d*y(a.datasets[f].data[0],h,l));for(var e=1;e<a.datasets[f].data.length;e++)c.bezierCurve?b.bezierCurveTo(k+p*(e-0.5),g(f,e-1),k+p*(e-0.5),g(f,e),k+p*e,g(f,e)):b.lineTo(k+p*e,g(f,e));for(var m=c.pointDot?c.pointDotRadius+c.pointDotStrokeWidth:10,e=0;e<a.datasets[f].data.length;e++)1<=d&&c.showTooltips&&A(b,{type:"circle",x:k+p*e,y:g(f,e),r:m},{label:a.labels[e],value:a.datasets[f].data[e]},"Line");b.stroke();c.datasetFill?
(b.lineTo(k+p*(a.datasets[f].data.length-1),q),b.lineTo(k,q),b.closePath(),b.fillStyle=a.datasets[f].fillColor,b.fill()):b.closePath();if(c.pointDot){b.fillStyle=a.datasets[f].pointColor;b.strokeStyle=a.datasets[f].pointStrokeColor;b.lineWidth=c.pointDotStrokeWidth;for(e=0;e<a.datasets[f].data.length;e++)b.beginPath(),b.arc(k+p*e,q-d*y(a.datasets[f].data[e],h,l),c.pointDotRadius,0,2*Math.PI,!0),b.fill(),b.stroke()}}},b)},T=function(a,c,b){var d,l,h,m,f,e,s,p,g,w,k,q,t,v=0;(function(){d=u;b.font=c.scaleFontStyle+
" "+c.scaleFontSize+"px "+c.scaleFontFamily;g=1;for(var e=0;e<a.labels.length;e++){var h=b.measureText(a.labels[e]).width;g=h>g?h:g}n/a.labels.length<g?(v=45,n/a.labels.length<Math.cos(v)*g?(v=90,d-=g):d-=Math.sin(v)*g):d-=c.scaleFontSize;d-=5;m=c.scaleFontSize;f=d-=m})();e=function(){for(var b=Number.MIN_VALUE,c=Number.MAX_VALUE,d=0;d<a.datasets.length;d++)for(var e=0;e<a.datasets[d].data.length;e++)a.datasets[d].data[e]>b&&(b=a.datasets[d].data[e]),a.datasets[d].data[e]<c&&(c=a.datasets[d].data[e]);
return{maxValue:b,minValue:c,maxSteps:Math.floor(f/(0.66*m)),minSteps:Math.floor(0.5*(f/m))}}();s=c.scaleShowLabels?c.scaleLabel:"";c.scaleOverride?(h={steps:c.scaleSteps,stepValue:c.scaleStepWidth,graphMin:c.scaleStartValue,labels:[]},C(s,h.labels,h.steps,c.scaleStartValue,c.scaleStepWidth)):h=F(f,e.maxSteps,e.minSteps,e.maxValue,e.minValue,s);l=Math.floor(f/h.steps);(function(){var d=1;if(c.scaleShowLabels){b.font=c.scaleFontStyle+" "+c.scaleFontSize+"px "+c.scaleFontFamily;for(var e=0;e<h.labels.length;e++)var l=
b.measureText(h.labels[e]).width,d=l>d?l:d;d+=10}w=n-d-g;p=Math.floor(w/a.labels.length);t=(p-2*c.scaleGridLineWidth-2*c.barValueSpacing-(c.barDatasetSpacing*a.datasets.length-1)-(c.barStrokeWidth/2*a.datasets.length-1))/a.datasets.length;k=n-g/2-w;q=f+c.scaleFontSize/2})();B(c,function(){b.lineWidth=c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;b.beginPath();b.moveTo(n-g/2+5,q);b.lineTo(n-g/2-w-5,q);b.stroke();0<v?(b.save(),b.textAlign="right"):b.textAlign="center";b.fillStyle=c.scaleFontColor;
for(var d=0;d<a.labels.length;d++)b.save(),0<v?(b.translate(k+d*p,q+c.scaleFontSize),b.rotate(-(v*(Math.PI/180))),b.fillText(a.labels[d],0,0),b.restore()):b.fillText(a.labels[d],k+d*p+p/2,q+c.scaleFontSize+3),b.beginPath(),b.moveTo(k+(d+1)*p,q+3),b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(k+(d+1)*p,5),b.stroke();b.lineWidth=c.scaleLineWidth;b.strokeStyle=c.scaleLineColor;b.beginPath();b.moveTo(k,q+5);b.lineTo(k,5);b.stroke();b.textAlign="right";b.textBaseline="middle";
for(d=0;d<h.steps;d++)b.beginPath(),b.moveTo(k-3,q-(d+1)*l),c.scaleShowGridLines?(b.lineWidth=c.scaleGridLineWidth,b.strokeStyle=c.scaleGridLineColor,b.lineTo(k+w+5,q-(d+1)*l)):b.lineTo(k-0.5,q-(d+1)*l),b.stroke(),c.scaleShowLabels&&b.fillText(h.labels[d],k-8,q-(d+1)*l)},function(d){b.lineWidth=c.barStrokeWidth;for(var e=0;e<a.datasets.length;e++){b.fillStyle=a.datasets[e].fillColor;b.strokeStyle=a.datasets[e].strokeColor;for(var f=0;f<a.datasets[e].data.length;f++){var g=k+c.barValueSpacing+p*f+
t*e+c.barDatasetSpacing*e+c.barStrokeWidth*e;b.beginPath();b.moveTo(g,q);b.lineTo(g,q-d*y(a.datasets[e].data[f],h,l)+c.barStrokeWidth/2);b.lineTo(g+t,q-d*y(a.datasets[e].data[f],h,l)+c.barStrokeWidth/2);b.lineTo(g+t,q);c.barShowStroke&&b.stroke();b.closePath();b.fill();if(1<=d&&c.showTooltips){var m=y(a.datasets[e].data[f],h,l);A(b,{type:"rect",x:g,y:q-m,width:t,height:m},{label:a.labels[f],value:a.datasets[e].data[f]},"Bar")}}}},b)},K=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||
window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}(),L={}};