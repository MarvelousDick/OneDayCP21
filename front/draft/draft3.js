let c = {
    "Address_Code": "9000001",
    "ABALKY": "ABALKY",
    "Tax_ID": "310101134506330",
    "Name": "SHANGHAI PUXING TRADING CO.LTD.",
    "Second_Name": "上海浦星贸易有限公司",
    "Business_Unit": "398DPWH1",
    "Type": "C",
    "Invoice_Type": "V",
    "AR_AP_NETTING_Y": "N",
    "Payables_Y_N_M": "N",
    "Receivables_Y_N": "Y",
    "Parent_Number": "9000319",
    "Alternate_Address_Number1": "9000001",
    "Alternate_Address_Number2": "9000001",
    "Alternate_Address_Number3": "9000001",
    "Alternate_Address_Number4": "9000001",
    "Alternate_Address_Number6": "9000001",
    "Special_Address_Number6": "9000001",
    "Mgmt_Responsibility": "10",
    "AR_Salesman": "AR_Salesman",
    "Area_Office": "12",
    "Geographic_Region_or_DF_DP": "Geographic_Region_or_DF_DP",
    "AR_Account_Type": "AR_Account_Type",
    "Market_Responsibility": "LMR",
    "Outlet_Type": "WS",
    "Local_Channel": "Local_Channel",
    "AR_Company": "398",
    "Customer_Price_Group": "WHS",
    "GDF_Customer": "GDF_Customer",
    "Country": "CN",
    "Market": "02",
    "GDF_KAM": "C",
    "MFM_Access": "MFM_Access",
    "GDF_LAM": "C",
    "Customer_Grade": "Customer_Grade",
    "Region": "C",
    "City": "City",
    "Channel_Group": "WS",
    "Channel": "WS",
    "Market_R": "LDP",
    "Flash_Unit": "YIJ",
    "Create_by": "ZHUSH",
    "Laste_update_date": "118170",
    "Last_update_time": "152132",
    "CRM_Code": "WSSHA001",
};

let a = {
    "Type": "V",
    "Bank_Account_Number": "066580-0210003523",
    "Address_Code": "9000001",
    "Bank_Name": "交行浦分陆支"
};


for (let item in a) {
    let b = typeof (a[item]);
    console.log('\n');
    console.log("@JsonProperty(\"" + item + "\")");
    if (b === "string") {

        console.log("private String " + item + ";");
    } else {
        console.log("private int " + item + ";");
    }
}


// for (let item in c) {
//     let b = typeof (c[item]);
//     if (b === "string") {
//         console.log("private String " + item + ";")
//     } else {
//         console.log("private int " + item + ";")
//     }
// }