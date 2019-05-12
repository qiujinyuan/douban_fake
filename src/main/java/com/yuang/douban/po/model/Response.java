package com.yuang.douban.po.model;

import java.util.Map;

/**
 * 返回响应对象
 * <p>
 * created by: @author yuang on 2018/7/12.
 */

public class Response {

    /**
     * 返回码
     */
    private String code;
    /**
     * 返回信息
     */
    private String message;

    /**
     * 返回数据
     * @param code
     * @param message
     */
    private Map data;

    public Response(String code, String message, Map data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Map getData() {
        return data;
    }

    public void setData(Map data) {
        this.data = data;
    }
}
