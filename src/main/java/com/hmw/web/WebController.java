package com.hmw.web; 
 
 

import java.util.HashMap;
import java.util.Map;

import it.geosolutions.geoserver.rest.GeoServerRESTPublisher;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.hmw.ums.User;
import com.hmw.ums.UserService;
 

@Controller
public class WebController {
	 
	@Autowired
	UserService ser;   
	
	@RequestMapping(value="/test.do",method=RequestMethod.POST, produces="application/json;charset=UTF-8")
	public @ResponseBody Map<String, Object> geoserverConnect(){
		String RESTURL = "http://113.198.80.60:8080/geoserver";
		String RESTUSER = "admin";
		String RESTPW = "geoserver";
		//ModelAndView mav = new ModelAndView("workspace","message","test");
		Map<String, Object> message = new HashMap<String, Object>();
		
		
		
		GeoServerRESTPublisher publisher = new GeoServerRESTPublisher(RESTURL, RESTUSER, RESTPW);
		//boolean created = publisher.createWorkspace("korea3");
		
		System.out.println("true");
		message.put("message", "true");
		
		return message;
	} 
	@RequestMapping("/index.do")
	public String indexPage(Model m){
		return "redirect:/index.jsp";
	}

	@RequestMapping("/logout.do")
	public String logOut(Model m, HttpSession session){
		System.out.println(session.getAttribute("userid")+"-> userId");
		session.removeAttribute("userid");
		return "redirect:/index.jsp";
	}
	@RequestMapping("/login.do")
	public String map(String userId, String passwd, HttpSession session, Model m, 
			HttpServletRequest request,HttpServletResponse response){
		User result=null;
		System.out.println(session.getAttribute("userid")+"-> userId");
		
		String origin = request.getHeader("Origin");
		if(StringUtils.hasLength(origin)){
			response.setHeader("Access-Control-Allow-Origin", origin);
			response.setHeader("Access-Control-Allow-Credentials", "true");
			System.out.println(response.toString());
		}
		
		
		if(session.getAttribute("userid") ==null){
			result = ser.login(userId, passwd);
			if(result !=null){
				session.setAttribute("userid", userId);
			}
		}
		
		if(result !=null || session.getAttribute("userid")!=null){
			return "mapView";
		}
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
