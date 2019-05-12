package com.yuang.douban.web.controller;

import com.yuang.douban.po.User;
import com.yuang.douban.po.model.Response;
import com.yuang.douban.service.UserService;
import com.yuang.douban.utils.ApiUtil;
import org.apache.commons.codec.binary.Base64;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.util.HashMap;
import java.util.Map;
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

    private static RSAPublicKey rsaPublicKey;
    private static RSAPrivateKey rsaPrivateKey;

    static {
        // 1、初始化密钥
        KeyPairGenerator keyPairGenerator;
        try {
            keyPairGenerator = KeyPairGenerator.getInstance("RSA");
            // 64的整倍数
            keyPairGenerator.initialize(512);
            KeyPair keyPair = keyPairGenerator.generateKeyPair();
            rsaPublicKey = (RSAPublicKey) keyPair.getPublic();
            rsaPrivateKey = (RSAPrivateKey) keyPair.getPrivate();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
    }

    @Autowired
    static final Logger logger = LogManager.getLogger(LoginController.class);

    @Autowired
    UserService userService;

    @RequestMapping(value = "", method = RequestMethod.POST)
    public Response verify(@RequestBody User user) {
        User userInDB = userService.findByUsername(user.getName());
        String encryptedPass = user.getPassword();
        String password = ApiUtil.pubEn2PriDe(rsaPrivateKey, encryptedPass);
        if (Objects.isNull(userInDB) || password == null || !password.equals(userInDB.getPassword())) {
            return new Response("404", "login failed", null);
        }
        logger.info("hello, " + user);
        return new Response("200", "login successful", null);
    }

    @RequestMapping(value = "publickey", method = RequestMethod.GET)
    public Response publickey() {
        Map data = new HashMap(16);
        data.put("public_key", Base64.encodeBase64String(rsaPublicKey.getEncoded()));
        return new Response("200", "success", data);
    }

}
