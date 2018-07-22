package com.yuang.bbs.web.controller;

import com.yuang.bbs.po.Hero;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.List;

/**
 * 入口类
 * <p>
 * created by: @author yuang on @date 2018/7/13.
 */

@Controller
@RequestMapping("")
public class MainController {


    /**
     * 配置多个访问路径，用于当刷新页面时浏览器发出请求时找不到资源返回 404
     * 找不到资源 url 是通过 Angular 路由器生成的，用于导航页面的
     * 此处的路径不能和 API 重复，否则会发生冲突
     *
     * @return
     */
    @RequestMapping(value = {"", "/", "/index", "/dashboard/**", "/detail/**", "/heroes/**"}, method = RequestMethod.GET)
    public String index() {
        return "index";
    }

    @RequestMapping(value = "api/heroes", method = RequestMethod.GET)
    @ResponseBody
    public List<Hero> getHeroes() {
        List<Hero> heroes = new ArrayList<>();
        heroes.add(new Hero(1, "Narco"));
        heroes.add(new Hero(2, "Bombasto"));
        heroes.add(new Hero(3, "Celeritas"));
        heroes.add(new Hero(4, "Magneta"));
        heroes.add(new Hero(5, "RubberMan"));
        heroes.add(new Hero(6, "Tornado"));
        heroes.add(new Hero(7, "Dynama"));
        return heroes;
    }

    @RequestMapping(value = "api/heroes/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Hero getHero(@PathVariable("id") Integer id) {
        return new Hero(7, "Dynama");
    }
}
