package com.ethermorgan.onedaycp.controller;

import com.ethermorgan.onedaycp.dto.OperationResultDto;
import com.ethermorgan.onedaycp.model.UserInfo;
import com.ethermorgan.onedaycp.service.UserService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;


    @ResponseBody
    @GetMapping("/allWx")
    public Object findAllWxUser() {
        return userService.findWxUser();
    }


    //TODO 写接口，根据用户OpenId返回信息， 用Restful
    @ApiOperation(value = "Return User Infomation")
    @RequestMapping(value = "/getUserInfo/{openID}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    OperationResultDto<UserInfo> getUserInfo(@PathVariable("openID") String openID) {
        OperationResultDto<UserInfo> operationResultDto = new OperationResultDto<>();
        List<UserInfo> userInfoList = userService.selectUserInfoByOpenId(openID);
        if (userInfoList.size() == 0) {
            operationResultDto.setResult(false);
            operationResultDto.setResultMsg("No Result");
        } else {
            operationResultDto.setData(userInfoList.get(0));
        }
        return operationResultDto;
    }

}
