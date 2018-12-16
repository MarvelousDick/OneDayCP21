let a = {
    "openid": "OPENID",
    "nickname": "NICKNAME",
    "sex": "1",
    "province": "PROVINCE",
    "city": "CITY",
    "country": "COUNTRY",
    "headimgurl": "http://thirdwx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/46",
    "privilege": ["PRIVILEGE1", "PRIVILEGE2"],
    "unionid": "o6_bmasdasdsad6_2sgVt7hMZOPfL"
};

// for (let item in a) {
//     console.log('\n');
//     console.log("@JsonProperty(\"" + item + "\")");
//     if (a[item] === "string") a[item] = "String";
//     console.log("private", a[item], item + ";")
// }

for (let item in a) {
    console.log('\n');
    console.log("@JsonProperty(\"" + item + "\")");
    // if (a[item] === "string") a[item] = "String";
    console.log("private", "String " + item + ";")
}