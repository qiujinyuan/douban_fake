package com.yuang.douban.config;

import org.apache.log4j.Logger;
import org.apache.logging.log4j.core.config.ConfigurationSource;
import org.apache.logging.log4j.core.config.Configurator;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import javax.swing.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.net.URL;

/**
 * 一句话描述基本功能
 * <p>
 * created by: @author yuang on @date 2018/7/12.
 */

@Configuration
@ComponentScan
public class SpringConfig {

    @Bean
    public static Logger logger() {
        String path = "/log4j.properties";
        URL url = SpringConfig.class.getResource(path);
        ConfigurationSource source;
        try {
            source = new ConfigurationSource(new FileInputStream(new File(url.getPath())), url);
            Configurator.initialize(null, source);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        Logger logger = Logger.getLogger(Spring.class);
        return logger;
    }
}
