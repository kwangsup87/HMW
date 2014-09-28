package com.hmw.geomanager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service
public class GeoManagerServiceImp implements GeoManagerService {

	@Autowired
	@Qualifier("geodao")
	GeoManagerDAO geo_manager;
	
	@Override
	public boolean createWorkspace(String name) {
		// TODO Auto-generated method stub
		//System.out.println(name);
		return geo_manager.geoserverCreateWorkspace(name);
	} 
}
