"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4227],{4227:(A,d,i)=>{i.r(d),i.d(d,{LoginPageModule:()=>v});var h=i(9808),c=i(4182),t=i(5649),u=i(7201),p=i(655),e=i(2096),s=i(5698);let f=(()=>{class n{constructor(o){this.auth=o}login(o,r){return(0,s.e5)(this.auth,o,r).then(()=>!0,l=>(console.error(l),!1))}getCurrentUser(){return(0,s.v0)().currentUser}logout(){(0,s.w7)(this.auth)}}return n.\u0275fac=function(o){return new(o||n)(e.LFG(s.gx))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const m=[{path:"",component:(()=>{class n{constructor(o,r,l){this.authService=o,this.router=r,this.alertController=l,this.title="Inicio de sesi\xf3n"}ngOnInit(){}login(){return(0,p.mG)(this,void 0,void 0,function*(){(yield this.authService.login(this.email,this.password))?this.router.navigateByUrl("/home"):this.presentAlert()})}presentAlert(){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Conexi\xf3n fallida",subHeader:"No se ha podido acceder a la cuenta.",message:"El correo electr\xf3nico y la contrase\xf1a proporcionados no son v\xe1lidos.",buttons:["Aceptar"]})).present()})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(f),e.Y36(u.F0),e.Y36(t.Br))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:30,vars:3,consts:[["slot","start"],["defaultHref","welcome"],[1,"ion-padding","ion-text-center"],["name","person-circle-outline",1,"person"],["clearInput","",1,"text",3,"ngModel","ngModelChange"],[1,"ion-text-center"],["clearInput","","type","password",1,"text",3,"ngModel","ngModelChange"],["expand","block","color","success","shape","round",1,"text","capitalize",3,"click"],["href","/register",1,"text"],["name","person-add"],["href","/reset-password",1,"text"],["name","mail"]],template:function(o,r){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button",1),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5),e.qZA()()(),e.TgZ(6,"ion-content",2)(7,"ion-grid")(8,"ion-row")(9,"ion-col"),e._UZ(10,"ion-icon",3),e.qZA()(),e.TgZ(11,"ion-row")(12,"ion-col")(13,"ion-label"),e._uU(14,"Correo electr\xf3nico"),e.qZA(),e.TgZ(15,"ion-input",4),e.NdJ("ngModelChange",function(g){return r.email=g}),e.qZA()()(),e.TgZ(16,"ion-row")(17,"ion-col",5)(18,"ion-label"),e._uU(19,"Contrase\xf1a"),e.qZA(),e.TgZ(20,"ion-input",6),e.NdJ("ngModelChange",function(g){return r.password=g}),e.qZA()()()(),e.TgZ(21,"ion-button",7),e.NdJ("click",function(){return r.login()}),e._uU(22," Aceptar "),e.qZA(),e.TgZ(23,"a",8),e._UZ(24,"ion-icon",9),e._uU(25," Crear una cuenta "),e.qZA(),e._UZ(26,"br"),e.TgZ(27,"a",10),e._UZ(28,"ion-icon",11),e._uU(29," Recuperar contrase\xf1a "),e.qZA()()),2&o&&(e.xp6(5),e.Oqu(r.title),e.xp6(10),e.Q6J("ngModel",r.email),e.xp6(5),e.Q6J("ngModel",r.password))},directives:[t.Gu,t.sr,t.Sm,t.oU,t.cs,t.wd,t.W2,t.jY,t.Nd,t.wI,t.gu,t.Q$,t.pK,t.j9,c.JJ,c.On,t.YG],styles:[""]}),n})()}];let Z=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.Bz.forChild(m)],u.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.ez,c.u5,t.Pc,Z]]}),n})()}}]);