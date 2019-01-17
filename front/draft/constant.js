var constant = {};

constant.guid = {
    empty: '00000000-0000-0000-0000-000000000000'
}

//数据验证起始值范围
constant.startNum = -1000000000000;
constant.endNum = 1000000000000;
//小数点位数
constant.toFixedNumber = 2;
constant.toFixedNumberFour = 4;

constant.organization = {
    parentIdNull: "-1",
    defaultMaxLength: 25,
    EstateIndustryId: 23,
    NonEstateIndustryId: 0,
};

constant.date = {
    maxDate: '9999-11',
    minDate: '1900-01',
    dateFormat: 'yyyy-MM-dd',
    dateFormatUppercase: 'YYYY-MM-DD',
    dateFormatyyyyMMdd: 'yyyy-MM-dd',
    dateFormatyyyyMM: 'yyyy-MM',
    placeHolder: 'YYYMMDD',
    dateFormatYYYYMMDD: 'YYYYMMDD',
    dateFormatSeparator: '-',
    dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
    hourSelection: [0, 1, 2, 3, 4, 5, 6, 12, 24, 36, 48, 60]
};

constant.workflow = {
    codeStartWith: 10000,
};

constant.priority = {
    low: 1,
    medium: 2,
    high: 3
}

constant.uploadFile = {
    maxSize: 10 * 1024 * 1024, //10MB
};

constant.customer = {
    codeMaxLength: 50,
    nameMaxLength: 100,
    errorArray: ['CustomerImportDataFormatError', 'SaveFileError', 'CustomerCodeOutOfLength', 'CustomerNameOutOfLength']
}

constant.payTaxTypeList = [
    {value: 1, name: '一般纳税人'},
    {value: 2, name: '小规模纳税人'}]

constant.citReportTypeList = [
    {value: 1, name: '纳税申报表'},
    {value: 2, name: '季度预缴表'},
    {value: 3, name: '工作底稿'}]

constant.InvStatus = {
    success: 1,
    failure: 2,
    duplicate: 3
}

constant.operationType = {
    scan: 1,
    recognition: 2,
    upload: 3
}

constant.businessUnit =
    {
        BUmaxLength: 21
    }

constant.activeStatus = {
    active: 1,
    deactive: 0
}

constant.organizationStructManage = {
    nameMaxLength: 21
}

constant.webapi = {
    prefix: '/api/v1'
}

constant.cache = {
    cacheName: 'webadmin',
    hubName: 'cacheHub',
    invoiceHub: 'invoiceHub',
    storageMode: 'localStorage',
    defaultCacheTime: '00000000',
    cacheUpdateMessage: '系统有更新,为了保证数据准确性,请刷新页面更新系统！', //will move to i18n
    cachePrex: 'atms.webadmin.data.',
    notify: {
        position: 'right',
        classes: 'alert-danger',
        duration: 1000 * 60 * 1
    }
}

constant.common = {
    undefined: 'undefined',
    underlineSeparator: '_'
}

constant.serviceType = {
    Admin: 1,
    VAT: 2,
    AM: 3,
    FDD: 4,
    Dashboard: 5,
    CIT: 6,
    TCS: 7
}

constant.roleSource = {
    Unknown: 0,
    OrganizationLevel: 1,
    AreaLevel: 2,
    BusinessUnitLevel: 3,
    OriginalLevel: 4,
    DimensionLevel: 5,
}

constant.import = {
    overwrite: '1',
    append: '2'
}

constant.OperateLogType = {
    OperationLogOrganization: 0,
    OperationLogUser: 1,
    OperationLogProject: 2,
    OperationLogBasicData: 3,
    OperationLogReport: 4,

    OperationLogEnterPrise: 5,
    OperationLogSubjectCorres: 6,
    OperationLogRole: 7,
    OperationLogModelConfiguration: 8,
    OperationRuleEngineConfiguration: 9,
    OperationKeyvalueConfiguration: 10,
    OperationLogWorkflow: 11
}

constant.page = {
    pageSize: 10,
}
constant.page.pageSizeArrary = [20, 50, 100, 200, 500, 1000];

constant.Action = {
    View: 0,
    New: 1,
    Update: 2,
    Delete: 3,
    Copy: 4,
    AutoMapping: 5,
    ManualMapping: 6,
    CancelMapping: 7,
    Edit: 8
}

constant.OperationModule = {
    BasicDataOrganizationStructure: 1,
    BasicDataRegion: 2,
    BasicDataStandardAccount: 3,
    BasicDataWordLibrary: 4,
    BasicDataKeyValue: 5,
    Project: 6,
    ProjectServiceType: 7,
    User: 8,
    Organization: 9,
    Role: 10,
    UserRole: 11,
    BasicDataEnterpriceAccount: 12,
    TemplateFormula: 13,
    Template: 14,
    TemplateGroup: 15,
    ReportConfiguration: 16,
    BasicDataArea: 17,
    BasicDataCustomer: 18,
    BusinessUnit: 19,
    BasicDataVendor: 20,
    BasicDataProductLine: 21
};

constant.UIGrid = {
    rowHeight: 40,
    selectionRowHeaderWidth: 40,

    errorRowHeight: 30,
    errorRowHeaderWidth: 30,

    minRowHeight: 25,
    minselectionRowHeaderWidth: 25,

    gapHeight: 6
}


constant.enterpriceAccount = {
    codeEmpty: 'EnterpriseAccountCodeEmpty',
    codeMaxLength: 'EnterpriseAccountCodeMaxLength',
    enterpriseAccountNameEmpty: 'EnterpriseAccountNameEmpty',
    nameMaxLength: 'EnterpriseAccountNameMaxLength',
    directionFormatError: 'DirectionFormatError',
    acctPropFormatError: 'AcctPropFormatError',
    noParentCode: 'NoParentCode',
}

constant.dimensionID = {
    businessUnitID: "c61a5bd6-a996-4952-9869-d053995237e5",
    areaID: "c61a5bd6-a996-4952-9869-d053995237e6",
    //机构层级和子公司不是一个定义,机构层级的ID之后用到会更改
    organizationStructureID: "c61a5bd6-a996-4952-9869-d053995237e7",
    orgSubChildrenID: "c61a5bd6-a996-4952-9869-d053995237e7"
}

