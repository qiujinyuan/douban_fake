package com.yuang.douban.po.model;

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

    public Response(String code, String message) {
        this.code = code;
        this.message = message;
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
}
