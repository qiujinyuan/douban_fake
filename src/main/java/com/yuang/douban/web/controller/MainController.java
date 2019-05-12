package com.yuang.douban.web.controller;

import com.yuang.douban.po.Hero;
import com.yuang.douban.po.model.Response;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
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

    @RequestMapping(value = "api/heroes", method = RequestMethod.GET)
    @ResponseBody
    public List<Hero> getHeroes(@RequestParam(value = "name", required = false) String name, HttpServletResponse response) {
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
        return new Response("200", "successful", null);
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
        return new Response("200", "successful", null);
    }

}
