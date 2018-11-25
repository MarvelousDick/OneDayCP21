let a = {
    // code: '03.001.006',  //页面code
    query: '03.001.006.001',
    edit: '03.001.006.002',
    invoiceRecognizeBtn: '03.001.006.003',
    refundInvoiceBtn: '03.001.006.004',
    addRecordsBtn: '03.001.006.005',
};


for (let name in a) {

    let code = a[name]
    let parentID = '8CB81D68-C430-4410-A6A4-268A1EE4B1E9'
    // let targetValue = 'discount'
    // let newName = 'Discount'

    let newName = name.replace(/([A-Z])/g,"-$1").toLowerCase();
    let arr = newName.split("-");

    for (let i = 0; i < arr.length; i++) {
        let string = arr[i];
        string = string.replace(string[0], string[0].toUpperCase());
        for (let j = 1; j < string.length; j++) {
            string = string.replace(string[j], string[j].toLowerCase());
        }
        arr[i] = string;
    }
    newName = arr.join(" ")

    console.log("INSERT INTO PRSystemDev.dbo.Permission (ID, Name, Code, ParentID, IsActive, PLevel, RelyOnCodes, MenuID, ServiceTypeID, CreateTime, UpdateTime) VALUES (newid(), '" + newName + "', '" + code + "', '" + parentID + "', 1, 5, null, null, '2', getdate(), getdate());")

    // if (name === targetValue) {
    //
    //     // console.log(code)
    //     // console.log(a[b])
    //     console.log("INSERT INTO PRSystemDev.dbo.Permission (ID, Name, Code, ParentID, IsActive, PLevel, RelyOnCodes, MenuID, ServiceTypeID, CreateTime, UpdateTime) VALUES (newid(), '" + newName + "', '" + code + "', '" + parentID + "', 1, 4, null, null, '2', getdate(), getdate());")
    //     break
    // }
}
