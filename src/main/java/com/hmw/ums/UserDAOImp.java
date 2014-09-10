package com.hmw.ums;
  
import org.mybatis.spring.support.SqlSessionDaoSupport; 
import org.springframework.stereotype.Repository;
 


@Repository("dao")
//@Repository
public class UserDAOImp extends SqlSessionDaoSupport implements UserDAO {
  
	
	@Override
	public boolean insert(User u) {
		// TODO Auto-generated method stub
		System.out.println(u.toString()+" insert Comp"); 
	//	getSqlSession().insert("inesrt",u);
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