// 系统定义的属性ID
constant.attributeID = {
    businessUnitID: 'c61a5bd6-a996-4952-9869-d053995237e5',
    areaID: 'c61a5bd6-a996-4952-9869-d053995237e6',
    organizationStructureID: 'c61a5bd6-a996-4952-9869-d053966537e8',
    userID: 'c61a5bd6-a996-4952-9869-d053996237e8',
    industryID: 'c61a5bd6-a996-4952-9869-d053996537e8',
    orgSubChildrenID: 'c61a5bd6-a996-4952-9869-d053995237e7',
    administrativeAreaID: 'c62a5bd6-a996-4952-9869-d053996537e88'
}

constant.userRoleDimensionValueID = {
    extraOrgDimensionID: 'extraOrgDimensionID',
    extaDimensionName: '附加',
    extraOrgDimensionValueName: '附加角色',
    originalRoleDimensionValueName: '原始角色',
    //附加在维度上的角色
    extraOrgDimensionValueID: 'extraOrgDimensionValueID',
    //附加原始角色
    originalRoleDimensionValueID: 'originalRoleDimensionValueID'
}

constant.dimensionType = {
    Unknown: 0,
    SelfDimension: 1,
    BusinessUnit: 2,
    Area: 3,
    OrganizationStructure: 4,
    User: 5,
    Industry: 6,
    OrgSubChildren: 7
}


constant.attributeType = {
    Unknown: 0,
    SelfDimension: 1,
    BusinessUnit: 2,
    Area: 3,
    OrganizationStructure: 4,
    User: 5,
    Industry: 6,
    OrgSubChildren: 7,
    RegionID: 10
}

// 区域排除的下拉选项
constant.areaExcludeAttributeType = [
    // 未知
    0,
];

constant.excludeAttributeType = [
    0,
    5,
    7
]

constant.level = {
    First: 0
}

constant.espAccountFilter = {
    key_0: '0',
    key_1: '1',
    key_2: '2',
    key_3: '3',
    key_4: '4',
    data: [{key: '0', value: 'AllMappingStatus'}, {key: '1', value: 'Unmapped'},
        {key: '2', value: 'Mapped'}, {key: '3', value: 'DirectionDifferent'},
        {key: '4', value: 'AccountTypeDifferent'}]

}
constant.taxpayerNumberFilter = {
    key_0: '0',
    key_1: '1',
    key_2: '2',
}
constant.taxpayerNumberFilter.dataSource = [
    {key: constant.taxpayerNumberFilter.key_0, value: 'All'},
    {key: constant.taxpayerNumberFilter.key_1, value: 'HasTaxPayerNumber'},
    {key: constant.taxpayerNumberFilter.key_2, value: 'NoTaxPayerNumber'},
];

constant.comma = ',';

constant.DimensionType = {
    Unknown: 0,
    SelfDimension: 1,
    BusinessUnit: 2,
    Area: 3,
    OrganizationStructure: 4,
    User: 5,
    Industry: 6,
    OrgSubChildren: 7,
    Stock: 8
}

constant.Operation = {
    Add: 'add',
    Edit: 'edit',

    // 禁用
    Disable: 'disable',

    // 启用
    Enable: 'enable',

    // 查找添加
    findAdd: 'findAdd',

    // 删除
    Delete: 'delete',

    // 查询
    Query: 'Query',

    // 打开
    Open: 'Open',

    // 关闭
    Close: 'Close'
}

constant.TemplateGroupOperation = {
    // 直接连模板一起添加
    AddDirectly: 'addDirectly',

    // 先加模板组，暂不加模板
    AddGroupFirst: 'addGroupFirst',
    Edit: 'edit',

    // 删除
    Delete: 'delete'
}

constant.selectAllValue = '99';

constant.BasicDataManageMenuID = 'F9A18F3A-7E39-4661-BA00-F149710577C8';
constant.BasicDataMainMenuID = '9bf855fb-6b44-49cd-b95b-41a6a9a8c098'; //主数据
constant.BasicDataFinancialMenuID = '91223c21-c15a-4882-89cc-42f3807ec9e3'; //财务数据

constant.noPermissionClass = "no-permission";

constant.attributeTypeIDColMap = {
    0: '',
    1: '',
    2: 'businessUnitID',
    3: 'areaID',
    4: 'structureID',
    5: '',
    6: 'industryID',
    7: 'structureID',
    10: 'regionID'
};

constant.attributeTypeNameColMap = {
    0: '',
    1: '',
    2: 'businessUnitName',
    3: 'areaName',
    4: 'structureName',
    5: '',
    6: 'industryName',
    7: 'structureName',
    10: 'regionName'
};

