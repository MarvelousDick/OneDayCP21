package com.ethermorgan.onedaycp;

import com.ethermorgan.onedaycp.mapper.WxUserInfoMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class OnedaycpApplicationTests {

    WxUserInfoMapper wxUserInfoMapper;

    @Test
    public void contextLoads() {

        wxUserInfoMapper.selectByPrimaryKey("666");

    }

}
