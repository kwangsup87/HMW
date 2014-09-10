package com.hmw.ums;

public interface UserService {

	boolean insert(User u);
	boolean login(String userId, String password);
	User selectUser(String userId);
	boolean delete(String userId);
	
}