// vat权限code
constant.vatPermission = {
    dataImport: {
        dataImportCode: '02.001',
        withholdingTaxes: {
            queryCode: '02.001.001',
            importCode: '02.001.002'
        },
        customInvoice: {
            queryCode: '02.001.003',
            importCode: '02.001.004'
        },
        tollFee: {
            queryCode: '02.001.005',
            importCode: '02.001.006'
        },
        redInvoiceNotifyForm: {
            queryCode: '02.001.007',
            importCode: '02.001.008'
        },
        manualChineseAccount: {
            queryCode: '02.001.009',
            importCode: '02.001.010'
        }
    },
    dataPreview: {
        dataPreviewCode: '02.002',
        specialInvoiceInventoryCode: '02.002.001',
        jdeVoucherCode: '02.002.002',
        jdeBalanceCode: '02.002.003',
        specialInvoiceHasCleanCode: '02.002.004',
    },
    dataManage: {
        dataManageCode: '02.003',
        caculateDataCode: '02.003.001',
        unInvoiceIncomeCode: '02.003.002',  //未开票收入确认
        unInvoiceIncome: {
            queryCode: '02.003.002.001',
            editCode: '02.003.002.002'
        },
        accountMappingCode: '02.003.003',
        accountMapping: {
            queryCode: '02.003.003.001',
            editCode: '02.003.003.002'
        },
    },
    reportView: {
        reportViewCode: '02.004',
        bsplCode: '02.004.001',
        bspl: {
            bsCode: '02.004.001.001',
            plCode: '02.004.001.002'
        },
        taxReturnCode: '02.004.002',
        taxReturn: {
            queryCode: '02.004.002.001',
            editCode: '02.004.002.002',
            exportCode: '02.004.002.003',
            approveCode: '02.004.002.004'
        },
    },
    dataAnalysis: {
        dataAnalysisCode: '02.005',
        vatTaxDifferenceCode: '02.005.001', //进项税差异分析
        incomeArticulationCompareCode: '02.005.002', //收入勾稽比对
        vatChineseAccountCompareCode: '02.005.003', //中方账收入勾稽比对
        manualVatChineseAccountCompareCode: '02.005.004', //手工中方账勾稽比对
    },
    outputInvoice: {
        importVehicelCase: {
            queryCode: '02.007.001.001',
            holdCaseCode: '02.007.001.002',
            reassignCaseCode: '02.007.001.003',
            triggerSyncCode: '02.007.001.004'
        },
        bdInvoice: {
            queryCode: '02.007.002.001',
            manualPrintBDInvoiceCode: '02.007.002.002',
            autoPrintBDInvoiceCode: '02.007.002.003',
            editVehicleCaseCode: '02.007.002.004',
            cancelAndReprintCode: '02.007.002.005',
            cancelInvoiceCode: '02.007.002.006'
        },
        gdInvoice: {
            queryCode: '02.007.003.001',
            printCode: '02.007.003.002',
            cancelAndReprintCode: '02.007.003.003',
            cancelInvoiceCode: '02.007.003.004',
            RedLetterCode: '02.007.003.005',
            fapiaoQuotaSettingsCode: '02.007.003.006',
            markupRateCode: '02.007.003.007'
        },
        gdShipment: {
            queryCode: '02.007.004.001',
            importCodeCode: '02.007.004.002'
        },
        reconciliationConfig: {
            queryCode: '02.007.005.001',
            addCode: '02.007.005.002',
            editCode: '02.007.005.003',
            deleteCode: '02.007.005.004',
            reSortCode: '02.007.005.005'
        },
        outputReconciliationOverview: {
            queryCode: '02.007.006.001'
        },
        mappingConfig: {
            queryCode: '02.007.007.001',
            editCode: '02.007.007.002',
        },
        taxControlDisk: {
            queryCode: '02.007.008.001',
            editCode: '02.007.008.002',
        }
    }
};

// 权限代码
constant.adminPermission = {
    basicData: {

        // 企业账套
        enterpriseAccountSet: {
            // 查看
            queryCode: '01.001.001',
            // 添加
            addCode: '01.001.002',
            // 维护
            editCode: '01.001.003'
        },

        // 事业部
        businessUnit: {
            queryCode: '01.001.008',
            editCode: '01.001.009'
        },

        // 区域
        areaManage: {
            queryCode: '01.001.010',
            editCode: '01.001.011'
        },
        // 机构层级
        orangizationStructure: {
            queryCode: '01.001.006',
            editCode: '01.001.007'
        },

        // 客户列表
        customerList: {
            queryCode: '01.001.004',
            editCode: '01.001.005'
        },

        // 供应商列表
        vendorList: {
            queryCode: '01.001.014',
            editCode: '01.001.015'
        },

        // 产品线列表
        productLine: {
            queryCode: '01.001.016',
            editCode: '01.001.017'
        },

        // 产品线维护
        productLineConfigManage: {
            queryCode: '01.001.018',
            editCode: '01.001.019'
        },

        // 商品列表
        productListgManage: {
            queryCode: '01.001.020',
            editCode: '01.001.021'
        },

        // 自定义维度
        selfDimension: {
            queryCode: '01.001.012',
            editCode: '01.001.013'
        }
    },
    infrastructure: {
        //用户管理
        userManage: {
            queryCode: '01.002.002.001',
            addCode: '01.002.002.002',
            editCode: '01.002.002.003'
        },
        //机构管理
        organizationManage: {
            queryCode: '01.002.001.001',
            addCode: '01.002.001.002',
            editCode: '01.002.001.003',
        },
        //角色管理
        roleManage: {
            queryCode: '01.002.003.001',
            addCode: '01.002.003.002',
            editCode: '01.002.003.003',
        },
        //自定义显示属性管理
        customAttribute: {
            queryCode: '01.002.001.004',
        },
        //维度上的用户权限设置
        accessSetting: {
            queryCode: '01.002.001.005',
            editCode: '01.002.001.006',
        }
    },
    systemConfiguration: {
        //报表配置
        declarationFormConfigurationCode: '01.003.002',
        declarationFormConfiguration: {
            queryCode: '01.003.002.001',
            addCode: '01.003.002.002',
            editCode: '01.003.002.003'
        },
        //分析模型配置
        modelConfiguration: {
            queryCode: '01.003.003.001',
            editCode: '01.003.003.002',
            maintainCustomCode: '01.003.003.003',
            maintainModelTreeCode: '01.003.003.004'
        },
        // 科目对应
        subjectCorresponding: {
            queryCode: '01.003.001.001',
            editCode: '01.003.001.002',
        },
        ruleEnginee: {
            viewRatePayer: '01.004.001.001',
            defaultRatePayerAction: '01.004.001.002',
            specialRatePayerAction: '01.004.001.003',
            //地方税
            LocalTax: '01.004.002',
            //地方税-城市建设
            viewCityBuilding: '01.004.002.001.001',
            defaultCityBuildingAction: '01.004.002.001.002',
            specialCityBuildingAction: '01.004.002.001.003',
            //地方教育
            viewLocalEducation: '01.004.002.002.001',
            defaultLocalEducationAction: '01.004.002.002.002',
            specialLocalEducationAction: '01.004.002.002.003',
            //教育费附加税

            viewEducationAttach: '01.004.002.003.001',
            defaultEducationAttachAction: '01.004.002.003.002',
            specialEducationAttachAction: '01.004.002.003.003',
            //印花税
            viewStampTax: '01.004.002.004.001',
            defaultStampTaxAction: '01.004.002.004.002',
            specialStampTaxAction: '01.004.002.004.003',
            //水利基金
            viewWaterFund: '01.004.002.005.001',
            defaultWaterFundAction: '01.004.002.005.002',
            specialWaterFundAction: '01.004.002.005.003'
        },
        keyValueConfig: {
            viewKey: '01.003.004.001',
            keyAction: '01.003.004.002'
        },
        //规则设定
        ruleSetManage: {
            queryCode: '01.003.005.001',
            editCode: '01.003.005.002'
        }
    }
};

