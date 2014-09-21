var layers = {};
	layers.vectorSource = null;

 layers.vectorSource = new ol.source.ServerVector({
		  format: new ol.format.GeoJSON(),
		  loader: function(extent, resolution, projection) { 
		    var url = 'http://113.198.80.60:8080/geoserver/wfs?service=WFS&' +
		        'version=1.1.0&request=GetFeature&' +
		    	'typeNames=korea:Seoul_Dong_trans&' +
		        'outputFormat=application/json' +
		        '&srsname=EPSG:3857&bbox=' + extent.join(',') + ',EPSG:3857';
		    $.ajax({
		      url: url,
		      dataType: 'json',
		      success: loadFeatures
		    });
		  },
		  strategy: ol.loadingstrategy.createTile(new ol.tilegrid.XYZ({
		    maxZoom: 19
		  })),
		  projection: 'EPSG:3857'
	});	
	

	var loadFeatures = function(response) { 
		layers.vectorSource.addFeatures(layers.vectorSource.readFeatures(response));
	}; 
	 	

	 
layers.displayFeatureInfo = function(pixel){
	var feature = Map.map.forEachFeatureAtPixel(pixel, function(feature, layer){
		return feature;
	});
	
	if(feature){
		console.log(feature.get('EMD_KOR_NM'));
	}		
	else{
		
	}
		
};



/**
 * Example.. JSON...
 */
var vector = new ol.layer.Vector({
		  source: new ol.source.GeoJSON({  
			projection: 'EPSG:3857',
		    url: 'geoserver-GetFeature.json'
		  })
}); 
