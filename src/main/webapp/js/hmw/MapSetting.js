var Map = {};
	Map.map = null;
	Map.minResolution = null;
	Map.layers = {};
	
	Map.deviceOrientation = null;
	Map.windowOrientation = undefined;
	Map.geolocation = null;
	
var vectorSource = new ol.source.ServerVector({
	format: new ol.format.GeoJSON(),
	loader:function(extent, resolution, projection){
		var url = 'http://127.0.0.1/geoserver/wfs?'+
				'service=wfs&'+
				'version=1.1.0&'+
				'request=GetFeature&'+
				'typeName=test:Seoul_Dong_WGS84_Lat&'+
				'format_options=callback:loadFeatures&'+
		        'srsname=EPSG:3857&bbox=' + extent.join(',') + ',EPSG:3857';	
				;
		$.ajax({
			url:url,  
			dataType:'jsonp'
		});
	},
	projection: 'EPSG:3857'
});

var loadFeatures = function(response) {
	console.log("Gegege");
	  vectorSource.addFeatures(vectorSource.readFeatures(response));
};

Map.createMap = function(){
	Map.map = new ol.Map({
		layers:[ 
		       new ol.layer.Tile({
		    	   source: new ol.source.OSM()
		       }),
		       new ol.layer.Vector({
		    	   source: vectorSource,
		    	   style: new ol.style.Style({
		    		   stroke: new ol.style.Stroke({
		    			   color:'rgba(0,0,255,1.0)',
		    			   width:2
		    		   })
		    	   })
		       })
		        ],
		target: 'map',
		view : new ol.View(Config.map.viewOptions) 
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

Map.adjustedHeading = function(heading) {
	if (Map.windowOrientation != undefined) {
		// include window orientation (0, 90, -90 or 180)
		heading -= Map.windowOrientation * Math.PI / 180.0;
	}
	return heading;
};

Map.setRotation = function(rotation) {
	Map.map.getView().setRotation(rotation);
};

Map.setWindowOrientation = function(orientation) {
	Map.windowOrientation = orientation;
	if (Map.deviceOrientation != null && Map.deviceOrientation.getTracking() && Map.deviceOrientation.getHeading() != undefined) {
		Map.setRotation(Map.adjustedHeading(-Map.deviceOrientation.getHeading()));
	}
};


//adjust max zoom
Map.clampToScale = function(scaleDenom) {
	var minRes = Map.scaleDenomToResolution(scaleDenom, true);
	if (Map.map.getView().getResolution() < minRes) {
		Map.map.getView().setResolution(minRes);
	}
};

Map.scaleDenomToResolution = function(scaleDenom, closest) {
	// resolution = scaleDenom / (metersPerUnit * dotsPerMeter)
	var res = scaleDenom / (Map.map.getView().getProjection().getMetersPerUnit() * (Config.map.dpi / 0.0254));
	if (closest) {
	  return Map.map.getView().constrainResolution(res);
	}
	else {
	  return res;
	}
};


/**
 * GeoLocation
 */
Map.centerOnLocation = function(){
	Map.geolocation = new ol.Geolocation({
		projection:	Map.map.getView().getProjection(),
		tracking : true
	});  
	
};
 