package com.hmw.web;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hmw.ums.User;
import com.hmw.ums.UserService;
 

@Controller
public class WebController {
	 
	@Autowired
	UserService ser;  
	

	@RequestMapping("/index.do")
	public String indexPage(Model m){
		return "redirect:/index.jsp";
	}
	
	@RequestMapping("/login.do")
	public String map(String userId, String passwd, Model m){
		System.out.println(userId+", "+passwd);
		boolean result = ser.login(userId, passwd);
		if(result) return "select";
		else return "redirect:/index.jsp";
	}
	
	@RequestMapping("/join_page.do")
	public String joinPage(Model m){
		return "join";
	}
	
	@RequestMapping("/join_exe.do")
	public String joinExec(User u, Model m){
		System.out.println("Controller:"+u.toString());
		boolean result = ser.insert(u);
		if(result)
			return "redirect:/index.jsp";
		else
			return "join";
	}

}
