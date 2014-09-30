package com.hmw.geomanager;

import it.geosolutions.geoserver.rest.decoder.RESTLayer;

public interface GeoManagerDAO {

	boolean geoserverCreateWorkspace(String name);
	RESTLayer geoserverLoadVector(String workspace, String name);
}
