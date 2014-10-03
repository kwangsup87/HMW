package com.hmw.publicData;
 
import org.codehaus.jackson.JsonParser; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
 


@Service
public class PublicDataServiceImp implements PublicDataService{ 

	@Autowired
	@Qualifier("publicdao")
	PublicDataDAO publicDataobj; 
	
	@Override
	public String requestSeoulPublicData(String key, String serviceName) {
		JsonParser jp = publicDataobj.getSeoulPublicData(key,serviceName);  
		try { 
			return jp.readValueAsTree().toString(); 
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
		
		
	}

}
