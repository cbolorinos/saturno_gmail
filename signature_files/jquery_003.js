/* Lazy Load XT 1.0.6 | MIT License */
!function(t,r,e,n){function s(r,e){return Math[e].apply(null,t.map(r,function(t){return t[o]}))}function a(t){return t[o]>=g[o]||t[o]===d}function c(t){return t[o]===d}function i(n){var i=n.attr(u.srcsetAttr);if(!i)return!1;var l=t.map(i.split(","),function(t){return{url:x.exec(t)[1],w:parseFloat((f.exec(t)||p)[1]),h:parseFloat((w.exec(t)||p)[1]),x:parseFloat((h.exec(t)||m)[1])}});if(!l.length)return!1;var A,v,E=e.documentElement;g={w:r.innerWidth||E.clientWidth,h:r.innerHeight||E.clientHeight,x:r.devicePixelRatio||1};for(A in g)o=A,d=s(l,"max"),l=t.grep(l,a);for(A in g)o=A,d=s(l,"min"),l=t.grep(l,c);return v=l[0].url,u.srcsetExtended&&(v=(n.attr(u.srcsetBaseAttr)||"")+v+(n.attr(u.srcsetExtAttr)||"")),v}var o,d,u=t.lazyLoadXT,l=function(){return"srcset"in new Image}(),x=/^\s*(\S*)/,f=/\S\s+(\d+)w/,w=/\S\s+(\d+)h/,h=/\S\s+([\d\.]+)x/,p=[0,1/0],m=[0,1],A={srcsetAttr:"data-srcset",srcsetExtended:!1,srcsetBaseAttr:"data-srcset-base",srcsetExtAttr:"data-srcset-ext"},g={w:0,h:0,x:0};for(o in A)u[o]===n&&(u[o]=A[o]);u.selector+=",img["+u.srcsetAttr+"]",t(e).on("lazyshow","img",function(t,r){var e=r.attr(u.srcsetAttr);e&&(!u.srcsetExtended&&l?(r.attr("srcset",e),r.attr("data-srcset","")):r.lazyLoadXT.srcAttr=i)})}(window.jQuery||window.Zepto||window.$,window,document);