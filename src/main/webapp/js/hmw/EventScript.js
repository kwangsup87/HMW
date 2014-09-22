$( document ).on( "pageinit", function() {
	$.mobile.loader.prototype.options.text = "loading";
	$.mobile.loader.prototype.options.textVisible = false;
	$.mobile.loader.prototype.options.theme = "a";
	$.mobile.loader.prototype.options.html = "";
});

spatialButtonEvent = function(obj){
	var mapLayers = Map.map.getLayers(),
		obj_exist=false,
		name = $(obj).attr('id'),
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
	if(!obj_exist)	Layer.createLayer(name,'rgba('+r+','+g+','+b+',1.0)',1); 
};