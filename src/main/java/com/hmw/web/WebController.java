package com.hmw.web;
 
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
 

@Controller
public class WebController {
	 
	
	@RequestMapping("/select.do")
	public String map(Model m){
		m.addAttribute("title", "eeeeee");
		return "select";
	}

}
