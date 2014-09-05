package com.hmw.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hmw.ser.IMapService;

@Controller
public class MapController {
	
	@Autowired
	IMapService mapService;
	
	@RequestMapping("/map.do")
	public String map(Model m){
		m.addAttribute("msg",mapService.getMgs());
		return "Result";
	}

}
