/*
 * HMW JavaScript Library 
 * 
 * Released under the MIT license
 */
var hmw = {};
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
			//	Layer.createLayer(name,'rgba('+r+','+g+','+b+',1.0)',1);
			
		break;
		case 'createWorkspace':
			
			break;
		
		}
	//	ajaxNetwork(obj);
	};
	
	ajaxNetwork = function(obj){
		console.log($(obj).attr('data-name')); 
		var value = $(obj).attr('data-id');
		var formData = {name:value};
		$.ajax({
			type:'POST',
			url:$(obj).attr('data-name')+'.do',
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
	
})();