constant.basicDataUrl = {
    orangizationStructureManage: '#/masterData/orangizationStructureManage',
    businessUnit: '#/masterData/businessUnit',
    regionManage: '#/masterData/regionManage',
    enterpriseAccountManage: '#/financialData/enterpriseAccountManage',
    customerListManage: '#/masterData/customerListManage',//客户列表
    vendorListManage: '#/financialData/vendorListManage',
    productLineManage: '#/financialData/productLineManage', //产品线
    productLineConfigManage: '#/financialData/productLineConfigManage', //产品线维护
    productListManage: '#/financialData/productListManage' //商品列表维护
};

/************************************************vat constant start*************************************************/



constant.invoiceOperationTypeArray = [
    {id: 1, value: 'Check'},
    {id: 2, value: 'Validate'},
    {id: 3, value: 'Verify'},
    {id: 4, value: 'Query'},
    {id: 5, value: 'Recheck'},
]

constant.inputInvoice = {
    //发票状态
    statusType: {
        PendingValidate: {id: 1, value: 'PendingValidate'},  // 待校验
        ValidateFailure: {id: 2, value: 'ValidateFailure'}, // 校验失败
        PendingVerify: {id: 3, value: 'PendingVerify'},  // 待验真
        UnableVerify: {id: 4, value: 'UnableVerify'}, // 无法验真
        NotExist: {id: 5, value: 'NotExist'},  // 查无此票
        Verified: {id: 6, value: 'Verified'},  // 已验真
        PendingCertificate: {id: 7, value: 'PendingCertificate'},  // 待认证
        UnableCertificate: {id: 8, value: 'UnableCertificate'}, // 无法认证
        Certified: {id: 9, value: 'Certified'}, // 已认证
        DuplicateData: {id: 10, value: 'DuplicateData'}, // 重复数据
        Cancelled: {id: 11, value: 'Cancelled'}, // 已作废
        PendingRefund: {id: 12, value: 'PendingRefund'}, // 待退票
        Refunded: {id: 13, value: 'Refunded'}, // 已退票
        Deleted: {id: 14, value: 'Deleted'}, // 已删除
        PendingRecheck: {id: 15, value: 'PendingRecheck'}, // 待二次校验
        RecheckFailure: {id: 16, value: 'RecheckFailure'}, // 二次校验失败
        Rechecked: {id: 17, value: 'Rechecked'}, // 已二次校验
    },
    //发票类型，普票或专票
    invoiceType: {
        VatInvoiceSpecialTicket: {id: 1, value: 'VatInvoiceSpecialTicket'}, //增值税专用发票
        VatInvoiceOrdinaryTicket: {id: 2, value: 'VatInvoiceOrdinaryTicket'},//增值税普通发票
    },
    //发票来源类型，原料采购，非原料集中采购，报销
    invoiceSourceType: {
        InvoiceNSTP: {id: 1, value: 'NSTP'},//NSTP发票
        InvoiceSTP: {id: 2, value: 'STP'},//STP发票
        InvoiceINTR: {id: 3, value: 'INTR'},//INTR发票
        InvoiceTE: {id: 4, value: 'TE&Other'},//TE发票
    },
    invoiceImportType: {
        InvoiceImportScan: {id: 1, value: 'InvoiceImportScan'},//扫描上传
        InvoiceImportUploadFile: {id: 2, value: 'InvoiceImportUploadFile'},//文件上传
        InvoiceImportAPI: {id: 3, value: 'InvoiceImportAPI'}//API上传
    },
    //发票实体类型，纸票或电子票
    invoiceEntityType: {
        InvoicePaperTicket: {id: 1, value: 'InvoicePaperTicket'},
        InvoiceElectronicTicket: {id: 2, value: 'InvoiceElectronicTicket'},
        //添加这个属性是因为未收票认证这边的票接口没有传这个类型，
        //但是我们的数据库的字段是不可空的
        InvoiceUnKnown: {id: 99, value: 'InvoiceUnKnown'}
    },
    //发票上传方式，纸质文档，扫描枪，扫描仪
    invoiceUploadType: {
        InvoiceModePDF: {id: 1, value: 'InvoiceModePDF'},
        InvoiceModeScan: {id: 2, value: 'InvoiceModeScan'},
        InvoiceModeMobileDevice: {id: 3, value: 'InvoiceModeMobileDevice'},  //扫描抢
        InvoiceFromAPI: {id: 4, value: 'InvoiceFromAPI'},  //未认证发票来自接口
    },

    //上传文件的时候，上传的状态，读取成功，读取失败，重复上传,已删除
    invoiceUploadStatus: {
        success: {id: 1, value: 'ReadSuccess'},
        failure: {id: 2, value: 'ReadFailure'},
        duplicate: {id: 3, value: 'UploadDuplicate'},
        Hasdelete: {id: 4, value: 'Hasdelete'},
        unableAddRecord: {id: 5, value: 'UnableAddRecord'}, //无法补录
    },
    //其他理由
    invoiceRefundReasons: {
        FakeInvoice: {id: 1, value: 'Fake Invoice'},
        // InvoicePackage: {id: 2, value: 'Invoice Package'},
        // InvoiceStampIncorrect: {id: 3, value: 'Invoice Stamp Incorrect'},
        OtherReason: {id: 4, value: 'Others'},
    },
    //删除理由
    invoiceDeleteReasons: {
        DuplicateUpload: {id: 1, value: '重复上传'},   //重复上传
        ProviderFakeInvoice: {id: 2, value: '供应商-假票'}, //供应商-假票
        DuplicateClaim: {id: 3, value: '重复报销'}, //重复报销
        BrokenInvoice: {id: 4, value: '发票破损/污损，无法补录'},//发票破损/污损，无法补录
        UnableToRead: {id: 5, value: '发票无法读取'}//发票无法读取
    },
    //type,1 补录，2，验真，3退票
    remarkType: {
        duplicate: {id: 1, value: 'duplicate'},
        refund: {id: 2, value: 'refund'},
        match: {id: 3, value: 'match'},
    },
    //补录重复原因
    additionalReasons: {
        IncorrectOperation: {id: 1, value: 'IncorrectOperation'},//误操作
        DuplicateClaim: {id: 2, value: 'DuplicateClaim'},//重复报销
        ProviderFakeInvoice: {id: 3, value: 'ProviderFakeInvoice'}//供应商-假票
    },
    //商品类型
    productionType: {
        RawMaterialForProduce: {id: 1, value: 'RawMaterialForProduce', desc: '1'},                                                 //用于生产的原材料
        RawMaterialForSale: {id: 2, value: 'RawMaterialForSale', desc: '2'},                                                       //用于直接销售的原材料
        FixedAssetsMovable: {id: 3, value: 'FixedAssetsMovable', desc: '3'},                                                       //固定资产-动产
        FixedAssetsNonmoveable: {id: 4, value: 'FixedAssetsNonmoveable', desc: '4'},                                               //固定资产-不动产
        EmployeeBenefit: {id: 5, value: 'EmployeeBenefit', desc: '5'},                                                             //员工福利
        PromotionalProducts: {id: 6, value: 'PromotionalProducts', desc: '6'},                                                     //促销品
        TaxControlSystemEquipmentAndMaintenanceCosts: {
            id: 7,
            value: 'TaxControlSystemEquipmentAndMaintenanceCosts',
            desc: '7'
        },   //税控系统设备及维护费用
        Service: {id: 8, value: 'Service', desc: '8'},                                                                             //服务
        GoodsAndProcessingRepairAndRepairServices: {
            id: 9,
            value: 'GoodsAndProcessingRepairAndRepairServices',
            desc: '9'
        },         //货物及加工修理修配劳务
        Other: {id: 10, value: 'Other', desc: '10'}                                                                                 //其他
    },

    //服务类型
    productionServiceType: {
        AcquireIntangibleAssets: {id: 1, value: 'AcquireIntangibleAssets'},               //取得无形资产
        TheRightToUseTheLand: {id: 2, value: 'TheRightToUseTheLand'},                     //受让土地使用权
        TransportService: {id: 3, value: 'TransportService'},                             //运输服务
        TelecommunicationsService: {id: 4, value: 'TelecommunicationsService'},           //电信服务
        PhysicalAndCommercialLeasing: {id: 5, value: 'PhysicalAndCommercialLeasing'},     //有形动产租赁
        ImmovablePropertyLeasing: {id: 6, value: 'ImmovablePropertyLeasing'},             //不动产租赁
        BuildingInstallationService: {id: 7, value: 'BuildingInstallationService'},       //建筑安装服务
        FinancialInsuranceService: {id: 8, value: 'FinancialInsuranceService'},           //金融保险服务
        ServiceForLife: {id: 9, value: 'ServiceForLife'}                                  //生活服务
    },
    //是否计入进项税额
    isIncludedInTaxAmountType: {
        Yes: {id: 1, value: 'Yes'},                       //是
        No: {id: 2, value: 'No'},                         //否
        NotRecognized: {id: 3, value: 'NotRecognized'},   //未识别
        Partial: {id: 4, value: 'Partial'}, //"部分",
    },
    //应税性质
    taxableProperty: {
        Taxable: {id: 1, value: 'Taxable'},               //应税
        TaxExemption: {id: 2, value: 'TaxExemption'},     //免税
        Both: {id: 3, value: 'Both'},                     //兼用
    },
    //主页面加载类型
    loadingType: {
        Main: {id: 1, value: 'Main'},//发票总览
        MailRoomPendingInvoice: {id: 2, value: 'MailRoomPendingInvoice'},//Mail Room待处理
        P2PPendingInvoice: {id: 3, value: 'P2PPendingInvoice'},//P2P待处理
        DoneInvoice: {id: 4, value: 'DoneInvoice'}//已处理
    },
    //验真通过方式
    verifyType: {
        OCRVerify: {id: 1, value: 'OCRVerify'},//OCR验真
        SecondVerify: {id: 2, value: 'SecondVerify'},//二次验真
        ManualVerify: {id: 3, value: 'ManualVerify'},//手动验真
    },

    verifyMethod: {
        SystemVerify: {id: 1, value: 'SystemVerify'},
        InAdvancedVerify: {id: 2, value: 'InAdvancedVerify'},
    },
};

