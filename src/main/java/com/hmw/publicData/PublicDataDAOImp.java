package com.hmw.publicData;
 
import java.net.URL;

import org.codehaus.jackson.JsonFactory;
import org.codehaus.jackson.JsonParser;
import org.springframework.stereotype.Repository;


@Repository("publicdao") 
public class PublicDataDAOImp implements PublicDataDAO {

	JsonFactory jsonfactory;
	String path = "http://openapi.seoul.go.kr:8088/696e74727564657232303934/json/TimeAverageAirQuality/1/25/201402072000/";
	
	PublicDataDAOImp(){
		jsonfactory = new JsonFactory();
	}
	
	@Override
	public JsonParser getSeoulPublicData(String key, String serviceName) {
		
		
		try {
			URL url = new URL(path);
			JsonParser jsonParser = jsonfactory.createJsonParser(url);
			return jsonParser;
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}

		
		
	}

}
