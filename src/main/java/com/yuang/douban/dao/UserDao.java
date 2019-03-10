package com.yuang.douban.dao;

import com.yuang.douban.po.User;


/**
 * User 接口
 * <p>
 * created by: @author yuang on @date 2018/8/6.
 */

public interface UserDao {

    User findByUsername(String userName);
}
