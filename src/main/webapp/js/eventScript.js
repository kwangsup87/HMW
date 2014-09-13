function fixContentHeight(){
	console.log("fixContentHeight exec");
	console.log(($(window)).width());
    var footer = $("div[data-role='footer']:visible"),
        content = $("div[data-role='content']:visible:visible"),
        viewHeight = $(window).height(),
        contentHeight = viewHeight - footer.outerHeight();
    if ((content.outerHeight() + footer.outerHeight()) !== viewHeight) {
        contentHeight -= (content.outerHeight() - content.height() + 1);
        content.height(contentHeight);
        $("#map").width( $(window).width() );
        $("#map").height(contentHeight);
    }
    
    
}	
$(document).bind("pageinit",function(event){
	fixContentHeight(); 
	$.mobile.ajaxFormsEnabled = false;
});  
$(document).bind("pageload","#mapview",function(event){
	console.log("map view exec");
	var map= new ol.Map({
		view: new ol.View({
			center: [0,0],
			zoom: 1
		}),
		layers:[
		        new ol.layer.Tile({
		        	source: new ol.source.MapQuest({layer:'osm'})
		        })
		],
		target: 'map'
	});
	
	map.updateSize();
});  	
var init = function(){
	
}