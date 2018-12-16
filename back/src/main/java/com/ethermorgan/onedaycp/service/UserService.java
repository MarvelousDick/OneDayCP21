package com.ethermorgan.onedaycp.service;


import com.ethermorgan.onedaycp.dto.WxUserInfoReceived;
import com.ethermorgan.onedaycp.model.TUser;
import com.ethermorgan.onedaycp.model.WxUserInfo;
import com.github.pagehelper.PageInfo;

/**
 * Created by Administrator on 2018/4/19.
 */
public interface UserService {

    int addUser(TUser user);

    PageInfo<TUser> findAllUser(int pageNum, int pageSize);

    WxUserInfo findWxUser();

    int storeWxUserInfo(WxUserInfoReceived wxUserInfoReceived);
}