constant.inputInvoice.productionTypeArrary = [
    constant.inputInvoice.productionType.RawMaterialForProduce,
    constant.inputInvoice.productionType.RawMaterialForSale,
    constant.inputInvoice.productionType.FixedAssetsMovable,
    constant.inputInvoice.productionType.FixedAssetsNonmoveable,
    constant.inputInvoice.productionType.EmployeeBenefit,
    constant.inputInvoice.productionType.PromotionalProducts,
    constant.inputInvoice.productionType.TaxControlSystemEquipmentAndMaintenanceCosts,
    constant.inputInvoice.productionType.Service,
    constant.inputInvoice.productionType.GoodsAndProcessingRepairAndRepairServices,
    constant.inputInvoice.productionType.Other,
];

//Invoice权限
constant.invoicePermission = {
    code: '03'
};

constant.inputInvoicePermission = {

    inputInvoice: {
        code: '03.001'
    },

    overViewCode: {
        code: '03.001.001',  //页面code
        queryCode: '03.001.001.001',
        editCode: '03.001.001.002',
        exportCode: '03.001.001.003'
    },
    mailRoomUser: {
        code: '03.001.002',  //页面code
        //queryCode: '03.001.002.001',
        //editCode: '03.001.002.002',
    },

    P2PUser: {
        code: '03.001.003', //页面code
        //queryCode: '03.001.003.001',
        //editCode: '03.001.003.002',
    },

    //已处理页面
    doneInvoiceUser: {
        code: '03.001.004',  //页面code
        queryCode: '03.001.004.001',
        expiredInvoiceBtnCode: '03.001.004.002',
        setChineseAccountVoucherNoCode: '03.001.004.003', //中方帐凭证号
        pendingRefundInvoiceBtnCode: '03.001.004.004',//待退票按钮
        exportCode: '03.001.004.005'
    },
    invoiceVerify: {
        code: '03.001.005',  //页面code
        queryCode: '03.001.005.001',
        editCode: '03.001.005.002',
    },
    //异常发票处理
    invoiceException: {
        code: '03.001.006',  //页面code
        queryCode: '03.001.006.001',
        editCode: '03.001.006.002',
        invoiceRecognizeBtnCode: '03.001.006.003',
        refundInvoiceBtnCode: '03.001.006.004',
        addRecordsBtnCode: '03.001.006.005',
        exportCode: '03.001.006.006'
    },
    invoiceMapping: {
        code: '03.001.007',  //页面code
        queryCode: '03.001.007.001',
        editCode: '03.001.007.002',
    },

    //待处理
    invoicePendingProcess: {
        code: '03.001.008',  //页面code
        queryCode: '03.001.008.001',
        // editCode: '03.001.008.002',
        uploadInvoiceVerifyListBtnCode: '03.001.008.003', //上传认证清单
        uploadInvoiceBtn: '03.001.008.004', //上传发票按钮
        invoiceRecognizeBtnCode: '03.001.008.005', //发票识别按钮
        expiredInvoiceBtnCode: '03.001.008.006', //失效按钮
        manualVerifyInvoiceBtnCode: '03.001.008.007', //手工认证按钮
        supplyInfoBtnCode: '03.001.008.008', //补充信息按钮
        manualCheckTrueBtnCode: '03.001.008.009', //手工验真按钮
        matchTicketAccountBtnCode: '03.001.008.010', //票张匹配
        setChineseAccountVoucherNoCode: '03.001.008.011', //中方帐凭证号
        exportCode: '03.001.008.012',
        manualVerifyBtn: '03.001.008.013',
        manualCertificateBtn: '03.001.008.014',
        autoCertificate: '03.001.008.015',
        manualRecheckInvoiceBtn: '03.001.008.016',
        syncGlDateBtn: '03.001.008.017',
    },
    //未收票认证模块
    InvoiceNotReceivedVerify: {
        code: '03.001.009',  //页面code
    },

    invoicePredictiveVerify: {
        code: '03.001.010',  //页面code
        queryCode: '03.001.010.001',  //查看
        predictiveBtnCode: '03.001.010.002',  //提前认证按钮
    },

    interInvoiceMatch: {
        code: '03.001.011',  //页面code
        queryCode: '03.001.011.001',  //查看
        exportCode: '03.001.011.002',  //导出
        batchMatchCode: '03.001.011.003',  //匹配
        confirmBtnCode: '03.001.011.004',
    },

    commercialInvoiceMatch: {
        code: '03.001.012',  //页面code
        queryCode: '03.001.012.001',  //查看
        exportCode: '03.001.012.002',  //导出
        batchMatchCode: '03.001.012.003',  //匹配
        confirmBtnCode: '03.001.012.004',
    },

    invoiceUpload: {
        code: '03.001.013',
        queryCode: '03.001.013.001',
        stpInvoiceCode: '03.001.013.002',
        nstpInvoiceCode: '03.001.013.003',
        intrInvoiceCode: '03.001.013.004',
        teInvoiceCode: '03.001.013.005',
        ignoreAmountCheck: '03.001.013.006',
    },
};

