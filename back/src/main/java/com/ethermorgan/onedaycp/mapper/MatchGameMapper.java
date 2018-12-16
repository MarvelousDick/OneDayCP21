package com.ethermorgan.onedaycp.mapper;

import com.ethermorgan.onedaycp.dto.UpdateDto;
import com.ethermorgan.onedaycp.model.MatchGame;

public interface MatchGameMapper {
    int insert(MatchGame record);

    int insertSelective(MatchGame record);

    int updateUser(UpdateDto updateDto);

    String selectMatchUser(String userName);

    String selectUserInfo(String userName);

    String checkUser(String userName);

    int insertUser(String userName);

    Long checkCount();
}