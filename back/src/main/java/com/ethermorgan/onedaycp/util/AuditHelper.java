package com.ethermorgan.onedaycp.util;


import org.nutz.lang.Mirror;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class AuditHelper {
    private static Logger logger = LoggerFactory.getLogger(AuditHelper.class);

    public void auditCreate(Object obj) {
        try {
            doAuditCreate(obj);
        } catch (Exception e) {
            logger.error("Error in auditCreate:" + e);
        }
    }

    private void doAuditCreate(Object obj) {
        Mirror<?> mirror = Mirror.me(obj);
        try {
            mirror.getField("createTime");
            mirror.setValue(obj, "createTime", new Date());
        } catch (NoSuchFieldException e) {
            // ingore it
        }
        try {
            mirror.getField("updateTime");
            mirror.setValue(obj, "updateTime", new Date());
        } catch (NoSuchFieldException e) {
            // ignore it
        }

        try {
            mirror.getField("createdTime");
            mirror.setValue(obj, "createdTime", new Date());
        } catch (NoSuchFieldException e) {
            // ingore it
        }
        try {
            mirror.getField("updatedTime");
            mirror.setValue(obj, "updatedTime", new Date());
        } catch (NoSuchFieldException e) {
            // ingore it
        }


    }

    public void auditUpdate(Object obj) {
        try {
            doAuditUpdate(obj);
        } catch (Exception e) {
            logger.error("Error in auditUpdate:" + e);
        }
    }

    private void doAuditUpdate(Object obj) {
        Mirror<?> mirror = Mirror.me(obj);
        try {
            mirror.getField("updateTime");
            mirror.setValue(obj, "updateTime", new Date());
        } catch (NoSuchFieldException e) {
            // ingore it
        }

    }

}
