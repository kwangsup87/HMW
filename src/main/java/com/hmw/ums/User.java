package com.hmw.ums;

public class User {
	private String userId;
	private String passwd;
	private String name;
	private String email;
	
	public User(){
		super();
	}
	public User(String userId, String passwd, String name, String email){
		super();
		this.userId = userId;
		this.passwd = passwd;
		this.name = name;
		this.email = email;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("User [userId=");
		builder.append(userId);
		builder.append(", passwd=");
		builder.append(passwd);
		builder.append(", name=");
		builder.append(name);
		builder.append(", email=");
		builder.append(email);
		builder.append("]");
		return builder.toString();
	} 
	
	

}
