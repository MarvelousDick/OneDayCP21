package com.ethermorgan.onedaycp.service.impl;

import com.ethermorgan.onedaycp.dto.OperationResultDto;
import com.ethermorgan.onedaycp.dto.WxUserInfoReceived;

import com.ethermorgan.onedaycp.dto.response.UserInfoResp;
import com.ethermorgan.onedaycp.mapper.UserInfoMapper;
import com.ethermorgan.onedaycp.mapper.WxUserInfoMapper;

import com.ethermorgan.onedaycp.model.UserInfo;
import com.ethermorgan.onedaycp.model.UserInfoExample;
import com.ethermorgan.onedaycp.model.WxUserInfo;
import com.ethermorgan.onedaycp.model.WxUserInfoExample;
import com.ethermorgan.onedaycp.service.UserService;
import com.ethermorgan.onedaycp.util.CommonUtils;
import com.ethermorgan.onedaycp.util.SyncDataUtil;
import com.ethermorgan.onedaycp.util.TransUtils;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.util.Assert;


import java.util.Date;
import java.util.List;
import java.util.UUID;

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

    @Autowired
    private SyncDataUtil syncDataUtil;

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
        wxUserInfoExample.createCriteria().andOpenIdEqualTo(openId);
        List<WxUserInfo> wxUserList = wxUserInfoMapper.selectByExample(wxUserInfoExample);
        return wxUserList;
    }

    @Override
    public UserInfoResp getUserInfoRespByOpenId(String openId){
        UserInfoExample userInfoExample = new UserInfoExample();
        userInfoExample.createCriteria().andOpenIdEqualTo(openId);
        List<UserInfo> userInfoList = userInfoMapper.selectByExample(userInfoExample);
        Assert.isTrue(userInfoList.size() > 0, "No Record");
        UserInfoResp resp = new UserInfoResp();
        populateUserInfoResp(userInfoList.get(0), resp);
        return resp;
    }


    @Override
    public List<UserInfo>  selectUserInfoByOpenId(String openId) {
        UserInfoExample userInfoExample = new UserInfoExample();
        userInfoExample.createCriteria().andOpenIdEqualTo(openId);
        List<UserInfo> userInfoList = userInfoMapper.selectByExample(userInfoExample);
        Assert.isTrue(userInfoList.size() > 0, "No Record");
        return userInfoList;
    }

    @Override
    public int changeUserInfo(String openId, UserInfo userInfo) {
        UserInfoExample userInfoExample = new UserInfoExample();
        userInfoExample.createCriteria().andOpenIdEqualTo(openId);

        userInfo.setUserStatus((short) 2);
        return userInfoMapper.updateByExample(userInfo, userInfoExample);
    }

    private void populateUserInfoFields(WxUserInfoReceived wxUserInfoReceived, UserInfo userInfo) {
        CommonUtils.copyProperties(wxUserInfoReceived, userInfo);
        userInfo.setId(UUID.randomUUID().toString());
        userInfo.setOpenId(wxUserInfoReceived.getOpenId());
        userInfo.setNickName(wxUserInfoReceived.getNickname());
        userInfo.setSex(syncDataUtil.transSex(wxUserInfoReceived.getSex()));
        userInfo.setMatchSex(syncDataUtil.getDefaultMatchSex(wxUserInfoReceived.getSex()));
        userInfo.setHeadimgUrl(wxUserInfoReceived.getHeadImgUrl());
        userInfo.setUserStatus((short) 1);
        userInfo.setCreateTime(new Date());
    }

    private void populateWXUserInfoFields(WxUserInfoReceived wxUserInfoReceived, WxUserInfo wxUserInfo) {
        CommonUtils.copyProperties(wxUserInfoReceived, wxUserInfo);
        wxUserInfo.setId(UUID.randomUUID().toString());
        wxUserInfo.setOpenId(wxUserInfoReceived.getOpenId());
        wxUserInfo.setNickName(wxUserInfoReceived.getNickname());
        wxUserInfo.setSex((short) (int) wxUserInfoReceived.getSex());
        wxUserInfo.setProvince(wxUserInfoReceived.getProvince());
        wxUserInfo.setCity(wxUserInfoReceived.getCity());
        wxUserInfo.setCountry(wxUserInfoReceived.getCountry());
        wxUserInfo.setHeadimgUrl(wxUserInfoReceived.getHeadImgUrl());
        wxUserInfo.setUnionId(wxUserInfoReceived.getUnionId());
        wxUserInfo.setCreateTime(new Date());
    }

    private void populateUserInfoResp(UserInfo userInfo, UserInfoResp userInfoResp) {
        CommonUtils.copyProperties(userInfo, userInfoResp);
        userInfoResp.setBirthday(transUtils.dateToString(userInfo.getBirthday(), "yyyy-MM-dd"));
    }

}
