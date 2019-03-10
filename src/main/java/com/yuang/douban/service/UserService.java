package com.yuang.douban.service;

import com.yuang.douban.po.User;

/**
 * 一句话描述基本功能
 * <p>
 * created by: @author yuang on @date 2018/7/30.
 */

public interface UserService {
    User findByUsername(String userName);
}
