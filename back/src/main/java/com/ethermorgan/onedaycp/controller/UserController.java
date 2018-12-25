package com.ethermorgan.onedaycp.controller;


import com.ethermorgan.onedaycp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;



    @ResponseBody
    @GetMapping("/allWx")
    public Object findAllWxUser(){
        return userService.findWxUser();
    }


    //TODO 写接口，根据用户OpenId返回信息， 用Restful
//    @ApiOperation(value ="Render to user")
//    @ResponseBody
//    @GetMapping

}
