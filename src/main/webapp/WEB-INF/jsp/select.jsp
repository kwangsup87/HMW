<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link rel="stylesheet" href="css/egovframework/mbl/cmm/jquery.mobile-1.3.2.css">
	<link rel="stylesheet" href="css/egovframework/mbl/cmm/EgovMobile-1.3.2.css">
	<script type="text/javascript" src="js/egovframework/mbl/cmm/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/egovframework/mbl/cmm/jquery.mobile-1.3.2.min.js"></script>
	<script type="text/javascript" src="js/egovframework/mbl/cmm/EgovMobile-1.3.2.js"></script>
	
	<link type="text/css" rel="stylesheet" href="css/ol3/ol.css">
	<style>
		.map{
			height:100%;
			width:100%;
		} 
	</style>
	<script type="text/javascript" src="js/ol3/ol.js"></script>
	
	<script type="text/javascript">
	/* function test(){
		alert("gg");
		var map= new ol.Map({
			target:'map',
			layers:[
			        new ol.layer.Tile({
			        	source:new ol.source.MapQuest({layer: 'sat'})
			        })
			        ],
			view:new ol.View({
				center: ol.proj.transform([37.41, 8.82], 'EPSG:4326', 'EPSG:3857'),
				zoom:4
			})
		});
	} */
	$(document).bind("pageinit",function(){
		alert("gg");
	})
	</script> 
	<title>Map Select</title>
</head>
<body onload="test">  
	<div data-role="header" class="ui-body-g center"> 
		<h4>Map</h4>
	</div>
	<div data-role="content">
		<div id="map" class="map"></div> 
	</div>
<body>
</html>
