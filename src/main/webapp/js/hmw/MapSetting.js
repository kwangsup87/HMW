var Map = {};
	Map.map = null;
	Map.minResolution = null;
	Map.layers = {};
	
	Map.deviceOrientation = null;
	Map.windowOrientation = undefined;
	Map.geolocation = null;
	
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
Map.initialCenterOnLocation = function(){
	Map.centerOnLocation();
	if (Config.map.initialGeolocationMaxScale != null) {
		var maxRes = Map.scaleDenomToResolution(Config.map.initialGeolocationMaxScale, true);
		if (Map.map.getView().getResolution() > maxRes) {
			Map.map.getView().setResolution(maxRes);
	    }
	}
	// disable after first update
	Map.geolocation.un('change:position', Map.initialCenterOnLocation);
};

Map.centerOnLocation = function() { 
	console.log(Map.geolocation.getPosition());
	Map.map.getView().setCenter(Map.geolocation.getPosition());
	Map.clampToScale(Config.map.minScaleDenom.geolocation);
}; 

Map.toggleTracking = function(enabled) {
	if (Map.geolocation == null) {// create geolocation
		Map.geolocation = new ol.Geolocation({
		    trackingOptions: {
		    	enableHighAccuracy: true
		    }
	    });
		Map.geolocation.bindTo('projection', Map.map.getView());
		
		Map.geolocation.on('error', function(error) {
			if (error.code == error.PERMISSION_DENIED) {
				alert(I18n.geolocation.permissionDeniedMessage);
		    };
		}); 
	    // add geolocation marker
	/*var marker = new ol.Overlay({
		element: ($('<div id="locationMarker"></div>')),
	    positioning: 'center-center'
	});
	Map.map.addOverlay(marker);
		marker.bindTo('position', Map.geolocation);
	}*/

		//Map.geolocation.setTracking(enabled);
		//$('#locationMarker').toggle(enabled);

		if (enabled) {
		  // always jump to first geolocation
			Map.geolocation.on('change:position', Map.initialCenterOnLocation);
		}
	}
};

Map.toggleFollowing = function(enabled) { 
	  if (Map.geolocation != null) {
	    if (enabled) {
	      Map.geolocation.on('change:position', Map.centerOnLocation);
	    }
	    else {
	      Map.geolocation.un('change:position', Map.centerOnLocation);
	    }
	  }
};