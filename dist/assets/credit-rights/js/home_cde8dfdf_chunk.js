webpackJsonp([1,3],Array(47).concat([function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),u=o(c),l=n(26),d=(o(l),n(48)),p=o(d),f=n(63),m=o(f),h=n(74),y=o(h),g=n(76),v=(o(g),"/ebbp/nologin/ajax/query/areaInfo/1001000/1001003?instCode=CCPP&returnType=2"),b={hot:"hotCityList",list:"cityMap",id:"cityCode",name:"cityName"},w=function(t){function n(){r(this,n);var e=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.state={selectedCity:"",cities:{},loading:!0},e}return a(n,t),s(n,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){var t=this;e.ajax({url:v,type:"GET",dataType:"json",success:function(e){e&&"0"===e.ret&&t.setState({loading:!1,cities:e.content,selectedCity:Util.getQueryString("city")})},error:function(){},complete:function(){}})}},{key:"selectCity",value:function(e,t){}},{key:"goBack",value:function(){}},{key:"render",value:function(){var e=null;return e=u.default.createElement("div",{className:"du-page-home"},u.default.createElement(m.default,{title:"选择城市"}),u.default.createElement(y.default,null,u.default.createElement(p.default,{city:this.state.cities,structure:b,selectTurnToNextPage:this.selectCity,setPosition:!0,selectedPostion:this.state.selectedCity})))}}]),n}(c.Component);t.default=w}).call(t,n(3))},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(49),i=o(r);t.default=i.default},function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),u=o(c),l=n(50),d=o(l),p=n(55),f=function(t){function n(e){r(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={hotCityList:[],cityMap:t.props.city[t.props.structure.list],charAtList:[],chars:[],setPositionCode:"",setPositionTxt:"",setPositionState:1,isOneList:!1,isOneHot:!1,hasHot:!1},t}return a(n,t),s(n,[{key:"componentWillMount",value:function(){d.default.use();var e=this,t=!1,n=!1,o=!0,r=[],i=1,a="",s=e.getAllChars(e.state.cityMap);1===s.length&&(t=!0,r=e.state.cityMap[s[0]]),1===e.props.city[this.props.structure.hot].length?n=!0:0===e.props.city[this.props.structure.hot].length&&(o=!1),null===this.props.selectedPostion?this.setLocation():(i=2,a=this.props.selectedPostion),e.setState({isOneList:t,isOneHot:n,hasHot:o,charAtList:r,chars:e.getChars(s,5),hotCityList:e.getChars(e.props.city[e.props.structure.hot],3),setPositionState:i,setPositionTxt:a})}},{key:"componentDidMount",value:function(){this.getCharAtList()}},{key:"componentWillUnmount",value:function(){d.default.unuse()}},{key:"setLocation",value:function(){var e=this;p.Geolocation.getPosition({type:e.props.setPisitionByIpOrLocal,callBack:function(t){"0"===t.ret?(e.props.cityTestData.data[this.props.structure.code]=t.info.city[this.props.structure.code],e.cityTest(t.info.city)):e.setState({setPositionState:4})}})}},{key:"getAllChars",value:function(e){var t=[];for(var n in e)t.push(n);return t}},{key:"getChars",value:function(e,t){var n=[],o=[];e.length%t!==0&&(e.length=Math.ceil(e.length/t)*t);for(var r=0;r<e.length;r++)r%t===0&&0!==r?(n.push(o),o=[],o.push(e[r])):o.push(e[r]);return n.push(o),n}},{key:"getCharAtList",value:function(){var t=this;e(".city-citychar").on("click",function(){""!==e(this).text()&&(e(".city-citychar").removeClass("city-selected"),e(this).addClass("city-selected"),e("#city-selected").insertAfter(e(this).parent()),t.setState({charAtList:t.state.cityMap[e(this).text()]}))})}},{key:"handleClick",value:function(e,t){this.props.selectTurnToNextPage(e,t)}},{key:"cityTest",value:function(t){var n=this;e.ajax({url:this.props.cityTestData.url,type:"GET",data:this.props.cityTestData.data,dataType:"json",success:function(e){"0"===e.resultNumCode?n.setState({setPositionState:"1"===e.isValid?2:3,setPositionTxt:t.city,setPositionCode:t[n.props.structure.code]}):n.setState({setPositionState:4})},error:function(){n.setState({setPositionState:4})},complete:function(){}})}},{key:"render",value:function(){var e=this,t=null,n=null,o=null;return n=1===this.state.setPositionState?u.default.createElement("div",{className:"du-panel-ft du-panel-ft-center position-state-one"},u.default.createElement("div",{className:"position-loading-img"}),u.default.createElement("span",null,"正在定位城市...")):2===this.state.setPositionState?u.default.createElement("div",{className:"du-panel-bd position-state-two"},u.default.createElement("div",{className:"du-item du-item-side",onClick:this.handleClick.bind(this,this.state.setPositionCode,this.state.setPositionTxt)},u.default.createElement("div",{className:"du-item-hd"},this.state.setPositionTxt))):3===this.state.setPositionState?u.default.createElement("div",{className:"du-panel-bd position-state-three"},u.default.createElement("div",{className:"du-item du-item-side"},u.default.createElement("div",{className:"du-item-hd"},this.state.setPositionTxt),u.default.createElement("div",{className:"du-item-bd"},"尚未开通此业务，请选择其他城市"))):u.default.createElement("div",{className:"du-panel-ft du-panel-ft-center position-state-four"},u.default.createElement("div",null,"暂时无法定位，请手动选择城市")),this.props.setPosition&&(t=u.default.createElement("div",{className:"du-panel"},u.default.createElement("div",{className:"du-panel-hd"},"当前定位城市"),n)),this.state.hasHot&&(o=u.default.createElement("div",{className:"du-panel"},u.default.createElement("div",{className:"du-panel-hd"},"热门城市"),u.default.createElement("div",{className:"du-panel-bd"},this.state.hotCityList.map(function(t,n){return u.default.createElement("ul",{key:n,className:"city-hotcity-ul"},t.map(function(t,n){return void 0===t?u.default.createElement("li",{key:n,className:e.state.isOneHot?"city-hotcity-none":"city-hotcity"}):u.default.createElement("li",{key:n,className:"city-hotcity",onClick:e.handleClick.bind(e,t[e.props.structure.code],t[e.props.structure.name])},t[e.props.structure.name])}))})))),u.default.createElement("div",{className:"city-select"},t,o,u.default.createElement("div",{className:"du-panel"},u.default.createElement("div",{className:"du-panel-hd"},"全部城市"),u.default.createElement("div",{className:"du-panel-bd citychar-panel"},this.state.chars.map(function(t,n){return u.default.createElement("ul",{className:"city-citychar-ul clearfix",key:n},t.map(function(t,n){return void 0===t?u.default.createElement("li",{key:n,className:e.state.isOneList?"city-citychar-none":"city-citychar"}):u.default.createElement("li",{key:n,className:e.state.isOneList?"city-citychar city-selected":"city-citychar"},t)}))}),u.default.createElement("ul",{className:"du-list",id:"city-selected"},this.state.charAtList.map(function(t,n){return u.default.createElement("li",{key:n,className:"du-item du-item-link"},u.default.createElement("a",{onClick:e.handleClick.bind(e,t[e.props.structure.code],t[e.props.structure.name])},t[e.props.structure.name]))})))))}}]),n}(c.Component);t.default=f}).call(t,n(3))},function(e,t,n){var o,r=0,i=n(51);"string"==typeof i&&(i=[[e.id,i,""]]),t.use=t.ref=function(){return r++||(t.locals=i.locals,o=n(54)(i,{})),t},t.unuse=t.unref=function(){--r||(o(),o=null)}},function(e,t,n){t=e.exports=n(52)(),t.push([e.id,'body{background:#f4f3f4}.du-panel-ft:before{border-top:none}.city-select .du-panel-hd{min-height:.9rem;font-size:.3rem;background-color:#f4f3f4}.city-select .du-panel{margin-bottom:0}.citychar-panel .city-citychar-ul:last-child li,.citychar-panel ul:last-child li,.du-panel-bd:after,.du-panel-hd:after,.du-panel:after{border-bottom:none}.city-hotcity{-webkit-box-flex:.3333;-ms-flex:.3333;flex:.3333;width:33.33%;height:1rem;border-left:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;font-size:.3rem;line-height:1rem;text-align:center;color:#333;background-color:#fff}.city-hotcity-ul .city-hotcity:first-child{border-left:none}.city-citychar-ul{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.city-citychar{-webkit-box-flex:.2;-ms-flex:.2;flex:.2;font-size:.3rem;width:20%;height:1rem;border-left:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;line-height:1rem;text-align:center;color:#333;background-color:#fff}.city-selected{position:relative}.city-selected:after{content:"";position:absolute;bottom:-.14rem;left:.612rem;width:.26rem;height:.26rem;border-bottom:1px solid #e6e6e6;border-left:1px solid #e6e6e6;background:#fff;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.city-citychar-cities{height:1rem;margin-left:.3rem;border-bottom:1px solid #e6e6e6;font-size:.3rem;line-height:1rem;letter-spacing:0;color:#333}.city-citychar-ul li:nth-child(5n+1){border-left:none}.city-hotcity-panel li:nth-child(3n){border-right:none}.city-hotcity-ul{overflow:hidden;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex}.city-hotcity-ul:last-child li{border-bottom:none}.position-loading-img{width:.37rem;height:.37rem;background:url('+n(53)+") no-repeat;background-size:contain;margin-right:.35rem;-webkit-animation:du-spinner-rotate 1.2s infinite linear;animation:du-spinner-rotate 1.2s infinite linear}.du-panel-ft{min-height:1rem}#city-selected{border-bottom:.01rem solid #e6e6e6;padding-top:.01rem}.position-state-four div,.position-state-one span,.position-state-three .du-item-bd{font-size:.26rem;color:#aaa}.position-state-three .du-item-bd{margin-left:.3rem}.position-state-two .du-item{min-height:1rem;padding:.2rem .3rem}.du-item:after{left:.3rem}.city-citychar-none{width:20%;height:1rem;border-bottom:1px solid #e6e6e6;line-height:1rem}.citychar-panel #city-selected:last-child{border-bottom:none;margin-top:-1px}.du-item-link>a{padding:.2rem .3rem}",""])},,function(e,t,n){e.exports=n.p+"/assets/credit-rights/img/position-loading_2dd3003e.png"},,function(e,t,n){"use strict";var o=n(56),r=n(60),i=n(62),a=n(57),s=n(59),c=n(58),u={Geolocation:o,Login:r,Pay:i,Util:a,Common:s,HTTP:c};e.exports=u},function(e,t,n){"use strict";var o=n(57),r=n(58),i=n(59),a={bdMapAK:"IhcNRiIMm1cE12Dviss4EXuz",getH5GeolocationOptions:function(e){e=e?e:{};var t={enableHighAccuracy:!0,maximumAge:3e4,timeout:2e3},n=o.extend(t,e);return n},getPositionOptions:function(e){var t=this;e=e?e:{};var n={type:"1",callBack:function(){},H5Options:t.getH5GeolocationOptions({})},r=o.extend(n,e);return r},getPosition:function(e){function t(){o.getPositionByH5Api(function(e){if("0"===e.ret){var t=e.coords,n=t.lat,r=t.lon;o.getCityInfoByCoords(n,r,function(e){"0"===e.ret?(u.ret="0",u.info={position:{lat:n,lon:r},city:e.info},u.msg="success",s(u)):(u.ret="-4",u.msg="getCityInfoByCoords方法报错",s(u))})}else"-2"===e.ret?(u.ret="-1",u.msg="H5Position-权限拒绝",s(u)):(u.ret="-6",u.msg="H5-定位失败",s(u))},c)}function n(){o.getPositionByWalletApi(function(e){if("0"===e.ret){var n=e.coords,r=n.lat,i=n.lon;o.getCityInfoByCoords(r,i,function(e){"0"===e.ret?(u.ret="0",u.info={position:{lat:r,lon:i},city:e.info},u.msg="success",s(u)):(u.ret="-4",u.msg="getCityInfoByCoords方法报错",s(u))})}else"-2"===e.ret?(u.ret="-1",u.msg="walletApp-权限拒绝",s(u)):"-4"===e.ret?t():(u.ret="-2",u.msg="walletApp-定位失败",s(u))})}var o=this,r=o.getPositionOptions(e),a=r.type,s=r.callBack,c=r.H5Options,u={ret:"0",info:{},msg:"success"};if("1"===a)o.getCityInfoByIp(function(e){"0"===e.ret?(u.ret="0",u.info={city:e.info},u.msg="success",s(u)):(u.ret="-5",u.msg="getCityInfoByIp方法报错",s(u))});else if("2"===a){var l=i.isInApp();l?n():t()}else u.ret="-3",u.msg="参数错误",s(u)},getPositionByWalletApi:function(e){var t={ret:"0",coords:{lat:0,lon:0},msg:"success"};Agent&&Agent.position({before:function(){},success:function(n){var o=n.data;if("0"===o.result){var r=o.cnt.data.latitude,i=o.cnt.data.longitude;t={ret:"0",coords:{lat:r,lon:i},msg:"success"},e(t)}else{switch(t={ret:"-1",coords:{lat:0,lon:0},msg:"定位失败"},o.cnt.data.errCode){case"10001":t.ret="-1",t.msg="参数非法";break;case"10002":t.ret="-2",t.msg="权限拒绝";break;case"10003":t.ret="-3",t.msg="内部错误";break;case"10004":t.ret="-4",t.msg="功能未实现"}e(t)}},error:function(n){t={ret:"-4",coords:{lat:0,lon:0},msg:"功能未实现"},e(t)}})},getPositionByH5Api:function(e,t){var n=this.getH5GeolocationOptions(t);navigator.geolocation.getCurrentPosition(function(t){var n=t.coords.latitude,o=t.coords.longitude,r={ret:"0",coords:{lat:n,lon:o},msg:"success"};e(r)},function(t){var n={ret:"-1",coords:{lat:0,lon:0},msg:"fail"};switch(t.code){case t.TIMEOUT:n.ret="-1",n.msg="定位超时";break;case t.PERMISSION_DENIED:n.ret="-2",n.msg="权限拒绝";break;case t.POSITION_UNAVAILABLE:n.ret="-3",n.msg="获取失败"}e(n)},n)},getCityInfoByIp:function(e){var t=this,n="https://api.map.baidu.com/location/ip?ak="+t.bdMapAK+"&coor=bd09ll",o={ret:"0",info:{},msg:"success"};r.jsonp(n,function(t){switch(t.status){case 0:o.ret="0",o.msg="success",o.info={city:t.content.address_detail.city,cityCode:t.content.address_detail.city_code};break;default:o.ret=t.status+"",o.msg=t.message}e(o)},function(){o={ret:"-1",info:{},msg:"fail"},e(o)})},getCityInfoByCoords:function(e,t,n){var o=this,i=e+","+t,a="https://api.map.baidu.com/geocoder/v2/?ak="+o.bdMapAK+"&location="+i+"&output=json&pois=0",s={ret:"0",info:{},msg:"success"};r.jsonp(a,function(e){switch(e.status){case 0:s.ret="0",s.msg="success",s.info={country:e.result.addressComponent.country,countryCode:e.result.addressComponent.country_code,city:e.result.addressComponent.city,cityCode:e.result.cityCode};break;default:s.ret=e.status+"",s.msg=e.message}n(s)},function(){s={ret:"-1",info:{},msg:"fail"},n(s)})}};e.exports=a},function(e,t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o={extend:function(e,t){var n=this.deepCopy(e,{}),o=this.deepCopy(t,{});for(var r in o)n[r]=o[r];return n},deepCopy:function(e,t){t=t||{};for(var o in e)"object"===n(e[o])?(t[o]=e[o].constructor===Array?[]:{},this.deepCopy(e[o],t[o])):t[o]=e[o];return t},filterStr:function(e){return e+="",e=e.replace(/\;/g,""),e=e.replace(/\&/g,"&amp;"),e=e.replace(/\</g,"&lt;"),e=e.replace(/\>/g,"&gt;"),e=e.replace(/\'/g,""),e=e.replace(/\-\-/g," "),e=e.replace(/\//g,"")},getQueryString:function(e){var t=this,n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(n);return null!==o?decodeURIComponent(t.filterStr(o[2])):null},dateFormat:function(e,t){var n=new Date(e),o={"Y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in o)new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?o[r]:("00"+o[r]).substr((""+o[r]).length)));return t},isInArray:function(e,t){for(var n=e.length,o=!1,r=0;r<n;r++){var i=e[r];if(i===t){o=!0;break}}return o},getStringifyOptions:function(e){e=e?e:{};var t={exceptions:[""]},n=o.extend(t,e);return n},stringifyParams:function(e,t){var n=this,o=n.getStringifyOptions(t),r=o.exceptions,i=e||{},a="",s=[];for(var c in i){var u=n.isInArray(r,i[c]);!u&&s.push(c+"="+encodeURIComponent(i[c]))}return a=s.join("&")},getDeviceInfo:function(){var e=navigator.userAgent.toLowerCase(),t=(navigator.appVersion.toLowerCase(),{browser:{uc:e.indexOf("ucbrowser")>-1,qq:e.indexOf("qq/")>-1,wechat:e.indexOf("micromessenger")>-1,qqbrowser:e.indexOf("qqbrowser")>-1,bd:e.indexOf("baidubrowser")>-1,ff:e.indexOf("firefox")>-1,mbaidu:e.indexOf("baiduboxapp")>-1,wallet:e.indexOf("baiduwallet")>-1,chrome:e.indexOf("chrome")>-1||e.indexOf("crios")>-1,safari:e.indexOf("safari")>-1},core:{ie:e.indexOf("trident")>-1,opera:e.indexOf("presto")>-1,webkit:e.indexOf("applewebkit")>-1,firefox:e.indexOf("gecko")>-1&&e.indexOf("khtml")==-1},system:{ios:!!e.match(/\(i[^;]+;( u;)? cpu.+mac os x/),android:e.indexOf("android")>-1||e.indexOf("adr")>-1}}),n={};for(var o in t){for(var r in t[o])if(t[o][r]){n[o]=r;break}void 0==n[o]&&(n[o]="other")}return n},parseImageUrl:function(e){var t="";if(e){var n=e.split(",");n.length>0&&(t=n[0])}return t}};e.exports=o},function(e,t,n){"use strict";var o=n(57),r={jsonp:function(e,t,n){var o="jsonp"+Date.parse(new Date);e=e+(e.indexOf("?")>-1?"&":"?")+"callback="+o;var r=document.createElement("script");window[o]=function(e){r.parentNode.removeChild(r),delete window[o],t&&t(e)},r.onerror=function(){r.parentNode.removeChild(r),delete window[o],n&&n({ret:"-1",msg:"error"})},r.src=e,r.type="text/javascript",document.body.appendChild(r)},getAjaxOptions:function(e){e=e?e:{};var t={method:"get",url:"",data:{},async:!0,success:function(){},error:function(){},timeout:1e4},n=o.extend(t,e);return n},ajax:function(e){var t,n=this.getAjaxOptions(e),o=null,r=null,i=n.url,a=n.async,s=n.method,c=n.timeout,u=n.data,l=n.success,d=n.error,p={ret:"0",data:"",msg:"success"},f={ret:"-1",msg:"请求出错"};if(t=setTimeout(function(){r?r.abort():o&&o.abort(),f={ret:"-1",msg:"请求超时"},d(f)},c),u instanceof Object){var m="";for(var h in u)m+=h+"="+encodeURIComponent(u[h])+"&";u=m}window.XDomainRequest?(r=new XDomainRequest,r?(r.onerror=function(){f={ret:"-2",msg:"XDomainRequest is on error!!"},d(f)},r.onload=function(){t&&clearTimeout(t),p={ret:"0",data:r.responseText,msg:"success"},l(p)},"get"===s.toLowerCase()?(null===u||""===u?r.open("get",i):r.open("get",i+"?"+u),r.send()):"post"==s.toLowerCase()&&(r.open("post",i),r.setRequestHeader("content-Type","application/x-www-form-urlencoded"),r.send(u))):(f={ret:"-3",msg:"XDomainRequest请求对象创建失败"},d(f))):(window.XMLHttpRequest?o=new XMLHttpRequest:window.ActiveXObject?o=new ActiveXObject("Microsoft.XMLHTTP"):(f={ret:"-4",msg:"请求对象创建失败-不知如何创建"},d(f)),o.onreadystatechange=function(e){4===o.readyState&&(200===o.status?(t&&clearTimeout(t),p={ret:"0",data:o.responseText,msg:"success"},l(p)):404==o.status?(f={ret:"-5",msg:"404-找不到页面"},d(f)):500==o.status&&(f={ret:"-5",msg:"500-服务器内部错误"},d(f)))},"get"===s.toLowerCase()?(null===u||""===u?o.open("get",i,a):o.open("get",i+"?"+u,a),o.send(null)):"post"===s.toLowerCase()&&(o.open("post",i,a),o.setRequestHeader("content-Type","application/x-www-form-urlencoded"),o.send(u)))}};e.exports=r},function(e,t,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=n(57),i={isInApp:function(e){var t=!1;return Agent&&Agent.OS.wallet&&(t=!0),t},getTraceOptions:function(e){e=e?e:{};var t={projectName:window.statisticOperationalProject?window.statisticOperationalProject:"",ctrl:"",val:[],next:function(){}},n=r.extend(t,e);return n},traceThis:function(e,t){var n=this.getTraceOptions(t),r=n.ctrl,i=n.val,a=n.next,s=n.projectName,c={en:s+"_"+e+(r?"_"+r:"")};!r&&(c.eg="in"),i&&(c.ev="object"===("undefined"==typeof i?"undefined":o(i))?i:[i]),window.BfbStatistic&&window.BfbStatistic.sendUserActionData(c,a)},getNAEventsOptions:function(e){e=e?e:{};var t={pageGoBack:function(){}},n=r.extend(t,e);return n},AgentRegisterEvent:function(e){var t=this.getNAEventsOptions(e),n=t.pageGoBack;Agent&&Agent.registerEvent({pageGoBack:n})},AgentCloseWindow:function(){Agent&&Agent.closeWindow()},AgentSetTitle:function(e){Agent&&Agent.setTitle(e)}};e.exports=i},function(e,t,n){"use strict";var o=n(57),r=n(58),i=n(59),a=n(61),s={_wappassDomain:a.wappassDomain,syncLogin:function(){var e=this;qianbaosh.syncDomains(e._wappassDomain,!0)},getLoginNAOptions:function(e){e=e?e:{};var t={success:function(){},error:function(){}},n=o.extend(t,e);return n},getLoginH5Options:function(e){e=e?e:{};var t={u:window.location.href,isReplace:!1,sms:"0"},n=o.extend(t,e);return n},getLoginOptions:function(e){var t=this,n=t.getLoginNAOptions({}),r=t.getLoginH5Options({});e=e?e:{};var i={success:n.success,error:n.error,u:r.u,isReplace:r.isReplace,sms:"0"},a=o.extend(i,e);return a},goToLogin:function(e){var t=this,n=this.getLoginOptions(e),o=n.success,r=n.error,a=n.u,s=n.isReplace,c=n.sms,u=i.isInApp();u?t.loginNA({success:function(){o()},error:function(){r()}}):t.loginH5({u:a,isReplace:s,sms:c})},loginNA:function(e){var t=this,n=this.getLoginNAOptions(e),o=n.success,r=n.error,i={ret:"0",msg:"success"};Agent&&Agent.bdLogin({param:{tpl:"bp"},success:function(e){"fail"===e.type?(i={ret:"-1",msg:"success-error"},r(i)):(i={ret:"0",msg:"success"},qianbaosh.syncDomains(t._wappassDomain,!0),qianbao.set_pass_domain(t._wappassDomain),qianbaosh.crossdomain(window.location.hostname,{pollType:2,pollTime:3e3,successCallback:function(){o(i)},failCallback:function(){o(i)}}))},error:function(e){i={ret:"-2",msg:"error-error"},r(i)}})},loginH5:function(e){var t=this,n=this.getLoginH5Options(e),o=n.u,r=n.isReplace,i=n.sms,a="0"===i?"2":"1",s=window.location.hostname,c=o;qianbao.set_pass_domain(t._wappassDomain);var u="http://"+t._wappassDomain+"/passport/?login&tpl=bp&loginLink=1&sms="+a+"&adapter=smarttv&u="+encodeURIComponent(qianbao.get_login_url(s,c));r?window.location.replace(u):window.location.href=u},phoneBindH5:function(e){var t=this,n=this.getLoginH5Options(e),o=n.u,r=n.isReplace,a=i.isInApp(),s=a?1:"smarttv";qianbao.set_pass_domain(t._wappassDomain);var c="http://"+t._wappassDomain+"/passport/bindwidget?action=bindmobile&adapter="+s+"&skip=1&u="+encodeURIComponent(o);r?window.location.replace(c):window.location.href=c},getUsrHeadImg:function(e){var t=this,n="https://wallet.baidu.com/portrait/0/get_portrait/0",o=function(){r.jsonp(n,function(t){if(t&&t.islogin){var n=t.head_url;e(n?{isLogin:1,head_url:n}:{isLogin:1,head_url:""})}else e({isLogin:0,head_url:""})},function(){e({isLogin:0,head_url:""})})};t.syncLoginToCurrentDomain(function(){o()})},syncLoginToCurrentDomain:function(e){var t=this;qianbao.set_pass_domain(t._wappassDomain);var n={ret:"0",msg:"success"};qianbaosh.crossdomain(window.location.hostname,{pollType:2,pollTime:3e3,successCallback:function(){n={ret:"0",msg:"success"},e(n)},failCallback:function(){n={ret:"-1",msg:"fail"},e(n)}})}};s.syncLogin(),e.exports=s},function(e,t){"use strict";var n={wappassDomain:"wappass.baidu.com"};e.exports=n},function(e,t,n){"use strict";var o=n(57),r=(n(58),n(59)),i=n(61),a={getSynLoginPayUrl:function(e){qianbaosh.set_pass_domain(i.wappassDomain);var t="www.baifubao.com",n=e,o=qianbao.get_login_url(t,n);return o},getPayOptions:function(e){e=e?e:{};var t={u:"",callBack:function(){}},n=o.extend(t,e);return n},doPay:function(e){var t=this,n=this.getPayOptions(e),o=n.callBack,i=n.u,a=r.isInApp();a?t.payNA(i,o):t.payH5(i)},doAuth:function(e){},payNA:function(e,t){var n={ret:"0",msg:"success"};Agent&&Agent.doPay({param:e,success:function(e){switch(e.statecode){case"0":n={ret:"0",order_no:e.order_no,notify:e.notify,msg:"success"};break;default:n={ret:"-1",msg:"error"}}t(n)},error:function(e){n={ret:"-2",msg:"error"},t(n)}})},payH5:function(e){this.getSynLoginPayUrl(e);window.location.href=e},authNA:function(){Agent&&Agent.auth({param:"service_type=9",success:function(){},error:function(){}})},authH5:function(e){this.getSynLoginPayUrl(e);window.location.href=e}};e.exports=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(64),i=o(r);t.default=i.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),i=o(r),a=n(65),s=o(a);n(72);var c=i.default.createClass({displayName:"Header",propTypes:{title:i.default.PropTypes.string,operation:i.default.PropTypes.string,suppleHandle:i.default.PropTypes.func},getDefaultProps:function(){return{title:"百度钱包",suppleTitle:"",suppleHandle:function(){},returnBtnDisplay:!0}},backEvent:function(e){e.preventDefault(),this.props.backEvent?this.props.backEvent():this.props.router.goBack()},suppleEvent:function(e){e.preventDefault(),this.props.suppleHandle()},render:function(){var e,t="";return this.props.returnBtnDisplay&&(t=i.default.createElement("a",{title:"返回",className:"du-header-return",href:"javascript:void(0)",onClick:this.backEvent},i.default.createElement("i",{className:"du-iconfont du-icon-arrow-left-thick"}))),e=i.default.createElement("header",{className:"du-page-hd"},i.default.createElement("h1",{className:"du-header-title"},this.props.title),t,i.default.createElement("a",{className:"du-header-act",href:"javascript:void(0)",onClick:this.suppleEvent,dangerouslySetInnerHTML:{__html:this.props.suppleTitle}}))}});e.exports=(0,s.default)(c)},function(e,t,n){(function(o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return e.displayName||e.name||"Component"}function a(e,t){var n=t&&t.withRef,r=d.default.createClass({displayName:"WithRouter",contextTypes:{router:m.routerShape},propTypes:{router:m.routerShape},getWrappedInstance:function(){return n?void 0:"production"!==o.env.NODE_ENV?(0,u.default)(!1,"To access the wrapped instance, you need to specify `{ withRef: true }` as the second argument of the withRouter() call."):(0,u.default)(!1),this.wrappedInstance},render:function(){var t=this,o=this.props.router||this.context.router,r=s({},this.props,{router:o});return n&&(r.ref=function(e){t.wrappedInstance=e}),d.default.createElement(e,r)}});return r.displayName="withRouter("+i(e)+")",r.WrappedComponent=e,(0,f.default)(r,e)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=a;var c=n(8),u=r(c),l=n(1),d=r(l),p=n(66),f=r(p),m=n(67);e.exports=t.default}).call(t,n(7))},,function(e,t,n){(function(e){"use strict";function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.router=t.routes=t.route=t.components=t.component=t.location=t.history=t.falsy=t.locationShape=t.routerShape=void 0;var i=n(1),a=n(68),s=r(a),c=n(71),u=o(c),l=n(69),d=r(l),p=i.PropTypes.func,f=i.PropTypes.object,m=i.PropTypes.shape,h=i.PropTypes.string,y=t.routerShape=m({push:p.isRequired,replace:p.isRequired,go:p.isRequired,goBack:p.isRequired,goForward:p.isRequired,setRouteLeaveHook:p.isRequired,isActive:p.isRequired}),g=t.locationShape=m({pathname:h.isRequired,search:h.isRequired,state:f,action:h.isRequired,key:h}),v=t.falsy=u.falsy,b=t.history=u.history,w=t.location=g,x=t.component=u.component,_=t.components=u.components,O=t.route=u.route,E=t.routes=u.routes,C=t.router=y;"production"!==e.env.NODE_ENV&&!function(){var n=function(t,n){return function(){return"production"!==e.env.NODE_ENV?(0,d.default)(!1,n):void 0,t.apply(void 0,arguments)}},o=function(e){return n(e,"This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.")},r=function(e,t){return n(e,"The `"+t+"` prop type is now exported as `"+t+"Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.")};t.falsy=v=o(v),t.history=b=o(b),t.component=x=o(x),t.components=_=o(_),t.route=O=o(O),t.routes=E=o(E),t.location=w=r(w,"location"),t.router=C=r(C,"router")}();var k={falsy:v,history:b,location:w,component:x,components:_,route:O,router:C};"production"!==e.env.NODE_ENV&&(k=(0,s.default)(k,"The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.")),t.default=k}).call(t,n(7))},function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.canUseMembrane=void 0;var r=n(69),i=o(r),a=t.canUseMembrane=!1,s=function(e){return e};if("production"!==e.env.NODE_ENV){try{Object.defineProperty({},"x",{get:function(){return!0}}).x&&(t.canUseMembrane=a=!0)}catch(e){}a&&(s=function(t,n){var o={},r=function(r){return Object.prototype.hasOwnProperty.call(t,r)?"function"==typeof t[r]?(o[r]=function(){return"production"!==e.env.NODE_ENV?(0,i.default)(!1,n):void 0,t[r].apply(t,arguments)},"continue"):void Object.defineProperty(o,r,{get:function(){return"production"!==e.env.NODE_ENV?(0,i.default)(!1,n):void 0,t[r]}}):"continue"};for(var a in t){r(a)}return o})}t.default=s}).call(t,n(7))},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(t.indexOf("deprecated")!==-1){if(c[t])return;c[t]=!0}t="[react-router] "+t;for(var n=arguments.length,o=Array(n>2?n-2:0),r=2;r<n;r++)o[r-2]=arguments[r];s.default.apply(void 0,[e,t].concat(o))}function i(){c={}}t.__esModule=!0,t.default=r,t._resetWarned=i;var a=n(70),s=o(a),c={}},function(e,t,n){(function(t){"use strict";var n=function(){};"production"!==t.env.NODE_ENV&&(n=function(e,t,n){var o=arguments.length;n=new Array(o>2?o-2:0);for(var r=2;r<o;r++)n[r-2]=arguments[r];if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(t.length<10||/^[s\W]*$/.test(t))throw new Error("The warning format should be able to uniquely identify this warning. Please, use a more descriptive format than: "+t);if(!e){var i=0,a="Warning: "+t.replace(/%s/g,function(){return n[i++]});"undefined"!=typeof console;try{throw new Error(a)}catch(e){}}}),e.exports=n}).call(t,n(7))},function(e,t,n){"use strict";function o(e,t,n){if(e[t])return new Error("<"+n+'> should not have a "'+t+'" prop')}t.__esModule=!0,t.routes=t.route=t.components=t.component=t.history=void 0,t.falsy=o;var r=n(1),i=r.PropTypes.func,a=r.PropTypes.object,s=r.PropTypes.arrayOf,c=r.PropTypes.oneOfType,u=r.PropTypes.element,l=r.PropTypes.shape,d=r.PropTypes.string,p=(t.history=l({listen:i.isRequired,push:i.isRequired,replace:i.isRequired,go:i.isRequired,goBack:i.isRequired,goForward:i.isRequired}),t.component=c([i,d])),f=(t.components=c([p,a]),t.route=c([a,u]));t.routes=c([f,s(f)])},function(e,t,n){var o=n(73);"string"==typeof o&&(o=[[e.id,o,""]]);n(54)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(52)(),t.push([e.id,'.du-page-hd{border-bottom:0 solid transparent;position:relative;width:100%;overflow:hidden;z-index:999;height:.88rem;line-height:.88rem;background-color:#fff}.du-page-hd .du-header-act,.du-page-hd .du-header-return,.du-page-hd .du-header-title{height:.88rem;overflow:hidden;top:0;position:absolute;z-index:998}.du-page-hd .du-header-title{color:#222;font-size:.36rem;text-align:center;left:0;width:100%}.du-page-hd .du-header-return{padding:0 .5rem 0 .33rem;left:0}.du-page-hd .du-header-return [class^=du-icon]:before{color:#999;font-size:.42rem;font-weight:400}.du-page-hd .du-header-act{padding:0 .33rem;color:#222;right:0}.du-page-hd:after{content:" ";position:absolute;left:0;bottom:0;width:100%;height:.01rem;border-bottom:1px solid #eee;color:#eee}',""]);
},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(75),i=o(r);t.default=i.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=n(1),u=o(c),l=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props.children;return u.default.createElement("div",{className:"du-page-bd"},u.default.createElement("div",{className:"du-page-bd-inner"},e))}}]),t}(u.default.Component);t.default=l},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(77),i=o(r);t.default=i.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){var e={type:"loading"},t=new a.default(e);return t}Object.defineProperty(t,"__esModule",{value:!0});var i=n(78),a=o(i);n(82),t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(79),i=o(r);t.default=i.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=document.createElement("div");t.id="layerRoot"+Date.now(),document.body.appendChild(t);var n=function(){t&&(u.default.unmountComponentAtNode(t),t.parentNode.removeChild(t),t=null)};"toast"===e.type?u.default.render(s.default.createElement(m,{outTime:e.outTime||2e3,toastStr:e.toastStr,closeLayer:n,surefun:e.sureFun}),t):"loading"===e.type?u.default.render(s.default.createElement(l,{type:"loading"}),t):"dialog"===e.type?u.default.render(s.default.createElement(l,{type:"dialog",addClassname:e.addClassname,surefun:e.sureFun,cancelfun:e.cancelFun,rootdom:t,closeLayer:n},e.html),t):u.default.render(s.default.createElement(l,null,e.html),t),this.closeLayer=n}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(1),s=o(a),c=n(2),u=o(c);n(80);var l=s.default.createClass({displayName:"OlayComponent",componentDidMount:function(){window.scrollTo(0,0)},handleClick:function(e){var t=e.target;t.classList.contains("sure")?(this.props.closeLayer&&this.props.closeLayer(),this.props.surefun&&this.props.surefun()):t.classList.contains("cancel")?(this.props.closeLayer&&this.props.closeLayer(),this.props.cancelfun&&this.props.cancelfun()):t.classList.contains("close")&&this.props.closeLayer&&this.props.closeLayer()},render:function(){var e=Math.max(document.documentElement.offsetHeight,window.innerHeight),t="";return"loading"===this.props.type?t="du-loading-shade":"dialog"===this.props.type&&(t="du-dialog-shade"),this.props.addClassname&&(t+=" "+this.props.addClassname),s.default.createElement("div",{className:t,style:{height:e},onClick:this.handleClick},s.default.createElement(d,i({},this.props,{type:this.props.type})))}}),d=s.default.createClass({displayName:"LayerComponent",componentDidMount:function(){this.refs.layer.style.visibility=""},render:function(){return"loading"===this.props.type?s.default.createElement("div",{className:"du-loading",ref:"layer"},s.default.createElement("div",{className:"du-loading-bd"},s.default.createElement(p,null),s.default.createElement(f,null))):s.default.createElement("div",{className:"du-dialog",ref:"layer"},s.default.Children.map(this.props.children,function(e){return e}))}}),p=s.default.createClass({displayName:"LoadingIconComponent",render:function(){return s.default.createElement("div",{className:"du-loading-snake"})}}),f=s.default.createClass({displayName:"LoadingTxtComponent",render:function(){return s.default.createElement("div",{className:"du-loading-text"},"正在加载...")}}),m=s.default.createClass({displayName:"ToastComponent",componentDidMount:function(){setTimeout(function(){this.props.closeLayer&&this.props.closeLayer()}.bind(this),this.props.outTime)},componentWillUnmount:function(){this.props.surefun&&this.props.surefun()},render:function(){return s.default.createElement("div",{className:"du-toast-shade"},s.default.createElement("div",{className:"du-toast"},s.default.createElement("div",{className:"du-toast-bd"},this.props.toastStr)))}});t.default=r},function(e,t,n){var o=n(81);"string"==typeof o&&(o=[[e.id,o,""]]);n(54)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(52)(),t.push([e.id,"",""])},function(e,t,n){var o=n(83);"string"==typeof o&&(o=[[e.id,o,""]]);n(54)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(52)(),t.push([e.id,".du-loading{top:50%;left:50%;position:fixed;z-index:9999;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;line-height:normal;border-radius:.05rem;padding:.2rem .3rem;background:rgba(0,14,12,.7)}.du-loading-snake{border-radius:50%;display:inline-block;-webkit-animation:du-spinner-rotate 1.2s infinite linear;animation:du-spinner-rotate 1.2s infinite linear;border:.03rem solid transparent;border-top-color:#ccc;border-left-color:#ccc;border-bottom-color:#ccc;width:.35rem;height:.35rem}.du-loading-text{vertical-align:top;display:inline-block;color:#fff;text-align:center;font-size:.28rem;margin-left:.1rem}.du-loading-shade{position:fixed;top:0;left:0;width:100%;height:100%;opacity:1;z-index:9998;background:rgba(0,14,12,0)}",""])}]));