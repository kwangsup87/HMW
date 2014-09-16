$(document).bind("pageinit",function(event){
	Gui.updateLayout(); 
//	$.mobile.ajaxFormsEnabled = false;
});  
$(document).bind("pageload","#mapview",function(event){
	console.log("map view exec");
	//Map.createMap();
	Gui.initViewer();
}); 