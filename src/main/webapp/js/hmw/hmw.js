/*
 * HMW JavaScript Library 
 * 
 * Released under the MIT license
 */
var hmw = {};
var date = {};
var cur_date = new Date();

(function(){
	
	hmw.geoServerProcess = function(obj){
		console.log($(obj).attr('data-name'));
		switch($(obj).attr('data-name')){
		case 'loadVector':
			var mapLayers = Map.map.getLayers(),
			obj_exist=false,
			name = $(obj).attr('data-id'),
			r = Math.floor(Math.random()*256),
			g = Math.floor(Math.random()*256),
			b = Math.floor(Math.random()*256); 
			mapLayers.forEach(function(data){
				if(data.get('title')==name){
					obj_exist = true;		
					Layer.removeLayer(data);
					return ;
				}
			}); 
			if(!obj_exist)	
				Layer.createLayer(name,'rgba('+r+','+g+','+b+',1.0)',1);
			
		break;
		case 'createWorkspace':
			
			break;
		
		}
	//	ajaxNetwork(obj);
	};
	
	hmw.publicOpenData = function(obj){
		console.log($(obj).attr('data-name'));
		switch($(obj).attr('data-name')){
		case 'SeoulpublicOpenData'://6473565a72696e7438326262524174
			ajaxNetwork(obj);
		break;
		
		} 
	};
	
	ajaxNetwork = function(obj){
		console.log($(obj).attr('data-name')); 
		var value = $(obj).attr('data-id');
		var formData = {name:value};
	//	var url = 'http://openapi.seoul.go.kr:8088/696e74727564657232303934/json/TimeAverageAirQuality/1/25/201402072000/';
	//	console.log(url);
		$.ajax({
			type:'POST',
			url:$(obj).attr('data-name')+'.do',
		//	url:url,
			data: JSON.stringify(formData), 
			contentType : "application/json;charset=UTF-8",
			dataType : 'json',
			success:function(msg){
				console.log(msg);
			},
			error:function(){
				console.log("err");
			}
		});
	};

	
/**
 * getDate Module About Public Date 
 */	
	date.getYear = function(){	return cur_date.getFullYear();	};
	date.getDate = function(){	return cur_date.getDate();		};
	date.getMonth= function(){	return cur_date.getMonth();		};
	date.getHour = function(){
		var hours;
		var minute = cur_date.getMinutes();
			if(minute < 30){
				if(cur_date.getHours()==0){
					date = leadingZeros(cur_date.getDate()-1,2);
					hours = 23;
				}else	hours = leadingZeros(cur_date.getHours()-1,2);
			}else{
				hours = leadingZeros(cur_date.getHours(),2); 
			} 
		return hours;
	};// 30 minute cut line  (30 up) +1 
	date.getMin = function(){	return cur_date.getMinutes();	}; 
	date.getYYYYMMDDHH = function(){
		var year = cur_date.getFullYear();
		var month = leadingZeros(cur_date.getMonth()+1,2);
		var date = leadingZeros(cur_date.getDate(),2);
		var minute = cur_date.getMinutes();
		var hours;
			if(minute < 30){
				if(cur_date.getHours()==0){
					date = leadingZeros(cur_date.getDate()-1,2);
					hours = 23;
				}else	hours = leadingZeros(cur_date.getHours()-1,2);
			}else{
				hours = leadingZeros(cur_date.getHours(),2); 
			} 
			minute = "00";
		return year+month+date+hours+minute;
	};
	date.getYYYYMMDD = function(){	
		var year = cur_date.getFullYear();
		var month = leadingZeros(cur_date.getMonth()+1,2);
		var date = leadingZeros(cur_date.getDate(),2);
		return year+month+date;
	};

	leadingZeros = function(n,digits){
		var zero = '';
		n = n.toString();
		if (n.length < digits) {
			for (var i = 0; i < digits - n.length; i++)
				zero += '0';
		}
	  return zero + n;
	};	
	
})();