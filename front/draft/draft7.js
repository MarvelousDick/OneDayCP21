let a = {
    Address_Code: "int",
    Company_Code: "string",
    Distribution: "string",
    Currency_Code: "string",
    Tax_Code: "string",
    Tax_Type: "string",
    Credit_Limit: "int",
    Payment_Terms_AR: "string",
    Send_Statement_to: "string",
    Print_Statement: "string",
    Alternate_Payor: "int",
    Send_Invoice_To: "string",
    Statement_Cycle: "string",
    Date_of_Last_Credit_Review: "string",
    Delinquency_Notices: "string",
    Last_Reviewed_By: "string",
    Collection_Report: "string",
    Delinquency_Fees: "string",
    ABC_Code_Sales: "string",
    ABC_Code_Margin: "string",
    ABC_Code_Average_Days: "string",
    Person_Opening_Account: "string",
    Date_Account_Opened: "string",


};

for (let item in a) {
    console.log('\n');
    console.log("@JsonProperty(\"" + item + "\")");
    if (a[item] === "string") a[item] = "String";
    console.log("private", a[item], item + ";")
}