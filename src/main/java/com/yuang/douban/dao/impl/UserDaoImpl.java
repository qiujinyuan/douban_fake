package com.yuang.douban.dao.impl;

import com.yuang.douban.dao.UserDao;
import com.yuang.douban.po.User;
import org.apache.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

/**
 * User 数据库操作类
 * <p>
 * created by: @author yuang on @date 2018/8/6.
 */

@Repository
public class UserDaoImpl implements UserDao {

    @Autowired
    Logger logger;

    private SessionFactory sessionFactory;

    public UserDaoImpl(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    private Session currentSession() {
        return sessionFactory.getCurrentSession();
    }

    public long count() {
        return findAll().size();
    }

    public User save(User user) {
        Serializable id = currentSession().save(user);
        return new User((long) id,
                user.getName(),
                user.getPassword(),
                user.getFullName(),
                user.getEmail());
    }

    public User findOne(long id) {
        return currentSession().get(User.class, id);
    }

    @Override
    public User findByUsername(String userName) {
        Query<User> query = currentSession().createNamedQuery("get_user_by_name", User.class)
                .setParameter("name", userName);
        logger.debug("result size: " + query.getResultList().size());
        if (query.getResultList().size() > 0) {
            return query.getSingleResult();
        } else {
            return null;
        }
    }

    public List<User> findAll() {
        return currentSession().createQuery("select u from User u", User.class).list();
    }


}
