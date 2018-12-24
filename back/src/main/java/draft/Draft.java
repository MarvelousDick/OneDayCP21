package draft;


import net.sf.json.xml.XMLSerializer;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.jdom2.CDATA;
import org.jdom2.Document;
import org.jdom2.Element;
import org.jdom2.input.SAXBuilder;

import java.io.StringReader;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

public class Draft {

    public static void main(String[] args) {

        Integer a = 10;

        short b = (short) (int) a;


//        getCdata("s9999");

        drf();

    }


    static void drf(){

        int a = Integer.parseInt("000");

        System.out.println(a);
    }



    static void getCdata(String cDataStr) {

        String xmlStr = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n" +
                "<business comment=\"购票信息查询\" id=\"Gpxxcx\">\n" +
                "  <body yylxdm=\"1\">\n" +
                "    <output>\n" +
                "      <returncode>0</returncode>\n" +
                "      <returnmsg>成功</returnmsg>\n" +
                "      <data><![CDATA[<?xml version=\"1.0\" encoding=\"GBK\"?><FPXT><OUTPUT><CODE>0000</CODE><MESS></MESS><DATA><FPMX><FPZL>2</FPZL><LBDM>3200134650</LBDM><QSHM>219615</QSHM><FPFS>986</FPFS><GMRQ>2016-09-18</GMRQ><FPJH>0</FPJH></FPMX><FPMX><FPZL>0</FPZL><LBDM>3200142140</LBDM><QSHM>220632</QSHM><FPFS>963</FPFS><GMRQ>2016-09-18</GMRQ><FPJH>1</FPJH></FPMX></DATA></OUTPUT></FPXT>]]></data>\n" +
                "    </output>\n" +
                "  </body>\n" +
                "</business>\n";

        SAXBuilder builder = new SAXBuilder();

        try {

            Document document = builder.build(new StringReader(xmlStr));
            Element root = document.getRootElement();
            Element data = root.getChild("body").getChild("output").getChild("data");

//            builder = new SAXBuilder();
//            document = builder.build(new StringReader(data.getValue()));
//            root = document.getRootElement();
//            data =  root.getChild("OUTPUT").getChild("DATA");
//            List content = data.getContent();

            System.out.println(data.getValue());

            XMLSerializer xmlSerializer = new XMLSerializer();
            String resultStr = xmlSerializer.read(data.getValue()).toString();
            JSONObject result = JSONObject.fromObject(resultStr);
//            for (Object obj : content){
//
//                System.out.println(obj.toString());
//            }

//                System.out.println(data.toString());

        } catch (Exception e) {
            e.printStackTrace();
        }


    }

}
