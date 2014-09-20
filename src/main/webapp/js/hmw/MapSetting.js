var styleCache = {};
var Map = {};
	Map.map = null;
	Map.minResolution = null;
	Map.layers = {};
	
	Map.deviceOrientation = null;
	Map.windowOrientation = undefined;
	Map.geolocation = null;

var loadFeatures = function(response) {
	console.log("loadfeatures");
  vectorSource.addFeatures(vectorSource.readFeatures(response));
};	 	 
	
var vectorSource = new ol.source.ServerVector({
	  format: new ol.format.GeoJSON(),
	  loader: function(extent, resolution, projection) { 
	    var url = 'http://113.198.80.60:8080/geoserver/wfs?service=WFS&' +
	        'version=1.1.0&request=GetFeature&typename=korea:Seoul_Dong_web&' +
	    	//'version=1.1.0&request=GetFeature&typename=sf:streams&' +
	        'format_options=callback:loadFeatures' +
	        //'format_options=callback:loadFeatures&outputFormat=application/json'+
	        '&srsname=EPSG:3857&bbox=' + extent.join(',') + ',EPSG:3857';
	    $.ajax({
	      url: url,
	      dataType: 'jsonp'
	    });
	  },
	  strategy: ol.loadingstrategy.createTile(new ol.tilegrid.XYZ({
	    maxZoom: 19
	  })),
	  projection: 'EPSG:3857'
	});

/*
var styleFunction = function(feature, resolution) {
	  // 2012_Earthquakes_Mag5.kml stores the magnitude of each earthquake in a
	  // standards-violating <magnitude> tag in each Placemark.  We extract it from
	  // the Placemark's name instead.
	  var name = feature.get('name');
	  var magnitude = parseFloat(name.substr(2));
	  var radius = 5 + 20 * (magnitude - 5);
	  var style = styleCache[radius];
	  if (!style) {
	    style = [new ol.style.Style({
	      image: new ol.style.Circle({
	        radius: radius,
	        fill: new ol.style.Fill({
	          color: 'rgba(255, 153, 0, 0.4)'
	        }),
	        stroke: new ol.style.Stroke({
	          color: 'rgba(255, 204, 0, 0.2)',
	          width: 1
	        })
	      })
	    })];
	    styleCache[radius] = style;
	  }
	  return style;
};

var vector = new ol.layer.Vector({
		  source: new ol.source.KML({ 
		    projection: ol.proj.get('EPSG:5178'),
		    url: 'korea-Seoul_Dong.kml'
		  }) 
	});
	*/
Map.createMap = function(){
	Map.map = new ol.Map({
		layers:[ 
		       new ol.layer.Tile({
		    	   source: new ol.source.OSM()
		       }),/*vector*/
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

	console.log(Map.map.getView().getProjection());
	
	Map.geolocation = new ol.Geolocation({
		projection:	Map.map.getView().getProjection(),
		tracking : true
	});  
	
};
 