package com.ethermorgan.onedaycp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/test")
@RestController
public class TestController {

//    @Autowired
//    MatchGameMapper matchGameMapper;

    @ResponseBody
    @RequestMapping("/hello")
    public String hello() {
        return "Hello World!";
    }

/*
    @ResponseBody
    @RequestMapping("/match")
    public String match(@RequestParam("userName") String userName) {

        Long count = matchGameMapper.checkCount();

        if(count == 1){
            return "只有你一个人,等待其他人加入";
        }

        String matchUser;
        if(matchGameMapper.checkUser(userName) == null){
//            matchGameMapper.insertUser(userName);
            return "关闭注册";
        }

        if(matchGameMapper.selectUserInfo(userName) == null){
            matchUser = matchGameMapper.selectMatchUser(userName);
            UpdateDto updateDto = new UpdateDto(userName, matchUser);
            matchGameMapper.updateUser(updateDto);
        }else {
            matchUser = matchGameMapper.selectUserInfo(userName);
        }

        return matchUser;
    }
*/
//    @ResponseBody
//    @RequestMapping(value = "/add", produces = {"application/json;charset=UTF-8"})
//    public


}
