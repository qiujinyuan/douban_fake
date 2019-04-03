package com.yuang.douban.web.controller;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * 一句话描述基本功能
 * <p>
 * created by: @author yuang on @date 2019/3/20.
 */

public class Bar {

    static final Logger logger = LogManager.getLogger(Bar.class.getName());

    public boolean doIt() {
        logger.traceEntry();
        logger.error("Did it again!");
        return logger.traceExit(false);
    }
}
