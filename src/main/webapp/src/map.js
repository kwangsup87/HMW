/**
 * OpenLayers 3 map
 *
 * events:
 *   maprotation({rotation: <rad>})
 */

var Map = {};

// topics (key = topic name)
Map.topics = {};
// current topic
Map.topic = null;
// ordered layers (key = layer name)
Map.layers = {};
// current background topic
Map.backgroundTopic = null;
// current background WMS layers
Map.backgroundLayers = null;
// OpenLayers 3 map object
Map.map = null;
// min resolution to limit max zoom
Map.minResolution = null;
// OpenLayers 3 layer objects
Map.topicLayer = null;
Map.backgroundLayer = null;
// OpenLayers 3 geolocation object
Map.geolocation = null;
// OpenLayers 3 DeviceOrientation object
Map.deviceOrientation = null;
// device window orientation
Map.windowOrientation = undefined;
// OpenLayers 3 ScaleLine control
Map.scaleLine = null;
// WMS selection
Map.selection = null;
// last click position
Map.lastClickPos = null;
// click marker
Map.clickMarker = null;
// ignore clicks on map
Map.ignoreClick = false;

Map.useTiledWMS = false;

Map.createMap = function(featureInfoCallback) {
  // override from URL params

  Map.map = new ol.Map({
    layers: [],
    target: 'map',
    view: new ol.View(Config.map.viewOptions),
/*    controls:[]*/
  });

  Map.map.getView().on('change:rotation', function() {
    $.event.trigger({type: 'maprotation', rotation: Map.map.getView().getRotation()});
  });

  Map.setMinScaleDenom(Config.map.minScaleDenom.map);
  Map.map.getView().on('change:resolution', function() {
    // limit max zoom
    if (Map.map.getView().getResolution() < Map.minResolution) {
      Map.map.getView().setResolution(Map.minResolution);
    }
  }); 
};

Map.setMinScaleDenom = function(scaleDenom) {
	  Map.clampToScale(scaleDenom);
	  Map.minResolution = Map.scaleDenomToResolution(scaleDenom, true);
};
//adjust max zoom
Map.clampToScale = function(scaleDenom) {
  var minRes = Map.scaleDenomToResolution(scaleDenom, true);
  if (Map.map.getView().getResolution() < minRes) {
    Map.map.getView().setResolution(minRes);
  }
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

Map.setWindowOrientation = function(orientation) {
	Map.windowOrientation = orientation;
	if (Map.deviceOrientation != null && Map.deviceOrientation.getTracking() && Map.deviceOrientation.getHeading() != undefined) {
		Map.setRotation(Map.adjustedHeading(-Map.deviceOrientation.getHeading()));
	}
};
