package draft;

import org.jdom2.CDATA;
import org.jdom2.Document;
import org.jdom2.JDOMException;
import org.jdom2.input.SAXBuilder;

import javax.xml.bind.SchemaOutputResolver;
import java.io.IOException;
import java.io.StringReader;

public class CDataGet {

    public void getCdata(String cDataStr) {

        String xmlStr = "<![CDATA[<?xml version=\"1.0\" encoding=\"GBK\"?><FPXT><OUTPUT><CODE>0000</CODE><MESS></MESS><DATA><FPMX><FPZL>2</FPZL><LBDM>3200134650</LBDM><QSHM>219615</QSHM><FPFS>986</FPFS><GMRQ>2016-09-18</GMRQ><FPJH>0</FPJH></FPMX><FPMX><FPZL>0</FPZL><LBDM>3200142140</LBDM><QSHM>220632</QSHM><FPFS>963</FPFS><GMRQ>2016-09-18</GMRQ><FPJH>1</FPJH></FPMX></DATA></OUTPUT></FPXT>]]>";

        SAXBuilder builder = new SAXBuilder();


        try {
            CDATA cdata = (CDATA) (Object) xmlStr;
            String a = cdata.getValue();
            System.out.println(a);

        } catch (Exception e) {
            e.printStackTrace();
        }


    }

}
