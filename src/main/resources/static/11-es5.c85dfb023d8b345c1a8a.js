function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{TtBp:function(t,e,n){"use strict";n.r(e),n.d(e,"WelcomeModule",(function(){return C}));var i,c,r,a=n("ofXK"),o=n("tyNb"),s=n("fXoL"),u=n("OzZK"),l=n("C2AL"),f=function(){return["/","auth"]},h=function(){return["/","manager"]},b=function(){return["/","student"]},p=function(){return["/","teacher"]},v=function(){return["/","project","student","info"]},k=function(){return["/","project","teacher","info"]},d=[{path:"",component:(i=function(){function t(){_classCallCheck(this,t),this.val1=0,this.val2=0,this.val3=0,this.total=100,this.formatterPercent=function(t){return"".concat(t," %")},this.parserPercent=function(t){return t.replace(" %","")}}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"increase1",value:function(){this.total>0&&(this.val1+=10,this.total-=10)}},{key:"decrease1",value:function(){this.val1>0&&(this.val1-=10,this.total+=10)}},{key:"increase2",value:function(){this.total>0&&(this.val2+=10,this.total-=10)}},{key:"decrease2",value:function(){this.val2>0&&(this.val2-=10,this.total+=10)}},{key:"increase3",value:function(){this.total>0&&(this.val3+=10,this.total-=10)}},{key:"decrease3",value:function(){this.val3>0&&(this.val3-=10,this.total+=10)}}]),t}(),i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=s.Nb({type:i,selectors:[["app-welcome"]],decls:13,vars:12,consts:[[2,"width","50%","align-content","center","margin","50px"],["nz-button","","nzType","link","nzBlock","",3,"routerLink"]],template:function(t,e){1&t&&(s.Zb(0,"div",0),s.Zb(1,"a",1),s.Mc(2,"\u767b\u9646\u9875\u9762"),s.Yb(),s.Zb(3,"a",1),s.Mc(4,"\u7ba1\u7406\u5458\u9875\u9762"),s.Yb(),s.Zb(5,"a",1),s.Mc(6,"\u5b66\u751f\u9875\u9762"),s.Yb(),s.Zb(7,"a",1),s.Mc(8,"\u6559\u5e08\u9875\u9762"),s.Yb(),s.Zb(9,"a",1),s.Mc(10,"\u5b66\u751f\u9879\u76ee\u9875\u9762"),s.Yb(),s.Zb(11,"a",1),s.Mc(12,"\u6559\u5e08\u9879\u76ee\u9875\u9762"),s.Yb(),s.Yb()),2&t&&(s.Db(1),s.sc("routerLink",s.wc(6,f)),s.Db(2),s.sc("routerLink",s.wc(7,h)),s.Db(2),s.sc("routerLink",s.wc(8,b)),s.Db(2),s.sc("routerLink",s.wc(9,p)),s.Db(2),s.sc("routerLink",s.wc(10,v)),s.Db(2),s.sc("routerLink",s.wc(11,k)))},directives:[u.a,o.f,l.a],styles:[""]}),i)}],w=((c=function t(){_classCallCheck(this,t)}).\u0275mod=s.Rb({type:c}),c.\u0275inj=s.Qb({factory:function(t){return new(t||c)},imports:[[o.g.forChild(d)],o.g]}),c),y=n("PMIT"),m=n("3Pt+"),C=((r=function t(){_classCallCheck(this,t)}).\u0275mod=s.Rb({type:r}),r.\u0275inj=s.Qb({factory:function(t){return new(t||r)},imports:[[a.c,w,y.a,m.h,m.n]]}),r)}}]);