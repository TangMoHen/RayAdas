// 百度地图API功能
var map = new BMap.Map("position");  // 创建Map实例
//	    map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
map.centerAndZoom("邢台市桥西区守敬北路与泉南西大街交叉口南100米", 18);      // 初始化地图,用城市名设置地图中心点
map.enableScrollWheelZoom();//启动鼠标滚轮缩放地图
var local = new BMap.LocalSearch(map, {
  renderOptions: { map: map, panel: "r-result" }
});
local.search("邢台市桥西区守敬北路与泉南西大街交叉口南100米");
//	    $(function(){
//	        $("#dituContent").css("width",$(window).width());
//	    })
