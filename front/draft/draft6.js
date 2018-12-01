let a = [
    "Order_Company",
    "Order_Number",
    "Order_Type",
    "Line_Number",
    "SDSFXO",
    "Branch_Plant",
    "Company_Code",
    "Orig_Order_Company",
    "Original_Order_Number",
    "Original_Order_Type",
    "SDOGNO",
    "Related_Order",
    "Related_PO_WO_Number",
    "Related_Order_Type",
    "Related_PO_WO_Line_No",
    "Agreement_Number",
    "SDDMCS",
    "Sold_To",
    "Ship_To",
    "Parent_Number",
    "Shipment_Date",
    "Order_Date",
    "Scheduled_Pick_Date",
    "Actual_Shipment_Date",
    "Invoice_Date",
    "Cancel_Date",
    "GL_Date",
    "Promised_Delivery_Date",
    "Price_Effective_Date",
    "SDPPDJ",
    "Customer_PO",
    "Reference2",
    "Short_Item_No",
    "2nd_Item_Number",
    "3rd_Item_Number",
    "Location",
    "Lot_Serial_Number",
    "SDFRGD",
    "SDTHGD",
    "SDFRMP",
    "SDTHRP",
    "SDEXDP",
    "Description_1",
    "Description_Line_2",
    "Line_Type",
    "Next_Status",
    "Last_Status",
    "SDEMCU",
    "SDRLIT",
    "SDKTLN",
    "SDCPNT",
    "SDRKIT",
    "SDKTP",
    "Brand_Code",
    "Sub_Brand",
    "Sub_Brand_Fastar",
    "Category_Code",
    "Sub_Category",
    "Seagram_Non_Seagram",
    "Class_Code",
    "Main_Category",
    "Unit_Size_Description",
    "Product_Group'g_(S.Memo)",
    "UOM",
    "Quantity_Ordered",
    "Quantity_Shipped",
    "Quantity_Backordered",
    "Quantity_Canceled",
    "SDSONE",
    "SDUOPN",
    "SDQTYT",
    "SDQRLV",
    "SDCOMM",
    "SDOTQY",
    "Unit_Price",
    "SDAEXP",
    "SDAOPN",
    "SDPROV",
    "SDTPC",
    "SDAPUM",
    "SDLPRC",
    "SDUNCS",
    "SDECST",
    "SDCSTO",
    "SDTCST",
    "SDINMG",
    "SDPTC",
    "SDRYIN",
    "SDDTBS",
    "SDTRDC",
    "SDFUN2",
    "SDASN",
    "SDPRGR",
    "SDCLVL",
    "SDCADC",
    "Document_Company",
    "Document_Number",
    "Document_Type",
    "SDODOC",
    "SDODCT",
    "SDOKC",
    "Pick_Number",
    "Delivery_Number",
    "Is_Tax",
    "Tax_Code",
    "SDEXR1",
    "SDATXT",
    "SDPRIO",
    "SDRESL",
    "SDBACK",
    "SDSBAL",
    "SDAPTS",
    "SDLOB",
    "SDEUSE",
    "SDDTYS",
    "SDNTR",
    "SDVEND",
    "Carrier_Number",
    "Mode_of_Transport",
    "SDROUT",
    "SDSTOP",
    "Zone_No",
    "SDCNID",
    "Freight_Handling_Code",
    "SDSHCM",
    "SDSHCN",
    "SDSERN",
    "SDUOM1",
    "SDPQOR",
    "SDUOM2",
    "SDSQOR",
    "Price_UOM",
    "Item_Weight",
    "Weight_UOM",
    "Item_Volume",
    "Volume_UOM",
    "SDRPRC",
    "SDORPR",
    "SDORP",
    "SDCMGP",
    "SDGLC",
    "SDCTRY",
    "Fiscal_Year",
    "SDSO01",
    "SDSO02",
    "SDSO03",
    "SDSO04",
    "SDSO05",
    "SDSO06",
    "SDSO07",
    "SDSO08",
    "SDSO09",
    "SDSO10",
    "SDSO11",
    "SDSO12",
    "SDSO13",
    "SDSO14",
    "SDSO15",
    "SDACOM",
    "SDCMCG",
    "SDRCD",
    "SDGRWT",
    "SDGWUM",
    "SDSBL",
    "SDSBLT",
    "SDLCOD",
    "SDUPC1",
    "SDUPC2",
    "SDUPC3",
    "SDSWMS",
    "SDUNCD",
    "SDCRMD",
    "Currency_Code",
    "Exchange_Rate",
    "SDFPRC",
    "Foreign_Unit_Price",
    "Foreign_Extended_Amount",
    "SDFUC",
    "SDFEC",
    "SDURCD",
    "SDURDT",
    "SDURAT",
    "SDURAB",
    "SDURRF",
    "Transaction_Originator",
    "User_ID",
    "SDPID",
    "SDJOBN",
    "SDUPMJ",
    "SDTDAY",
    "SDSO16",
    "SDSO17",
    "SDSO18",
    "SDSO19",
    "SDSO20",
    "SDIR01",
    "SDIR02",
    "SDIR03",
    "SDIR04",
    "SDIR05",
    "SDSOOR",
    "SDVR03",
    "SDDEID",
    "Pull_Signal",
    "SDRLNU",
    "SDPMDT",
    "SDRLTM",
    "SDRLDJ",
    "SDDRQT",
    "Actual_Shipment_Time",
    "Original_Promised_Time",
    "Scheduled_Pick_Time",
    "SDPSTM",
    "SDXDCK",
    "SDXPTY",
    "SDDUAL",
    "SDBSC",
    "SDCBSC",
    "SDCORD",
    "Deliver_To",
    "SDPEND",
    "SDRFRV",
    "SDMCLN",
    "Shipment_Number",
    "Promised_Delivery_Time",
    "SDPRJM",
    "SDOSEQ",
    "SDMERL",
    "SDHOLD",
    "SDHDBU",
    "SDDMBU",
    "SDBCRC",
    "SDODLN",
    "Original_Promised_Date",
    "SDXKCO",
    "SDXORN",
    "SDXCTO",
    "SDXLLN",
    "SDXSFX",
    "SDPOE",
    "SDPMTO",
    "SDANBY",
    "SDPMTN",
    "SDNUMB",
    "SDAAID",
    "SDSPATTN",
    "SDPRAN8",
    "SDPRCIDLN",
    "SDCCIDLN",
    "SDSHCCIDLN",
    "SDOPPID",
    "SDOSTP",
    "SDUKID",
    "SDCATNM",
    "SDALLOC",
    "SDFULPID",
    "SDALLSTS",
    "SDOSCORE",
    "SDOSCOREO",
    "SDCMCO",
    "SDKITID",
    "SDKITAMTDOM",
    "SDKITAMTFOR",
    "SDKITDIRTY",
    "SDOCITT",
    "SDOCCARDNO",
    "SDPMPN",
    "SDPNS",
];

