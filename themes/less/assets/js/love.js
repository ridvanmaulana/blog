// loadJS module
!function(e){e.loadJS=function(n,t,o){'use strict';var a,c=e.document.head||e.document.getElementsByTagName('head')[0],d=e.document.createElement('script');return'boolean'==typeof t&&(a=o,o=t,t=a),d.async=!o,d.src=n,c.appendChild(d),t&&'function'==typeof t&&(d.onload=t),d}}('undefined'!=typeof global?global:this);

/**
 * Remove value(s) from an array
 *
 * @return {array} Modified array
 */
if (typeof Array.prototype.remove == 'undefined' || typeof Array.prototype.remove == null) {
  Array.prototype.remove = function() {
    var what,
      a = arguments,
      L = a.length,
      ax;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };
}
var _0x49d3=['click','href','data-love-id','querySelectorAll','love-post-icon--loved','database','.love-post-icon','document','AIzaSyDYojcuHN8C6D1LvCdXx2dw9QT6iu-mPuY','loved-post','length','val','setItem','getAttribute','remove','https://www.gstatic.com/firebasejs/6.2.0/firebase-database.js','indexOf','.love-post-btn','https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js','halimboi-backend','parse','location','stringify','love/','getItem','toggle','/count','ref','classList','push','title','addEventListener','querySelector','localStorage'];(function(_0x1dfeb9,_0x49d3c8){var _0x2aa29a=function(_0x127438){while(--_0x127438){_0x1dfeb9['push'](_0x1dfeb9['shift']());}};_0x2aa29a(++_0x49d3c8);}(_0x49d3,0xe2));var _0x2aa2=function(_0x1dfeb9,_0x49d3c8){_0x1dfeb9=_0x1dfeb9-0x0;var _0x2aa29a=_0x49d3[_0x1dfeb9];return _0x2aa29a;};!function(_0x20ea62,_0x7fb84c){'use strict';var _0x2bc1db=_0x20ea62[_0x2aa2('0x13')][_0x2aa2('0x21')][_0x2aa2('0xd')],_0x1863ca=_0x20ea62['document'][_0x2aa2('0x8')];loadJS(_0x2aa2('0x1e'),function(){firebase['initializeApp']({'apiKey':_0x2aa2('0x14'),'databaseURL':'https://halimboi-backend.firebaseio.com','projectId':_0x2aa2('0x1f')}),loadJS(_0x2aa2('0x1b'),function(){var _0x46d624,_0x19cc0d,_0x2868f8=firebase[_0x2aa2('0x11')](),_0x2d2f88=_0x7fb84c[_0x2aa2('0xf')]('.love-post');if(_0x2d2f88)for(_0x19cc0d=_0x2d2f88[_0x46d624=0x0];_0x46d624<_0x2d2f88[_0x2aa2('0x16')];_0x46d624++){var _0xd61c6c=_0x19cc0d[_0x2aa2('0x19')](_0x2aa2('0xe')),_0x212f70=_0x2aa2('0x15'),_0x2eef1e=_0x2aa2('0x10'),_0x2970dd=JSON[_0x2aa2('0x20')](_0x20ea62[_0x2aa2('0xb')][_0x2aa2('0x2')](_0x212f70))||[],_0x410a02=0x0,_0x4a8cd2=_0x19cc0d[_0x2aa2('0xa')](_0x2aa2('0x12'));_0x2868f8[_0x2aa2('0x5')](_0x2aa2('0x1')+_0xd61c6c+_0x2aa2('0x4'))['on']('value',function(_0x490fa3){-0x1!==_0x2970dd[_0x2aa2('0x1c')](_0xd61c6c)&&_0x4a8cd2[_0x2aa2('0x6')]['add'](_0x2eef1e),_0x410a02=_0x490fa3[_0x2aa2('0x17')]()||0x0,_0x19cc0d[_0x2aa2('0xa')]('.love-post-count')['innerText']=_0x410a02;}),_0x19cc0d['querySelector'](_0x2aa2('0x1d'))[_0x2aa2('0x9')](_0x2aa2('0xc'),function(){_0x4a8cd2[_0x2aa2('0x6')][_0x2aa2('0x3')](_0x2eef1e),_0x4a8cd2[_0x2aa2('0x6')]['contains'](_0x2eef1e)?(_0x2970dd[_0x2aa2('0x7')](_0xd61c6c),_0x20ea62[_0x2aa2('0xb')][_0x2aa2('0x18')](_0x212f70,JSON['stringify'](_0x2970dd)),_0x410a02++):(_0x2970dd[_0x2aa2('0x1a')](_0xd61c6c),_0x20ea62[_0x2aa2('0xb')]['setItem'](_0x212f70,JSON[_0x2aa2('0x0')](_0x2970dd)),_0x410a02--),_0x2868f8[_0x2aa2('0x5')](_0x2aa2('0x1')+_0xd61c6c)['set']({'url':_0x2bc1db||'','title':_0x1863ca||'','count':_0x410a02});});}});});}(window,window[_0x2aa2('0x13')]);
