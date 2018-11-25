let orderStatusArray = [
    {id: 1, value: 'Unchecked'},
    {id: 2, value: 'Checked'},
    {id: 3, value: 'Offset'},
    {id: 4, value: 'Close'}
];


let params = {

    show: orderStatusArray

};

// console.log(orderStatusArray);

let selectedRowsData = [{
    "id": "06269bb3-a124-4ff0-b669-0c11dd2573c2",
    "sorOrderNumber": "SOR-00028269",
    "tovOrderNumber": "41806190",
    "originalOrderNumber": null,
    "buyerName": null,
    "buyerTaxNumber": null,
    "totalAmount": 4313,
    "amount": null,
    "taxAmount": null,
    "taxRate": 16,
    "orderDate": null,
    "previewDate": null,
    "status": null,
    "jdeStatus": 620,
    "orderType": 1
}];

let selectedTotalAmount = 0;
// console.log(selectedRowsData.length)
for(var i = 0; i < selectedRowsData.length; i++){
    selectedTotalAmount = selectedRowsData[i].totalAmount;
}
console.log(selectedTotalAmount);