constant.outputInvoicePermission = {

    outputInvoice: {
        code: '03.002',
    },

    //发票总揽
    salesOrderList: {
        code: '03.002.001',
    },

    issueNisInvoice: {
        code: '03.002.002',
        queryCode: '03.002.002.001',
        autoInvoiceBtnCode: '03.002.002.002',
        splitInvoiceBtnCode: '03.002.002.003',
        mergeIssueInvoiceBtnCode: '03.002.002.004',
        generatePrefaInvoiceBtnCode: '03.002.002.005',
        editCode: '03.002.002.006',
        newNisOrderCode: '03.002.002.007',
    },

    issueJDEInvoice: {
        code: '03.002.003',
        queryCode: '03.002.003.001',
        manualIssueInvoiceBtnCode: '03.002.003.002',
    },

    //预制发票
    prefabricateInvoice: {
        code: '03.002.004',
        queryCode: '03.002.004.001',
        issuePaperInvoiceBtnCode: '03.002.004.002',
        issueElecInvoiceBtnCode: '03.002.004.003',
        manualApproveBtnCode: '03.002.004.004',
        revokeBtnCode: '03.002.004.005',
        modifyRemarkCode: '03.002.004.006',
        editInvoiceCode: '03.002.004.007',
        batchRevokeInvoice: '03.002.004.008',
    },

    haveInvoicedProcess: {
        code: '03.002.005',
        queryCode: '03.002.005.001',
        issueAndPrintBtnCode: '03.002.005.002',
        issueBtnCode: '03.002.005.003',
        printBtnCode: '03.002.005.004',
        printListBtnCode: '03.002.005.005',
    },

    //待作废红冲
    pengindInvalidRedInvoice: {
        code: '03.002.006',
        queryCode: '03.002.006.001',
        approveBtnCode: '03.002.006.002',
        supplyMaterialBtnCode: '03.002.006.003',
        revokeBtnCode: '03.002.006.004',
    },

    //已开具红字发票
    haveIssuedRedInvoice: {
        code: '03.002.007',
        queryCode: '03.002.007.001',
        printInvoiceBtnCode: '03.002.007.002',
    },

    //发票库存管理
    invoiceStockManage: {
        code: '03.002.008',
        queryCode: '03.002.008.001',
    },

    //credit 作废红冲
    creditMemoRedInvalid: {
        code: '03.002.009',
        queryCode: '03.002.009.001',
        toRedInvalidBtnCode: '03.002.009.002',
        toCancelInvoiceBtnCode: '03.002.009.003',
        toRecoverInvoiceBtnCode: '03.002.009.004',
    },

    //规则设定
    invoiceRuleManage: {
        code: '03.002.010',
        queryCode: '03.002.010.001',
        editCode: '03.002.010.002',
    },

    //客户列表
    customeManage: {
        code: '03.002.011',
        queryCode: '03.002.011.001',
        editCode: '03.002.011.002',
    },
    //商品列表
    productManage: {
        code: '03.002.012',
        queryCode: '03.002.012.001',
        editCode: '03.002.012.002',
    },

    faqManage: {
        code: '03.002.013',
        queryCode: '03.002.013.001',
        editCode: '03.002.013.002',
    },

    eInvoiceIssueManage: {
        code: '03.002.014',
        queryCode: '03.002.014.001',
        editCode: '03.002.014.002',
    },

    //发票关联NIS
    invoiceRelevanceNis: {
        code: '03.002.015',
        queryCode: '03.002.015.001',
        relevanceBtnCode: '03.002.015.002',
        relevanceJdeBtnCode: '03.002.015.003',
        relevanceProductBtnCode: '03.002.015.004',
    },
};

