package com.hmw.ums;

public class UserServiceImp implements UserService {
	
	UserDAO dao;

	public UserServiceImp(UserDAO dao){
		this.dao = dao;
	}
	
	@Override
	public boolean insert(User u) {
		// TODO Auto-generated method stub
		return dao.insert(u);
	}

	@Override
	public boolean login(String userId, String password) {
		// TODO Auto-generated method stub
		return dao.login(userId, password);
	}

	@Override
	public User selectUser(String userId) {
		// TODO Auto-generated method stub
		return dao.selectUser(userId);
	}

	@Override
	public boolean delete(String userId) {
		// TODO Auto-generated method stub
		return dao.delete(userId);
	}

}
