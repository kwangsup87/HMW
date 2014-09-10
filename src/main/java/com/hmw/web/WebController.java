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
	
	@RequestMapping("/select.do")
	public String map(Model m){
		m.addAttribute("title", "eeeeee");
		return "select";
	}
	
	@RequestMapping("/join_page.do")
	public String joinPage(Model m){
		return "join";
	}
	
	@RequestMapping("/join_exe.do")
	public String joinExec(User u, Model m){
		System.out.println("Controller:"+u.toString());
		boolean result = ser.insert(u);
/*		if(result)
			return "redirect:/index.jsp";
		else
			return "";
*/
		return "redirect:/index.jsp";
	}

}
