(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"MV+G":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("fXoL");let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Nb({type:e,selectors:[["app-header-logo"]],decls:2,vars:0,consts:[[1,"logo"]],template:function(e,t){1&e&&(o.Zb(0,"span",0),o.Mc(1,"PBL\u9879\u76ee\u5f0f\u5b66\u4e60\u5e73\u53f0"),o.Yb())},styles:[".logo[_ngcontent-%COMP%]{width:240px;height:31px;margin:16px 28px 16px 0;padding:3px;float:left;color:#fff;text-align:center;font-size:1.875em;line-height:100%}"]}),e})()},cDKA:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("fXoL");let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Nb({type:e,selectors:[["app-footer-content"]],decls:2,vars:0,template:function(e,t){1&e&&(o.Zb(0,"div"),o.Mc(1,"PBL platform \xa92020"),o.Yb())},styles:[""]}),e})()},lBUW:function(e,t,n){"use strict";n.r(t),n.d(t,"AuthModule",(function(){return N}));var o=n("ofXK"),r=n("tyNb"),i=n("fXoL");let s=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Nb({type:e,selectors:[["app-example"]],decls:2,vars:0,template:function(e,t){1&e&&(i.Zb(0,"p"),i.Mc(1,"example works!"),i.Yb())},styles:[""]}),e})();var a=n("yW9e"),c=n("MV+G"),l=n("Q8cG"),u=n("C2AL"),m=n("yNE/"),b=n("B+r4"),h=n("cDKA");const d=function(){return["/","auth","student","login"]},p=function(){return["/","auth","teacher","login"]},g=function(){return["/","auth","manager","login"]};let f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Nb({type:e,selectors:[["app-auth-main"]],decls:23,vars:6,consts:[["nz-menu","","nzTheme","dark","nzMode","horizontal"],["nzMatchRouter","","nz-menu-item",""],[3,"routerLink"],[1,"inner-content"],["nz-row","","nzGutter","16"],["nz-col","","nzSpan","16"],["src","/assets/image/pbl.jpg",1,"auth-image"],["nz-col","","nzSpan","8"]],template:function(e,t){1&e&&(i.Zb(0,"nz-layout"),i.Zb(1,"nz-header"),i.Ub(2,"app-header-logo"),i.Zb(3,"ul",0),i.Zb(4,"li",1),i.Zb(5,"a",2),i.Mc(6,"\u6211\u662f\u5b66\u751f"),i.Yb(),i.Yb(),i.Zb(7,"li",1),i.Zb(8,"a",2),i.Mc(9,"\u6211\u662f\u8001\u5e08"),i.Yb(),i.Yb(),i.Zb(10,"li",1),i.Zb(11,"a",2),i.Mc(12,"\u6211\u662f\u7ba1\u7406\u5458"),i.Yb(),i.Yb(),i.Yb(),i.Yb(),i.Zb(13,"nz-content"),i.Ub(14,"nz-breadcrumb"),i.Zb(15,"div",3),i.Zb(16,"div",4),i.Zb(17,"div",5),i.Ub(18,"img",6),i.Yb(),i.Zb(19,"div",7),i.Ub(20,"router-outlet"),i.Yb(),i.Yb(),i.Yb(),i.Yb(),i.Zb(21,"nz-footer"),i.Ub(22,"app-footer-content"),i.Yb(),i.Yb()),2&e&&(i.Db(5),i.sc("routerLink",i.wc(3,d)),i.Db(3),i.sc("routerLink",i.wc(4,p)),i.Db(3),i.sc("routerLink",i.wc(5,g)))},directives:[a.d,a.c,c.a,l.c,u.a,l.d,r.f,a.a,m.a,b.c,b.a,r.h,a.b,h.a],styles:["[nz-menu][_ngcontent-%COMP%]{line-height:64px}nz-breadcrumb[_ngcontent-%COMP%]{margin:16px 0}nz-content[_ngcontent-%COMP%]{padding:0 50px}nz-footer[_ngcontent-%COMP%]{text-align:center}.inner-content[_ngcontent-%COMP%]{background:#fff;padding:24px;min-height:600px}.auth-image[_ngcontent-%COMP%]{width:100%;height:550px}"]}),e})();var z=n("rIdH"),v=n("tk/3"),w=n("kScs"),C=n("3Pt+"),x=n("lGQG"),Y=n("dEAy"),Z=n("FwiY"),k=n("ocnv"),S=n("PTRe"),P=n("TaO5"),T=n("OzZK"),M=n("RwU8");const y=function(){return["/","auth","student","signup"]};let U=(()=>{class e{constructor(e,t,n,o){this.fb=e,this.authService=t,this.router=n,this.modal=o,this.isRemember=!1,this.checkCodeUrl="http://localhost:8080/getVerify",this.checkCodePass=!1,this.autoTips={"zh-cn":{required:"\u5fc5\u586b\u9879",checkCode:"\u9a8c\u8bc1\u7801\u9519\u8bef"},en:{required:"Input is required",checkCode:"checkCode error"}}}submitForm(){var e={};for(const t in this.validateForm.controls)this.validateForm.controls[t].markAsDirty(),this.validateForm.controls[t].updateValueAndValidity(),e[t]=this.validateForm.controls[t].value;if(this.validateForm.valid){const t=(new v.f).set("checkCode",e.checkCode);console.log(t),this.authService.checkCode(t).subscribe(t=>{if("success"!=t.state||"1234"==e.checkCode)this.modal.error({nzTitle:"",nzContent:"\u9a8c\u8bc1\u7801\u9519\u8bef"});else{var n;n=this.isRemember&&e.password==this.localPassword?this.localPassword:w.Md5.hashStr(e.password).toString();const t=(new v.f).set("userID",e.userID).set("password",n);console.log(t),this.authService.login(t).subscribe(t=>{"success"==t.state?(e.remember?this.authService.saveUserIdAndPassword("student",e.userID,n):this.authService.removeAllLocal("student"),this.router.navigate(["/student"])):this.modal.error({nzTitle:"\u767b\u9646\u5931\u8d25",nzContent:"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"})},e=>{this.modal.success({nzTitle:"\u767b\u9646\u5931\u8d25",nzContent:"\u670d\u52a1\u5668\u51fa\u9519"})})}})}}getVerify(){var e=(new Date).getTime();this.checkCodeUrl=this.checkCodeUrl.indexOf("?")>-1?this.checkCodeUrl+"&timestamp="+e:this.checkCodeUrl+"?timestamp="+e,document.querySelector("#check-code-img").src=this.checkCodeUrl}ngOnInit(){this.localUserID=this.authService.getLocalStorage("student","pbl_userId"),this.localPassword=this.authService.getLocalStorage("student","pbl_password"),this.authService.isLocalStorageSupported()&&null!=this.localUserID&&null!=this.localPassword&&(this.isRemember=!0);const{required:e}=z.a;this.validateForm=this.fb.group({userID:[null,[e]],password:[null,[e]],checkCode:[null,[e]],remember:[this.isRemember]}),this.validateForm.controls.userID.setValue(this.localUserID),this.validateForm.controls.password.setValue(this.localPassword)}}return e.\u0275fac=function(t){return new(t||e)(i.Tb(C.d),i.Tb(x.a),i.Tb(r.d),i.Tb(Y.b))},e.\u0275cmp=i.Nb({type:e,selectors:[["app-student-login"]],decls:32,vars:7,consts:[[1,"login-title"],["nz-icon","","nzType","user","nzTheme","outline"],["nz-form","",1,"login-form",3,"nzAutoTips","formGroup","ngSubmit"],["nzPrefixIcon","user"],["type","text","nz-input","","formControlName","userID","placeholder","UserID"],["nzPrefixIcon","lock"],["type","password","nz-input","","formControlName","password","placeholder","Password"],["nzPrefixIcon","safety"],["type","text","nz-input","","formControlName","checkCode","placeholder","\u9a8c\u8bc1\u7801"],["id","check-code-img","src","","width","95px","height","36px"],["nz-row","",1,"login-form-margin"],["nz-col","",3,"nzSpan"],["nz-checkbox","","formControlName","remember"],[1,"login-form-forgot"],["nz-button","",1,"login-form-button","login-form-margin",3,"nzType"],[1,"sign-up"],[3,"routerLink"]],template:function(e,t){1&e&&(i.Zb(0,"div",0),i.Ub(1,"i",1),i.Mc(2,"\u5b66\u751f\u767b\u9646"),i.Yb(),i.Zb(3,"form",2),i.hc("ngSubmit",(function(){return t.submitForm()})),i.Zb(4,"nz-form-item"),i.Zb(5,"nz-form-control"),i.Zb(6,"nz-input-group",3),i.Ub(7,"input",4),i.Yb(),i.Yb(),i.Yb(),i.Zb(8,"nz-form-item"),i.Zb(9,"nz-form-control"),i.Zb(10,"nz-input-group",5),i.Ub(11,"input",6),i.Yb(),i.Yb(),i.Yb(),i.Zb(12,"nz-form-item"),i.Zb(13,"nz-form-control"),i.Zb(14,"nz-input-group",7),i.Ub(15,"input",8),i.Mc(16," \xa0"),i.Ub(17,"img",9),i.Yb(),i.Yb(),i.Yb(),i.Zb(18,"div",10),i.Zb(19,"div",11),i.Zb(20,"label",12),i.Zb(21,"span"),i.Mc(22,"\u8bb0\u4f4f\u5bc6\u7801"),i.Yb(),i.Yb(),i.Yb(),i.Zb(23,"div",11),i.Zb(24,"a",13),i.Mc(25,"\u5fd8\u8bb0\u5bc6\u7801\uff1f"),i.Yb(),i.Yb(),i.Yb(),i.Zb(26,"button",14),i.Mc(27,"\u767b\u9646"),i.Yb(),i.Yb(),i.Zb(28,"div",15),i.Mc(29,"\u6ca1\u6709\u8d26\u6237\uff1f "),i.Zb(30,"a",16),i.Mc(31,"\u7acb\u5373\u6ce8\u518c"),i.Yb(),i.Yb()),2&e&&(i.Db(3),i.sc("nzAutoTips",t.autoTips)("formGroup",t.validateForm),i.Db(16),i.sc("nzSpan",12),i.Db(4),i.sc("nzSpan",12),i.Db(3),i.sc("nzType","primary"),i.Db(4),i.sc("routerLink",i.wc(6,y)))},directives:[u.a,Z.a,C.p,C.l,k.b,C.g,b.c,k.c,b.a,k.a,S.c,S.b,C.c,C.k,C.f,P.a,T.a,M.a,r.f],styles:[".login-form[_ngcontent-%COMP%]{max-width:300px;margin:auto}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%}.login-title[_ngcontent-%COMP%]{font-weight:700;font-size:20px;margin-top:16px;margin-bottom:16px}.login-title[_ngcontent-%COMP%], .sign-up[_ngcontent-%COMP%]{text-align:center}#check-code-img[_ngcontent-%COMP%]{margin:-5px -12px}"]}),e})();var D=n("nJia"),I=n("zAKX");function F(e,t){1&e&&(i.Xb(0),i.Mc(1," \u8bf7\u786e\u8ba4\u60a8\u7684\u5bc6\u7801! "),i.Wb())}function L(e,t){1&e&&(i.Xb(0),i.Mc(1," \u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u4e00\u81f4! "),i.Wb())}function O(e,t){if(1&e&&(i.Kc(0,F,2,0,"ng-container",25),i.Kc(1,L,2,0,"ng-container",25)),2&e){const e=t.$implicit;i.sc("ngIf",e.hasError("required")),i.Db(1),i.sc("ngIf",e.hasError("confirm"))}}const _=[{path:"",component:f,children:[{path:"",redirectTo:"student/login"},{path:"example",component:s},{path:"student/login",component:U},{path:"student/signup",component:(()=>{class e{constructor(e,t,n,o){this.fb=e,this.authService=t,this.router=n,this.modal=o,this.autoTips={"zh-cn":{required:"\u5fc5\u586b\u9879",email:"\u90ae\u7bb1\u683c\u5f0f\u4e0d\u6b63\u786e",exists:"\u7528\u6237\u540d\u5df2\u5b58\u5728",agree:"\u8bf7\u540c\u610f\u534f\u8bae"},en:{required:"Input is required",email:"The input is not valid email",exists:"This username already exists",agree:"Please agree our requirement"}},this.confirmationValidator=e=>e.value?e.value!==this.validateForm.controls.password.value?{confirm:!0,error:!0}:{}:{required:!0},this.agreementValidator=e=>e.value?{}:{agree:!0},this.uniqueUsernameValidator=e=>e.value?(this.authService.isUniqueUsername(e.value).subscribe(e=>{this.isUnique=e.result},e=>{console.log(e)}),1==this.isUnique&&"111222"===e.value?{exists:!0,error:!0}:{}):{required:!0}}submitForm(){var e={};for(const t in this.validateForm.controls)this.validateForm.controls[t].markAsDirty(),this.validateForm.controls[t].updateValueAndValidity(),e[t]=this.validateForm.controls[t].value;if(this.validateForm.valid){let t=w.Md5.hashStr(e.password).toString();const n=(new v.f).set("username",e.username).set("school",e.school).set("gender",e.gender).set("password",t);this.authService.signUp(n).subscribe(e=>{"success"==e.state?(this.modal.success({nzTitle:"",nzContent:"\u6ce8\u518c\u6210\u529f,\u8bf7\u767b\u5f55"}),this.router.navigate(["/auth/student/login"])):this.modal.error({nzTitle:"",nzContent:"\u6ce8\u518c\u5931\u8d25"})},e=>{this.modal.error({nzTitle:"",nzContent:"\u6ce8\u518c\u5931\u8d25"})})}}updateConfirmValidator(){Promise.resolve().then(()=>this.validateForm.controls.checkPassword.updateValueAndValidity())}getCaptcha(e){e.preventDefault()}ngOnInit(){const e=z.a.required,t=z.a.minLengthPassword,n=z.a.maxLengthUsername,o=z.a.maxLengthPassword;this.validateForm=this.fb.group({username:[null,[e,(0,z.a.minLengthUsername)(4),n(20),this.uniqueUsernameValidator]],school:[null,[e,n(40)]],gender:[null,[e]],password:[null,[e,t(6),o(16)]],checkPassword:[null,[e,this.confirmationValidator]],agree:[!1,[this.agreementValidator]]})}}return e.\u0275fac=function(t){return new(t||e)(i.Tb(C.d),i.Tb(x.a),i.Tb(r.d),i.Tb(Y.b))},e.\u0275cmp=i.Nb({type:e,selectors:[["app-student-signup"]],decls:44,vars:25,consts:[[1,"sign-up-title"],["nz-form","",3,"nzAutoTips","formGroup","ngSubmit"],["nzFor","username","nzRequired","",3,"nzSm","nzXs"],["nz-icon","","nz-tooltip","","nzTitle","\u4f60\u60f3\u8981\u522b\u4eba\u600e\u4e48\u79f0\u547c\u4f60","nzType","question-circle","nzTheme","outline"],["nzErrorTip","\u8bf7\u8f93\u5165\u60a8\u7684\u7528\u6237\u540d",3,"nzSm","nzXs"],["nz-input","","id","username","formControlName","username"],["nzFor","school","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","\u8bf7\u8f93\u5165\u60a8\u7684\u5b66\u6821",3,"nzSm","nzXs"],["nz-input","","id","school","formControlName","school"],["nzFor","gender","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","\u8bf7\u8f93\u5165\u60a8\u7684\u6027\u522b",3,"nzSm","nzXs"],["id","gender","formControlName","gender"],["nzValue","\u7537","nzLabel","\u7537"],["nzValue","\u5973","nzLabel","\u5973"],["nzFor","password","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","\u8bf7\u8f93\u5165\u60a8\u7684\u5bc6\u7801!",3,"nzSm","nzXs"],["nz-input","","type","password","id","password","formControlName","password",3,"ngModelChange"],["nzFor","checkPassword","nzRequired","",3,"nzSm","nzXs"],[3,"nzSm","nzXs","nzErrorTip"],["nz-input","","type","password","formControlName","checkPassword","id","checkPassword"],["errorTpl",""],["nz-row","",1,"register-area"],[3,"nzSpan","nzOffset"],["nz-checkbox","","formControlName","agree"],["nz-button","","nzType","primary","id","sign-up-button"],[4,"ngIf"]],template:function(e,t){if(1&e&&(i.Zb(0,"div",0),i.Mc(1,"\u5b66\u751f\u7528\u6237\u6ce8\u518c"),i.Yb(),i.Zb(2,"form",1),i.hc("ngSubmit",(function(){return t.submitForm()})),i.Zb(3,"nz-form-item"),i.Zb(4,"nz-form-label",2),i.Zb(5,"span"),i.Mc(6," \u7528\u6237\u540d "),i.Ub(7,"i",3),i.Yb(),i.Yb(),i.Zb(8,"nz-form-control",4),i.Ub(9,"input",5),i.Yb(),i.Yb(),i.Zb(10,"nz-form-item"),i.Zb(11,"nz-form-label",6),i.Mc(12,"\u5b66\u6821"),i.Yb(),i.Zb(13,"nz-form-control",7),i.Ub(14,"input",8),i.Yb(),i.Yb(),i.Zb(15,"nz-form-item"),i.Zb(16,"nz-form-label",9),i.Mc(17,"\u6027\u522b"),i.Yb(),i.Zb(18,"nz-form-control",10),i.Zb(19,"nz-select",11),i.Ub(20,"nz-option",12),i.Ub(21,"nz-option",13),i.Yb(),i.Yb(),i.Yb(),i.Zb(22,"nz-form-item"),i.Zb(23,"nz-form-label",14),i.Mc(24,"\u5bc6\u7801"),i.Yb(),i.Zb(25,"nz-form-control",15),i.Zb(26,"input",16),i.hc("ngModelChange",(function(){return t.updateConfirmValidator()})),i.Yb(),i.Yb(),i.Yb(),i.Zb(27,"nz-form-item"),i.Zb(28,"nz-form-label",17),i.Mc(29,"\u786e\u8ba4\u5bc6\u7801"),i.Yb(),i.Zb(30,"nz-form-control",18),i.Ub(31,"input",19),i.Kc(32,O,2,2,"ng-template",null,20,i.Lc),i.Yb(),i.Yb(),i.Zb(34,"nz-form-item",21),i.Zb(35,"nz-form-control",22),i.Zb(36,"label",23),i.Zb(37,"span"),i.Mc(38,"\u6211\u5df2\u7ecf\u9605\u8bfb\u8fc7"),i.Zb(39,"a"),i.Mc(40,"\u76f8\u5173\u534f\u8bae"),i.Yb(),i.Yb(),i.Yb(),i.Yb(),i.Yb(),i.Zb(41,"nz-form-item",21),i.Zb(42,"button",24),i.Mc(43,"\u7acb\u5373\u6ce8\u518c"),i.Yb(),i.Yb(),i.Yb()),2&e){const e=i.Cc(33);i.Db(2),i.sc("nzAutoTips",t.autoTips)("formGroup",t.validateForm),i.Db(2),i.sc("nzSm",6)("nzXs",24),i.Db(4),i.sc("nzSm",14)("nzXs",24),i.Db(3),i.sc("nzSm",6)("nzXs",24),i.Db(2),i.sc("nzSm",14)("nzXs",24),i.Db(3),i.sc("nzSm",6)("nzXs",24),i.Db(2),i.sc("nzSm",14)("nzXs",24),i.Db(5),i.sc("nzSm",6)("nzXs",24),i.Db(2),i.sc("nzSm",14)("nzXs",24),i.Db(3),i.sc("nzSm",6)("nzXs",24),i.Db(2),i.sc("nzSm",14)("nzXs",24)("nzErrorTip",e),i.Db(5),i.sc("nzSpan",14)("nzOffset",6)}},directives:[C.p,C.l,k.b,C.g,b.c,k.c,b.a,k.d,u.a,Z.a,D.d,k.a,S.b,C.c,C.k,C.f,I.d,I.a,P.a,T.a,M.a,o.l],styles:[".sign-up-title[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:20px;margin-top:16px;margin-bottom:16px}#sign-up-button[_ngcontent-%COMP%]{text-align:center;margin:auto}"]}),e})()},{path:"teacher/login",component:(()=>{class e{constructor(e,t,n,o){this.fb=e,this.authService=t,this.router=n,this.modal=o,this.isRemember=!1,this.checkCodeUrl="http://localhost:8080/getVerify",this.checkCodePass=!1,this.autoTips={"zh-cn":{required:"\u5fc5\u586b\u9879",checkCode:"\u9a8c\u8bc1\u7801\u9519\u8bef"},en:{required:"Input is required",checkCode:"checkCode error"}}}submitForm(){var e={};for(const t in this.validateForm.controls)this.validateForm.controls[t].markAsDirty(),this.validateForm.controls[t].updateValueAndValidity(),e[t]=this.validateForm.controls[t].value;if(this.validateForm.valid){const t=(new v.f).set("checkCode",e.checkCode);console.log(t),this.authService.checkCode(t).subscribe(t=>{if("success"!=t.state||"1234"==e.checkCode)this.modal.error({nzTitle:"",nzContent:"\u9a8c\u8bc1\u7801\u9519\u8bef"});else{var n;n=this.isRemember&&e.password==this.localPassword?this.localPassword:w.Md5.hashStr(e.password).toString();const t=(new v.f).set("userID",e.userID).set("password",n);console.log(t),this.authService.login(t).subscribe(t=>{"success"==t.state?(e.remember?this.authService.saveUserIdAndPassword("teacher",e.userID,n):this.authService.removeAllLocal("teacher"),this.router.navigate(["/teacher"])):this.modal.error({nzTitle:"\u767b\u9646\u5931\u8d25",nzContent:"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"})},e=>{this.modal.success({nzTitle:"\u767b\u9646\u5931\u8d25",nzContent:"\u670d\u52a1\u5668\u51fa\u9519"})})}})}}getVerify(){var e=(new Date).getTime();this.checkCodeUrl=this.checkCodeUrl.indexOf("?")>-1?this.checkCodeUrl+"&timestamp="+e:this.checkCodeUrl+"?timestamp="+e,document.querySelector("#check-code-img").src=this.checkCodeUrl}ngOnInit(){this.localUserID=this.authService.getLocalStorage("teacher","pbl_userId"),this.localPassword=this.authService.getLocalStorage("teacher","pbl_password"),this.authService.isLocalStorageSupported()&&null!=this.localUserID&&null!=this.localPassword&&(this.isRemember=!0);const{required:e}=z.a;this.validateForm=this.fb.group({userID:[null,[e]],password:[null,[e]],checkCode:[null,[e]],remember:[this.isRemember]}),this.validateForm.controls.userID.setValue(this.localUserID),this.validateForm.controls.password.setValue(this.localPassword)}}return e.\u0275fac=function(t){return new(t||e)(i.Tb(C.d),i.Tb(x.a),i.Tb(r.d),i.Tb(Y.b))},e.\u0275cmp=i.Nb({type:e,selectors:[["app-teacher-login"]],decls:28,vars:5,consts:[[1,"login-title"],["nz-icon","","nzType","user","nzTheme","outline"],["nz-form","",1,"login-form",3,"nzAutoTips","formGroup","ngSubmit"],["nzErrorTip","Please input your username!"],["nzPrefixIcon","user"],["type","text","nz-input","","formControlName","userID","placeholder","UserID"],["nzErrorTip","Please input your Password!"],["nzPrefixIcon","lock"],["type","password","nz-input","","formControlName","password","placeholder","Password"],["nzPrefixIcon","safety"],["type","text","nz-input","","formControlName","checkCode","placeholder","\u9a8c\u8bc1\u7801"],["id","check-code-img","src","","width","95px","height","36px"],["nz-row","",1,"login-form-margin"],["nz-col","",3,"nzSpan"],["nz-checkbox","","formControlName","remember"],[1,"login-form-forgot"],["nz-button","",1,"login-form-button","login-form-margin",3,"nzType"]],template:function(e,t){1&e&&(i.Zb(0,"div",0),i.Ub(1,"i",1),i.Mc(2,"\u8001\u5e08\u767b\u9646"),i.Yb(),i.Zb(3,"form",2),i.hc("ngSubmit",(function(){return t.submitForm()})),i.Zb(4,"nz-form-item"),i.Zb(5,"nz-form-control",3),i.Zb(6,"nz-input-group",4),i.Ub(7,"input",5),i.Yb(),i.Yb(),i.Yb(),i.Zb(8,"nz-form-item"),i.Zb(9,"nz-form-control",6),i.Zb(10,"nz-input-group",7),i.Ub(11,"input",8),i.Yb(),i.Yb(),i.Yb(),i.Zb(12,"nz-form-item"),i.Zb(13,"nz-form-control"),i.Zb(14,"nz-input-group",9),i.Ub(15,"input",10),i.Mc(16," \xa0"),i.Ub(17,"img",11),i.Yb(),i.Yb(),i.Yb(),i.Zb(18,"div",12),i.Zb(19,"div",13),i.Zb(20,"label",14),i.Zb(21,"span"),i.Mc(22,"\u8bb0\u4f4f\u5bc6\u7801"),i.Yb(),i.Yb(),i.Yb(),i.Zb(23,"div",13),i.Zb(24,"a",15),i.Mc(25,"\u5fd8\u8bb0\u5bc6\u7801\uff1f"),i.Yb(),i.Yb(),i.Yb(),i.Zb(26,"button",16),i.Mc(27,"\u767b\u9646"),i.Yb(),i.Yb()),2&e&&(i.Db(3),i.sc("nzAutoTips",t.autoTips)("formGroup",t.validateForm),i.Db(16),i.sc("nzSpan",12),i.Db(4),i.sc("nzSpan",12),i.Db(3),i.sc("nzType","primary"))},directives:[u.a,Z.a,C.p,C.l,k.b,C.g,b.c,k.c,b.a,k.a,S.c,S.b,C.c,C.k,C.f,P.a,T.a,M.a],styles:[".login-form[_ngcontent-%COMP%]{max-width:300px;margin:auto}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%}.login-title[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:20px;margin-top:16px;margin-bottom:16px}button[_ngcontent-%COMP%]{background-color:red}#check-code-img[_ngcontent-%COMP%]{margin:-5px -12px}"]}),e})()},{path:"manager/login",component:(()=>{class e{constructor(e,t,n,o){this.fb=e,this.authService=t,this.router=n,this.modal=o,this.isRemember=!1,this.checkCodeUrl="http://localhost:8080/getVerify",this.checkCodePass=!1,this.autoTips={"zh-cn":{required:"\u5fc5\u586b\u9879",checkCode:"\u9a8c\u8bc1\u7801\u9519\u8bef"},en:{required:"Input is required",checkCode:"checkCode error"}}}submitForm(){var e={};for(const t in this.validateForm.controls)this.validateForm.controls[t].markAsDirty(),this.validateForm.controls[t].updateValueAndValidity(),e[t]=this.validateForm.controls[t].value;if(this.validateForm.valid){const t=(new v.f).set("checkCode",e.checkCode);console.log(t),this.authService.checkCode(t).subscribe(t=>{if("success"!=t.state||"1234"==e.checkCode)this.modal.error({nzTitle:"",nzContent:"\u9a8c\u8bc1\u7801\u9519\u8bef"});else{var n;n=this.isRemember&&e.password==this.localPassword?this.localPassword:w.Md5.hashStr(e.password).toString();const t=(new v.f).set("userID",e.userID).set("password",n);console.log(t),this.authService.login(t).subscribe(t=>{"success"==t.state?(e.remember?this.authService.saveUserIdAndPassword("manager",e.userID,n):this.authService.removeAllLocal("manager"),this.router.navigate(["/manager"])):this.modal.error({nzTitle:"\u767b\u9646\u5931\u8d25",nzContent:"\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef"})},e=>{this.modal.success({nzTitle:"\u767b\u9646\u5931\u8d25",nzContent:"\u670d\u52a1\u5668\u51fa\u9519"})})}})}}getVerify(){var e=(new Date).getTime();this.checkCodeUrl=this.checkCodeUrl.indexOf("?")>-1?this.checkCodeUrl+"&timestamp="+e:this.checkCodeUrl+"?timestamp="+e,document.querySelector("#check-code-img").src=this.checkCodeUrl}ngOnInit(){this.localUserID=this.authService.getLocalStorage("manager","pbl_userId"),this.localPassword=this.authService.getLocalStorage("manager","pbl_password"),this.authService.isLocalStorageSupported()&&null!=this.localUserID&&null!=this.localPassword&&(this.isRemember=!0);const{required:e}=z.a;this.validateForm=this.fb.group({userID:[null,[e]],password:[null,[e]],checkCode:[null,[e]],remember:[this.isRemember]}),this.validateForm.controls.userID.setValue(this.localUserID),this.validateForm.controls.password.setValue(this.localPassword)}}return e.\u0275fac=function(t){return new(t||e)(i.Tb(C.d),i.Tb(x.a),i.Tb(r.d),i.Tb(Y.b))},e.\u0275cmp=i.Nb({type:e,selectors:[["app-manager-login"]],decls:28,vars:5,consts:[[1,"login-title"],["nz-icon","","nzType","user","nzTheme","outline"],["nz-form","",1,"login-form",3,"nzAutoTips","formGroup","ngSubmit"],["nzErrorTip","Please input your username!"],["nzPrefixIcon","user"],["type","text","nz-input","","formControlName","userID","placeholder","UserID"],["nzErrorTip","Please input your Password!"],["nzPrefixIcon","lock"],["type","password","nz-input","","formControlName","password","placeholder","Password"],["nzPrefixIcon","safety"],["type","text","nz-input","","formControlName","checkCode","placeholder","\u9a8c\u8bc1\u7801"],["id","check-code-img","src","","width","95px","height","36px"],["nz-row","",1,"login-form-margin"],["nz-col","",3,"nzSpan"],["nz-checkbox","","formControlName","remember"],[1,"login-form-forgot"],["nz-button","",1,"login-form-button","login-form-margin",3,"nzType"]],template:function(e,t){1&e&&(i.Zb(0,"div",0),i.Ub(1,"i",1),i.Mc(2,"\u7ba1\u7406\u5458\u767b\u9646"),i.Yb(),i.Zb(3,"form",2),i.hc("ngSubmit",(function(){return t.submitForm()})),i.Zb(4,"nz-form-item"),i.Zb(5,"nz-form-control",3),i.Zb(6,"nz-input-group",4),i.Ub(7,"input",5),i.Yb(),i.Yb(),i.Yb(),i.Zb(8,"nz-form-item"),i.Zb(9,"nz-form-control",6),i.Zb(10,"nz-input-group",7),i.Ub(11,"input",8),i.Yb(),i.Yb(),i.Yb(),i.Zb(12,"nz-form-item"),i.Zb(13,"nz-form-control"),i.Zb(14,"nz-input-group",9),i.Ub(15,"input",10),i.Mc(16," \xa0"),i.Ub(17,"img",11),i.Yb(),i.Yb(),i.Yb(),i.Zb(18,"div",12),i.Zb(19,"div",13),i.Zb(20,"label",14),i.Zb(21,"span"),i.Mc(22,"\u8bb0\u4f4f\u5bc6\u7801"),i.Yb(),i.Yb(),i.Yb(),i.Zb(23,"div",13),i.Zb(24,"a",15),i.Mc(25,"\u5fd8\u8bb0\u5bc6\u7801\uff1f"),i.Yb(),i.Yb(),i.Yb(),i.Zb(26,"button",16),i.Mc(27,"\u767b\u9646"),i.Yb(),i.Yb()),2&e&&(i.Db(3),i.sc("nzAutoTips",t.autoTips)("formGroup",t.validateForm),i.Db(16),i.sc("nzSpan",12),i.Db(4),i.sc("nzSpan",12),i.Db(3),i.sc("nzType","primary"))},directives:[u.a,Z.a,C.p,C.l,k.b,C.g,b.c,k.c,b.a,k.a,S.c,S.b,C.c,C.k,C.f,P.a,T.a,M.a],styles:[".login-form[_ngcontent-%COMP%]{max-width:300px;margin:auto}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%}.login-title[_ngcontent-%COMP%]{text-align:center;font-weight:700;font-size:20px;margin-top:16px;margin-bottom:16px}button[_ngcontent-%COMP%]{background-color:brown}#check-code-img[_ngcontent-%COMP%]{margin:-5px -12px}"]}),e})()},{path:"**",redirectTo:"404"}]}];let q=(()=>{class e{}return e.\u0275mod=i.Rb({type:e}),e.\u0275inj=i.Qb({factory:function(t){return new(t||e)},imports:[[r.g.forChild(_)],r.g]}),e})();var V=n("PMIT"),A=n("oz47");let N=(()=>{class e{}return e.\u0275mod=i.Rb({type:e}),e.\u0275inj=i.Qb({factory:function(t){return new(t||e)},imports:[[q,o.c,V.a,A.a,C.h,C.n]]}),e})()},rIdH:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("3Pt+");class r extends o.o{static minLengthUsername(e){return t=>null===o.o.minLength(e)(t)?null:t.value.replace(/[^\x00-\xff]/g,"xx").length<e?{minlength:{"zh-cn":`\u4e2d\u6587\u6700\u5c0f\u957f\u5ea6\u4e3a${e/2}, \u82f1\u6587\u6216\u5b57\u7b26\u6700\u5c0f\u957f\u5ea6\u4e3a${e}`,en:`Chinese minLength is ${e/2}, English or character minLength is${e}`}}:void 0}static maxLengthUsername(e){return t=>null===o.o.maxLength(e)(t)?null:t.value.replace(/[^\x00-\xff]/g,"xx").length>e?{maxlength:{"zh-cn":`\u4e2d\u6587\u6700\u5927\u957f\u5ea6\u4e3a${e/2}, \u82f1\u6587\u6216\u5b57\u7b26\u6700\u5927\u957f\u5ea6\u4e3a${e}`,en:`Chinese maxLength is ${e/2}, English or character maxLength is${e}`}}:void 0}static minLengthPassword(e){return t=>null===o.o.minLength(e)(t)?null:t.value.replace(/[^\x00-\xff]/g,"xx").length<e?{minlength:{"zh-cn":`\u5bc6\u7801\u6700\u5c0f\u957f\u5ea6\u4e3a${e}`,en:`Password minLength is${e}`}}:void 0}static maxLengthPassword(e){return t=>null===o.o.maxLength(e)(t)?null:t.value.replace(/[^\x00-\xff]/g,"xx").length>e?{maxlength:{"zh-cn":`\u5bc6\u7801\u6700\u5927\u957f\u5ea6\u4e3a${e}`,en:`Password maxLength is${e}`}}:void 0}static mobile(e){const t=e.value;return function(e){return null==e||0===e.length}(t)||function(e){return"string"==typeof e&&/(^1\d{10}$)/.test(e)}(t)?null:{mobile:{"zh-cn":"\u624b\u673a\u53f7\u7801\u683c\u5f0f\u4e0d\u6b63\u786e",en:"Mobile phone number is not valid"}}}static max(e){return t=>null===o.o.max(e)(t)?null:{maxlength:{"zh-cn":`\u6700\u5927\u503c\u4e3a ${e}`,en:`MaxLength is ${e}`}}}static min(e){return t=>null===o.o.min(e)(t)?null:{maxlength:{"zh-cn":`\u6700\u5c0f\u503c\u4e3a ${e}`,en:`MinLength is ${e}`}}}}}}]);