constant.maintenancePermission = {

    //Maintenance
    maintenance: {
        code: '03.003',
    },

    //PR Info
    prInfo: {
        code: '03.003.001',
    },

    //Customer Maintenance
    customerMaintenance: {
        code: '03.003.002',
    },

    //Discount
    discount: {
        code: '03.003.003',
    },

    //Storage Maintenance
    storageMaintenance: {
        code: '03.003.004',
    },

    //Rule Maintenance
    ruleMaintenance: {
        code: '03.003.005',
    },

    //User Entity Management
    userEntityManagement: {
        code: '03.003.006',
    },

};

//Customer权限
constant.customsPermission = {code: '04'};

constant.menuCustomsCasesPermission = {
    MenuCustomsCases: {
        code: '04.001'
    }
};

constant.menuCustomsReportPermission = {
    MenuCustomsReport: {
        code: '04.002'
    }
};

constant.menuRuleSettingPermission = {
    MenuRuleSetting: {
        code: '04.003'
    }
};

//Agency权限
constant.agencyPermission = {code: '05'};

//p2p的用户
constant.p2p = {
    userID: '1296b7f3-cf7f-4975-bbe4-67d309ed5f7c'
};

//发票来源,只有扫描仪才有发票章错误
constant.inputInvoice.invoiceSourceTypeArrayForScanner = [constant.inputInvoice.invoiceSourceType.InvoiceRawMaterialPurchase,
    constant.inputInvoice.invoiceSourceType.InvoiceNonRawMaterialPurchase,
//constant.inputInvoice.invoiceSourceType.InvoiceClaim,
    constant.inputInvoice.invoiceSourceType.InvoiceStampIncorrect,
    //constant.inputInvoice.invoiceSourceType.PendingRefund,
];
//发票来源,扫描枪ScannerGun
constant.inputInvoice.invoiceSourceTypeArrayForScannerGun = [
    constant.inputInvoice.invoiceSourceType.InvoiceClaim,
    // constant.inputInvoice.invoiceSourceType.InvoiceLocalPurchase
];

//验真通过方式
constant.inputInvoice.verifyTypeList = [
    constant.inputInvoice.verifyType.OCRVerify,
    constant.inputInvoice.verifyType.SecondVerify,
    constant.inputInvoice.verifyType.ManualVerify,
];


//发票来源
constant.inputInvoice.invoiceSourceTypeArrayForPDF = [
    constant.inputInvoice.invoiceSourceType.InvoiceRawMaterialPurchase,
    constant.inputInvoice.invoiceSourceType.InvoiceNonRawMaterialPurchase,
];

//普票或者专票
constant.inputInvoice.invoiceTypeArray = [
    constant.inputInvoice.invoiceType.VatInvoiceSpecialTicket,
    constant.inputInvoice.invoiceType.VatInvoiceOrdinaryTicket,
];

//纸票或者电票
constant.inputInvoice.invoiceEntityTypeArray = [
    constant.inputInvoice.invoiceEntityType.InvoiceElectronicTicket,
    constant.inputInvoice.invoiceEntityType.InvoicePaperTicket,

];

//退票理由
constant.inputInvoice.invoiceRefundArray = [
    constant.inputInvoice.invoiceRefundReasons.FakeInvoice,
    // constant.inputInvoice.invoiceRefundReasons.InvoicePackage,
    // constant.inputInvoice.invoiceRefundReasons.InvoiceStampIncorrect,
    constant.inputInvoice.invoiceRefundReasons.OtherReason
];

//删除理由扫描仪和PDF上传
constant.inputInvoice.invoiceDeleteReasonArray = [
    constant.inputInvoice.invoiceDeleteReasons.BrokenInvoice,
    constant.inputInvoice.invoiceDeleteReasons.UnableToRead,
    constant.inputInvoice.invoiceDeleteReasons.DuplicateUpload,
    constant.inputInvoice.invoiceDeleteReasons.ProviderFakeInvoice
];

//删除理由扫描枪
constant.inputInvoice.scanInvoiceDeleteReasonArray = [
    constant.inputInvoice.invoiceDeleteReasons.BrokenInvoice,
    constant.inputInvoice.invoiceDeleteReasons.UnableToRead,
    constant.inputInvoice.invoiceDeleteReasons.DuplicateUpload,
    constant.inputInvoice.invoiceDeleteReasons.DuplicateClaim
];

