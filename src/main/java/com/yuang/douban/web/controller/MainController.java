package com.yuang.douban.web.controller;

import com.yuang.douban.po.Hero;
import com.yuang.douban.po.model.Response;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

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
    @RequestMapping(value = {"", "/", "/index", "/home/**", "/book/**", "/movie/**"}, method = RequestMethod.GET)
    public String index() {
        return "index";
    }

    @RequestMapping(value = "api/heroes", method = RequestMethod.GET)
    @ResponseBody
    public List<Hero> getHeroes(@RequestParam(value = "name", required = false) String name) {
        List<Hero> heroes = new ArrayList<>();
        if (!StringUtils.isEmpty(name)) {
            heroes.add(new Hero(1, "user01"));
            heroes.add(new Hero(2, "user02"));
            return heroes;
        }
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

    @RequestMapping(value = "api/heroes", method = RequestMethod.PUT)
    @ResponseBody
    public Response updateHero(@RequestBody Hero hero) {
        System.out.println("MainController.updateHero" + ":" + hero.getName());
        return new Response("200", "successful");
    }

    @RequestMapping(value = "api/heroes", method = RequestMethod.POST)
    @ResponseBody
    public Hero addHero(@RequestBody Hero hero) {
        System.out.println("MainController.addHero" + ":" + hero.getName());
        hero.setId(200);
        return hero;
    }

    @RequestMapping(value = "api/heroes/{id}", method = RequestMethod.DELETE)
    @ResponseBody
    public Response deleteHero(@PathVariable("id") Integer id) {
        System.out.println("MainController.deleteHero" + ":" + id);
        return new Response("200", "successful");
    }

}
