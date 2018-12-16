package com.ethermorgan.onedaycp.service.impl;

import com.ethermorgan.onedaycp.dto.WxUserInfoReceived;
import com.ethermorgan.onedaycp.mapper.TUserMapper;

import com.ethermorgan.onedaycp.mapper.WxUserInfoMapper;
import com.ethermorgan.onedaycp.model.TUser;

import com.ethermorgan.onedaycp.model.WxUserInfo;
import com.ethermorgan.onedaycp.service.UserService;
import com.ethermorgan.onedaycp.util.TransUtils;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import me.chanjar.weixin.mp.bean.result.WxMpUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

//@Service(value = "userService")
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private TUserMapper userDao;//这里会报错，但是并不会影响

    @Autowired
    private WxUserInfoMapper wxUserInfoMapper;

    @Autowired
    private TransUtils transUtils;

    @Override
    public int addUser(TUser user) {
        return userDao.insert(user);
    }

    /*
     * 这个方法中用到了我们开头配置依赖的分页插件pagehelper
     * 很简单，只需要在service层传入参数，然后将参数传递给一个插件的一个静态方法即可；
     * pageNum 开始页数
     * pageSize 每页显示的数据条数
     * */
    @Override
    public PageInfo<TUser> findAllUser(int pageNum, int pageSize) {
        //将参数传给这个方法就可以实现物理分页了，非常简单。
        PageHelper.startPage(pageNum, pageSize);
        List<TUser> userDomains = userDao.selectUsers();
        PageInfo result = new PageInfo(userDomains);
        return result;
    }

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
