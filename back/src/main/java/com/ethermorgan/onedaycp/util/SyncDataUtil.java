package com.ethermorgan.onedaycp.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class SyncDataUtil {

    private static Logger logger = LoggerFactory.getLogger(SyncDataUtil.class);

    public short transSex(Integer sex) {
        return (short) (int) sex;
    }

    public short getDefaultMatchSex(Integer sex) {

        int sexInt = (int) sex;
        switch (sexInt) {
            case 1:
                return (short) 2;
            case 2:
                return (short) 1;
            default:
                return (short) 2;
        }

    }

}
