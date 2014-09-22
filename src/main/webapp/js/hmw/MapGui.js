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

//Default Projection : EPSG:3857
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
	Layer.createLayer('Seoul_dong','rgba(0,0,255,1.0)',2);
	//Layer.register('Seoul_dong','rgba(0,0,255,1.0)',2);
	Layer.createLayer('Incheon_dong','rgba(255,0,255,1.0)',2);
	//Layer.register('Incheon_dong','rgba(255,0,255,1.0)',2);
	
	/**
	 * Geolocation Event(Set Center)
	 **/
	Map.geolocation.once('change:position',function(){
		Map.map.getView().setCenter(Map.geolocation.getPosition());
	});
	
	/**
	 * Layers Event
	 **/
	$(Map.map.getViewport()).bind('tap',function(evt){
		var pixel = Map.map.getEventPixel(evt.originalEvent);
		Layer.displayFeatureInfo(pixel);
	});
	
	
	Gui.updateLayout();
};

$(document).ready(function(e){
	Gui.initViewer();  
});