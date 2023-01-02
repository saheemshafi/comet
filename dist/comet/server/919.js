"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=919,exports.ids=[919],exports.modules={41919:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AuthModule:()=>AuthModule});var common=__webpack_require__(89318),router=__webpack_require__(14195),core=__webpack_require__(40305);class AuthComponent{constructor(){}ngOnInit(){}}__name(AuthComponent,"AuthComponent"),AuthComponent.\u0275fac=__name(function(t){return new(t||AuthComponent)},"AuthComponent_Factory"),AuthComponent.\u0275cmp=core.Xpm({type:AuthComponent,selectors:[["app-auth"]],decls:1,vars:0,template:__name(function(rf,ctx){1&rf&&core._UZ(0,"router-outlet")},"AuthComponent_Template"),dependencies:[router.lC]});var auth_service=__webpack_require__(54946),fesm2020_forms=__webpack_require__(43070);class CreateAccountComponent{constructor(authService){this.authService=authService}ngOnInit(){}signUpWithGoogle(){this.authService.signWithGoogle()}signUpWithEmail(form){this.authService.signUpWithEmail(form.value)}logout(){this.authService.logout()}}__name(CreateAccountComponent,"CreateAccountComponent"),CreateAccountComponent.\u0275fac=__name(function(t){return new(t||CreateAccountComponent)(core.Y36(auth_service.e))},"CreateAccountComponent_Factory"),CreateAccountComponent.\u0275cmp=core.Xpm({type:CreateAccountComponent,selectors:[["app-create-account"]],decls:44,vars:1,consts:[[1,"flex","flex-col","items-center","justify-center","px-2","py-6","sm:p-4"],[1,"w-full","rounded-lg","bg-slate-800","px-4","py-4","shadow","sm:rounded-2xl","sm:px-8","sm:py-8","md:w-2/3","xl:w-1/2",3,"ngSubmit"],["form","ngForm"],[1,"mb-4","mt-8","text-center","text-4xl","font-bold","leading-10","text-white","sm:font-semibold","sm:leading-relaxed","sm:tracking-normal","md:mt-0","md:px-0","md:text-start"],[1,"bg-gradient-to-r","from-orange-500","to-rose-600","bg-clip-text","font-bold","tracking-wide","text-transparent"],[1,"relative","mt-8"],["type","button",1,"inline-flex","w-full","items-center","justify-center","space-x-4","rounded-full","border","border-slate-500/50","bg-slate-600/20","py-3","px-8","transition-colors","hover:bg-slate-700",3,"click"],["src","../../../../assets/images/google-logo.svg","alt","google",1,"h-7","w-7"],[1,"text-lg","font-medium","text-slate-400"],[1,"my-4"],[1,"bg-gradient-to-r","from-orange-500","to-rose-500","bg-clip-text","text-center","text-xl","font-medium","uppercase","tracking-wider","text-transparent"],[1,"relative"],["id","email","type","email","name","email","placeholder","Email","autocomplete","off","ngModel","",1,"peer","w-full","rounded-full","border-slate-500","bg-transparent","py-3","pl-8","pr-14","text-lg","text-slate-100","placeholder:text-transparent","focus:border-slate-600","focus:bg-slate-800/25","focus:ring-2","focus:ring-blue-400/20"],["for","email",1,"absolute","left-8","top-0","-translate-y-1/2","cursor-text","rounded-md","bg-slate-800","px-2","text-sm","tracking-wide","text-slate-400","transition-transform","duration-100","peer-placeholder-shown:translate-y-1/2","peer-placeholder-shown:px-0","peer-placeholder-shown:text-lg","peer-focus:-translate-y-1/2","peer-focus:px-2","peer-focus:text-sm"],[1,"absolute","right-2","top-1/2","-translate-y-1/2","rounded-full","p-2","text-lg","font-semibold","text-slate-400"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","d","M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"],["id","password","type","password","name","password","placeholder","Password","autocomplete","off","ngModel","",1,"peer","w-full","rounded-full","border-slate-500","bg-transparent","py-3","pl-8","pr-14","text-lg","text-slate-100","placeholder:text-transparent","focus:border-slate-600","focus:bg-slate-800/25","focus:ring-2","focus:ring-blue-400/20"],["for","password",1,"absolute","left-8","top-0","-translate-y-1/2","cursor-text","rounded-md","bg-slate-800","px-2","text-sm","tracking-wide","text-slate-400","transition-transform","duration-100","peer-placeholder-shown:translate-y-1/2","peer-placeholder-shown:px-0","peer-placeholder-shown:text-lg","peer-focus:-translate-y-1/2","peer-focus:px-2","peer-focus:text-sm"],["stroke-linecap","round","stroke-linejoin","round","d","M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"],[1,"w-full","rounded-full","bg-gradient-to-r","from-orange-500","to-rose-600","py-3","px-4","text-lg","font-medium","capitalize","tracking-wider","text-white","shadow-sm","transition-shadow","hover:opacity-95","focus:shadow-xl","focus:shadow-rose-500/20","active:opacity-90","sm:text-xl"],[1,"text-base","tracking-wide","text-slate-400"],[1,"bg-gradient-to-r","from-orange-500","to-rose-500","bg-clip-text","font-bold","text-transparent","hover:from-rose-500","hover:to-orange-500",3,"routerLink"],[1,"mt-3"],["href","",1,"bg-gradient-to-r","from-orange-500","to-rose-500","bg-clip-text","font-bold","text-transparent","hover:from-rose-500","hover:to-orange-500"]],template:__name(function(rf,ctx){if(1&rf){const _r1=core.EpF();core.TgZ(0,"section")(1,"div",0)(2,"form",1,2),core.NdJ("ngSubmit",__name(function(){core.CHM(_r1);const _r0=core.MAs(3);return core.KtG(ctx.signUpWithEmail(_r0))},"CreateAccountComponent_Template_form_ngSubmit_2_listener")),core.TgZ(4,"h2",3),core._uU(5," Create your "),core.TgZ(6,"span",4),core._uU(7," account"),core.qZA()(),core.TgZ(8,"div",5)(9,"button",6),core.NdJ("click",__name(function(){return ctx.signUpWithGoogle()},"CreateAccountComponent_Template_button_click_9_listener")),core.TgZ(10,"div"),core._UZ(11,"img",7),core.qZA(),core.TgZ(12,"span",8),core._uU(13,"Signup with google"),core.qZA()()(),core.TgZ(14,"div",9)(15,"p",10),core._uU(16," OR "),core.qZA()(),core.TgZ(17,"div",11),core._UZ(18,"input",12),core.TgZ(19,"label",13),core._uU(20,"Email address"),core.qZA(),core.TgZ(21,"span",14),core.O4$(),core.TgZ(22,"svg",15),core._UZ(23,"path",16),core.qZA()()(),core.kcU(),core.TgZ(24,"div",5),core._UZ(25,"input",17),core.TgZ(26,"label",18),core._uU(27,"Password"),core.qZA(),core.TgZ(28,"span",14),core.O4$(),core.TgZ(29,"svg",15),core._UZ(30,"path",19),core.qZA()()(),core.kcU(),core.TgZ(31,"div",5)(32,"button",20),core._uU(33," Create Account "),core.qZA()(),core.TgZ(34,"div",5)(35,"span",21),core._uU(36,"Already have an account - "),core.TgZ(37,"a",22),core._uU(38,"Login"),core.qZA()()()(),core.TgZ(39,"div",23)(40,"p",21),core._uU(41," By continuing you agree to our "),core.TgZ(42,"a",24),core._uU(43,"terms and conditions."),core.qZA()()()()()}2&rf&&(core.xp6(37),core.Q6J("routerLink","/auth/login"))},"CreateAccountComponent_Template"),dependencies:[router.rH,fesm2020_forms._Y,fesm2020_forms.Fj,fesm2020_forms.JJ,fesm2020_forms.JL,fesm2020_forms.On,fesm2020_forms.F]});class LoginComponent{constructor(authService){this.authService=authService}ngOnInit(){}loginWithGoogle(){this.authService.signWithGoogle()}login(form){this.authService.loginWithEmail(form.value)}}__name(LoginComponent,"LoginComponent"),LoginComponent.\u0275fac=__name(function(t){return new(t||LoginComponent)(core.Y36(auth_service.e))},"LoginComponent_Factory"),LoginComponent.\u0275cmp=core.Xpm({type:LoginComponent,selectors:[["app-login"]],decls:39,vars:1,consts:[[1,"flex","flex-col","items-center","justify-center","px-2","py-6","sm:p-4"],[1,"w-full","rounded-lg","bg-slate-800","px-4","py-4","shadow","sm:rounded-2xl","sm:px-8","sm:py-8","md:w-2/3","xl:w-1/2",3,"ngSubmit"],["form","ngForm"],[1,"mb-4","mt-8","text-center","text-4xl","font-bold","leading-10","text-white","sm:font-semibold","sm:leading-relaxed","sm:tracking-normal","md:mt-0","md:px-0","md:text-start"],[1,"bg-gradient-to-r","from-orange-500","to-rose-600","bg-clip-text","font-bold","tracking-wide","text-transparent"],[1,"relative","mt-8"],["type","button",1,"inline-flex","w-full","items-center","justify-center","space-x-4","rounded-full","border","border-slate-500/50","bg-slate-600/20","py-3","px-8","transition-colors","hover:bg-slate-700",3,"click"],["src","../../../../assets/images/google-logo.svg","alt","google",1,"h-7","w-7"],[1,"text-lg","font-medium","text-slate-400"],[1,"my-4"],[1,"bg-gradient-to-r","from-orange-500","to-rose-500","bg-clip-text","text-center","text-xl","font-medium","uppercase","tracking-wider","text-transparent"],[1,"relative"],["id","email","type","email","placeholder","Email","autocomplete","off","name","email","ngModel","",1,"peer","w-full","rounded-full","border-slate-500","bg-transparent","py-3","pl-8","pr-14","text-lg","text-slate-100","placeholder:text-transparent","focus:border-slate-600","focus:bg-slate-800/25","focus:ring-2","focus:ring-blue-400/20"],["for","email",1,"absolute","left-8","top-0","-translate-y-1/2","cursor-text","rounded-md","bg-slate-800","px-2","text-sm","tracking-wide","text-slate-400","transition-transform","duration-100","peer-placeholder-shown:translate-y-1/2","peer-placeholder-shown:px-0","peer-placeholder-shown:text-lg","peer-focus:-translate-y-1/2","peer-focus:px-2","peer-focus:text-sm"],[1,"absolute","right-2","top-1/2","-translate-y-1/2","rounded-full","p-2","text-lg","font-semibold","text-slate-400"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"h-6","w-6"],["stroke-linecap","round","stroke-linejoin","round","d","M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"],["id","password","type","password","placeholder","Password","autocomplete","off","name","password","ngModel","",1,"peer","w-full","rounded-full","border-slate-500","bg-transparent","py-3","pl-8","pr-14","text-lg","text-slate-100","placeholder:text-transparent","focus:border-slate-600","focus:bg-slate-800/25","focus:ring-2","focus:ring-blue-400/20"],["for","password",1,"absolute","left-8","top-0","-translate-y-1/2","cursor-text","rounded-md","bg-slate-800","px-2","text-sm","tracking-wide","text-slate-400","transition-transform","duration-100","peer-placeholder-shown:translate-y-1/2","peer-placeholder-shown:px-0","peer-placeholder-shown:text-lg","peer-focus:-translate-y-1/2","peer-focus:px-2","peer-focus:text-sm"],["stroke-linecap","round","stroke-linejoin","round","d","M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"],[1,"w-full","rounded-full","bg-gradient-to-r","from-orange-500","to-rose-600","py-3","px-4","text-lg","font-medium","capitalize","tracking-wider","text-white","shadow-sm","transition-shadow","hover:opacity-95","focus:shadow-xl","focus:shadow-rose-500/20","active:opacity-90","sm:text-xl"],[1,"text-base","tracking-wide","text-slate-400"],[1,"bg-gradient-to-r","from-orange-500","to-rose-500","bg-clip-text","font-bold","text-transparent","hover:from-rose-500","hover:to-orange-500",3,"routerLink"]],template:__name(function(rf,ctx){if(1&rf){const _r1=core.EpF();core.TgZ(0,"section")(1,"div",0)(2,"form",1,2),core.NdJ("ngSubmit",__name(function(){core.CHM(_r1);const _r0=core.MAs(3);return core.KtG(ctx.login(_r0))},"LoginComponent_Template_form_ngSubmit_2_listener")),core.TgZ(4,"h2",3),core._uU(5," Login to your "),core.TgZ(6,"span",4),core._uU(7," account"),core.qZA()(),core.TgZ(8,"div",5)(9,"button",6),core.NdJ("click",__name(function(){return ctx.loginWithGoogle()},"LoginComponent_Template_button_click_9_listener")),core.TgZ(10,"div"),core._UZ(11,"img",7),core.qZA(),core.TgZ(12,"span",8),core._uU(13,"Login with google"),core.qZA()()(),core.TgZ(14,"div",9)(15,"p",10),core._uU(16," OR "),core.qZA()(),core.TgZ(17,"div",11),core._UZ(18,"input",12),core.TgZ(19,"label",13),core._uU(20,"Email address"),core.qZA(),core.TgZ(21,"span",14),core.O4$(),core.TgZ(22,"svg",15),core._UZ(23,"path",16),core.qZA()()(),core.kcU(),core.TgZ(24,"div",5),core._UZ(25,"input",17),core.TgZ(26,"label",18),core._uU(27,"Password"),core.qZA(),core.TgZ(28,"span",14),core.O4$(),core.TgZ(29,"svg",15),core._UZ(30,"path",19),core.qZA()()(),core.kcU(),core.TgZ(31,"div",5)(32,"button",20),core._uU(33," Login "),core.qZA()(),core.TgZ(34,"div",5)(35,"span",21),core._uU(36,"Don't have an account - "),core.TgZ(37,"a",22),core._uU(38,"Signup"),core.qZA()()()()()()}2&rf&&(core.xp6(37),core.Q6J("routerLink","/auth/create-account"))},"LoginComponent_Template"),dependencies:[router.rH,fesm2020_forms._Y,fesm2020_forms.Fj,fesm2020_forms.JJ,fesm2020_forms.JL,fesm2020_forms.On,fesm2020_forms.F]});const routes=[{path:"",component:AuthComponent,children:[{path:"",redirectTo:"create-account",pathMatch:"full"},{path:"create-account",component:CreateAccountComponent},{path:"login",component:LoginComponent}]}];class AuthRoutingModule{}__name(AuthRoutingModule,"AuthRoutingModule"),AuthRoutingModule.\u0275fac=__name(function(t){return new(t||AuthRoutingModule)},"AuthRoutingModule_Factory"),AuthRoutingModule.\u0275mod=core.oAB({type:AuthRoutingModule}),AuthRoutingModule.\u0275inj=core.cJS({imports:[router.Bz.forChild(routes),router.Bz]});class AuthModule{}__name(AuthModule,"AuthModule"),AuthModule.\u0275fac=__name(function(t){return new(t||AuthModule)},"AuthModule_Factory"),AuthModule.\u0275mod=core.oAB({type:AuthModule}),AuthModule.\u0275inj=core.cJS({imports:[common.ez,AuthRoutingModule,fesm2020_forms.u5]})}};