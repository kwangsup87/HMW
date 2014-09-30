package com.hmw.geomanager;

import java.net.MalformedURLException;
import java.util.Map;

import it.geosolutions.geoserver.rest.GeoServerRESTPublisher;
import it.geosolutions.geoserver.rest.GeoServerRESTReader;
import it.geosolutions.geoserver.rest.decoder.RESTLayer;

import org.springframework.stereotype.Repository;


@Repository("geodao")
public class GeoManagerDAOImp implements GeoManagerDAO {

	static String RESTURL = "http://113.198.80.60:8080/geoserver";
	static String RESTUSER = "admin";
	static String RESTPW = "geoserver";
	
	GeoServerRESTPublisher publisher; 
	GeoServerRESTReader reader ;
			
	GeoManagerDAOImp() throws MalformedURLException{
		super();
		publisher = new GeoServerRESTPublisher(RESTURL, RESTUSER, RESTPW);
		reader= new GeoServerRESTReader(RESTURL, RESTUSER, RESTPW);
	}
			
	@Override
	public boolean geoserverCreateWorkspace(String name) {
		// TODO Auto-generated method stub
		return publisher.createWorkspace(name);
	}
	
	@Override	
	public RESTLayer geoserverLoadVector(String workspace, String name){
		
		return reader.getLayer("korea", name);
	}

}
