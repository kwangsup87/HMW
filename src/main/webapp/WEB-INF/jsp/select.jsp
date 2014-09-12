<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 
<!DOCTYPE html>
<html>
<head>  

	<link type="text/css" rel="stylesheet" href="css/ol3/ol.css">
	<script type="text/javascript" src="js/ol3/ol.js"></script>
	<title>Map Select</title>
</head>
<body onload="test">  
<div data-role="page" id="mapview">
	<div data-role="header" class="ui-body-g center" data-fullscreen="true"> 
		<h4>Map</h4>
	</div>
	<div data-role="content"><!-- 
		<div id="map" class="map"></div> --> 
		<div id="map" style="width:500px; height:300px;"> </div>
		
	</div>
	<div data-role="footer" data-position="fixed" class="ui-body-g center">
	<h4>footer</h4>
	</div>
</div>
</body>
</html>
