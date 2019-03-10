package com.yuang.douban.service.impl;

import com.yuang.douban.dao.UserDao;
import com.yuang.douban.po.User;
import com.yuang.douban.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 一句话描述基本功能
 * <p>
 * created by: @author yuang on @date 2018/7/30.
 */

@Transactional(readOnly = true, rollbackFor = Exception.class)
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserDao userDao;

    @Override
    public User findByUsername(String userName) {
        return userDao.findByUsername(userName);
    }
}