let b = [
    "String Order_Company;",
    "int Order_Number;",
    "String Order_Type;",
    "BigDecimal Line_Number;",
    "String SDSFXO;",
    "String Branch_Plant;",
    "String Company_Code;",
    "String Orig_Order_Company;",
    "String Original_Order_Number;",
    "String Original_Order_Type;",
    "int SDOGNO;",
    "String Related_Order;",
    "String Related_PO_WO_Number;",
    "String Related_Order_Type;",
    "int Related_PO_WO_Line_No;",
    "String Agreement_Number;",
    "int SDDMCS;",
    "int Sold_To;",
    "int Ship_To;",
    "int Parent_Number;",
    "String Shipment_Date;",
    "String Order_Date;",
    "String Scheduled_Pick_Date;",
    "String Actual_Shipment_Date;",
    "String Invoice_Date;",
    "String Cancel_Date;",
    "String GL_Date;",
    "String Promised_Delivery_Date;",
    "String Price_Effective_Date;",
    "String SDPPDJ;",
    "String Customer_PO;",
    "String Reference2;",
    "int Short_Item_No;",
    "String second_Item_Number;",
    "String third_Item_Number;",
    "String Location;",
    "String Lot_Serial_Number;",
    "String SDFRGD;",
    "String SDTHGD;",
    "int SDFRMP;",
    "int SDTHRP;",
    "int SDEXDP;",
    "String Description_1;",
    "String Description_Line_2;",
    "String Line_Type;",
    "String Next_Status;",
    "String Last_Status;",
    "String SDEMCU;",
    "String SDRLIT;",
    "int SDKTLN;",
    "int SDCPNT;",
    "int SDRKIT;",
    "int SDKTP;",
    "String Brand_Code;",
    "String Sub_Brand;",
    "String Sub_Brand_Fastar;",
    "String Category_Code;",
    "String Sub_Category;",
    "String Seagram_Non_Seagram;",
    "String Class_Code;",
    "String Main_Category;",
    "String Unit_Size_Description;",
    "String Product_Group;",
    "String UOM;",
    "int Quantity_Ordered;",
    "int Quantity_Shipped;",
    "int Quantity_Backordered;",
    "int Quantity_Canceled;",
    "int SDSONE;",
    "int SDUOPN;",
    "int SDQTYT;",
    "int SDQRLV;",
    "String SDCOMM;",
    "String SDOTQY;",
    "BigDecimal Unit_Price;",
    "int SDAEXP;",
    "int SDAOPN;",
    "String SDPROV;",
    "String SDTPC;",
    "String SDAPUM;",
    "BigDecimal SDLPRC;",
    "BigDecimal SDUNCS;",
    "BigDecimal SDECST;",
    "String SDCSTO;",
    "int SDTCST;",
    "String SDINMG;",
    "String SDPTC;",
    "String SDRYIN;",
    "String SDDTBS;",
    "int SDTRDC;",
    "int SDFUN2;",
    "String SDASN;",
    "String SDPRGR;",
    "String SDCLVL;",
    "int SDCADC;",
    "String Document_Company;",
    "int Document_Number;",
    "String Document_Type;",
    "int SDODOC;",
    "String SDODCT;",
    "String SDOKC;",
    "int Pick_Number;",
    "int Delivery_Number;",
    "String Is_Tax;",
    "String Tax_Code;",
    "String SDEXR1;",
    "String SDATXT;",
    "String SDPRIO;",
    "String SDRESL;",
    "String SDBACK;",
    "String SDSBAL;",
    "String SDAPTS;",
    "String SDLOB;",
    "String SDEUSE;",
    "String SDDTYS;",
    "String SDNTR;",
    "int SDVEND;",
    "int Carrier_Number;",
    "String Mode_of_Transport;",
    "String SDROUT;",
    "String SDSTOP;",
    "String Zone_No;",
    "String SDCNID;",
    "String Freight_Handling_Code;",
    "String SDSHCM;",
    "String SDSHCN;",
    "String SDSERN;",
    "String SDUOM1;",
    "int SDPQOR;",
    "String SDUOM2;",
    "int SDSQOR;",
    "String Price_UOM;",
    "BigDecimal Item_Weight;",
    "String Weight_UOM;",
    "BigDecimal Item_Volume;",
    "String Volume_UOM;",
    "String SDRPRC;",
    "String SDORPR;",
    "String SDORP;",
    "String SDCMGP;",
    "String SDGLC;",
    "int SDCTRY;",
    "int Fiscal_Year;",
    "String SDSO01;",
    "String SDSO02;",
    "String SDSO03;",
    "String SDSO04;",
    "String SDSO05;",
    "String SDSO06;",
    "String SDSO07;",
    "String SDSO08;",
    "String SDSO09;",
    "String SDSO10;",
    "String SDSO11;",
    "String SDSO12;",
    "String SDSO13;",
    "String SDSO14;",
    "String SDSO15;",
    "String SDACOM;",
    "String SDCMCG;",
    "String SDRCD;",
    "int SDGRWT;",
    "String SDGWUM;",
    "String SDSBL;",
    "String SDSBLT;",
    "String SDLCOD;",
    "String SDUPC1;",
    "String SDUPC2;",
    "String SDUPC3;",
    "String SDSWMS;",
    "String SDUNCD;",
    "String SDCRMD;",
    "String Currency_Code;",
    "BigDecimal Exchange_Rate;",
    "int SDFPRC;",
    "BigDecimal Foreign_Unit_Price;",
    "int Foreign_Extended_Amount;",
    "int SDFUC;",
    "int SDFEC;",
    "String SDURCD;",
    "int SDURDT;",
    "int SDURAT;",
    "int SDURAB;",
    "String SDURRF;",
    "String Transaction_Originator;",
    "String User_ID;",
    "String SDPID;",
    "String SDJOBN;",
    "String SDUPMJ;",
    "String SDTDAY;",
    "String SDSO16;",
    "String SDSO17;",
    "String SDSO18;",
    "String SDSO19;",
    "String SDSO20;",
    "String SDIR01;",
    "String SDIR02;",
    "String SDIR03;",
    "String SDIR04;",
    "String SDIR05;",
    "int SDSOOR;",
    "String SDVR03;",
    "int SDDEID;",
    "String Pull_Signal;",
    "String SDRLNU;",
    "int SDPMDT;",
    "int SDRLTM;",
    "int SDRLDJ;",
    "int SDDRQT;",
    "int Actual_Shipment_Time;",
    "int Original_Promised_Time;",
    "int Scheduled_Pick_Time;",
    "int SDPSTM;",
    "String SDXDCK;",
    "int SDXPTY;",
    "String SDDUAL;",
    "String SDBSC;",
    "String SDCBSC;",
    "int SDCORD;",
    "int Deliver_To;",
    "String SDPEND;",
    "String SDRFRV;",
    "int SDMCLN;",
    "int Shipment_Number;",
    "int Promised_Delivery_Time;",
    "int SDPRJM;",
    "int SDOSEQ;",
    "String SDMERL;",
    "String SDHOLD;",
    "String SDHDBU;",
    "String SDDMBU;",
    "String SDBCRC;",
    "int SDODLN;",
    "String Original_Promised_Date;",
    "String SDXKCO;",
    "int SDXORN;",
    "String SDXCTO;",
    "int SDXLLN;",
    "String SDXSFX;",
    "String SDPOE;",
    "String SDPMTO;",
    "int SDANBY;",
    "String SDPMTN;",
    "int SDNUMB;",
    "int SDAAID;",
    "String SDSPATTN;",
    "int SDPRAN8;",
    "int SDPRCIDLN;",
    "int SDCCIDLN;",
    "int SDSHCCIDLN;",
    "int SDOPPID;",
    "String SDOSTP;",
    "int SDUKID;",
    "String SDCATNM;",
    "String SDALLOC;",
    "int SDFULPID;",
    "String SDALLSTS;",
    "int SDOSCORE;",
    "String SDOSCOREO;",
    "String SDCMCO;",
    "int SDKITID;",
    "int SDKITAMTDOM;",
    "int SDKITAMTFOR;",
    "String SDKITDIRTY;",
    "String SDOCITT;",
    "int SDOCCARDNO;",
    "String SDPMPN;",
    "int SDPNS;",
];

for (let item in a) {
    console.log("@JsonProperty(\"" + a[item] + "\")");
    console.log(b[item]);
}