$(document).bind("pageinit",function(event){
	console.log("pageinit ");
	Gui.updateLayout(); 
	Gui.initViewer();
	$.mobile.ajaxFormsEnabled = false;
});  
$(document).bind("pageload","#mapview",function(event){
	console.log("map view exec");
	//Map.createMap();
	Gui.initViewer();
}); 