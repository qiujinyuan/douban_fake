package com.yuang.bbs.po;

/**
 * 一句话描述基本功能
 * <p>
 * created by: @author yuang on @date 2018/7/21.
 */

public class Hero {

    private int id;
    private String name;

    public Hero(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
