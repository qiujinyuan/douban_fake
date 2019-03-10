package com.yuang.douban.po;

import javax.persistence.*;

/**
 * 用户
 * <p>
 * created by: @author yuang
 *
 * @date 2018/7/12.
 */

@NamedQuery(
        name = "get_user_by_name",
        query = "select u from com.yuang.douban.po.User u where name = :name"
)
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue
    private long id;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "name")
    private String name;

    private String password;

    private String fullName;

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    private String email;

    public User() {
    }

    public User(long id, String name, String password, String fullName, String email) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.fullName = fullName;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", fullName='" + fullName + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
