package com.yuang.douban.web.controller;

import com.yuang.douban.po.User;
import com.yuang.douban.po.model.Response;
import com.yuang.douban.service.UserService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Objects;

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

    @Autowired
    UserService userService;

    @RequestMapping(value = "", method = RequestMethod.POST)
    public Response verify(@RequestBody User user) {
        User userInDB = userService.findByUsername(user.getName());
        if (Objects.isNull(userInDB) || !user.getPassword().equals(userInDB.getPassword())) {
            return new Response("400", "login failed");
        }
        logger.info("hello, " + user);
        return new Response("200", "login successful");
    }

}
