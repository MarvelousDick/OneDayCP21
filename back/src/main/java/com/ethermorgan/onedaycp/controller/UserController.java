package com.ethermorgan.onedaycp.controller;

import com.ethermorgan.onedaycp.dto.OperationResultDto;
import com.ethermorgan.onedaycp.dto.response.UserInfoResp;
import com.ethermorgan.onedaycp.model.UserInfo;
import com.ethermorgan.onedaycp.service.UserService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


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

    @ApiOperation(value = "Return User Infomation")
    @RequestMapping(value = "/userInfo/{openID}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    OperationResultDto<UserInfoResp> getUserInfo(@PathVariable("openID") String openID) {
        OperationResultDto<UserInfoResp> operationResultDto = new OperationResultDto<>();
        UserInfoResp userInfoResp = userService.getUserInfoRespByOpenId(openID);
        operationResultDto.setResult(true);
        operationResultDto.setData(userInfoResp);
        return operationResultDto;
    }

    @ApiOperation(value = "Receive User Information and Modify")
    @RequestMapping(value = "/userInfo/{openID}", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public @ResponseBody
    OperationResultDto<UserInfo> changeUserInfo(@PathVariable("openID") String openID, @RequestBody UserInfo userInfo) {
        OperationResultDto<UserInfo> operationResultDto = new OperationResultDto<>();
        int modifiedColumn = userService.changeUserInfo(openID, userInfo);
        operationResultDto.setResultMsg("Updated " + modifiedColumn + " Message");
        operationResultDto.setReturnCode(0);
        operationResultDto.setResult(true);
        return operationResultDto;
    }

}
