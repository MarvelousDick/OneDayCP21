package com.ethermorgan.onedaycp.service.impl;

import com.ethermorgan.onedaycp.dto.WxUserInfoReceived;

import com.ethermorgan.onedaycp.mapper.UserInfoMapper;
import com.ethermorgan.onedaycp.mapper.WxUserInfoMapper;

import com.ethermorgan.onedaycp.model.UserInfo;
import com.ethermorgan.onedaycp.model.UserInfoExample;
import com.ethermorgan.onedaycp.model.WxUserInfo;
import com.ethermorgan.onedaycp.model.WxUserInfoExample;
import com.ethermorgan.onedaycp.service.UserService;
import com.ethermorgan.onedaycp.util.TransUtils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;


import java.util.Date;
import java.util.List;
import java.util.UUID;

//@Service(value = "userService")
@Service
public class UserServiceImpl implements UserService {

//    @Autowired
//    private TUserMapper userDao;//这里会报错，但是并不会影响

    @Autowired
    private WxUserInfoMapper wxUserInfoMapper;

    @Autowired
    private UserInfoMapper userInfoMapper;

    @Autowired
    private TransUtils transUtils;

    @Override
    public WxUserInfo findWxUser() {
        return wxUserInfoMapper.selectByPrimaryKey("666");
    }

    @Override
    public int storeWxUserInfo(WxUserInfoReceived wxUserInfoReceived) {
        WxUserInfo wxUserInfo = new WxUserInfo();
        populateWXUserInfoFields(wxUserInfoReceived, wxUserInfo);
        int recNum = wxUserInfoMapper.insert(wxUserInfo);
        return recNum;
    }

    @Override
    public int storeUserInfo(WxUserInfoReceived wxUserInfoReceived) {
        UserInfo userInfo = new UserInfo();
        populateUserInfoFields(wxUserInfoReceived, userInfo);
        int recNum = userInfoMapper.insert(userInfo);
        return recNum;
    }

    @Override
    public List<WxUserInfo> selectWxUserByOpenId(String openId) {
        WxUserInfoExample wxUserInfoExample = new WxUserInfoExample();
        wxUserInfoExample.createCriteria().andOpenidEqualTo(openId);
        List<WxUserInfo> wxUserList = wxUserInfoMapper.selectByExample(wxUserInfoExample);
        return wxUserList;
    }

    @Override
    public List<UserInfo> selectUserInfoByOpenId(String openId){
        UserInfoExample userInfoExample = new UserInfoExample();
        userInfoExample.createCriteria().andOpenidEqualTo(openId);
        List<UserInfo> userInfoList = userInfoMapper.selectByExample(userInfoExample);
        return userInfoList;
    }

    private void populateUserInfoFields(WxUserInfoReceived wxUserInfoReceived, UserInfo userInfo) {
        userInfo.setId(UUID.randomUUID().toString());
        userInfo.setOpenid(wxUserInfoReceived.getOpenId());
        userInfo.setNickname(wxUserInfoReceived.getNickname());
        userInfo.setSex((short) (int) wxUserInfoReceived.getSex());
        userInfo.setUserstatus((short) 1);
        userInfo.setCreatetime(new Date());
    }

    private void populateWXUserInfoFields(WxUserInfoReceived wxUserInfoReceived, WxUserInfo wxUserInfo) {
        wxUserInfo.setId(UUID.randomUUID().toString());
        wxUserInfo.setOpenid(wxUserInfoReceived.getOpenId());
        wxUserInfo.setNickname(wxUserInfoReceived.getNickname());
        wxUserInfo.setSex((short) (int) wxUserInfoReceived.getSex());
        wxUserInfo.setProvince(wxUserInfoReceived.getProvince());
        wxUserInfo.setCity(wxUserInfoReceived.getCity());
        wxUserInfo.setCountry(wxUserInfoReceived.getCountry());
        wxUserInfo.setHeadimgurl(wxUserInfoReceived.getHeadImgUrl());
        wxUserInfo.setUnionid(wxUserInfoReceived.getUnionId());
        wxUserInfo.setCreatetime(new Date());
    }


}
