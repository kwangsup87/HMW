package com.hmw.ums;

import org.apache.ibatis.session.SqlSession; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository("dao")
public class UserDAOImp implements UserDAO {

	@Autowired
	SqlSession  sess;
	
	@Override
	public boolean insert(User u) {
		// TODO Auto-generated method stub
		System.out.println(u.toString()+" insert Comp");
		sess.insert("usermap.insert",u);
		return true;
	}

	@Override
	public boolean login(String userId, String password) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public User selectUser(String userId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(String userId) {
		// TODO Auto-generated method stub
		return false;
	}

}
