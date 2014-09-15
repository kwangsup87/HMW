var Gui = {};

Gui.updateLayout = function(){
	var footer = $("div[data-role='footer']:visible"),
    content = $("div[data-role='content']:visible:visible"),
    map = $("div[data-role='content']:visible:visible"),
    viewHeight = $(window).height(),
    contentHeight = viewHeight - footer.outerHeight();
	
	if ((content.outerHeight() + footer.outerHeight()) !== viewHeight) {
	    contentHeight -= (content.outerHeight() - content.height() + 1);
	    content.height(contentHeight);
	    $("#map").width( $(window).width() );
	    $("#map").height(contentHeight);
	}
};