(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["creditos","chunk-515a8379"],{"0095":function(t,e,n){"use strict";n("95c5")},"13aa":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid banner-interno"},[n("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),n("div",{staticClass:"container"},[n("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?n("div",{staticClass:"banner-interno__titulo__icono me-3"},[n("i",{class:t.icono})]):t._e(),n("h2",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.titulo)}})])])])},a=[],s={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},o=s,i=(n("0095"),n("2877")),c=Object(i["a"])(o,r,a,!1,null,null,null);e["default"]=c.exports},"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),s=n("17c2"),o=n("9112");for(var i in a){var c=r[i],l=c&&c.prototype;if(l&&l.forEach!==s)try{o(l,"forEach",s)}catch(d){l.forEach=s}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),s=a("forEach");t.exports=s?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"2e81":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"curso-main-container creditos-vista"},[n("BannerInterno",{attrs:{icono:"far fa-registered",titulo:"Créditos"}}),n("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[n("div",{staticClass:"creditos mb-4 mb-md-5"},t._l(Object.keys(t.creditosData),(function(e,r){return n("div",{class:r!=Object.keys(t.creditosData).length-1?"mb-4":""},[n("div",{staticClass:"creditos__titulo"},[t._v(t._s(t.configTitulos[e]))]),n("table",[n("tbody",t._l(t.creditosData[e],(function(r,a){return n("tr",{key:e+a},[n("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(r.nombre))}}),n("td",{attrs:{colspan:"2"},domProps:{innerHTML:t._s(t.renderText(r.cargo))}}),n("td",{attrs:{colspan:"3"},domProps:{innerHTML:t._s(t.renderText(r.centro))}})])})),0)])])})),0),t._m(0),n("Footer",{attrs:{"all-round":""}})],1)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row mb-4 mb-md-5"},[r("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[r("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[r("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:n("ef52")}}),r("p",[t._v("Fotografias y vectores tomados de "),r("a",{attrs:{href:"https://www.freepik.es/",target:"_blank"}},[t._v("www.freepik.es")]),t._v(", "),r("a",{attrs:{href:"https://www.shutterstock.com/",target:"_blank"}},[t._v("www.shutterstock.com")]),t._v(", "),r("a",{attrs:{href:"https://unsplash.com/",target:"_blank"}},[t._v("unsplash.com ")]),t._v("y "),r("a",{attrs:{href:"https://www.flaticon.com/",target:"_blank"}},[t._v("www.flaticon.com")])])])]),r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"tarjeta credito p-3 text-center h-100"},[r("img",{staticClass:"d-inline-block",staticStyle:{width:"70px"},attrs:{src:n("e1f5")}}),r("p",{staticClass:"mb-0"},[t._v("Licencia creative commons CC BY-NC-SA"),r("br"),r("a",{attrs:{href:"https://creativecommons.org/licenses/by-nc-sa/2.0/",target:"_blank"}},[t._v("ver licencia")])])])])])}],s=(n("159b"),n("13aa")),o=n("e9c6"),i={name:"Creditos",components:{BannerInterno:s["default"],Footer:o["a"]},data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos}},methods:{renderText:function(t){var e="";return Array.isArray(t)?t.forEach((function(t,n){e+=(n?"<br/>":"")+t})):e+=t,e}}},c=i,l=(n("5d8e"),n("2877")),d=Object(l["a"])(c,r,a,!1,null,null,null);e["default"]=d.exports},"5d8e":function(t,e,n){"use strict";n("f728")},"95c5":function(t,e,n){},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},e1f5:function(t,e,n){t.exports=n.p+"img/creditos-cc.4836eb56.svg"},ef52:function(t,e,n){t.exports=n.p+"img/creditos-img.689712e2.svg"},f728:function(t,e,n){}}]);
//# sourceMappingURL=creditos.87524d3d.js.map