//上传文件的时候，上传的状态数组，读取成功，读取失败，重复上传,已删除
constant.inputInvoice.invoiceUploadStatusArray = [
    constant.inputInvoice.invoiceUploadStatus.success,
    constant.inputInvoice.invoiceUploadStatus.failure,
    constant.inputInvoice.invoiceUploadStatus.duplicate,
    constant.inputInvoice.invoiceUploadStatus.unableAddRecord,
];

constant.inputInvoice.charSeperator = '<@##@>';

constant.uploadFileMaxLength = 1024 * 1024 * 10;  //10MB

constant.inputInvoiceImportBackEndErrorType = {
    DuplicateInputInvoice: 'DuplicateInputInvoice',
    InputInvoiceAlreadyPassed: 'InputInvoiceAlreadyPassed',
    LessThanDetailsTotal: 'LessThanDetailsTotal',
    NotHaveTotalInvoice: 'NotHaveTotalInvoice'
};

constant.errorLength = 600;

constant.errorMaxLine = 10;

constant.validateLength = {
    StringLength_50: 50,
    StringLength_100: 100,
    StringLength_256: 256,
    StringLength_500: 500,
    StringLength_200: 200
}

constant.effectiveTaxRate = ['17%', '13%', '11%', '6%', '5%', '3%', '1.5%', '0.17', '0.13', '0.11', '0.06', '0.05', '0.03', '0.015'];

constant.cargillFourTaxFactory = ['镇江', '南京', '嘉兴', '廊坊'];

constant.AccountMappingProcessKey = {UnSelected: 'UnSelected', Submit: 'Submit', Undo: 'Undo'}

constant.pagesize = 100;

constant.ErpCheckType = {
    CustomInvoice_DuplicatePayNum: 20
}

constant.ProjectStatusEnum = {
    UnStarted: 10,
    Imported: 20,
    AccountMapSubmitted: 30,
    Generated: 40,
    ReportSubmitted: 50,
    ReportApproved: 60,
    ReportRejected: 70,
    Completed: 100
}

//对应TaxAdmin.Dictionary表中workflow相关的Task的Dickey
constant.DictionaryDictKey = {
    //节点：
    ApproveReport: 'ApproveReport', //报表审核
    DataImport: 'DataImport', //数据导入
    DeclarationComplete: 'DeclarationComplete', //申报完成
    DataProcess: 'DataProcess', //数据处理
    ViewReport: 'ViewReport',//查看报表

    //数据导入Task：
    WFImportErpData: 'WFImportErpData',
    WFImportBalanceTable: 'WFImportBalanceTable',
    WFImportJournalEntry: 'WFImportJournalEntry',
    WFImportOutputInvoice: 'WFImportOutputInvoice',
    WFImportIncomeInvoice: 'WFImportIncomeInvoice',
    WFImportCustomInvoice: 'WFImportCustomInvoice',
    WFImportVoucherMap: 'WFImportVoucherMap',
    WFImportInvoiceMap: 'WFImportInvoiceMap',
    WFImportAuditAdjust: 'WFImportAuditAdjust',

    //数据整理Task
    WFAccountMap: 'WFAccountMap',
    WFCargoNameMatch: 'WFCargoNameMatch', //货物名称匹配
    WFDataProcess: 'WFDataProcess', //数据处理
    WFUnBilledInvoice: 'WFUnBilledInvoice', //未开票销售

    //查看报表Task:
    WFViewFinancialReport: 'WFViewFinancialReport', //查看财务报表
    WFSubmitReport: 'WFSubmitReport', //提交审核

    //报表审核Task：
    WFReportApproval: 'WFReportApproval',//审核报表
    //WFApproveReport: 'WFApproveReport', //报表审核

    //完成申报Task:
    WFDeclarationComplete: 'WFDeclarationComplete', //完成申报
    WFUploadCertificate: 'WFUploadCertificate',//上传凭证
}

//task必须为选择状态
constant.DictionaryDictKey.WFMandatoryTask = [constant.DictionaryDictKey.WFSubmitReport,
    constant.DictionaryDictKey.WFReportApproval, constant.DictionaryDictKey.WFDeclarationComplete];

//task不能选择mandatory
constant.DictionaryDictKey.WFNoSelectionTask = [constant.DictionaryDictKey.WFCargoNameMatch];

constant.inValidNum = -1;

constant.vatImportModule = {
    importWithholdingTaxes: 1,
    importCustomInvoice: 2,
    importTollFee: 3,
    importRedinvoiceNotifyForm: 4,
    importYonYou: 5,
    ImportAccountMapping: 6,
    importPL: 7,

}

/************************************************vat constant end*************************************************/

/********key value*****************/
constant.keyValueType = [
    {value: 1, name: '系统公共'},
    {value: 2, name: '自定义'}
]

constant.menuCodeList = {
    '04.001': '/customsHome',
    '04.002': '/customsReport',
    '04.003': '/ruleSetting/brandOwner',
    '03.001.001': '/invoiceManagement/overview',
    '03.001.004': '/invoiceManagement/doneInvoice',
    '03.001.006': '/invoiceManagement/pendingInvoice',
    '03.001.008': '/invoiceManagement/pendingRefundInvoice',
    '03.001.011': '/invoiceManagement/intrInvoiceMatch',
    '03.001.012': '/invoiceManagement/commercialInvoiceMatch',
    '03.001.013': '/invoiceManagement/invoiceUpload',
    '03.002.001': '/invoiceManagement/saleOrderList',
    '03.002.002': '/invoiceManagement/issueNISInvoice',
    '03.002.003': '/invoiceManagement/issueJDEInvoice',
    '03.002.004': '/invoiceManagement/prefInvoiceManage',
    '03.002.005': '/invoiceManagement/haveInvoiceManage',
    '03.002.006': '/invoiceManagement/pendingInvalidRedInvoice',
    '03.002.007': '/invoiceManagement/haveRedInvoice',
    '03.002.009': '/invoiceManagement/creditMemoInvalidRed',
    '03.002.015': '/invoiceManagement/invoiceRelevanceNis',
    '03.003.001': '/invoiceManagement/prInfo',
    '03.003.002': '/invoiceManagement/customerMaintenance'
}
