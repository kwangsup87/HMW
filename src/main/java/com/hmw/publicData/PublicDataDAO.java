package com.hmw.publicData;

import org.codehaus.jackson.JsonParser;

public interface PublicDataDAO {
	
	JsonParser getSeoulPublicData(String key, String serviceName);

}
