webpackJsonp([2,0],{0:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=a(7),o=n(r),i=a(270),s=n(i);a(283),a(214),a(207),a(231),a(230),a(225);var l=a(295),c=n(l),d=a(147),u=n(d),f=a(72),h=n(f);o.default.use(s.default),new o.default({el:"#app",template:"<App/>",components:{App:c.default},render:function(t){return t(c.default)},router:u.default,store:h.default})},72:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(7),o=n(r),i=a(318),s=n(i),l=a(148),c=n(l),d=a(149),u=n(d);o.default.use(s.default);var f=new s.default.Store({state:{lockScreen:!0,timeRecords:[]},mutations:u.default,actions:c.default});e.default=f},147:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(7),o=n(r),i=a(317),s=n(i),l=a(296),c=n(l),d=a(298),u=n(d),f=a(300),h=n(f),p=a(305),m=n(p),v=a(304),y=n(v),w=a(72),_=n(w);o.default.use(s.default);var g=new s.default({mode:"history",routes:[{path:"/auth",component:c.default},{path:"/main",component:u.default,children:[{path:"management",component:h.default},{path:"timeline",component:m.default},{path:"time-slide",component:y.default},{path:"",redirect:"timeline"}]},{path:"/",redirect:"/auth"}]});g.beforeEach(function(t,e,a){"/"===t.path?a("/auth"):"/auth"!==t.path||_.default.state.lockScreen?"/auth"!==t.path&&_.default.state.lockScreen?a("/auth"):a():a("/main")}),e.default=g},148:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(129),o=n(r);e.default={unlockScreen:function(t,e){var a=t.commit;return o.default.post("/api/check",{password:e}).then(function(t){return!(t&&200===t.status&&!t.data.err)||(a("UNLOCK"),!1)})},addRecord:function(t,e){var a=t.commit;return o.default.post("/api/add",e).then(function(t){return!(t&&200===t.status&&!t.data.err)||(a("UPDATE_RECORD",e),!1)})},fatchData:function(t){var e=t.commit;o.default.get("/static/data/data.json").then(function(t){200===t.status&&e("FATCH_DATA",t.data)})}}},149:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(73),o=n(r),i=a(32),s=n(i),l=s.default;e.default={UNLOCK:function(t){t.lockScreen=!1},LOCK:function(t){t.lockScreen=!0},UPDATE_RECORD:function(t,e){var a=!0,n=!1,r=void 0;try{for(var i,s=(0,o.default)(t.timeRecords);!(a=(i=s.next()).done);a=!0){var c=i.value;if(l(c.year)===l(e.year)&&l(c.month)===l(e.month)&&l(c.date)===l(e.date))return void(c.items=e.items)}}catch(t){n=!0,r=t}finally{try{!a&&s.return&&s.return()}finally{if(n)throw r}}t.timeRecords.push(e),t.timeRecords.sort(function(t,e){var a=new Date(t.year+"-"+t.month+"-"+t.date),n=new Date(e.year+"-"+e.month+"-"+e.date);return a.getTime()<n.getTime()?1:a.getTime()>n.getTime()?-1:0})},FATCH_DATA:function(t,e){t.timeRecords=e}}},150:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},151:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(297),o=n(r);e.default={name:"auth",components:{StarFlow:o.default},data:function(){return{password:"",disabled:!0,errorTip:""}},methods:{setTip:function(t){var e=this;this.errorTip=t,this.disabled=!1,setTimeout(function(){e.disabled=!0,e.errorTip=""},1500)},signin:function(){var t=this;this.password?this.$store.dispatch("unlockScreen",this.password).then(function(e){e?t.setTip("密码错误"):t.$router.replace("/main")}):this.setTip("密码不能为空")}}}},152:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(73),o=n(r),i=a(163),s=n(i),l=a(164),c=n(l),d=function(){function t(e,a){(0,s.default)(this,t),this.initProperties(e,a)}return(0,c.default)(t,[{key:"initProperties",value:function(t,e){this.position={x:Math.random()*t,y:100*Math.random()+e},this.alpha=.5+.3*Math.random(),this.scale=.1+.3*Math.random(),this.velocity=1.5*Math.random()}},{key:"move",value:function(){this.position.y-=this.velocity,this.alpha-=8e-4}}]),t}(),u=function(){function t(){var e=this;(0,s.default)(this,t),this.width=window.innerWidth,this.height=window.innerHeight,this.canvas=document.querySelector("#star-flow"),this.canvas.width=this.width,this.canvas.height=this.height,this.ctx=this.canvas.getContext("2d"),this.stars=[];for(var a=0;a<.5*this.width;++a)this.stars.push(new d(this.width,this.height));window.addEventListener("resize",function(){e.width=window.innerWidth,e.height=window.innerHeight,e.canvas.width=e.width,e.canvas.height=e.height})}return(0,c.default)(t,[{key:"flowing",value:function(){this.ctx.clearRect(0,0,this.width,this.height);var t=!0,e=!1,a=void 0;try{for(var n,r=(0,o.default)(this.stars);!(t=(n=r.next()).done);t=!0){var i=n.value;i.alpha<=0&&i.initProperties(this.width,this.height),i.move(),this.ctx.beginPath(),this.ctx.arc(i.position.x,i.position.y,10*i.scale,0,2*Math.PI,!1),this.ctx.fillStyle="rgba(255, 255, 255, "+i.alpha+")",this.ctx.fill()}}catch(t){e=!0,a=t}finally{try{!t&&r.return&&r.return()}finally{if(e)throw a}}window.requestAnimationFrame(this.flowing.bind(this))}}]),t}();e.default={name:"star-flow",mounted:function(){(new u).flowing()}}},153:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"main",methods:{lockScreen:function(){this.$store.commit("LOCK"),this.$router.replace("/auth")}},created:function(){0===this.$store.state.timeRecords.length&&this.$store.dispatch("fatchData")}}},154:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"edit-time-record",data:function(){return{date:"",dialogVisible:!1,dialogContent:"",records:[{content:"",time:"0.1",type:"学习"}]}},methods:{handleCommand:function(t){t=t.split("-"),this.records[t[1]].type=t[0]},addRecord:function(){this.records.push({content:"",time:"0.1",type:"学习"})},removeRecord:function(){this.records.length<2||this.records.pop()},submitRecords:function(){var t=this;if(""===this.date)return this.dialogVisible=!0,void(this.dialogContent="请选择日期");var e=[];if(this.records.forEach(function(t){t.content&&e.push(t)}),0===e.length)return this.dialogVisible=!0,void(this.dialogContent="请输入相应的事项记录");var a=new Date(this.date);this.$store.dispatch("addRecord",{year:a.getFullYear(),month:a.getMonth()+1,date:a.getDate(),day:a.getDay(),items:e}).then(function(e){t.dialogVisible=!0,t.dialogContent=e?"提交失败":"提交成功",e||(t.records=[{content:"",time:"0.1",type:"学习"}])})}}}},155:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(299),o=n(r),i=a(301),s=n(i),l=a(302),c=n(l),d=a(303),u=n(d);e.default={name:"management",components:{EditTimeRecord:o.default,TimeAnalysisByType:s.default,TimeAnalysisPerMonth:c.default,TimeAnalysisPerYear:u.default}}},156:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(162),o=n(r),i=a(48),s=n(i),l=a(32),c=n(l),d=a(3),u=n(d);e.default={name:"time-analysis-by-type",data:function(){return{month:this.format(new Date((new Date).getTime()-864e5))}},mounted:function(){this.drawChart()},computed:{chartData:function(){var t=this;"string"!=typeof this.month&&(this.month=this.format(this.month));var e={"学习":{value:0,name:"学习",itemStyle:{normal:{color:"#c5ef84"}}},"工作":{value:0,name:"工作",itemStyle:{normal:{color:"#f9ba2c"}}},"运动":{value:0,name:"运动",itemStyle:{normal:{color:"#3aecf5"}}},"休闲":{value:0,name:"休闲",itemStyle:{normal:{color:"#68f53a"}}},"娱乐":{value:0,name:"娱乐",itemStyle:{normal:{color:"#e0a6f3"}}},"其他":{value:0,name:"其他",itemStyle:{normal:{color:"#e0a6a3"}}}};return this.$store.state.timeRecords.filter(function(e){return(0,c.default)(e.year)===(0,c.default)(t.month.split("-")[0])&&(0,c.default)(e.month)===(0,c.default)(t.month.split("-")[1])}).forEach(function(t){t.items.forEach(function(t){e[t.type].value+=(0,s.default)(t.time)})}),e=(0,o.default)(e),e.forEach(function(t){return t.value=t.value.toFixed(1)}),e},totalTime:function(){var t=0;return this.chartData.forEach(function(e){return t+=(0,s.default)(e.value)}),t.toFixed(1)}},methods:{format:function(t){var e=t.getMonth()+1;return e<10&&(e="0"+e),t.getFullYear()+"-"+e},drawChart:function(t){var e={title:{text:"分类时间统计",subtext:"单位：小时",x:"center",textStyle:{color:"white"},subtextStyle:{color:"white"}},tooltip:{trigger:"item",formatter:"{b} : {c} 小时 ({d}%)"},legend:{orient:"vertical",left:"10%",top:"5%",data:["学习","工作","运动","休闲","娱乐","其他"],textStyle:{color:"white"}},series:[{name:"时间比重",type:"pie",radius:"60%",center:["50%","55%"],data:this.chartData,itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},a=u.default.init(document.querySelector("#pie-chart"));a.setOption(e)}}}},157:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(48),o=n(r),i=a(32),s=n(i),l=a(3),c=n(l);e.default={name:"time-analysis-per-month",data:function(){return{month:this.format(new Date((new Date).getTime()-864e5))}},mounted:function(){this.drawChart()},computed:{chartData:function(){var t=this;"string"!=typeof this.month&&(this.month=this.format(this.month));var e=new Array(31).fill(0);this.$store.state.timeRecords.filter(function(e){return(0,s.default)(e.year)===(0,s.default)(t.month.split("-")[0])&&(0,s.default)(e.month)===(0,s.default)(t.month.split("-")[1])}).forEach(function(t){t.items.forEach(function(a){e[(0,s.default)(t.date)-1]+=(0,o.default)(a.time)})});for(var a=0;a<e.length;++a)e[a]=e[a].toFixed(1);return e},totalTime:function(){var t=0;return this.chartData.forEach(function(e){return t+=(0,o.default)(e)}),t.toFixed(1)}},methods:{format:function(t){var e=t.getMonth()+1;return e<10&&(e="0"+e),t.getFullYear()+"-"+e},drawChart:function(){var t={title:{text:"月份时间统计",subtext:"单位：小时",x:"5%",textStyle:{color:"white"},subtextStyle:{color:"white"}},tooltip:{trigger:"item",formatter:"{c} 小时"},xAxis:{data:new Array(31).fill(0).map(function(t,e){return e+1}),axisLabel:{inside:!0,textStyle:{color:"white"}},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{max:24,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"white"}}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{normal:{color:new c.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#ff4949"},{offset:.5,color:"#f7ba2a"},{offset:1,color:"#13ce66"}])},emphasis:{color:new c.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fb1111"},{offset:.7,color:"#efac0d"},{offset:1,color:"#02d45f"}])}},data:this.chartData}]},e=c.default.init(document.querySelector("#bar-chart-month"));e.setOption(t)}}}},158:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(48),o=n(r),i=a(32),s=n(i),l=a(3),c=n(l);e.default={name:"time-analysis-per-year",data:function(){return{year:new Date((new Date).getTime()-864e5).getFullYear().toString()}},mounted:function(){this.drawChart()},computed:{chartData:function(){var t=this;"string"!=typeof this.year&&(this.year=this.year.getFullYear().toString());var e=new Array(12).fill(0);this.$store.state.timeRecords.filter(function(e){return(0,s.default)(e.year)===(0,s.default)(t.year)}).forEach(function(t){t.items.forEach(function(a){e[(0,s.default)(t.month)-1]+=(0,o.default)(a.time)})});for(var a=0;a<e.length;++a)e[a]=e[a].toFixed(1);return e},totalTime:function(){var t=0;return this.chartData.forEach(function(e){return t+=(0,o.default)(e)}),t.toFixed(1)}},methods:{drawChart:function(){var t={title:{text:"年份时间统计",subtext:"单位：小时",x:"5%",textStyle:{color:"white"},subtextStyle:{color:"white"}},tooltip:{trigger:"item",formatter:"{c} 小时"},xAxis:{data:new Array(12).fill(0).map(function(t,e){return e+1}),axisLabel:{inside:!0,textStyle:{color:"white"}},axisTick:{show:!1},axisLine:{show:!1},z:10},yAxis:{max:800,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"white"}}},dataZoom:[{type:"inside"}],series:[{type:"bar",itemStyle:{normal:{color:new c.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#ff4949"},{offset:.5,color:"#f7ba2a"},{offset:1,color:"#13ce66"}])},emphasis:{color:new c.default.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fb1111"},{offset:.7,color:"#efac0d"},{offset:1,color:"#02d45f"}])}},data:this.chartData}]},e=c.default.init(document.querySelector("#bar-chart-year"));e.setOption(t)}}}},159:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"time-slide",data:function(){return{days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]}}}},160:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"timeline",data:function(){return{iconBg:["iconbg-turqoise","iconbg-black","iconbg-brown","iconbg-indigo","iconbg-purple","iconbg-grey","iconbg-blue","iconbg-red","iconbg-orange","iconbg-opal","iconbg-green","iconbg-pink"],days:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]}}}},283:function(t,e){},284:function(t,e){},285:function(t,e){},286:function(t,e){},287:function(t,e){},288:function(t,e){},289:function(t,e){},290:function(t,e){},291:function(t,e){},292:function(t,e){},293:function(t,e){},295:function(t,e,a){var n,r;a(289),n=a(150);var o=a(312);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=n},296:function(t,e,a){var n,r;a(292),n=a(151);var o=a(315);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=n},297:function(t,e,a){var n,r;n=a(152);var o=a(307);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=n},298:function(t,e,a){var n,r;a(287),n=a(153);var o=a(310);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=n},299:function(t,e,a){var n,r;a(293),n=a(154);var o=a(316);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=n},300:function(t,e,a){var n,r;a(290),n=a(155);var o=a(313);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=n},301:function(t,e,a){var n,r;a(286),n=a(156);var o=a(309);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=n},302:function(t,e,a){var n,r;a(284),n=a(157);var o=a(306);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=n},303:function(t,e,a){var n,r;a(288),n=a(158);var o=a(311);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=n},304:function(t,e,a){var n,r;a(291),n=a(159);var o=a(314);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=n},305:function(t,e,a){var n,r;a(285),n=a(160);var o=a(308);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=o.render,r.staticRenderFns=o.staticRenderFns,t.exports=n},306:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"time-analysis-per-month"}},[a("el-card",[a("div",{attrs:{id:"bar-chart-month"}}),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6,offset:3}},[a("el-date-picker",{directives:[{name:"model",rawName:"v-model",value:t.month,expression:"month"}],attrs:{type:"month",placeholder:"选择月份"},domProps:{value:t.month},on:{change:t.drawChart,input:function(e){t.month=e}}})],1),a("el-col",{attrs:{span:5,offset:1}},[a("el-input",{attrs:{value:"Total: "+t.totalTime,disabled:!0,placeholder:"Total:"}})],1),a("el-col",{attrs:{span:5,offset:1}},[a("el-input",{attrs:{value:"AVG: "+(t.totalTime/t.chartData.filter(function(t){return 0!==t}).length).toFixed(1),disabled:!0,placeholder:"AVG:"}})],1)],1)],1)],1)},staticRenderFns:[]}},307:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("canvas",{attrs:{id:"star-flow"}})},staticRenderFns:[]}},308:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"timeline"}},[a("div",{staticClass:"timeline-wrapper"},[a("div",{staticClass:"timeline"},t._l(this.$store.state.timeRecords,function(e,n){return a("div",{staticClass:"timeline-records"},[a("div",{staticClass:"side-info"},[a("span",{staticClass:"year"},[t._v(t._s(e.year))])]),a("div",{staticClass:"timeline-icon",class:t.iconBg[Number.parseInt(n%12)]},[a("div",{staticClass:"month"},[t._v(t._s(e.month)+" 月"),a("span",{staticClass:"date"},[t._v(t._s(e.date))])])]),a("div",{staticClass:"timeline-content"},[a("h2",{staticClass:"day"},[t._v(t._s(t.days[e.day]))]),a("div",{staticClass:"details"},t._l(e.items,function(e,n){return a("p",[t._v(t._s(n+1+". "+e.content+", "+e.time+"h."))])}))])])}))])])},staticRenderFns:[]}},309:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"time-analysis-by-type"}},[a("el-card",[a("div",{attrs:{id:"pie-chart"}}),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:7,offset:4}},[a("el-date-picker",{directives:[{name:"model",rawName:"v-model",value:t.month,expression:"month"}],attrs:{type:"month",placeholder:"选择月份"},domProps:{value:t.month},on:{change:t.drawChart,input:function(e){t.month=e}}})],1),a("el-col",{attrs:{span:7,offset:2}},[a("el-input",{attrs:{value:"Total: "+t.totalTime,disabled:!0,placeholder:"Total:"}})],1)],1)],1)],1)},staticRenderFns:[]}},310:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"main"}},[a("div",{attrs:{id:"header"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:1,offset:1}},[a("i",{staticClass:"el-icon-time",attrs:{id:"logo"}})]),a("el-col",{attrs:{span:2,offset:12}},[a("router-link",{staticClass:"header-item",attrs:{to:"timeline","active-class":"header-item-active"}},[t._v("时光轴")])],1),a("el-col",{attrs:{span:2}},[a("router-link",{staticClass:"header-item",attrs:{to:"time-slide","active-class":"header-item-active"}},[t._v("时光展")])],1),a("el-col",{attrs:{span:2}},[a("router-link",{staticClass:"header-item",attrs:{to:"management","active-class":"header-item-active"}},[t._v("管理")])],1),a("el-col",{attrs:{span:2}},[a("span",{staticClass:"header-item",on:{click:t.lockScreen}},[t._v("锁屏")])])],1)],1),a("div",{attrs:{id:"body"}},[a("router-view")],1)])},staticRenderFns:[]}},311:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"time-analysis-per-year"}},[a("el-card",[a("div",{attrs:{id:"bar-chart-year"}}),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6,offset:3}},[a("el-date-picker",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],attrs:{type:"year",placeholder:"选择年份"},domProps:{value:t.year},on:{change:t.drawChart,input:function(e){t.year=e}}})],1),a("el-col",{attrs:{span:5,offset:1}},[a("el-input",{attrs:{value:"Total: "+t.totalTime,disabled:!0,placeholder:"Total:"}})],1),a("el-col",{attrs:{span:5,offset:1}},[a("el-input",{attrs:{value:"AVG: "+(t.totalTime/t.chartData.filter(function(t){return 0!==t}).length).toFixed(1),disabled:!0,placeholder:"AVG:"}})],1)],1)],1)],1)},staticRenderFns:[]}},312:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)},staticRenderFns:[]}},313:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"management"}},[a("div",{attrs:{id:"content-wrapper"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10,offset:2}},[a("time-analysis-per-month"),a("time-analysis-per-year")],1),a("el-col",{attrs:{span:9,offset:1}},[a("time-analysis-by-type"),a("edit-time-record")],1)],1)],1)])},staticRenderFns:[]}},314:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"time-slide"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:20,offset:2}},[a("el-carousel",{attrs:{interval:4e3,type:"card",height:"650px","indicator-position":"none",arrow:"always"}},t._l(t.$store.state.timeRecords,function(e,n){return a("el-carousel-item",[a("div",{staticClass:"slide-holder",class:"slide-bg-"+Number.parseInt(n%10)},[a("div",{staticClass:"record-info"},[a("h2",[t._v(t._s(e.year+"年"+e.month+"月"+e.date+"日"))]),a("h3",[t._v(t._s(t.days[e.day]))]),t._l(e.items,function(e,n){return a("p",[t._v(t._s(n+1+". "+e.content+", "+e.time+"h."))])})],2)])])}))],1)],1)],1)},staticRenderFns:[]}},315:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"auth"}},[a("star-flow"),a("div",{attrs:{id:"auth-input"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8,offset:8}},[a("el-tooltip",{attrs:{disabled:t.disabled,content:t.errorTip,placement:"bottom-start",effect:"light"}},[a("el-input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{placeholder:"请输入密码",type:"password"},domProps:{value:t.password},on:{input:function(e){t.password=e}}},[a("template",{slot:"append"},[a("el-button",{on:{click:t.signin}},[t._v("Go")])],1)],2)],1)],1)],1)],1)],1)},staticRenderFns:[]}},316:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"edit-time-record"}},[a("el-card",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("h3",[t._v("编辑时间记录")])]),a("el-col",{attrs:{span:8,offset:10}},[a("el-date-picker",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{id:"edit-time-record-date",type:"date",placeholder:"选择日期",editable:!1},domProps:{value:t.date},on:{input:function(e){t.date=e}}})],1)],1),t._l(t.records,function(e,n){return a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:1,offset:1}},[a("span",[t._v(t._s(n+1)+".")])]),a("el-col",{attrs:{span:11}},[a("el-input",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"record.content"}],attrs:{id:"content",placeholder:"内容"},domProps:{value:e.content},on:{input:function(t){e.content=t}}})],1),a("el-col",{attrs:{span:5}},[a("el-input-number",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"record.time"}],attrs:{step:.1,min:.1,max:24},domProps:{value:e.time},on:{input:function(t){e.time=t}}})],1),a("el-col",{attrs:{span:5,offset:1}},[a("el-dropdown",{on:{command:t.handleCommand}},[a("span",[t._v(t._s(e.type)+" "),a("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),a("el-dropdown-menu",{slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"学习-"+n}},[t._v("学习")]),a("el-dropdown-item",{attrs:{command:"工作-"+n}},[t._v("工作")]),a("el-dropdown-item",{attrs:{command:"休闲-"+n}},[t._v("休闲")]),a("el-dropdown-item",{attrs:{command:"娱乐-"+n}},[t._v("娱乐")]),a("el-dropdown-item",{attrs:{command:"运动-"+n}},[t._v("运动")]),a("el-dropdown-item",{attrs:{command:"其他-"+n}},[t._v("其他")])],1)],1)],1)],1)}),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:2,offset:9}},[a("el-tooltip",{attrs:{content:"添加条目",placement:"top"}},[a("el-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.addRecord}})],1)],1),a("el-col",{attrs:{span:2}},[a("el-tooltip",{attrs:{content:"删除条目",placement:"top"}},[a("el-button",{attrs:{type:"primary",icon:"minus"},on:{click:t.removeRecord}})],1)],1),a("el-col",{attrs:{span:2}},[a("el-tooltip",{attrs:{content:"提交记录",placement:"top"}},[a("el-button",{attrs:{type:"primary",icon:"check"},on:{click:t.submitRecords}})],1)],1)],1)],2),a("el-dialog",{directives:[{name:"model",rawName:"v-model",value:t.dialogVisible,expression:"dialogVisible"}],attrs:{title:"提示:",size:"tiny"},domProps:{value:t.dialogVisible},on:{input:function(e){t.dialogVisible=e}}},[a("span",[t._v(t._s(t.dialogContent))]),a("span",{slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("确定")])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=app.f76b805333e77cf0b750.js.map