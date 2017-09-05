function getCenters(features){
					var longitudeMin = 100000;//最小经度值
					var latitudeMin = 100000;//最小纬度值
					var longitudeMax = 0;//最大经度值
					var latitudeMax = 0;//最大纬度值
					features.forEach(function(e){  
					    var a = d3.geo.bounds(e);//[为某个对象计算经纬度  d3.geo.bounds - compute the latitude-longitude bounding box for a given feature]
					    if(a[0][0] < longitudeMin) {
					    	longitudeMin = a[0][0];
					    }
					    if(a[0][1] < latitudeMin) {
					    	latitudeMin = a[0][1];
					    }
					    if(a[1][0] > longitudeMax) {
					    	longitudeMax = a[1][0];
					    }
					    if(a[1][1] > latitudeMax) {
					    	latitudeMax = a[1][1];
					    }
					});
				
					var a = (longitudeMax + longitudeMin)/2;
					var b = (latitudeMax + latitudeMin)/2;
				
					return [a, b];
				}
    		
    		//设置地图的大小 获得 scale
    		function getZoomScale(features, width, height){
						var longitudeMin = 100000;//最小经度值
						var latitudeMin = 100000;//最小纬度值
						var longitudeMax = 0;//最大经度值
						var latitudeMax = 0;//最大纬度值
						features.forEach(function(e){  
						    var a = d3.geo.bounds(e);//[为某个对象计算经纬度  d3.geo.bounds - compute the latitude-longitude bounding box for a given feature]
						    if(a[0][0] < longitudeMin) {
						    	longitudeMin = a[0][0];
						    }
						    if(a[0][1] < latitudeMin) {
						    	latitudeMin = a[0][1];
						    }
						    if(a[1][0] > longitudeMax) {
						    	longitudeMax = a[1][0];
						    }
						    if(a[1][1] > latitudeMax) {
						    	latitudeMax = a[1][1];
						    }
						});
					
						var a = longitudeMax-longitudeMin;
						var b = latitudeMax-latitudeMin;
						/*if(a > b) {  //
							return width/a;
						} else {
							return height/b;
						}*/
					
						return Math.min(width/a, height/b);
					}