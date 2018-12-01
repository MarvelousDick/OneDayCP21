package com.ethermorgan.onedaycp.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

//@RequestMapping("/")
@RestController
public class TestController {

    @ResponseBody
    @RequestMapping("hello")
    public String hello(){
        return "Hello World!";
    }
}
