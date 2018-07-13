package com.yuang.bbs.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

/**
 * 入口类
 * <p>
 * created by: @author yuang on @date 2018/7/13.
 */

@Controller
@RequestMapping("/")
public class MainController {

    @RequestMapping(value = {"", "/", "/index"}, method = RequestMethod.GET)
    public String index() {
        return "index";
    }
}
