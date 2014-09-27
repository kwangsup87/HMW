package com.hmw.geomanager;

import it.geosolutions.geoserver.rest.GeoServerRESTPublisher;

import org.springframework.stereotype.Repository;


@Repository("geodao")
public class GeoManagerDAOImp implements GeoManagerDAO {

	static String RESTURL = "http://113.198.80.60:8080/geoserver";
	static String RESTUSER = "admin";
	static String RESTPW = "geoserver";
	
	GeoServerRESTPublisher publisher; 
			
	GeoManagerDAOImp(){
		super();
		publisher = new GeoServerRESTPublisher(RESTURL, RESTUSER, RESTPW);
	}
			
	@Override
	public boolean geoserverCreateWorkspace(String name) {
		// TODO Auto-generated method stub
		return publisher.createWorkspace(name);
	}

}
