package com.ethermorgan.onedaycp.service;


import com.ethermorgan.onedaycp.dto.WxUserInfoReceived;
import com.ethermorgan.onedaycp.model.UserInfo;
import com.ethermorgan.onedaycp.model.WxUserInfo;
import com.github.pagehelper.PageInfo;

import java.util.List;

/**
 * Created by Administrator on 2018/4/19.
 */
public interface UserService {

    WxUserInfo findWxUser();

    int storeWxUserInfo(WxUserInfoReceived wxUserInfoReceived);

    int storeUserInfo(WxUserInfoReceived wxUserInfoReceived);

    List<WxUserInfo> selectWxUserByOpenId(String openId);

    List<UserInfo> selectUserInfoByOpenId(String openId);

}
