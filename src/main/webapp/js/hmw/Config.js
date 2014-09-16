Config = {};
Config.map = {};

Config.map.dpi = 96;
Config.map.extent = [420000, 30000, 900000, 350000];

Config.map.scaleDenoms = 
	[2000000, 1000000, 400000, 200000, 80000, 40000, 20000, 10000, 8000, 6000, 4000, 2000, 1000, 500, 250, 100];

Config.map.init = {
		center:[660000,190000],
		zoom: 1
};

Config.map.projection = ol.proj.get('EPSG:21781');
Config.map.projection.setExtent(Config.map.extent);

Config.map.scaleDenomsToResolutions = function(scales) {
	var resolutions = $.map(scales, function(scale, index) {
		return scale / (Config.map.projection.getMetersPerUnit() * (Config.map.dpi / 0.0254));
	});
	return resolutions;
};

Config.map.viewOptions = {
	projection: Config.map.projection,
	resolutions: Config.map.scaleDenomsToResolutions(Config.map.scaleDenoms),
	center: Config.map.init.center,
	zoom: Config.map.init.zoom
}; 

Config.map.minScaleDenom = {
	map: 1000, // if topic.minscale is not set
	geolocation: 10000, // on location following
	search: 10000 // jump to search results
};

