"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4076],{4076:(A,s,a)=>{a.r(s),a.d(s,{HomePageModule:()=>h});var l=a(9808),e=a(5649),p=a(4182),c=a(7201),n=a(2096),m=a(5712);let g=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-menu"]],decls:12,vars:0,consts:[["side","start","menuId","first","contentId","main"],["color","primary"],["routerLink","/appnt-list"],["routerLink","/login"],["id","main"]],template:function(o,r){1&o&&(n.TgZ(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar",1)(3,"ion-title"),n._uU(4,"Men\xfa"),n.qZA()()(),n.TgZ(5,"ion-content")(6,"ion-list")(7,"ion-item",2),n._uU(8,"Citas"),n.qZA(),n.TgZ(9,"ion-item",3),n._uU(10,"Cerrar sesi\xf3n"),n.qZA()()()(),n._UZ(11,"ion-router-outlet",4))},directives:[e.z0,e.Gu,e.sr,e.wd,e.W2,e.q_,e.Ie,e.YI,c.rH,e.jP],styles:[""]}),t})();function d(t,i){if(1&t&&(n.TgZ(0,"ion-list")(1,"ion-item")(2,"ion-label",15),n._uU(3),n.qZA(),n.TgZ(4,"ion-label",15),n._uU(5),n.qZA()()()),2&t){const o=i.$implicit;n.xp6(3),n.Oqu(o.date),n.xp6(2),n.Oqu(o.hour)}}const f=[{path:"",component:(()=>{class t{constructor(o,r,u,P){this.appntService=o,this.alertController=r,this.menu=u,this.router=P,this.title="Cl\xednica Nilo",this.appointments=this.appntService.getAppointments()}addAppnt(){this.appntService.addAppointment({date:"14/03/2023",hour:"18:00"})}openMenu(){this.menu.enable(!0,"first"),this.menu.open("first")}logout(){}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(m.D),n.Y36(e.Br),n.Y36(e._q),n.Y36(c.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-home"]],decls:30,vars:6,consts:[[3,"translucent"],["id","toolbar"],[3,"click"],["name","menu"],["routerLink","/welcome",3,"click"],["name","log-out-outline"],[3,"fullscreen"],["id","container"],[1,"top"],["lines","none"],["slot","start"],["src","https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"],["id","nextAppnt"],[4,"ngFor","ngForOf"],["shape","round",3,"click"],[1,"item"]],template:function(o,r){1&o&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-button",2),n.NdJ("click",function(){return r.openMenu()}),n._UZ(3,"ion-icon",3),n.qZA(),n.TgZ(4,"span")(5,"ion-title"),n._uU(6),n.qZA()(),n.TgZ(7,"ion-button",4),n.NdJ("click",function(){return r.logout()}),n._UZ(8,"ion-icon",5),n.qZA()()(),n._UZ(9,"app-menu"),n.TgZ(10,"ion-content",6)(11,"div",7)(12,"div",8)(13,"ion-item",9)(14,"ion-avatar",10),n._UZ(15,"img",11),n.qZA(),n.TgZ(16,"ion-label")(17,"h3"),n._uU(18,"Mi nombre"),n.qZA(),n.TgZ(19,"p"),n._uU(20,"@miusuario"),n.qZA()()()(),n.TgZ(21,"ion-card",12)(22,"ion-header")(23,"ion-toolbar")(24,"ion-title"),n._uU(25,"Pr\xf3ximas citas"),n.qZA()()(),n.YNc(26,d,6,2,"ion-list",13),n.ALo(27,"async"),n.qZA(),n.TgZ(28,"ion-button",14),n.NdJ("click",function(){return r.addAppnt()}),n._uU(29," Pedir cita "),n.qZA()()()),2&o&&(n.Q6J("translucent",!0),n.xp6(6),n.Oqu(r.title),n.xp6(4),n.Q6J("fullscreen",!0),n.xp6(16),n.Q6J("ngForOf",n.lcZ(27,4,r.appointments)))},directives:[e.Gu,e.sr,e.YG,e.gu,e.wd,e.YI,c.rH,g,e.W2,e.Ie,e.BJ,e.Q$,e.PM,l.sg,e.q_],pipes:[l.Ov],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[c.Bz.forChild(f)],c.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[l.ez,p.u5,e.Pc,Z]]}),t})()}}]);