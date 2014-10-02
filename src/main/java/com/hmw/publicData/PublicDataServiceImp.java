package com.hmw.publicData;

import java.io.IOException;

import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.JsonParser;
import org.codehaus.jackson.JsonToken;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.ObjectWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.hmw.util.Util;


@Service
public class PublicDataServiceImp implements PublicDataService{


	@Autowired
	@Qualifier("publicdao")
	PublicDataDAO publicDataobj;
	
	@Override
	public String requestSeoulPublicData(String key, String serviceName) {
		JsonParser jp = publicDataobj.getSeoulPublicData(key,serviceName); 
		
		ObjectWriter mapper = new ObjectMapper().writer().withDefaultPrettyPrinter();  
		
		try {
			//String json = mapper.writeValueAsString(jp);
			
			//System.out.println(mapper.canSerialize(jp));
			
			/*
			while(jp.nextToken() != JsonToken.END_ARRAY){
				String token = jp.getCurrentName();
				if("row".equals(token)){
					jp.nextToken(); 
						System.out.println(jp.getText()); 
				}
			}*/
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return "";
	}

}
