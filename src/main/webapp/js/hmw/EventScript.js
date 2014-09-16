$(document).bind("pageinit",function(event){
	console.log("pageinit ");
	//Gui.initViewer(); 
});  
$(document).bind("pageload","#mapview",function(event){
	console.log("map view exec");
	//Map.createMap();
	//Gui.initViewer();
}); 