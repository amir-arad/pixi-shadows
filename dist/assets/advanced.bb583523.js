import{c as q,A as k,a as J,S as j,T as P,b as _,d as U,e as z,C as $}from"./background.71470582.js";import{G as AA}from"./dat.gui.module.6914edc7.js";import{f as eA}from"./flameDemon.c9374d22.js";var H={exports:{}};(function(o,r){(function(i,h){o.exports=h()})(q,function(){var i=function(){var h=0,l=document.createElement("div");function d(a){return l.appendChild(a.dom),a}function w(a){for(var n=0;n<l.children.length;n++)l.children[n].style.display=n===a?"block":"none";h=a}l.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",l.addEventListener("click",function(a){a.preventDefault(),w(++h%l.children.length)},!1);var g=(performance||Date).now(),f=g,A=0,R=d(new i.Panel("FPS","#0ff","#002")),Q=d(new i.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var b=d(new i.Panel("MB","#f08","#201"));return w(0),{REVISION:16,dom:l,addPanel:d,showPanel:w,begin:function(){g=(performance||Date).now()},end:function(){A++;var a=(performance||Date).now();if(Q.update(a-g,200),f+1e3<=a&&(R.update(1e3*A/(a-f),100),f=a,A=0,b)){var n=performance.memory;b.update(n.usedJSHeapSize/1048576,n.jsHeapSizeLimit/1048576)}return a},update:function(){g=this.end()},domElement:l,setMode:w}};return i.Panel=function(h,l,d){var w=1/0,g=0,f=Math.round,A=f(window.devicePixelRatio||1),R=80*A,Q=48*A,b=3*A,a=2*A,n=3*A,u=15*A,C=74*A,S=30*A,M=document.createElement("canvas");M.width=R,M.height=Q,M.style.cssText="width:80px;height:48px";var e=M.getContext("2d");return e.font="bold "+9*A+"px Helvetica,Arial,sans-serif",e.textBaseline="top",e.fillStyle=d,e.fillRect(0,0,R,Q),e.fillStyle=l,e.fillText(h,b,a),e.fillRect(n,u,C,S),e.fillStyle=d,e.globalAlpha=.9,e.fillRect(n,u,C,S),{dom:M,update:function(T,K){w=Math.min(w,T),g=Math.max(g,T),e.fillStyle=d,e.globalAlpha=1,e.fillRect(0,0,R,u),e.fillStyle=l,e.fillText(f(T)+" "+h+" ("+f(w)+"-"+f(g)+")",b,a),e.drawImage(M,n+A,u,C-A,S,n,u,C-A,S),e.fillRect(n+C-A,u,A,S),e.fillStyle=d,e.globalAlpha=.9,e.fillRect(n+C-A,u,A,f((1-T/K)*S))}}},i})})(H);var oA=H.exports,aA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABABAMAAABYR2ztAAAAG1BMVEUAAADQNRbldyJDDA1MDhA5CgvvxTc9MjL07V6aDswKAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAASAAAAEgARslrPgAAAyFJREFUSMfdlM9v2koQxxctVq547cA1hMbN0XjWUY8YT0qPhtX8AYE8wpFW1uNdX1vx8me/2fUPHJKqh0o9dIWQzHz0ne/OfI0Qf+bp/TLg/0xg/KMKxE5eXVWP/fO6Z7juCz8a1MDsDCDj5NV6UNns45kAUSyGX/zbh4FQriO+lCAi03s/j45+bRP0K2A5LNVu/VmoB36WAHjWgZZP2fDr6LOzyXXQZwKeKrPo31KpHQMABPbenXrhqcf5bpQNo6/8DFCYjoRtIHrRdxZY3O6ueCaQCq/jggwZqW7LaIT+en3lVfLQXsSjlAyop+whRDUeX/ID2ItoiN3AJRXswLDHMfrbgU9L4/zNdD5zNmQqSQjTQwhxOA4RV2SBPgLmzoWMJVuKe7leZNdcz6J7skAe6xaIhRSiRNsEpzgs7wu3zhoQIG3LPgMYIiSIh7KwHphpLmpNm6fFFgMAhbgoZy4yJ8BGzXz4BPbcsbXDrA7NCSi8IM8XY0tgBmgLF3s8Bc8reA6Lv0d2RlqFuLDEwfpohs2D+rL7B21uAN9p1+Sim1g5nUbP/90zYJMA7PNif7E/rRtMakaqpAqAmF2MDocW4PWltMQy9GqAF5Vd8zxOHThBPPyZqCV4MuqRrZ7y0OTLShDxDmWEWQeABnB1w0CPt4bYBYoaMBxXLkjsAtwhrTsYe0u0LxYvbv8KcHU3aB74uxdA0fSaVlkFVI+tRwbSCvBgMg91BeBDK8DvmWncak6mzvk3vmQXgGZgWZ5waMRA86zbDtCMgQWugzXksRjzHa5OgCEn4VGiNzqHIO49MtBmQaaGF9Bc0gcEoXKYY7ZvAUkS6p1FkykDYSznYRconAeCYLozSQgChfwI80ELeFRbMAnB3SQQGOu51E+tSY/qSyb8WqSbiejHOpO6/c+FmAoXq0kEwTaAhPvhQOJAvDiema7+gu2zmd7For/gzxlAgX2tno8mYcf9vWVeHjNJNiywgXW1+9Oya4EVDL8lu6P5dkxv7A/nApzFKB0e6cMGVpexeH2IVjc2sNsbWpJ5A6gCT3TtvoV4U6M6hfjN53/Uldj9l7Vp2gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOC0wN1QxMzoxMDoxOS0wNDowMNYg/0AAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDgtMDdUMTM6MTA6MTktMDQ6MDCnfUf8AAAAAElFTkSuQmCC",tA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAgAAArVtbsWNjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6+dPgAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMjHxIGmVAAAArklEQVRYR+3OQRKDIAxA0VLvf2ZKxi8DIQGcunCRP11Uk7zxk/8sgACkAAKQAghACiAAKYAXA6n80peHaTNA4tlvBSy/wwNSBRZfsQOUeG1kA3JyXl4xGHOAnA4ua4x0JsBJHzPdPuAIFsCBjqnKANgfYqy6AdjECLBsxUbX8wC7Zqx0PQ6w6sRS2/uAucBO2wDcJQygxPYQ4zYbuIieYtTnAeWy/jnjUecCe+X8A8aH9sQv7TBGAAAAAElFTkSuQmCC";k.registerPlugin(J);const m={followMouse:!1,shadowX:450,shadowY:150},dA=800,sA=500,t=new k({width:dA,height:sA});document.body.appendChild(t.view);const c=t.shadows.container;t.shadows.filter.useShadowCasterAsOverlay=!1;function L(o,r,i){const h=new $;if(r){const d=new U(r);d.parentGroup=t.shadows.casterGroup,h.addChild(d)}if(i){const d=new U(i);d.parentGroup=t.shadows.overlayGroup,h.addChild(d)}const l=new U(o);return h.addChild(l),h}const s=new j(700,1);s.position.set(m.shadowX,m.shadowY);c.addChild(s);const nA=P.from(_),lA=new U(nA);c.addChild(lA);const N=P.from(eA),W=P.from(tA),v=P.from(aA);N.baseTexture.scaleMode=z.NEAREST;W.baseTexture.scaleMode=z.NEAREST;v.baseTexture.scaleMode=z.NEAREST;const y=L(v,v);y.position.set(100,100);y.scale.set(3);c.addChild(y);const O=L(N,W,N);O.position.set(500,100);O.scale.set(3);c.addChild(O);const V=L(v,v,v);V.position.set(300,200);V.scale.set(3);c.addChild(V);c.interactive=!0;c.on("mousemove",o=>{m.followMouse?s.position.copyFrom(o.data.global):(s.position.x=m.shadowX,s.position.y=m.shadowY)});const Y=[];c.on("pointerdown",o=>{const r=new j(700,.7);Y.push(r),r.position.copyFrom(o.data.global),c.addChild(r),E["placed shadows"]&&(r.ignoreShadowCaster=y.children[0])});const x=new oA;x.setMode(0);document.body.appendChild(x.domElement);x.domElement.style.position="absolute";x.domElement.style.top="0";t.ticker.add(()=>{x.begin(),x.end()});const D=new AA,F=D.addFolder("Demo options");F.open();F.add(m,"followMouse");F.add(m,"shadowX",0,800);F.add(m,"shadowY",0,600);const p=D.addFolder("Shadow properties");p.open();p.add(s,"range",50,1e3);p.add(s,"intensity",0,3);p.add(s,"pointCount",1,50,1);p.add(s,"scatterRange",0,50);p.add(s,"radialResolution",100,1500,1);p.add(s,"depthResolution",.1,3);p.add(s,"overlayLightLength",10,1e3);p.add(s,"darkenOverlay");const G=t.shadows.filter,B=D.addFolder("Filter properties");B.open();B.add(G,"width",100,1920,1);B.add(G,"height",100,1080,1);B.add(G,"ambientLight",0,1,.01);B.add(G,"useShadowCasterAsOverlay");const Z=D.addFolder("Ignore caster per shadow"),E={};E["main shadow"]=!1;E["placed shadows"]=!1;Z.add(E,"main shadow").onChange(o=>{o?s.ignoreShadowCaster=y.children[0]:s.ignoreShadowCaster=null});Z.add(E,"placed shadows").onChange(o=>{for(let r=0;r<Y.length;r++){const i=Y[r];o?i.ignoreShadowCaster=y.children[0]:i.ignoreShadowCaster=null}});const I=D.addFolder("Show layers (for debugging)"),X={textures:!1,casters:!1,overlays:!1};I.add(X,"textures").onChange(o=>{o?c.filters=[]:c.filters=[t.shadows.filter]});I.add(X,"casters").onChange(o=>{o?t.stage.addChild(t.shadows.filter._shadowCasterResultSprite):t.stage.removeChild(t.shadows.filter._shadowCasterResultSprite)});I.add(X,"overlays").onChange(o=>{o?t.stage.addChild(t.shadows.filter._shadowOverlayResultSprite):t.stage.removeChild(t.shadows.filter._shadowOverlayResultSprite)});