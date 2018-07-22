package com.yuang.douban.web.controller;

import com.yuang.douban.po.User;
import com.yuang.douban.po.model.Response;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 登陆
 * <p>
 * created by: @authors yuang on 2018/7/12.
 */

@Controller
@RequestMapping("/login")
@RestController
public class LoginController {

    @Autowired
    Logger logger;

    @RequestMapping(value = "", method = RequestMethod.POST)
    public Response verify(@RequestBody User user) {
        logger.info("hello, " + user);
        return new Response("200", "login successful");
    }

}
