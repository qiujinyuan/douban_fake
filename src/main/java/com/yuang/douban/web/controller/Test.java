package com.yuang.douban.web.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * 一句话描述基本功能
 * <p>
 * created by: @author yuang on @date 2019/3/12.
 */

public class Test {

    private static final Logger logger = LogManager.getLogger(Test.class);

    public static void main(String[] args) {
        logger.trace("Entering application.");
        Bar bar = new Bar();
        if (!bar.doIt()) {
            logger.error("Didn't do it.");
        }
        logger.trace("Exiting application.");
    }
}
