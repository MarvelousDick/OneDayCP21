package com.ethermorgan.onedaycp.dto.response;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UserInfoResp {
    private String id;

    private String openId;

    private String nickName;

    private Short sex;

    private Short matchSex;

    private String birthday;

    private String wechatId;

    private String university;

    private String major;

    private String headimgUrl;

    private Short userStatus;

    private Date createTime;

}