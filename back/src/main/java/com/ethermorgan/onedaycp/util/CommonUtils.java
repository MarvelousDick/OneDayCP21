package com.ethermorgan.onedaycp.util;

import org.apache.commons.io.IOUtils;
import org.nutz.lang.Lang;
import org.springframework.core.io.ClassPathResource;

import java.io.*;
import java.util.*;

public class CommonUtils {

    public static String getUUID() {
        return UUID.randomUUID().toString().toUpperCase();
    }

    public static <T> T copyProperties(Object sourceObject, T targetObject) {
        Lang.copyProperties(sourceObject, targetObject);
        return targetObject;
    }

    public static <T> T copyProperties(Object sourceObject, T targetObject, boolean ignoreAuditFields) {
        String ignoreFieldsExpress = ignoreAuditFields ? "^(createTime|createdBy|updateTime|updatedBy)$" : null;
        return copyProperties(sourceObject, targetObject, ignoreFieldsExpress);
    }

    public static <T> T copyProperties(Object sourceObject, T targetObject, String ignoreFieldsExpress) {
        Lang.copyProperties(sourceObject, targetObject, null, ignoreFieldsExpress, false, true);
        return targetObject;
    }

    /**
     * Determines whether [is date time overlapp] [the specified start].
     *
     * @param start        - The start
     * @param end          - The end
     * @param compareStart - The compare start
     * @param compareEnd   - The compare end
     * @return true - there is overlap; false - there is no overlap
     */
    public static boolean isDateTimeOverlap(Date start, Date end, Date compareStart, Date compareEnd) {

        //1/1/0001 12:00:00 AM  (Equals Date.MinValue)
        //9999/12/31 23:59:59 PM (Equals Date.MaxValue)

        Calendar calMin = Calendar.getInstance();
        calMin.set(0001, 1, 1, 0, 0, 0);
        Calendar calMax = Calendar.getInstance();
        calMax.set(9999, 12, 32, 23, 59, 59);

        start = start == null ? calMin.getTime() : start;
        end = end == null ? calMin.getTime() : end;
        compareStart = compareStart == null ? calMin.getTime() : compareStart;
        compareEnd = compareEnd == null ? calMin.getTime() : compareEnd;

        if (start.compareTo(compareEnd) <= 0 && end.compareTo(compareStart) >= 0) {
            return true;
        }

        return false;
    }


    public static String readClasspathFileToString(String path) {
        String text = null;
        ;
        try {
            ClassPathResource classPathResource = new ClassPathResource(path);
            text = IOUtils.toString(classPathResource.getInputStream(), "UTF-8");
        } catch (IOException e) {
            throw Lang.wrapThrow(e);
        }
        return text;
    }

    public static <T> List<T> ListDeepCopy(List<T> src) throws IOException, ClassNotFoundException {
        ByteArrayOutputStream byteOut = new ByteArrayOutputStream();
        ObjectOutputStream out = new ObjectOutputStream(byteOut);
        out.writeObject(src);

        ByteArrayInputStream byteIn = new ByteArrayInputStream(byteOut.toByteArray());
        ObjectInputStream in = new ObjectInputStream(byteIn);
        @SuppressWarnings("unchecked")
        List<T> dest = (List<T>) in.readObject();
        return dest;
    }
}
