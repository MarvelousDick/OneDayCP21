package com.ethermorgan.onedaycp.mapper;

import com.ethermorgan.onedaycp.model.WXUserInfo;

public interface WXUserInfoMapper {
    int deleteByPrimaryKey(String id);

    int insert(WXUserInfo record);

    int insertSelective(WXUserInfo record);

    WXUserInfo selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(WXUserInfo record);

    int updateByPrimaryKey(WXUserInfo record);
}