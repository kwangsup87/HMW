var Map = {};
	Map.map = null;
	Map.minResolution = null;
	Map.layers = {};
	
	
Map.createMap = function(){
	Map.map = new ol.Map({
		layers:[
		        new ol.layer.Tile({
		        	source: new ol.source.MapQuest({layer:'osm'})
		        })
		        ],
		target: 'map',
		view : new ol.View(Config.map.viewOptions)
	
		/*,
		controls:[]
		*/
	});
	
	Map.map.getView().on('change:rotation',function(){
		$.event.trigger({type:'maprotation',rotation:Map.map.getView().getRotation()});
	});
	Map.map.getView().on('change:resolution',function(){
		if(Map.map.getView().getResolution() < Map.minResolution){
			Map.map.getView().setResolution(Map.minResolution);
		}
	});

};