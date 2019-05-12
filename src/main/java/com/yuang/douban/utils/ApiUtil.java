package com.yuang.douban.utils;

import org.apache.commons.codec.binary.Base64;

import javax.crypto.Cipher;
import java.security.*;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;

/**
 * 一句话描述基本功能
 * <p>
 * created by: @author yuang on @date 2019/5/12.
 */

public class ApiUtil {

    /**
     * 公钥加密，私钥解密
     *
     * @return 解密后的密码
     */
    public static String pubEn2PriDe(RSAPrivateKey rsaPrivateKey, String encryptedPass) {
        try {
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            //私钥解密
            PKCS8EncodedKeySpec pkcs8EncodedKeySpec = new PKCS8EncodedKeySpec(rsaPrivateKey.getEncoded());
            PrivateKey privateKey = keyFactory.generatePrivate(pkcs8EncodedKeySpec);
            Cipher cipher = Cipher.getInstance("RSA");
            cipher.init(Cipher.DECRYPT_MODE, privateKey);
            // 前端传输过来的字符串需要解码 Base64
            byte[] result = cipher.doFinal(Base64.decodeBase64(encryptedPass));
            System.out.println("公钥加密，私钥解密 --解密: " + new String(result));
            return new String(result);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
