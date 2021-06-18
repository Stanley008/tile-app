(function(e){function t(t){for(var r,n,l=t[0],c=t[1],s=t[2],m=0,d=[];m<l.length;m++)n=l[m],i[n]&&d.push(i[n][0]),i[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,l=1;l<o.length;l++){var c=o[l];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=n(n.s=o[0]))}return e}var r={},i={app:0},a=[];function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("1530")},"09cb":function(e,t,o){"use strict";o("656d")},1530:function(e,t,o){},"4e41":function(e,t,o){"use strict";o("d7de")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Tile Calculator logo",src:o("d65c")}}),r("h2",[e._v(" Tile Calculator to the Rescue.")]),r("h3",[e._v(" We are here to help you with your calculations.")]),r("CalculationComponent")],1)},a=[],n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("div",{staticClass:"create-calculation"},[o("hr"),o("p",[e._v("Hints: ")]),o("p",[e._v("Tile Adjustment - It is advisory to order 10% more for waste, bad cuts etc.")]),o("p",[e._v("Tile Adjustment - If diagonal pattern is chosen a 20% adjustment is advisory.")]),o("p",[e._v("To delete a calculation double click on it.")]),o("hr"),o("label",{attrs:{for:"create-calculation"}},[e._v(" Enter New Calculation Data: ")]),o("br"),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.roomName,expression:"roomName"}],attrs:{type:"roomName",id:"create-calculation",placeholder:"Room Name"},domProps:{value:e.roomName},on:{input:function(t){t.target.composing||(e.roomName=t.target.value)}}}),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.roomLength,expression:"roomLength"}],attrs:{type:"roomName",id:"create-calculation",placeholder:"Room Length cm"},domProps:{value:e.roomLength},on:{input:function(t){t.target.composing||(e.roomLength=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.roomWidth,expression:"roomWidth"}],attrs:{type:"roomName",id:"create-calculation",placeholder:"Room Width cm"},domProps:{value:e.roomWidth},on:{input:function(t){t.target.composing||(e.roomWidth=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.roomHeight,expression:"roomHeight"}],attrs:{type:"roomName",id:"create-calculation",placeholder:"Room Height cm"},domProps:{value:e.roomHeight},on:{input:function(t){t.target.composing||(e.roomHeight=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.roomDeduction,expression:"roomDeduction"}],attrs:{type:"roomName",id:"create-calculation",placeholder:"Room Deduction m2"},domProps:{value:e.roomDeduction},on:{input:function(t){t.target.composing||(e.roomDeduction=t.target.value)}}}),o("br"),o("br"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.tileName,expression:"tileName"}],attrs:{type:"roomName",id:"create-calculation",placeholder:"Tile Name"},domProps:{value:e.tileName},on:{input:function(t){t.target.composing||(e.tileName=t.target.value)}}}),o("p"),o("input",{directives:[{name:"model",rawName:"v-model",value:e.tileLength,expression:"tileLength"}],attrs:{type:"roomName",id:"create-calculation",placeholder:"Tile Length cm"},domProps:{value:e.tileLength},on:{input:function(t){t.target.composing||(e.tileLength=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.tileWidth,expression:"tileWidth"}],attrs:{type:"roomName",id:"create-calculation",placeholder:"Tile Width cm"},domProps:{value:e.tileWidth},on:{input:function(t){t.target.composing||(e.tileWidth=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.tileAdjustment,expression:"tileAdjustment"}],attrs:{type:"roomName",id:"create-calculation",placeholder:"Tile Adjustment %"},domProps:{value:e.tileAdjustment},on:{input:function(t){t.target.composing||(e.tileAdjustment=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.tileBoxPieces,expression:"tileBoxPieces"}],attrs:{type:"roomName",id:"create-calculation",placeholder:"Tiles in Box Pieces"},domProps:{value:e.tileBoxPieces},on:{input:function(t){t.target.composing||(e.tileBoxPieces=t.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:e.tileBoxPrice,expression:"tileBoxPrice"}],attrs:{type:"roomName",id:"create-calculation",placeholder:"Tile Box Price CZK"},domProps:{value:e.tileBoxPrice},on:{input:function(t){t.target.composing||(e.tileBoxPrice=t.target.value)}}}),o("br"),o("br"),o("button",{on:{click:e.createCalculation}},[e._v("Calculate")])]),o("hr"),o("h1",[e._v("Latest Calculations")]),e.error?o("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),o("div",{staticClass:"calculations-container"},e._l(e.calculations,(function(t,r){return o("div",{key:t._id,staticClass:"calculation",attrs:{item:t,index:r},on:{dblclick:function(o){return e.deleteCalculation(t._id)}}},[e._v("\n    "+e._s(t.createdAt.getHours()+":"+t.createdAt.getMinutes()+" - "+t.createdAt.getDate()+"."+(t.createdAt.getMonth()+1)+"."+t.createdAt.getFullYear())+"\n      \n    "),o("p",{staticClass:"roomName"},[e._v(" Room Name: "+e._s(t.roomName)+" ")]),o("p",{staticClass:"room"},[e._v(" Room Length: "+e._s(t.roomLength)+" cm")]),o("p",{staticClass:"room"},[e._v(" Room Width: "+e._s(t.roomWidth)+" cm")]),o("p",{staticClass:"room"},[e._v(" Room Height: "+e._s(t.roomHeight)+" cm")]),o("p",{staticClass:"room"},[e._v(" Total Room Deduction: "+e._s(t.roomDeduction)+" m2")]),o("p",{staticClass:"roomName"},[e._v(" Tile Name: "+e._s(t.tileName)+" ")]),o("p",{staticClass:"room"},[e._v(" Tile Length: "+e._s(t.tileLength)+" cm")]),o("p",{staticClass:"room"},[e._v(" Tile Width: "+e._s(t.tileWidth)+" cm")]),o("p",{staticClass:"room"},[e._v(" Tile Adjustment Add: "+e._s(t.tileAdjustment)+" %")]),o("p",{staticClass:"room"},[e._v(" Tile Pieces in a Box: "+e._s(t.tileBoxPieces))]),o("p",{staticClass:"room"},[e._v(" Tile Box Price: "+e._s(t.tileBoxPrice)+" CZK")]),o("hr"),o("p",{staticClass:"roomName"},[e._v("CALCULATIONS")]),o("p",{staticClass:"roomName"},[e._v(" Floor Area: "+e._s(([[t.roomLength*t.roomWidth-1e4*t.roomDeduction]*[t.tileAdjustment/100+1]]/1e4).toFixed(2))+" m2")]),o("p",{staticClass:"roomName"},[e._v(" Wall Area: "+e._s(([[2*t.roomLength*t.roomHeight+2*t.roomWidth*t.roomHeight]*[t.tileAdjustment/100+1]]/1e4).toFixed(2))+" m2")]),o("p",{staticClass:"roomName"},[e._v(" Total Area: "+e._s(([[2*t.roomLength*t.roomHeight+2*t.roomWidth*t.roomHeight]*[t.tileAdjustment/100+1]]/1e4+[[t.roomLength*t.roomWidth-1e4*t.roomDeduction]*[t.tileAdjustment/100+1]]/1e4).toFixed(2))+" m2")]),o("p",{staticClass:"roomName"},[e._v(" Number of Tiles Needed: "+e._s(([[[2*t.roomLength*t.roomHeight+2*t.roomWidth*t.roomHeight]*[t.tileAdjustment/100+1]]/1e4+[[t.roomLength*t.roomWidth-1e4*t.roomDeduction]*[t.tileAdjustment/100+1]]/1e4]/[t.tileLength*t.tileWidth]*1e4).toFixed(0))+" Pieces")]),o("p",{staticClass:"roomName"},[e._v(" Number of Tiles Boxes Needed: "+e._s(([[[[2*t.roomLength*t.roomHeight+2*t.roomWidth*t.roomHeight]*[t.tileAdjustment/100+1]]/1e4+[[t.roomLength*t.roomWidth-1e4*t.roomDeduction]*[t.tileAdjustment/100+1]]/1e4]/[t.tileLength*t.tileWidth]*1e4]/t.tileBoxPieces).toFixed(0))+" Boxes")]),o("p",{staticClass:"roomName"},[e._v(" Price of the Tiles: "+e._s(([[[[2*t.roomLength*t.roomHeight+2*t.roomWidth*t.roomHeight]*[t.tileAdjustment/100+1]]/1e4+[[t.roomLength*t.roomWidth-1e4*t.roomDeduction]*[t.tileAdjustment/100+1]]/1e4]/[t.tileLength*t.tileWidth]*1e4]/t.tileBoxPieces*t.tileBoxPrice).toFixed(0))+" CZK")])])})),0)])},l=[],c=o("1da1"),s=(o("96cf"),o("5530")),u=o("d4ec"),m=o("bee2"),d=(o("d3b7"),o("d81d"),o("bc3a")),p=o.n(d),h="api/calculations/",v=function(){function e(){Object(u["a"])(this,e)}return Object(m["a"])(e,null,[{key:"getCalculations",value:function(){return new Promise(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,o){var r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get(h);case 3:r=e.sent,i=r.data,t(i.map((function(e){return Object(s["a"])(Object(s["a"])({},e),{},{createdAt:new Date(e.createdAt)})}))),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),o(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,o){return e.apply(this,arguments)}}())}},{key:"insertCalculation",value:function(e,t,o,r,i,a,n,l,c,s,u,m,d){return p.a.post(h,{text:e,roomName:t,roomLength:o,roomWidth:r,roomHeight:i,roomDeduction:a,tileName:n,tileLength:l,tileWidth:c,tileGap:s,tileAdjustment:u,tileBoxPieces:m,tileBoxPrice:d})}},{key:"deleteCalculation",value:function(e){return p.a.delete("".concat(h).concat(e))}}]),e}(),g=v,f={name:"CalculationComponent",data:function(){return{calculations:[],error:"",text:""}},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.getCalculations();case 3:e.calculations=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{createCalculation:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.insertCalculation(e.text,e.roomName,e.roomLength,e.roomWidth,e.roomHeight,e.roomDeduction,e.tileName,e.tileLength,e.tileWidth,e.tileGap,e.tileAdjustment,e.tileBoxPieces,e.tileBoxPrice);case 2:return t.next=4,g.getCalculations();case 4:e.calculations=t.sent;case 5:case"end":return t.stop()}}),t)})))()},deleteCalculation:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,g.deleteCalculation(e);case 2:return o.next=4,g.getCalculations();case 4:t.calculations=o.sent;case 5:case"end":return o.stop()}}),o)})))()}}},x=f,_=(o("4e41"),o("09cb"),o("2877")),N=Object(_["a"])(x,n,l,!1,null,"6cd70280",null),C=N.exports,b={name:"App",components:{CalculationComponent:C}},P=b,j=(o("034f"),Object(_["a"])(P,i,a,!1,null,null,null)),w=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(w)}}).$mount("#app")},"656d":function(e,t,o){},d65c:function(e,t,o){e.exports=o.p+"img/tileCalculator.5030d9d8.png"},d7de:function(e,t,o){}});
//# sourceMappingURL=app.fb7a0b50.js.map