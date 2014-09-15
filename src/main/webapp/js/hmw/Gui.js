var Gui = {};

Gui.initialLoad = true;
Gui.selectedLayer = null;

Gui.updateLayout = function(){
	var footer = $("div[data-role='footer']:visible"),
    content = $("div[data-role='content']:visible:visible"), 
    viewHeight = $(window).height(),
    contentHeight = viewHeight - footer.outerHeight(); 
	if ((content.outerHeight() + footer.outerHeight()) !== viewHeight) {
	    contentHeight -= (content.outerHeight() - content.height() + 1);
	    content.height(contentHeight);
	    $("#map").width( $(window).width() );
	    $("#map").height(contentHeight-10);
	}
};

Gui.initViewer = function(){
	Gui.updateLayout();
	$(window).on('resize',function(){
		Gui.updateLayout();
	});
	Map.setWindowOrientation(window.orientation);
	
	Map.createMap();
	Gui.updateLayout();
};