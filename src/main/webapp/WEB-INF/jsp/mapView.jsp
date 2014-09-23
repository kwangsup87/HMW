<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 
<!DOCTYPE html>
<html>
<head>    
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
 	
	<!-- 	jQuery -->
	<script type="text/javascript" src="js/egovframework/mbl/cmm/jquery-1.9.1.min.js"></script>
	
	<!-- jQuery Mobile -->
	<script type="text/javascript" src="js/egovframework/mbl/cmm/jquery.mobile-1.3.2.min.js"></script>
	<link rel="stylesheet" href="css/egovframework/mbl/cmm/jquery.mobile-1.3.2.css">
	
	<!-- eGov Mobile -->
	<script type="text/javascript" src="js/egovframework/mbl/cmm/EgovMobile-1.3.2.js"></script>
	<link rel="stylesheet" href="css/egovframework/mbl/cmm/EgovMobile-1.3.2.css">
	
	<!-- Proj4js -->
	<script type="text/javascript" src="js/proj4js/2.2.2/proj4.js"></script>
	<script type="text/javascript" src="js/proj4js/2.2.2/EPSGdefs.js"></script> 

	
	<!-- OpenLayers 3 -->
	<script type="text/javascript" src="js/ol3/ol.js"></script>
	<link type="text/css" rel="stylesheet" href="css/ol3/ol.css">  
	
	<script type="text/javascript" src="js/hmw/MapConfig.js"></script>
	<script type="text/javascript" src="js/hmw/MapVectorLayers.js"></script>
	<script type="text/javascript" src="js/hmw/MapSetting.js"></script>
	<script type="text/javascript" src="js/hmw/MapGui.js"></script>
	<script type="text/javascript" src="js/hmw/EventScript.js"></script> 

	<title>Map Select</title>
</head>
<body>


<div data-role="page" id="mapview"> 
	<div data-role="panel" data-display="overlay" id="layerList" style="padding:0;">
			<ul data-role="listview">
				<li data-theme="g" data-icon="delete" style="height: 2.8em;"><a href="#" data-rel="close" style="color:rgb(255, 255, 255);">Close menu</a></li>
				<li data-theme="z" data-role="list-divider">기본 제공 데이터</li>
				<li><a href="#" id="Seoul_dong" onclick="spatialButtonEvent(this)">서울특별시</a></li>
				<li><a href="#" id="Incheon_dong" onclick="spatialButtonEvent(this)">인천광역시</a></li>
				<li><a href="#" id="Gyeonggi_dong" onclick="spatialButtonEvent(this)">경기도</a></li>
				<li><a href="#" id="Sejong_dong" onclick="spatialButtonEvent(this)">세종시</a></li>
				<li data-theme="z" data-role="list-divider">사용자 업로드 데이터</li>
			 	<li><a href="test.do" >test</a></li>  
			</ul>
	</div>  
	<div data-role="panel" data-display="overlay" id="opendataList" style="padding:0;">
			<ul data-role="listview">
				<li data-theme="g" data-icon="delete" style="height: 2.8em;"><a href="#" data-rel="close" style="color:rgb(255, 255, 255);">Close menu</a></li>
				<li data-theme="z" data-role="list-divider">1</li>
				<li><a href="#">데이터 1</a></li>
				<li><a href="#">데이터 2</a></li>
				<li><a href="#">데이터 2</a></li>
				<li><a href="#">데이터 2</a></li>
				<li><a href="#">데이터 2</a></li>
				<li><a href="#">데이터 2</a></li>
				<li><a href="#">데이터 2</a></li>
				<li><a href="#">데이터 2</a></li>
				<li><a href="#">데이터 2</a></li>
				<li><a href="#">데이터 2</a></li>
				<li><a href="#">데이터 2</a></li>
				<li><a href="#">데이터 2</a></li> 
			</ul>
	</div>  
	<div data-role="popup" id="select">
		<ul data-role="listview">
			<li><a href="#layerList">공간정보데이터 목록</a></li>
			<li><a href="#opendataList">공공오픈데이터 목록</a></li>
		</ul>
	</div>	 
	<div data-role="header" class="ui-body-g center" data-position="inline" > 
 	 	<a href="#select" data-role="button" data-rel="popup"  data-transition="slidedown" data-theme="g">데이터 목록</a> 
		<h4>기본 지도 시각화(OpenStreetMap)</h4>
		<a href="logout.do" data-role="button" data-theme="g" >로그아웃</a>
	</div>	
	<div data-role="content" style="padding:0; margin:0;">
		<div id="map" style="padding:0; margin:0;">
		</div>		
	</div>
	<div data-role="footer" class="ui-body-g center" data-position="inline"  data-tap-toggle="false" >
		<h4>.</h4>
	</div>
</div>
</body>
</html>
