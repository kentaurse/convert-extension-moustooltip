(()=>{function e(e){return new Promise(((t,a)=>{var n=new Image;n.onload=()=>{var e=document.createElement("canvas");e.width=n.naturalWidth,e.height=n.naturalHeight,e.getContext("2d").drawImage(n,0,0),t(e)},n.onerror=a,n.src=e}))}function t(e){window.parent.postMessage(e,"*")}function a(e,t){var a=document.createElement("canvas"),n=1;let r=cv.imread(e),o=new cv.Mat;return cv.cvtColor(r,r,cv.COLOR_RGBA2GRAY,0),t&&(n=function(e,t,a){var n,r,o=e.cols,c=e.rows;r=t/o,n=[t,parseInt(c*r)];let s=new cv.Size(...n);return cv.resize(e,e,s,0,0,cv.INTER_AREA),r}(r,700)),cv.imshow(a,r),r.delete(),o.delete(),[a,n]}window.addEventListener("message",(({data:n})=>{"segmentBox"===n.type?async function(n,r=!0){var o="segmentSuccess",c=[],s=n.base64Url,v=1;try{var i=await e(n.base64Url),[i,v]=a(i,r);s=i.toDataURL(),c=function(e){document.createElement("canvas");let t=cv.imread(e),a=new cv.Mat;var n=[],r=t.cols,o=t.rows;let c=new cv.MatVector,s=new cv.Mat,v=new cv.Size(10,10);var i=cv.getStructuringElement(cv.MORPH_RECT,v);cv.cvtColor(t,a,cv.COLOR_RGBA2GRAY,0),cv.Sobel(a,a,cv.CV_8U,1,0,3,1,0,cv.BORDER_DEFAULT),cv.threshold(a,a,0,255,cv.THRESH_OTSU|cv.THRESH_BINARY),cv.morphologyEx(a,a,cv.MORPH_CLOSE,i),cv.findContours(a,c,s,cv.RETR_EXTERNAL,cv.CHAIN_APPROX_NONE);for(let e=0;e<c.size();++e){let t=c.get(e),a=cv.contourArea(t),s=Math.abs(cv.minAreaRect(t).angle),v=[0,90,180,270].some((e=>Math.abs(e-s)<=30)),i=cv.boundingRect(t);var l=parseInt(Math.max(i.x-10,0)),w=parseInt(Math.max(i.y-10,0)),m=parseInt(Math.min(i.width+20,r-l)),d=parseInt(Math.min(i.height+20,o-w));if(Math.max(m/d,d/m),!(t.rows<100||a<500||a>o/10*(r/10))&&v&&0!=l&&0!=w&&l+m!=r&&w+d!=o){var g={left:l,top:w,width:m,height:d};n.push(g)}}return n=function(e){return e.sort(((e,t)=>{if(e.top<t.top)return-1}))}(n)}(i)}catch(e){console.log(e),o="segmentFail"}t({type:o,mainUrl:n.mainUrl,base64Url:s,lang:n.lang,bboxList:c,ratio:v,windowPostMessageProxy:n.windowPostMessageProxy})}(n):"resizeImage"===n.type&&async function(n){var r=await e(n.base64Url),[o,c]=a(r);base64=o.toDataURL(),t({base64Url:base64,cvratio:c,windowPostMessageProxy:n.windowPostMessageProxy})}(n)}),!1)})();