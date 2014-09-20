var Gui = {};

Gui.initialLoad = true;
Gui.selectedLayer = null;
Gui.tracking = true;

Gui.updateLayout = function(){
	
	var footer = $("div[data-role='footer']:visible"),
	header = $("div[data-role='header']:visible"),
    content = $("div[data-role='content']:visible:visible"), 
    viewHeight = $(window).height(),
    contentHeight = viewHeight - (footer.outerHeight()+header.outerHeight() );
	if ((content.outerHeight() + footer.outerHeight()) !== viewHeight) {
	    contentHeight -= (content.outerHeight() - content.height() + 1);
	    content.height(contentHeight);
	}
    $("#map").width( $(window).width() );
    $("#map").height( contentHeight   );
  
};

//Projection : EPSG:3857
Gui.initViewer = function(){
	Gui.updateLayout();
	$(window).on('resize',function(){
		Gui.updateLayout();
	});
	
	$(window).on('orientationchange', function(e) {
	    Map.setWindowOrientation(window.orientation);
	});
	
	Map.createMap();
	Map.centerOnLocation();
	
	Map.geolocation.once('change:position',function(){
		Map.map.getView().setCenter(Map.geolocation.getPosition());
	});
	
	$('#map').bind('tap',function(e){
		console.log(e);
	});
	
	console.log(ol.proj.get('EPSG:5178'));
	
	
	Gui.updateLayout();
};

$(document).ready(function(e){
	Gui.initViewer();  
});