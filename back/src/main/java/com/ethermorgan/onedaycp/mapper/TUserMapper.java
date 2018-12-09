package com.ethermorgan.onedaycp.mapper;

import com.ethermorgan.onedaycp.model.TUser;

import java.util.List;

public interface TUserMapper {
    int deleteByPrimaryKey(Integer userid);

    int insert(TUser record);

    int insertSelective(TUser record);

    TUser selectByPrimaryKey(Integer userid);

    int updateByPrimaryKeySelective(TUser record);

    int updateByPrimaryKey(TUser record);

    List<TUser> selectUsers();
}