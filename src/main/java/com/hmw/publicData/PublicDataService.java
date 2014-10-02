package com.hmw.publicData;

import org.codehaus.jackson.JsonParser;

public interface PublicDataService {

	Object requestSeoulPublicData(String key, String serviceName);
}
