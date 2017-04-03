"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}!function(){for(var a=window.console=window.console||{},b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=void 0,e=c.length;e--;)d=c[e],a[d]||(a[d]=b)}(),function(){try{new CustomEvent("test")}catch(a){var b=function(a,b){var c=void 0;return b=b||{bubbles:!1,cancelable:!1,detail:void 0},c=document.createEvent("CustomEvent"),c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c};b.prototype=window.Event.prototype,window.CustomEvent=b}}();var DC=function(){function a(a,b){!t()}function b(){a("[DC] _addStudioEventListeners()"),Enabler.addEventListener(studio.events.StudioEvent.EXIT,i)}function c(){a("[DC] _setEnablerDynamicContent()"),"[object Object]"==={}.toString.call(B.devDynamicContent)&&Object.keys(B.devDynamicContent).length?(Enabler.setProfileId(1102682),Enabler.setDevDynamicContent(B.devDynamicContent)):a("[DC] options.devDynamicContent is not a valid object","warn")}function d(){var b=!1;a("[DC] _setEnablerExitEvents()"),b&&Enabler.exit("Exit","https://madeby.google.com/phone/")}function e(){var a=studio.common.Environment.hasType,b=studio.common.Environment.Type,c=["browser","in_app","live","local"];c.forEach(function(c){return A[c]=a(b[c.toUpperCase()])})}function f(){a("[DC] _onEnablerInitialized()"),Enabler.removeEventListener(studio.events.StudioEvent.INIT,f),B.devDynamicContent&&c(),d(),e(),b(),B.onEnablerInitialized&&"function"==typeof B.onEnablerInitialized&&(a("[DC] Calling "+B.onEnablerInitialized.name+"()"),B.onEnablerInitialized()),Enabler.isPageLoaded()?g():Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED,g)}function g(){a("[DC] _onPageLoaded()"),Enabler.removeEventListener(studio.events.StudioEvent.PAGE_LOADED,g),B.onPageLoaded&&"function"==typeof B.onPageLoaded&&(a("[DC] Calling "+B.onPageLoaded.name+"()"),B.onPageLoaded()),Enabler.isVisible()?h():Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,h)}function h(){a("[DC] _onAdVisible()"),Enabler.removeEventListener(studio.events.StudioEvent.VISIBLE,h),B.onAdVisible&&"function"==typeof B.onAdVisible&&(a("[DC] Calling "+B.onAdVisible.name+"()"),B.onAdVisible())}function i(){a("[DC] _onExit()"),j(),k(),B.onExit&&"function"==typeof B.onExit&&(a("[DC] Calling "+B.onExit.name+"()"),B.onExit.call(null))}function j(){Enabler.counter("Essence interactive impressions",!1)}function k(){Enabler.counter("Unique user engagement",!1)}function l(b,c,d){var e=[];switch("boolean"!=typeof c&&e.push("isCumulative"),"boolean"!=typeof d&&e.push("isUserEngagement"),e.length&&a("[DC] Counter "+b+" is missing the following parameters: "+e+".join('; ')","warn"),d===!0&&(j(),k()),b){default:a("[DC] Counter "+b+" doesn't exist","warn")}}function m(a,b){D=!0,b?Enabler.exitOverride(a,b):Enabler.exit(a)}function n(){return Enabler.getDartAdId()}function o(){return Enabler.getDartCreativeId()}function p(){return Enabler.getDartPageId()}function q(){return Enabler.getDartSiteId()}function r(a){return Enabler.getUrl(a)}function s(a){Enabler.invokeExternalJsFunction(a)}function t(){return Enabler.isServingInLiveEnvironment()}function u(a,b){Enabler.loadScript(a,b)}function v(a){Enabler.reportCustomVariableCount1(a)}function w(b){if(!D)switch(b){default:a("[DC] Unable to start timer. Timer "+b+" doesn't exist","warn")}}function x(b){switch(b){default:a("[DC] Unable to stop timer. Timer "+b+" doesn't exist","warn")}}function y(b){return a("[DC] v"+z),a("[DC] init()"),C?void a("[DC] Already initialized.","warn"):"[object Object]"!=={}.toString.call(b)?void a("[DC] Please pass in an object that contains the required options","error"):(B=b,C=!0,void(Enabler.isInitialized()?f():Enabler.addEventListener(studio.events.StudioEvent.INIT,f)))}var z="0.1.4",A={},B={},C=!1,D=!1;return{init:y,counter:l,environments:A,exit:m,getDartAdId:n,getDartCreativeId:o,getDartPageId:p,getDartSiteId:q,getUrl:r,invokeExternalJsFunction:s,isServingInLiveEnvironment:t,loadScript:u,reportCustomVariable:v,startTimer:w,stopTimer:x}}();!function(a,b){function c(){var a=s.length;a&&s.forEach(function(b){return d(b,e,a)})}function d(a,b,c){var d=new Image;d.addEventListener("error",function(){},!1),d.addEventListener("load",function(){b(c)},!1),d.src=a}function e(a){++u>=a&&(v=!0,b.dispatchEvent(r))}function f(){dynamicContent.Google_NGB_Global_Data_Feed_Accolades.forEach(function(a){a.Quote&&(t.push(a),s.push(a.Hero_Image.Url))}),s.push(dynamicContent.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Product_Lockup_Image.Url),s.push(dynamicContent.Google_NGB_Global_Data_Feed_Carriers[0].Carrier_Logo_Image.Url),j(dynamicContent.Google_NGB_Global_Data_Feed_Multi_Accolades[0],t,dynamicContent.Google_NGB_Global_Data_Feed_Carriers[0]),p.addEventListener("click",function(){DC.exit("Exit")},!1)}function g(){s.length?c():v=!0}function h(){v?k():b.addEventListener("allimagespreloaded",k,!1)}function i(){q.seek("end")}function j(a,c,d){var e=[],f=b.createDocumentFragment(),g=b.createElement("div"),h=b.createElement("div"),i=b.createElement("div"),j=b.createElement("div"),k=b.createElement("div"),l=b.createElement("div");g.id="lockup-container",h.id="lockup",i.id="container-left",j.id="cta-wrapper",k.id="cta",l.id="carrier-logo",g.appendChild(h),c.forEach(function(c,d){var e=d+1,g=b.createElement("div"),h=b.createElement("div"),j=b.createElement("div"),k=b.createElement("div");g.id="device-"+e,g.className="device",g.style.backgroundImage="url("+c.Hero_Image.Url+")",f.appendChild(g),h.id="quote-wrapper-"+e,h.className="quote-wrapper",c.Quote=c.Quote.replace(/\n/g,"<br>"),c.Quote=c.Quote.replace(/ +/g,"&nbsp;"),j.id="quote-"+e,j.className="quote",j.innerHTML=c.Quote,j.style.fontSize=a.Quote_Font_Size,k.id="publisher-"+e,k.className="publisher",k.innerHTML="—"+c.Publisher,k.style.fontSize=a.Publisher_Font_Size,h.appendChild(j),h.appendChild(k),i.appendChild(h)}),k.innerHTML=a.Exit_CTA.replace(/\n/g,"<br>"),k.style.fontSize=a.Exit_CTA_Font_Size,k.style.background=a.Exit_CTA_Background_Color,k.style.color=a.Exit_CTA_Font_Color,k.style.borderColor=a.Exit_CTA_Border_Color,""!==d.Carrier_Logo_Image.Url&&-1===d.Carrier_Logo_Image.Url.indexOf("transparent")?l.style.backgroundImage="url("+d.Carrier_Logo_Image.Url+")":l.style.display="none",g.appendChild(k),n.className+=(n.className?" ":"")+e.join(" "),f.appendChild(g),f.appendChild(i),f.appendChild(l),p.appendChild(f);new w(a.Product_Lockup_Image.Url,h)}function k(){var a=b.getElementById("loading"),c=new SplitText("#quote-1",{type:"words",wordsClass:"word",wordDelimiter:"|"}),d=(dynamicContent.Google_NGB_Global_Data_Feed_Carriers[0],b.getElementById("quote-1")),e=b.createElement("div");e.className="quotemark-left",d.insertBefore(e,d.firstChild),q.addLabel("device-1","+=0.25").from("#device-1",.75,{x:"+=10",autoAlpha:0,force3D:!0,rotation:.01,z:.01,ease:Sine.easeOut},"device-1").addLabel("quote-1").staggerFrom(c.words,.1,{opacity:0,ease:Power2.easeOut},.25).addLabel("publisher-1","+=0.25").to("#quote-1",1.25,{color:"#c5c5c5"},"publisher-1").from("#publisher-1",1.25,{autoAlpha:0},"publisher-1").addLabel("lockup").from("#lockup",1,{autoAlpha:0,ease:Sine.easeOut},"lockup").to("#logo-super-g",1,{backgroundPosition:"-8358px",ease:SteppedEase.config(42)},"lockup").addLabel("final","lockup").from("#carrier-logo",.75,{autoAlpha:0},"final").from("#cta",.75,{autoAlpha:0},"final");for(var f=1;f<t.length;f++){var g=f,h=g+1,i=new SplitText("#quote-"+h,{type:"words",wordsClass:"word",wordDelimiter:"|"}),j=b.getElementById("quote-"+h),k=b.createElement("div");k.className="quotemark-left",j.insertBefore(k,j.firstChild),q.addLabel("old-quote-"+g,"+=3").to(["#quote-"+g,"#publisher-"+g],.75,{autoAlpha:0},"old-quote-"+g).addLabel("new-quote-"+h,"+=0.25").from("#device-"+h,.5,{autoAlpha:0,force3D:!0,rotation:.01,z:.01,ease:Sine.easeOut},"new-quote-"+h).staggerFrom(i.words,.1,{opacity:0,ease:Power2.easeOut},.25,"new-quote-"+h+"+=0.35").addLabel("new-publisher-"+h,"+=0.25").to("#quote-"+h,1.25,{color:"#c5c5c5"},"new-publisher-"+h).from("#publisher-"+h,1.25,{autoAlpha:0},"new-publisher-"+h)}q.addLabel("end"),TweenMax.to(a,.5,{autoAlpha:0,onComplete:function(){a.parentNode.removeChild(a),q.play()}})}function l(){var a=[],c={};b.addEventListener("DOMContentLoaded",function(){FastClick.attach(o)},!1),m&&a.push("touch"),n.className+=(n.className?" ":"")+a.join(" "),c.Google_NGB_Global_Data_Feed_Multi_Accolades=[{}],c.Google_NGB_Global_Data_Feed_Multi_Accolades[0]._id=0,c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Unique_ID=0,c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Language="EN",c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Expand_CTA="",c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Expand_CTA_Font_Size="",c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Collapsed_Lockup_Image={},c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Collapsed_Lockup_Image.Type="file",c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Collapsed_Lockup_Image.Url="https://s0.2mdn.net/ads/richmedia/studio/45308443/transparent.png",c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Collapsed_Background_Image={},c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Collapsed_Background_Image.Type="file",c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Collapsed_Background_Image.Url="https://s0.2mdn.net/ads/richmedia/studio/45308443/transparent.png",c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Product_Lockup_Image={},c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Product_Lockup_Image.Type="file",c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Product_Lockup_Image.Url="https://s0.2mdn.net/ads/richmedia/studio/45308443/PixelPhone_LockUp_EN_RGB_v1.svg",c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Hero_Slide_Direction="from-left",c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Publisher_Font_Size="11px",c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Quote_Font_Size="18px",c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Exit_CTA="Buy Now",c.Google_NGB_Global_Data_Feed_Multi_Accolades[0].Exit_CTA_Font_Size="12px",c.Google_NGB_Global_Data_Feed_Accolades=[{},{},{}],c.Google_NGB_Global_Data_Feed_Accolades[0]._id=0,c.Google_NGB_Global_Data_Feed_Accolades[0].Unique_ID=1,c.Google_NGB_Global_Data_Feed_Accolades[0].Hero_Image={},c.Google_NGB_Global_Data_Feed_Accolades[0].Hero_Image.Type="file",c.Google_NGB_Global_Data_Feed_Accolades[0].Hero_Image.Url="https://s0.2mdn.net/ads/richmedia/studio/46834740/hero-accolades-300x600-holiday-LTQ-silver-us.jpg",c.Google_NGB_Global_Data_Feed_Accolades[0].Publisher="Wired",c.Google_NGB_Global_Data_Feed_Accolades[0].Feature="Overall",c.Google_NGB_Global_Data_Feed_Accolades[0].Quote="Pixel| is\nthe| best\nphone| on\nthe| planet,\nperiod",c.Google_NGB_Global_Data_Feed_Accolades[1].Unique_ID=1,c.Google_NGB_Global_Data_Feed_Accolades[1].Hero_Image={},c.Google_NGB_Global_Data_Feed_Accolades[1].Hero_Image.Type="file",c.Google_NGB_Global_Data_Feed_Accolades[1].Hero_Image.Url="https://s0.2mdn.net/ads/richmedia/studio/46834740/hero-accolades-300x600-camera-LTQ-silver-us-ny.jpg",c.Google_NGB_Global_Data_Feed_Accolades[1].Publisher="DxOMark",c.Google_NGB_Global_Data_Feed_Accolades[1].Feature="Camera",c.Google_NGB_Global_Data_Feed_Accolades[1].Quote="The\nhighest|-rated\nsmartphone\ncamera",c.Google_NGB_Global_Data_Feed_Accolades[2].Unique_ID=2,c.Google_NGB_Global_Data_Feed_Accolades[2].Hero_Image={},c.Google_NGB_Global_Data_Feed_Accolades[2].Hero_Image.Type="file",c.Google_NGB_Global_Data_Feed_Accolades[2].Hero_Image.Url="https://s0.2mdn.net/ads/richmedia/studio/46834740/hero-accolades-300x600-holiday-LTQ-silver-us.jpg",c.Google_NGB_Global_Data_Feed_Accolades[2].Publisher="Refinery29",c.Google_NGB_Global_Data_Feed_Accolades[2].Feature="Battery",c.Google_NGB_Global_Data_Feed_Accolades[2].Quote="Pixel| is\na| game-\nchanger",c.Google_NGB_Global_Data_Feed_Carriers=[{}],c.Google_NGB_Global_Data_Feed_Carriers[0]._id=0,c.Google_NGB_Global_Data_Feed_Carriers[0].Unique_ID=1,c.Google_NGB_Global_Data_Feed_Carriers[0].Carrier_Logo_Image={},c.Google_NGB_Global_Data_Feed_Carriers[0].Carrier_Logo_Image.Type="file",c.Google_NGB_Global_Data_Feed_Carriers[0].Carrier_Logo_Image.Url="https://s0.2mdn.net/ads/richmedia/studio/45307174/us-verizon.svg";var d={devDynamicContent:c,onEnablerInitialized:f,onPageLoaded:g,onAdVisible:h,onExit:i};DC.init(d)}var m="ontouchstart"in a,n=b.documentElement,o=b.body,p=b.getElementById("ad-container"),q=new TimelineMax({paused:!0}),r=new CustomEvent("allimagespreloaded"),s=[],t=[],u=0,v=!1,w=function x(a,c,d){var e=this;_classCallCheck(this,x);var f=new Image,g=b.createElement("div"),h=void 0;return f.src=a,this.element=c,this.logo=g,this.logo.className="logo-super-g",this.logo.setAttribute("id","logo-super-g"),this.element.appendChild(g),h=g.getBoundingClientRect().height,this.imageElement=f,this.imageElement.addEventListener("load",function(){e.setDimensions(d)}),this.setDimensions=function(a){var b=void 0,c=void 0,d=void 0,f=void 0;e.dimensions={height:e.imageElement.height>0?e.imageElement.height:76,width:e.imageElement.width>0?e.imageElement.width:300},e.element.appendChild(e.imageElement),e.imageElement.className="lockup-text",e.imageElement.setAttribute("id","lockup-text"),d=e.getActualImageHeight(),c=.94202898550725/h*d,TweenMax.set(e.logo,{scale:c,left:"50%",xPercent:-50,transformOrigin:"50% 0"}),b=e.logo.getBoundingClientRect().height,f=b+.38192668371697*d,TweenMax.set(e.imageElement,{marginTop:f}),a&&"function"==typeof a&&a()},this.getActualImageHeight=function(){var a=getComputedStyle(e.imageElement),b=parseFloat(a.width.replace("px","")),c=parseFloat(a.height.replace("px","")),d=e.dimensions.width>e.dimensions.height?e.dimensions.width/e.dimensions.height:e.dimensions.height/e.dimensions.width;return b/d>c?c:b/d},this};l()}(window,document);