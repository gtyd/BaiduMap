var HackMap = {
    /*
    * 将原始坐标系转换为百度坐标系
    * ggPoint：原始坐标系
    * callBack：回调函数，地图apitranslate只提供回调模式来获取转换后的返回值
    */
    Convert: function (ggPoint, callBack) {
        if (ggPoint == null) {
            console.log("参数格式错误");
            return;
        }
        if (typeof (BMap) === "undefined") {
            console.log("百度地图未加载");
            return;
        }
        var x = ggPoint["x"];
        var y = ggPoint["y"];

        var ggPoint = new BMap.Point(x, y);

        var rs;
        var convertor = new BMap.Convertor();
        var pointArr = [];
        pointArr.push(ggPoint);

        //如果是火星、google坐标系，将1改为3        
        return convertor.translate(pointArr, 1, 5, callBack);
    },

    /*
    * 计算两个坐标之间的距离，单位：m
    * pointA：百度坐标系
    * pointB：百度坐标系
    */
    getDistance: function (pointA, pointB) {
        var map = new BMap.Map("allmap");        
        var pointA = new BMap.Point(pointA["x"], pointA["y"]);
        var pointB = new BMap.Point(pointB["x"], pointB["y"]);
        var rs = (map.getDistance(pointA, pointB)).toFixed(2);
        console.log(rs);
        return rs;
    }
};