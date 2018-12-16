package com.ethermorgan.onedaycp.mapper;

import com.ethermorgan.onedaycp.model.WxUserInfo;

public interface WxUserInfoMapper {
    int deleteByPrimaryKey(String id);

    int insert(WxUserInfo record);

    int insertSelective(WxUserInfo record);

    WxUserInfo selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(WxUserInfo record);

    int updateByPrimaryKey(WxUserInfo record);
}