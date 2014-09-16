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

Gui.initViewer = function(){
	Gui.updateLayout();
	$(window).on('resize',function(){
		Gui.updateLayout();
	});
	
	$(window).on('orientationchange', function(e) {
	    Map.setWindowOrientation(window.orientation);
	});
	
	Map.createMap();

	
	Gui.updateLayout();
};

$(document).ready(function(e){
	Gui.initViewer();
	//$.mobile.ajaxFormsEnabled = false;
	Map.toggleTracking(Gui.tracking);
	Map.toggleFollowing(Gui.tracking);
});