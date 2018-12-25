package com.ethermorgan.onedaycp.mapper;

import com.ethermorgan.onedaycp.model.WxUserInfo;
import com.ethermorgan.onedaycp.model.WxUserInfoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface WxUserInfoMapper {
    int countByExample(WxUserInfoExample example);

    int deleteByExample(WxUserInfoExample example);

    int deleteByPrimaryKey(String id);

    int insert(WxUserInfo record);

    int insertSelective(WxUserInfo record);

    List<WxUserInfo> selectByExample(WxUserInfoExample example);

    WxUserInfo selectByPrimaryKey(String id);

    int updateByExampleSelective(@Param("record") WxUserInfo record, @Param("example") WxUserInfoExample example);

    int updateByExample(@Param("record") WxUserInfo record, @Param("example") WxUserInfoExample example);

    int updateByPrimaryKeySelective(WxUserInfo record);

    int updateByPrimaryKey(WxUserInfo record);
}