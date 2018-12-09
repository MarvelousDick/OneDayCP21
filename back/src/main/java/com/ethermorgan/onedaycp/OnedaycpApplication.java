package com.ethermorgan.onedaycp;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.ethermorgan.onedaycp.mapper")
public class OnedaycpApplication {

    public static void main(String[] args) {
        SpringApplication.run(OnedaycpApplication.class, args);
    }
}
