package com.yuang.douban.config;

import com.alibaba.druid.pool.DruidDataSource;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.core.config.ConfigurationSource;
import org.apache.logging.log4j.core.config.Configurator;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.support.PropertiesLoaderUtils;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;

import javax.sql.DataSource;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.URL;
import java.util.Properties;

/**
 * Spring 基于 Java 类进行配置
 * <p>
 * created by: @author yuang on @date 2018/7/12.
 */

@Configuration
@ComponentScan
public class SpringConfig {


    /**
     * Log4j 日志记录类
     *
     * @return 注入日志 bean
     */
    @Bean
    public static Logger logger() {
        String path = "/conf/log4j2.xml";
        URL url = SpringConfig.class.getResource(path);
        System.out.println("Log4j: url" + url);
        ConfigurationSource source;
        try {
            source = new ConfigurationSource(new FileInputStream(new File(url.getPath())), url);
            Configurator.initialize(null, source);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        Logger logger = LogManager.getLogger(LogManager.ROOT_LOGGER_NAME);
        return logger;
    }

    /**
     * Hibernate session
     *
     * @param dataSource 数据源
     * @return 数据库访问 session 入口
     */
    @Bean
    public LocalSessionFactoryBean sessionFactory(DataSource dataSource) {
        LocalSessionFactoryBean sfb = new LocalSessionFactoryBean();
        sfb.setDataSource(dataSource);
        sfb.setPackagesToScan(new String[]{"com.yuang.douban.po"});
        Properties props = new Properties();
        props.setProperty("dialect", "org.hibernate.dialect.MySQLDialect");
        sfb.setHibernateProperties(props);
        return sfb;
    }

    /**
     * Druid 数据库连接池
     *
     * @return 注入数据源
     */
    @Bean
    public DruidDataSource dataSource() throws IOException {
        DruidDataSource ds = new DruidDataSource();
        Properties props = PropertiesLoaderUtils.loadAllProperties("conf/db.properties");
        ds.setDriverClassName("com.mysql.jdbc.Driver");
        ds.setUrl(props.getProperty("url"));
        ds.setUsername(props.getProperty("username"));
        ds.setPassword(props.getProperty("password"));
        ds.setMaxActive(20);
        return ds;
    }


    /**
     * 转换异常
     *
     */
    @Bean
    public BeanPostProcessor persistenceTransaction() {
        return new PersistenceExceptionTranslationPostProcessor();
    }


    /**
     * 事务管理器
     *
     * @param sessionFactory session 工厂 bean
     * @return
     */
    @Bean
    public HibernateTransactionManager transactionManager(SessionFactory sessionFactory) {
        HibernateTransactionManager transactionManager = new HibernateTransactionManager();
        transactionManager.setSessionFactory(sessionFactory);
        return transactionManager;
    }
}
