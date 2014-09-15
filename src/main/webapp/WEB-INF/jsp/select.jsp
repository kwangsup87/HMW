<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 
<!DOCTYPE html>
<html>
<head>    
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	
	<link type="text/css" rel="stylesheet" href="css/ol3/ol.css">
	
	<link rel="stylesheet" href="css/egovframework/mbl/cmm/jquery.mobile-1.3.2.css">
	<link rel="stylesheet" href="css/egovframework/mbl/cmm/EgovMobile-1.3.2.css">
	
	<script type="text/javascript" src="js/egovframework/mbl/cmm/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/egovframework/mbl/cmm/jquery.mobile-1.3.2.min.js"></script>
	<script type="text/javascript" src="js/egovframework/mbl/cmm/EgovMobile-1.3.2.js"></script>
	
	<script type="text/javascript" src="js/proj4js/2.2.2/proj4.js"></script>
	<script type="text/javascript" src="js/proj4js/2.2.2/EPSG21781.js"></script>
	<script type="text/javascript" src="js/ol3/ol.js"></script> 
	
	<script type="text/javascript" src="js/hmw/Config.js"></script>
	<script type="text/javascript" src="js/hmw/map.js"></script>
	<script type="text/javascript" src="js/hmw/Gui.js"></script>
	<script type="text/javascript" src="js/hmw/eventScript.js"></script>

	<title>Map Select</title>
</head>
<body>  
<div data-role="page" id="mapview">
	<div data-role="header" class="ui-body-g center"> 
		<h4>Map</h4>
	</div>
	<div data-role="content" style="padding:0; margin:0;">
		<div id="map" style="padding:0; margin:0;"> </div>		
	</div>
	<div data-role="footer" data-position="fixed" class="ui-body-g center">
	<h4>footer</h4>
	</div>
</div>
</body>
</html>
