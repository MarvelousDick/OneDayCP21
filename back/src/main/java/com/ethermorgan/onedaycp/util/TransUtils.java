package com.ethermorgan.onedaycp.util;

import org.joda.time.Duration;
import org.nutz.lang.Lang;
import org.nutz.lang.Strings;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;
import java.util.regex.Pattern;

@Component
public class TransUtils {

    // 定义日期的范围，暂定为2000年到8000年
    static final long minTime;
    static final long maxTime;

    static {
        SimpleDateFormat sdf = buildDateFormatStatic("yyyy");
        try {
            minTime = sdf.parse("2000").getTime();
            maxTime = sdf.parse("8000").getTime();
        } catch (ParseException e) {
            throw Lang.wrapThrow(e);
        }
    }

    /**
     * 字符串转日期格式，如果出错返回null
     */
    public Date stringToDate(String inputString, String dateFormat) {
        try {
            SimpleDateFormat sdf = buildDateFormat(dateFormat);
            Date result = sdf.parse(inputString);
            Assert.notNull(result, "Null result date");

            // 查看是否是合法的范围
            // 因为Sqlserver数据库的datetime范围是有限的
            if (result.getTime() >= minTime && result.getTime() <= maxTime)
                return result;

            if (dateFormat.contains("yyyy")) {
                // 尝试把4位年份改为2位的再转一次
                return stringToDate(inputString, dateFormat.replace("yyyy", "yy"));
            } else {
                return null;
            }
        } catch (Exception e) {
            return null;
        }
    }

    public String dateToString(Date date, String dateFormat) {

        try {
            SimpleDateFormat sdf = new SimpleDateFormat(dateFormat);
            return sdf.format(date);
        } catch (Exception e) {
            return null;
        }

    }


    /* 判断OrderType  normal: id = 1, credit: id = 2, gift: id = 3*/
    public short judgeOrderType(String OrderType, int credit) {
        short result = 1;
        if (credit < 0) {
            result = 2;
        } else if (OrderType.equals("S4")) {
            result = 3;
        }
        return result;
    }

    /**
     * 构造一个SimpleDateFormat对象，使用上海时区
     *
     * @throws NullPointerException     if the given pattern is null
     * @throws IllegalArgumentException if the given pattern is invalid
     */
    public SimpleDateFormat buildDateFormat(String dateformat) {
        return buildDateFormatStatic(dateformat);
    }

    private static SimpleDateFormat buildDateFormatStatic(String dateformat) {
        SimpleDateFormat sdf = new SimpleDateFormat(dateformat, Locale.US);
        sdf.setTimeZone(TimeZone.getTimeZone("Asia/Shanghai"));
        return sdf;
    }

    /**
     * Trim字符串，并限定字符串的长度. 如果是输入值是空指针，会返回空字符串
     */
    public String trimLimit(String str, int limit) {
        if (Strings.isBlank(str)) {
            return "";
        }
        String tmp = str.trim();
        String result = cutString(tmp, limit);
        if (result == null)
            result = "";
        return result;
    }

    /**
     * 限定字符串的长度.
     */
    public String cutString(String s, int length) {
        if (Lang.isEmpty(length) || Lang.isEmpty(s))
            return "";
        else if (s.length() <= length)
            return s;
        else
            return s.substring(0, length);
    }

    /**
     * 把字符串转为金额，支逗号做小数点, 如果格式出错返回null
     */
    private BigDecimal toAmount(String str) {
        String tmp = trimLimit(str, 100);
        if (Strings.isBlank(str)) {
            return null;
        }
        try {
            tmp = tmp.replaceAll(",", "");
            return new BigDecimal(tmp);
        } catch (Exception e) {
            return null;
        }
    }

    public BigDecimal toAmount(String str, boolean germanyStyleFlag) {
        if (germanyStyleFlag)
            return toAmountGermanyStyle(str);
        return toAmount(str);
    }

    /**
     * 把字符串转为金额，支逗号做小数点, 如果格式出错返回null.
     */
    private BigDecimal toAmountGermanyStyle(String str) {
        String tmp = trimLimit(str, 100);
        if (Strings.isBlank(str)) {
            return null;
        }
        try {
            tmp = tmp.replaceAll("\\.", "").replaceAll(",", ".");
            return new BigDecimal(tmp);
        } catch (Exception e) {
            return null;
        }
    }

    /**
     * 去除字符串中的空格, 比如"40.00 %"转为"40.00%"
     */
    public String replaceSpace(String str, int limit) {
        if (Strings.isBlank(str)) {
            return "";
        }
        return trimLimit(str.replaceAll("\\s+", ""), limit);
    }

    /**
     * 去除字母等非数字部份，只取数字部份，但会保留小数点，逗号
     */
    public String cleanAmountString(String str) {
        if (Strings.isBlank(str)) {
            return "";
        }
        String tmp = trimLimit(str, 100);
        Pattern p = Pattern.compile("[^0-9,.]+");
        return p.matcher(tmp).replaceAll("");
    }

    /**
     * 去除字母等非数字部份，只取数字部份，但会保留小数点，逗号
     */
    public String cleanAmountString(String str, int limit) {
        if (Strings.isBlank(str)) {
            return "";
        }
        String tmp = trimLimit(str, limit);
        Pattern p = Pattern.compile("[^0-9,.]+");
        return p.matcher(tmp).replaceAll("");
    }

    /**
     * 去除文件名里的中文，特殊字符等，只保留a-zA-Z.0-9_-
     */
    public String cleanFilename(String str) {
        if (Strings.isBlank(str)) {
            return "";
        }
        String tmp = trimLimit(str, 100);
        Pattern p = Pattern.compile("[^a-zA-Z.0-9_\\-]+");
        return p.matcher(tmp).replaceAll("");
    }

    public String BigDecimalToString(BigDecimal input, String format) {
        if (input == null)
            return "";
        try {
            DecimalFormat df = new DecimalFormat(format);
            return df.format(input);
        } catch (Exception e) {
            return String.valueOf(input);
        }
    }

    /**
     * 使用######.##来格式化
     */
    public String BigDecimalToString(BigDecimal input) {
        return BigDecimalToString(input, "######.##");
    }

    public String getChinese(String paramValue) {
        if (Strings.isBlank(paramValue)) {
            return "";
        }
        return paramValue.replaceAll("[^\u4e00-\u9fa5]", "");
    }

    /**
     * 数字转为26进制
     * <pre>
     * 0 ->    A
     * 1 ->    B
     * 2 ->    C
     * ...
     * 25 ->    Z
     * 26 ->   AA
     * 27 ->   AB
     * 28 ->   AC
     * ...
     * 701 ->   ZZ
     * 702 ->  AAA
     * ...
     * </pre>
     */
    public String toAlphabetic(int i) {
        if (i < 0) {
            return "-" + toAlphabetic(-i - 1);
        }

        int quot = i / 26;
        int rem = i % 26;
        char letter = (char) ((int) 'A' + rem);
        if (quot == 0) {
            return "" + letter;
        } else {
            return toAlphabetic(quot - 1) + letter;
        }
    }

    public String getNowDate() {
        String temp_str = "";
        Date dt = new Date();
        //最后的aa表示“上午”或“下午”    HH表示24小时制    如果换成hh表示12小时制
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss aa");
        temp_str = sdf.format(dt);
        return temp_str;
    }


}