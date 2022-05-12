"use strict";(self["webpackChunkfront"]=self["webpackChunkfront"]||[]).push([[338],{5128:function(t,e,i){i.d(e,{Z:function(){return N}});i(2526),i(1817);var a=i(6252),o=i(3577),n=i(9963),r={id:"picture-ctn",class:"card-profile__img-ctn"},s=["src"],l={class:"card-profile__infos-ctn ctn--column"},d={class:"ctn ctn--flex-start"},m={class:"text--bold-w text--normal-f text--red-underline"},u={id:"firstName"},p={id:"lastName"},c={key:0,id:"email-ctn",class:"text--normal-w text--normal-f"},f={id:"position-ctn",class:"text--light text--normal-f text--bold-w"},w={id:"position"},v={id:"description-ctn",class:"text--black text--small-f"},h={id:"description"};function x(t,e,i,x,b,g){var _=this;return(0,a.wg)(),(0,a.iD)("figure",{id:"cardprofile",class:(0,o.C_)(["card-profile",{cardProfilesView:g.isProfilesView}])},[(0,a._)("a",{href:"",class:"link text--normal-w text--normal-f ctn ctn--flex-start",onClick:e[0]||(e[0]=(0,n.iM)((function(e){return t.$emit("sendid",_.userId)}),["prevent"]))},[(0,a._)("div",r,[(0,a._)("img",{src:i.profilePicURL,alt:"Profile Picture"},null,8,s)]),(0,a._)("div",l,[(0,a._)("div",d,[(0,a._)("div",m,[(0,a._)("span",u,(0,o.zw)(i.firstName+" "),1),(0,a._)("span",p,(0,o.zw)(i.lastName),1)])]),i.email?((0,a.wg)(),(0,a.iD)("div",c,(0,o.zw)(i.email),1)):(0,a.kq)("",!0),(0,a._)("div",f,[(0,a._)("p",w,(0,o.zw)(i.position),1)]),(0,a._)("div",v,[(0,a._)("p",h,(0,o.zw)(i.description),1)])])])],2)}i(8309);var b={name:"CardProfile",el:"#cardprofile",props:{userId:{type:String,required:!0},profilePicURL:{type:String,default:"http://localhost:3000/images/user-solid.svg"},firstName:{type:String,required:!0},lastName:{type:String,required:!0},position:{type:String,default:"Travaille chez Groupomania"},description:{type:String,default:"✌️"},email:{type:String},computed:{}},data:function(){return{}},computed:{isProfilesView:function(){return"profiles"===this.$route.name}}},g=i(3744);const _=(0,g.Z)(b,[["render",x]]);var N=_},545:function(t,e,i){i.d(e,{Z:function(){return U}});i(2526),i(1817);var a=i(6252),o=i(9963),n=i(3577),r={id:"formProfile",class:"form-profile ctn ctn--column"},s={class:"ctn ctn--column"},l={key:0,for:"upload-file",class:"btn text--btn text--center text--normal-w text--normal-f"},d={key:1,for:"upload-file",class:"btn text--btn text--center text--normal-w text--normal-f"},m=["src"],u={key:0,class:"text--error text--center text--normal-f text--bold-w"},p={class:"text--normal-f text--normal-w text--label ctn--column input-wrap"},c={for:"firstName"},f={key:0},w={class:"text--normal-f text--normal-w text--label ctn--column input-wrap"},v={for:"lastName"},h={key:0},x={class:"text--normal-f text--normal-w text--label ctn--column input-wrap"},b={for:"position"},g={key:0},_={class:"text--normal-f text--normal-w text--label ctn--column input-wrap textarea-wrap"},N={for:"description"},y={key:0};function P(t,e,i,P,k,V){var C=(0,a.up)("SubmitButton");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("form",{class:"ctn ctn--column ctn--space-between",enctype:"multipart/form-data",onSubmit:e[9]||(e[9]=(0,o.iM)((function(t){return V.updateProfile()}),["prevent"])),onInput:e[10]||(e[10]=function(t){return V.submitValidation()})},[(0,a._)("div",s,[k.imagePreview||i.oldImg?((0,a.wg)(),(0,a.iD)("label",d,"Changer l'image")):((0,a.wg)(),(0,a.iD)("label",l,"Ajouter une image")),(0,a._)("input",{class:"input-file",id:"upload-file",type:"file",accept:".jpg, .jpeg, .png",onChange:e[0]||(e[0]=function(t){return V.handleFileUpload(t)})},null,32),(0,a._)("img",{src:k.imagePreview?k.imagePreview:i.oldImg,class:"img-preview-profile"},null,8,m)]),k.validator.file?((0,a.wg)(),(0,a.iD)("p",u," Fichiers autorisés : .jpg, .jpeg, .png, 5Mo maximum. ")):(0,a.kq)("",!0),(0,a._)("div",p,[(0,a._)("label",c,(0,n.zw)(k.label.firstName),1),(0,a.wy)((0,a._)("input",{class:"input text--normal-f text--light-w",id:"firstName",name:"firstName",type:"text",placeholder:"Jacques","onUpdate:modelValue":e[1]||(e[1]=function(t){return k.form.firstName=t}),onInput:e[2]||(e[2]=function(t){return V.firstNameValidation()})},null,544),[[o.nr,k.form.firstName]]),k.validator.fistName?((0,a.wg)(),(0,a.iD)("span",f,"Prénom invalide.")):(0,a.kq)("",!0)]),(0,a._)("div",w,[(0,a._)("label",v,(0,n.zw)(k.label.lastName),1),(0,a.wy)((0,a._)("input",{class:"input text--normal-f text--light-w",id:"lastName",name:"lastname",type:"text",placeholder:"Dupont","onUpdate:modelValue":e[3]||(e[3]=function(t){return k.form.lastName=t}),onInput:e[4]||(e[4]=function(t){return V.lastNameValidation()})},null,544),[[o.nr,k.form.lastName]]),k.validator.lastName?((0,a.wg)(),(0,a.iD)("span",h,"Nom invalide.")):(0,a.kq)("",!0)]),(0,a._)("div",x,[(0,a._)("label",b,(0,n.zw)(k.label.position),1),(0,a.wy)((0,a._)("input",{class:"input text--normal-f text--light-w",id:"position",name:"position",type:"text",placeholder:"Comptable","onUpdate:modelValue":e[5]||(e[5]=function(t){return k.form.position=t}),onInput:e[6]||(e[6]=function(t){return V.positionValidation()})},null,544),[[o.nr,k.form.position]]),k.validator.position?((0,a.wg)(),(0,a.iD)("span",g,"Nom de poste invalide.")):(0,a.kq)("",!0)]),(0,a._)("div",_,[(0,a._)("label",N,(0,n.zw)(k.label.description),1),(0,a.wy)((0,a._)("textarea",{class:"textarea text--normal-f text--light-w",id:"description",name:"description",type:"text",placeholder:"J'aime bien compter.","onUpdate:modelValue":e[7]||(e[7]=function(t){return k.form.description=t}),onInput:e[8]||(e[8]=function(t){return V.descriptionValidation()})},null,544),[[o.nr,k.form.description]]),k.validator.description?((0,a.wg)(),(0,a.iD)("span",y,"50 caractères maximum autorisés.")):(0,a.kq)("",!0)]),(0,a.Wm)(C,{class:"ctn",label:k.label.submit,disabled:k.disableSubmit},null,8,["label","disabled"])],32)])}var k=i(4648),V=(i(1539),i(8783),i(3948),i(285),i(1637),i(3403)),C=i(8637),S=i(5844),D={name:"FormProfile",el:"#formProfile",components:{SubmitButton:V.Z},data:function(){return{label:{submit:"Mettre à jour",firstName:"Prénom",lastName:"Nom",position:"Poste",description:"Description"},form:{image:this.oldImg,firstName:this.oldFirstName,lastName:this.oldLastName,position:this.oldPosition,description:this.oldDescription},validator:{file:!1,firstName:!1,lastName:!1,position:!1,description:!1},disableSubmit:!0,imagePreview:void 0}},computed:{},methods:(0,k.Z)((0,k.Z)({firstNameValidation:function(){this.validator.firstName=(0,S.validateName)(this.form.firstName)},lastNameValidation:function(){this.validator.lastName=(0,S.validateName)(this.form.lastName)},positionValidation:function(){this.validator.position=(0,S.validateName)(this.form.position)},descriptionValidation:function(){this.validator.description=(0,S.validateDescription)(this.form.description)},submitValidation:function(){this.disableSubmit=(0,S.validateProfileForm)(this.validator,this.form,this.get_profile_status)},handleFileUpload:function(t){this.form.image=t.target.files[0],this.validator.file=(0,S.validateImage)(this.form.image),this.imagePreview=URL.createObjectURL(this.form.image)}},(0,C.nv)(["update_profile","get_profile_status"])),{},{updateProfile:function(){var t=this;this.update_profile({form:this.form,userId:this.$route.params.userId}).then((function(){t.$emit("profileupdated")})).catch((function(t){console.log(t)}))}}),props:{oldFirstName:{type:String,default:""},oldLastName:{type:String,default:""},oldPosition:{type:String,default:""},oldDescription:{type:String,default:""},oldImg:{type:String,default:void 0}}},I=i(3744);const q=(0,I.Z)(D,[["render",P]]);var U=q},4716:function(t,e,i){i.d(e,{Z:function(){return y}});var a=i(6252),o=i(9963),n={id:"form-pwd"},r={key:0,class:"text--normal-f text--normal-w text--label ctn--column input-wrap"},s=(0,a._)("label",{for:"oldPassword"},"Ancien mot de passe",-1),l={class:"text--normal-f text--normal-w text--label ctn--column input-wrap"},d=(0,a._)("label",{for:"password"},"Nouveau mot de passe",-1),m={key:1,class:"text--center text--error text--small-f text--bold-w"},u={class:"text--normal-f text--normal-w text--label ctn--column input-wrap"},p=(0,a._)("label",{for:"passwordConf"},"Confirmez votre mot de passe",-1),c={key:2,class:"text--center text--error text--small-f text--bold-w"},f={key:1,class:"text--center text--normal-f text--bold-w"};function w(t,e,i,w,v,h){var x=(0,a.up)("SubmitButton");return(0,a.wg)(),(0,a.iD)("div",n,[v.success?((0,a.wg)(),(0,a.iD)("p",f," Mot de passe modifié avec succès ! ")):((0,a.wg)(),(0,a.iD)("form",{key:0,class:"ctn ctn--column ctn--space-between",onSubmit:e[5]||(e[5]=(0,o.iM)((function(t){return h.changePwd()}),["prevent"])),onInput:e[6]||(e[6]=function(t){return h.submitValidation()})},[h.isAdminRoute?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",r,[s,(0,a.wy)((0,a._)("input",{class:"input text--normal-f text--light-w",type:"password",id:"oldPassword",name:"oldPassword",autocomplete:"password",required:"","onUpdate:modelValue":e[0]||(e[0]=function(t){return v.form.oldPassword=t})},null,512),[[o.nr,v.form.oldPassword]])])),(0,a._)("div",l,[d,(0,a.wy)((0,a._)("input",{class:"input text--normal-f text--light-w",type:"password",id:"password",name:"password",autocomplete:"new-password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return v.form.password=t}),onInput:e[2]||(e[2]=function(t){return h.passwordValidation()})},null,544),[[o.nr,v.form.password]])]),v.validator.password?((0,a.wg)(),(0,a.iD)("p",m," Mot de passe invalide, doit contenir au moins 1 lettre majuscule, une miniscule, un chiffre, un caractère spécial et entre 8 et 16 caractères. ")):(0,a.kq)("",!0),(0,a._)("div",u,[p,(0,a.wy)((0,a._)("input",{class:"input text--normal-f text--light-w",type:"password",id:"passwordConf",name:"passwordConf",autocomplete:"new-password",required:"","onUpdate:modelValue":e[3]||(e[3]=function(t){return v.form.passwordConf=t}),onInput:e[4]||(e[4]=function(t){return h.passwordConfValidation()})},null,544),[[o.nr,v.form.passwordConf]])]),v.validator.passwordConf?((0,a.wg)(),(0,a.iD)("p",c," Mots de passe différents. ")):(0,a.kq)("",!0),(0,a.Wm)(x,{label:v.label.submit,disabled:v.disableSubmit},null,8,["label","disabled"])],32))])}var v=i(4648),h=(i(8309),i(5844)),x=i(3403),b=i(8637),g={name:"FormPwd",el:"#form-pwd",components:{SubmitButton:x.Z},data:function(){return{label:{submit:"Changer le mot de passe"},form:{oldPassword:"",password:"",passwordConf:""},validator:{password:!1,passwordConf:!1},disableSubmit:!0,success:!1}},computed:{isAdminRoute:function(){return"moderate-profile"===this.$route.name}},methods:(0,v.Z)((0,v.Z)({passwordValidation:function(){this.validator.password=(0,h.validatePassword)(this.form.password)},passwordConfValidation:function(){this.validator.passwordConf=(0,h.validatePasswordConf)(this.form.password,this.form.passwordConf)},submitValidation:function(){this.$store.getters.is_moderator?this.disableSubmit=(0,h.validateForm)(this.validator,{password:this.password,passwordConf:this.passwordConf}):this.disableSubmit=(0,h.validateForm)(this.validator,this.form)}},(0,b.nv)(["change_pwd"])),{},{changePwd:function(){var t=this;this.change_pwd(this.form).then((function(){t.success=!0})).catch((function(){t.success=!1}))}})},_=i(3744);const N=(0,_.Z)(g,[["render",w]]);var y=N}}]);
//# sourceMappingURL=338-legacy.476cdb22.js.map