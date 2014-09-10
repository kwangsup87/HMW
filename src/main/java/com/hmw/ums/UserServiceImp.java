package com.hmw.ums;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

@Service()
public class UserServiceImp implements UserService {
	
	@Autowired
	@Qualifier("dao")
	UserDAO userdao; 
	
	@Override
	public boolean insert(User u) {
		// TODO Auto-generated method stub
		return userdao.insert(u);
	}

	@Override
	public boolean login(String userId, String password) {
		// TODO Auto-generated method stub
		return userdao.login(userId, password);
	}

	@Override
	public User selectUser(String userId) {
		// TODO Auto-generated method stub
		return userdao.selectUser(userId);
	}

	@Override
	public boolean delete(String userId) {
		// TODO Auto-generated method stub
		return userdao.delete(userId);
	}

}
