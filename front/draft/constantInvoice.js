/*发票相关的常量设置*/

if (!constant) {
    console.log('constant is null then to declare');
    constant = {};
}

//销项发票
constant.outputInvoice = {
    // 发票分类
    invoiceCategory: {
        Normal: {id: 1, value: 'Normal'},   // 蓝票
        RedLetter: {id: 2, value: 'RedLetter'}, // 红票
    },
    // 发票项类型
    invoiceItemType: {
        Invalid: {id: 1, value: 'Invalid'}, // 无效项
        Normal: {id: 2, value: 'Normal'},   // 正常项
        Discount: {id: 3, value: 'Discount'},   // 折扣项
    },
    //折扣类型
    discountType: {
        InstantDiscount: {id: 1, value: 'InstantDiscount'},//现折
        MonthDiscount: {id: 2, value: 'MonthDiscount'},//月折
        Mixed: {id: 3, value: 'Mixed'},//混合
    },
    //开票类型
    issueInvoiceType: {
        VatInvoiceSpecialTicket: {id: 1, value: 'VatInvoiceSpecialTicket'}, //增值税专用发票
        VatInvoiceOrdinaryTicket: {id: 2, value: 'VatInvoiceOrdinaryTicket'},//增值税普通发票
        Mixed: {id: 3, value: 'Mixed'},//混合
    },
    //发票实体类型，纸票或电子票
    invoiceEntityType: {
        InvoicePaperTicket: {id: 1, value: 'InvoicePaperTicket'},
        InvoiceElectronicTicket: {id: 2, value: 'InvoiceElectronicTicket'},
    },
    //打印方式
    printType: {
        PrintInvoice: "0",
        PrintDetailList: "1"
    },
    //开票状态
    status: {
        Previewed: {id: 1, value: 'Previewed'},   // 已预制
        Issued: {id: 2, value: 'Issued'}, // 已开具
        Printed: {id: 3, value: 'Printed'},   // 已打印
        Voided: {id: 4, value: 'Voided'}, // 已作废
        Reversed: {id: 5, value: 'Reversed'},   // 已红冲
    },

    //开票规则,自动开票，手动开票
    issueInvoiceBillingType: {
        AutoIssueInvoice: {id: 1, value: 'AutoIssueInvoice'}, //自动开票
        ManualIssueInvoice: {id: 2, value: 'ManualIssueInvoice'},//手动开票
    },
    //是否使用维护的含税单价,是，否
    enableTaxIncludedUnitPrice: {
        Enable: {id: 1, value: 'Enable'},// 启用
        Disable: {id: 0, value: 'Disable'},// 禁用
    },
    //折扣显示规则
    discountShowType: {
        Single: {id: 1, value: 'SingleShowTotalDiscountAmount'}, //单独显示总折扣值
        Share: {id: 2, value: 'ShareDiscountAmount'},//按订单中货物或应税劳务总额进行折扣分摊
    },
    //纳税规则类型
    taxRuleType: {
        Taxable: {id: 1, value: "Taxable"},//应税
        TaxExemption: {id: 2, value: "TaxExemption"} //免税
    },
    //规则状态
    ruleStatus: {
        Enable: {id: 1, value: 'Enable'},// 启用
        Disable: {id: 2, value: 'Disable'},// 禁用
    },

    //开票月频率
    issueInvoiceMonthRate: {
        Week: {id: 1, value: "Weekly"},//每周
        Month: {id: 2, value: "Monthly"},//每月
        Quarter: {id: 3, value: "Quarterly"},//每季度
    },

    //拆分方式
    splitType: {
        SingleInvoiceAmount: {id: 1, value: "ConfirmSingleInvoiceAmount"},//确定单张发票金额
        InvoiceCount: {id: 2, value: "ConfirmInvoiceCount"},//确定发票张数
        EnsureInteger: {id: 3, value: "ConfirmInvoiceInteger"},//整数开票
        NoSalesList: {id: 4, value: "NoSalesList"}//无销货清单
    },

    //开票日频率
    issueInvoiceDayRate: {
        FirstDay: {id: 1, value: "1日"},
        SecondDay: {id: 2, value: "2日"},
        ThridDay: {id: 3, value: "3日"},
        FourthDay: {id: 4, value: "4日"},
        FifthDay: {id: 5, value: "5日"},
    },
    //纳税人类型
    taxPayerType: {
        GeneralTaxPayer: {id: 1, value: 'GeneralTaxPayer'},//一般纳税人
        SmallSacleTaxPayer: {id: 2, value: 'SmallSacleTaxPayer'},//小规模纳税人
        Individual: {id: 3, value: 'IndividualTaxPaye'},//个人
    },

    //NIS开票方式
    NisIssueFormType: {
        IssueSingleInvoice: {id: 1, value: 'IssueSingleInvoice'},//单个订单开票
        IssueSplitInvoice: {id: 2, value: 'IssueSplitInvoice'}, //拆分开票
        IssueMergeInvoice: {id: 3, value: 'IssueSingleInvoice'},//合并开票
        ViewInvoice: {id: 4, value: 'ViewInvoice'}, //查看
        EditInvoice: {id: 5, value: 'EditInvoice'}, //编辑开票信息
    },

    //JDE开票方式
    JdeIssueFormType: {
        IssueInoviceManual: {id: 1, value: 'IssueInoviceManual'},//手工开票
        ViewInvoice: {id: 2, value: 'ViewInvoice'}, //查看
    },
    //JDE业务类型
    JdeBusinessType: {
        FodderTestingService: {id: 1, value: 'FodderTestingService', code: '552452.001', taxRateList: [0.06]},//饲料检测服务
        TacFodderTestingService: {id: 2, value: 'TacFodderTestingService', code: '652452.001', taxRateList: [0.06]},// Tac 饲料检测服务
        FundPoolLoadInterest: {id: 3, value: 'FundPoolLoadInterest', code: '472902.01', taxRateList: [0.06]},// 资金池委贷利息

        DisposalFixedAssetExternalCompany: {
            id: 4,
            value: 'DisposalFixedAssetExternalCompany',
            code: '793101.100',
            taxRateList: [0.03, 0.16]
        }, //固定资产处置-外部公司
        DisposalFixedAssetInternalCompany: {
            id: 5,
            value: 'DisposalFixedAssetInternalCompany',
            code: '793102.100',
            taxRateList: [0.03, 0.16]
        }, //固定资产处置-内部公司
        DisposalLandUseRight: {id: 6, value: 'DisposalLandUseRight', code: '793141.001', taxRateList: [0.05, 0.10]}, //处置土地使用权

        InformationSystemValueAddedService: {
            id: 7,
            value: 'InformationSystemValueAddedService',
            code: '452301.01',
            taxRateList: [0.06]
        }, //信息系统增值服务-Mila配方
        WarehouseServiceExternalCompany: {
            id: 8,
            value: 'WarehouseServiceExternalCompany',
            code: '468102.01',
            taxRateList: [0.06]
        }, //仓储服务费-外部公司
        WarehouseServiceInternalCompany: {
            id: 9,
            value: 'WarehouseServiceInternalCompany',
            code: '460102.01',
            taxRateList: [0.06]
        }, //仓储服务费-内部部公司
        FoodService: {id: 10, value: 'FoodService', code: '452401.01', taxRateList: [0.06]}, //餐饮服务-食堂
        OthersService001: {id: 11, value: 'OthersService001', code: '486901.001', taxRateList: [0.06]}, //其他服务001
        OthersService004: {id: 12, value: 'OthersService004', code: '486901.004', taxRateList: [0.06]}, //其他服务004

        //ScrapSales: { id: 13, value: 'ScrapSales', code: '486901.08', taxRateList: [0.17] }, //废品销售
        //ScrapSalesWasteFeed: { id: 14, value: 'ScrapSalesWasteFeed', code: '401101.77', taxRateList: [0.17] }, //废料销售-废饲料
        RawMaterialSaleExternalCompany: {
            id: 15,
            value: 'RawMaterialSaleExternalCompany',
            code: '401101.03',
            taxRateList: [0.16]
        }, //原料销售-外部公司
        RawMaterialSaleInternalCompany: {
            id: 16,
            value: 'RawMaterialSaleInternalCompany',
            code: '401102.03',
            taxRateList: [0.16]
        }, //原料销售-内部公司
        //BagsSalesOld: { id: 17, value: 'BagsSalesOld', code: '401101.41 ', taxRateList: [0.17] }, //编织袋销售-旧
        //BagsSalesNew: { id: 18, value: 'BagsSalesNew', code: '401101.40', taxRateList: [0.17] }, //编织袋销售-新
        CommissioneFeeExternalCompany: {
            id: 19,
            value: 'CommissioneFeeExternalCompany',
            code: '482102.001',
            taxRateList: [0.16]
        }, //委托加工费-内部公司
        CommissioneFeeInternalCompany: {
            id: 20,
            value: 'CommissioneFeeInternalCompany',
            code: '482101.001',
            taxRateList: [0.16]
        }, //委托加工费-外部公司
        BuildingCleanupRevenue: {
            id: 22,
            value: 'BuildingCleanupRevenue',
            code: '793101.101',
            taxRateList: [0.05, 0.10]
        }, //建筑物清理收入
        InformationTechService: {id: 23, value: 'InformationTechService', code: '452301.01', taxRateList: [0.06]}, //信息技术服务
        LaboratoryServicesRevenueExternal: {
            id: 24,
            value: 'LaboratoryServicesRevenueExternal',
            code: '486901.002',
            taxRateList: [0.06]
        }, //化验服务收入-外部

        OtherIncome: {id: 21, value: 'OtherIncome', code: '', taxRateList: []}, //其他收入
    },
    //NIS商品类型
    NisProductClassification: {
        FreeFeedCredit: {id: 1, value: "FreeFeedCredit", taxRateList: [0]},//免税饲料、赊销费
        TaxableFeedCredit: {id: 2, value: "TaxableFeedCredit", taxRateList: [0.1, 0.11]},//应税饲料、赊销费
        NisMaintenanceMaterial: {id: 3, value: "NisMaintenanceMaterial", taxRateList: [0.16, 0.17]},//NIS维护的原料
        NisMaintenancWasteMaterial: {id: 4, value: "NisMaintenancWasteMaterial", taxRateList: [0.16, 0.17]},//NIS维护的废料
        NisMaintenancWaste: {id: 5, value: "NisMaintenancWaste", taxRateList: [0.16, 0.17]},//NIS维护的废品
        NisMaintenancBackCost: {id: 6, value: "NisMaintenancBackCost", taxRateList: [0.16, 0.17]},//NIS维护的回制费
    },
    //发票开具方式
    InvoicingMethod: {
        NISManual: {id: 1, value: 'NISManual'},//NIS手动开具
        NISAuto: {id: 2, value: 'NISAuto'}, //NIS自动开具
        JDEManual: {id: 3, value: 'JDEManual'}, //JDE手动开具
        CreditMemo: {id: 4, value: 'CreditMemo'},//CreditMemo开具
        GoldenDisk: {id: 5, value: 'GoldenDisk'}, //金税盘开具
        OtherIssue: {id: 6, value: 'OtherIssue'},//其它开具
    },

    //发票状态-未开票中显示的状态
    InvoiceStatusOnRecon: {
        AccountingInvoice: {id: 1, value: 'AccountingInvoice'},//已记账
        UnbilledInvoice: {id: 2, value: 'UnbilledInvoice'}, //未记账
    },

    customerType: {
        nis: {id: 1, value: 'NIS'},
        jde: {id: 2, value: 'JDE'},
        //creditMemo: { id: 3, value: 'creditMemo' },
    },

    productType: {
        nis: {id: 1, value: 'NIS'},
        jde: {id: 2, value: 'JDE'}
    },

    //审核意见类型
    auditType: {
        approveGeneratePreInvoice: {id: 100, value: 'approveGeneratePreInvoice'},//申请审批预制发票
        approveGeneratePreInvoicePassed: {id: 101, value: 'approveGeneratePreInvoicePassed'},//审批预制发票通过
        approveGeneratePreInvoiceRejected: {id: 102, value: 'approveGeneratePreInvoiceRejected'},//审批预制发票驳回

        applyCancelInvoice: {id: 200, value: 'applyCancelInvoice'},//申请作废发票
        applyCancelInvoicePassed: {id: 201, value: 'applyCancelInvoicePassed'},//申请作废发票 通过
        applyCancelInvoiceRejected: {id: 202, value: 'applyCancelInvoiceRejected'},//申请作废发票 驳回
        applyCancelSupplementaryMaterials: {id: 203, value: 'applyCancelSupplementaryMaterials'},//作废补充材料

        applyRedInvoice: {id: 300, value: 'applyRedInvoice'},//申请红冲发票
        applyRedInvoicePassed: {id: 301, value: 'applyRedInvoicePassed'},//申请红冲发票 通过
        applyRedInvoiceRejected: {id: 302, value: 'applyRedInvoiceRejected'},//申请红冲发票 驳回
        applyRedSupplementaryMaterials: {id: 303, value: 'applyRedSupplementaryMaterials'},//红冲补充材料

    },

    editOperateType: {
        viewPreInvoice: {id: 1, value: 'ViewInvoice'},  //查看发票
        editPreInvoice: {id: 2, value: 'editPreInvoice'},  //编辑发票
        auditPreInvoice: {id: 3, value: 'auditPreInvoice'},//审核预制发票
        auditPendingInvalidOrRedInvoice: {id: 4, value: 'auditPendingInvalidOrRedInvoice'},//审核
        revokeInvalidOrRedInvoice: {id: 5, value: 'revokeInvalidOrRedInvoice'},//红冲审核，作废
        revokePreInvoice: {id: 6, value: 'revokePreInvoice'},//预制发票审核
        editInvoiceRemark: {id: 7, value: 'editInvoiceRemark'},//编辑发票备注
        supplementaryMaterials: {id: 8, value: 'supplementaryMaterials'},//补充材料
    },

    //申请红冲还是作废与红冲
    ApplyCancelOrRedType: {
        applyToRedInvoice: {id: 1, value: 'ApplyToRedInvoice'},  //申请红冲
        applyToRedOrCancelInvoice: {id: 2, value: 'ApplyToRedOrCancelInvoice'}//申请红冲作废
    },

    //从哪个页面申请做红冲，作废，目前有已开发票管理，和credit memo
    applyCancOrRedPage: {
        haveInvoiced: {id: 1},
        creditMemo: {id: 2},
    },

    //jde开票类型，目前有2种开票类型
    JDEIssueType: {
        jde: {id: 1}, //jde开票
        other: {id: 2} //其他开票
    },

    //订单类型
    orderType: {
        normal: {id: 1, value: 'Normal'},
        credit: {id: 2, value: 'Credit'},
        gift: {id: 3, value: 'Gift'},
    },

    //订单状态 Unchecked(普通订单折扣校验未完成) Check(折扣校验已通过) Offset(订单已对冲) Close(普通订单已预制或credit订单已开红票)
    orderStatus: {
        unchecked: {id: 1, value: 'Unchecked'},
        checked: {id: 2, value: 'Checked'},
        previewed: {id: 3, value: 'Previewed'},
        offset: {id: 4, value: 'Offset'},
        close: {id: 5, value: 'Close'}
    },

    //JDE 凭证 付款状态
    jdeVoucherPaymentStatus: {
        toPay: {id: 1, value: 'toPay'},
        paid: {id: 2, value: 'paid'}
    },

    //赠料户
    NisDonorCustomer: {
        donorCustomer: {id: '9002', value: 'DonorCustomerUser'},
        donorCustomer2: {id: '900002', value: 'DonorCustomerUser'},
    },
    //发票的操作类型，1，识别；2，认证
    invoiceOperateType: {
        inputInvoiceRecognize: {id: 1, value: 'InputInvoiceRecognize'},
        inputInvoiceVerify: {id: 2, value: 'InputInvoiceVerify'},
    },
    //关联方式
    relevanceMethod: {
        nis: {id: 1, value: 'RelevanceNISOrder'},
        jde: {id: 2, value: 'RelevanceJDE'},
        productCode: {id: 3, value: 'RelevanceProductCode'}
    }
};

constant.outputInvoice.invoiceOperateTypeArray = [
    constant.outputInvoice.invoiceOperateType.inputInvoiceRecognize,
    constant.outputInvoice.invoiceOperateType.inputInvoiceVerify,
]

constant.yesOrNo = {
    Yes: {id: 1, value: 'BoolYes'},
    No: {id: 0, value: 'BoolNo'},
};

constant.enableStatus = {
    enable: {id: 1, value: 'HasEnabled'}, //启用
    disable: {id: 0, value: 'HasDisnabled'}, //禁用
}

constant.outputInvoice.decimalScale = 2;
constant.outputInvoice.nisManualIssueInvoiceCustomerCode = '1111111111';
constant.separator = {
    dash: '-',
    cnDash: '——'
}
constant.printInvoiceDetailMaxItemCount = 8;
constant.dxUnitPriceFormat = "#,##0.########";
constant.unitPriceDecimals = 8;


constant.pageEnum = {
    issueJDEInvoice: {id: 1, value: 'issueJDEInvoice'},
    haveRedInvoice: {id: 2, value: 'haveRedInvoice'},
    preIssueInvoice: {id: 3, value: 'PreIssueInvoice'},
};

//JDE业务类型

_initArray();

function _initArray() {
    constant.outputInvoice.invoiceCategoryArray = [
        constant.outputInvoice.invoiceCategory.Normal,
        constant.outputInvoice.invoiceCategory.RedLetter,
    ];

    constant.outputInvoice.donorCustomerArray = [
        constant.outputInvoice.NisDonorCustomer.donorCustomer,
        constant.outputInvoice.NisDonorCustomer.donorCustomer2,
    ];

    constant.outputInvoice.orderTypeArray = [
        constant.outputInvoice.orderType.normal,
        constant.outputInvoice.orderType.credit,
        constant.outputInvoice.orderType.gift,
    ];

    constant.outputInvoice.orderStatusArray = [
        constant.outputInvoice.orderStatus.unchecked,
        constant.outputInvoice.orderStatus.checked,
        constant.outputInvoice.orderStatus.offset,
        constant.outputInvoice.orderStatus.close,
    ];

    constant.outputInvoice.auditTypeArray = [
        constant.outputInvoice.auditType.approveGeneratePreInvoice,
        constant.outputInvoice.auditType.approveGeneratePreInvoicePassed,
        constant.outputInvoice.auditType.approveGeneratePreInvoiceRejected,
        constant.outputInvoice.auditType.applyCancelInvoice,
        constant.outputInvoice.auditType.applyCancelInvoicePassed,
        constant.outputInvoice.auditType.applyCancelInvoiceRejected,
        constant.outputInvoice.auditType.applyRedInvoice,
        constant.outputInvoice.auditType.applyRedInvoicePassed,
        constant.outputInvoice.auditType.applyRedInvoiceRejected,
    ];

    constant.enableStatusArray = [
        constant.enableStatus.enable,
        constant.enableStatus.disable,
    ];
    //发票开具方式数组
    constant.outputInvoice.InvoicingMethodArray = [
        constant.outputInvoice.InvoicingMethod.NISManual,
        constant.outputInvoice.InvoicingMethod.NISAuto,
        constant.outputInvoice.InvoicingMethod.JDEManual,
        constant.outputInvoice.InvoicingMethod.CreditMemo,
        constant.outputInvoice.InvoicingMethod.GoldenDisk,
        constant.outputInvoice.InvoicingMethod.OtherIssue,
    ];

    //发票实体数组
    constant.outputInvoice.invoiceEntityTypeArray = [
        constant.outputInvoice.invoiceEntityType.InvoicePaperTicket,
        constant.outputInvoice.invoiceEntityType.InvoiceElectronicTicket,
    ];
    //JDE业务类型数组

    constant.outputInvoice.JdeBusinessTypeArray = [
        constant.outputInvoice.JdeBusinessType.FodderTestingService,
        constant.outputInvoice.JdeBusinessType.TacFodderTestingService,
        constant.outputInvoice.JdeBusinessType.FundPoolLoadInterest,
        constant.outputInvoice.JdeBusinessType.DisposalFixedAssetExternalCompany,
        constant.outputInvoice.JdeBusinessType.DisposalFixedAssetInternalCompany,
        constant.outputInvoice.JdeBusinessType.DisposalLandUseRight,
        constant.outputInvoice.JdeBusinessType.InformationSystemValueAddedService,
        constant.outputInvoice.JdeBusinessType.WarehouseServiceExternalCompany,
        constant.outputInvoice.JdeBusinessType.WarehouseServiceInternalCompany,
        // constant.outputInvoice.JdeBusinessType.FoodService,  //20180403,confirm with vivian,removed
        constant.outputInvoice.JdeBusinessType.OthersService001,
        constant.outputInvoice.JdeBusinessType.OthersService004,
        // constant.outputInvoice.JdeBusinessType.ScrapSales,
        // constant.outputInvoice.JdeBusinessType.ScrapSalesWasteFeed,
        constant.outputInvoice.JdeBusinessType.RawMaterialSaleExternalCompany,
        constant.outputInvoice.JdeBusinessType.RawMaterialSaleInternalCompany,
        // constant.outputInvoice.JdeBusinessType.BagsSalesOld,
        //constant.outputInvoice.JdeBusinessType.BagsSalesNew,
        constant.outputInvoice.JdeBusinessType.CommissioneFeeExternalCompany,
        constant.outputInvoice.JdeBusinessType.CommissioneFeeInternalCompany,
        constant.outputInvoice.JdeBusinessType.BuildingCleanupRevenue,
        constant.outputInvoice.JdeBusinessType.InformationTechService,
        constant.outputInvoice.JdeBusinessType.LaboratoryServicesRevenueExternal,
        constant.outputInvoice.JdeBusinessType.OtherIncome

    ];

    //Nis商品分类数组
    constant.outputInvoice.NisProductClassificationArray = [
        constant.outputInvoice.NisProductClassification.FreeFeedCredit,
        constant.outputInvoice.NisProductClassification.TaxableFeedCredit,
        constant.outputInvoice.NisProductClassification.NisMaintenanceMaterial,
        constant.outputInvoice.NisProductClassification.NisMaintenancWasteMaterial,
        constant.outputInvoice.NisProductClassification.NisMaintenancWaste,
        constant.outputInvoice.NisProductClassification.NisMaintenancBackCost
    ];

    //纳税人类型数组
    constant.outputInvoice.taxPayerTypeArray = [
        constant.outputInvoice.taxPayerType.GeneralTaxPayer,
        constant.outputInvoice.taxPayerType.SmallSacleTaxPayer,
        constant.outputInvoice.taxPayerType.Individual
    ];


    //布尔值
    constant.yesOrNoArray = [
        constant.yesOrNo.Yes,
        constant.yesOrNo.No
    ];

    //拆分方式数组
    constant.outputInvoice.splitTypeArray = [
        constant.outputInvoice.splitType.SingleInvoiceAmount,
        constant.outputInvoice.splitType.InvoiceCount,
        constant.outputInvoice.splitType.EnsureInteger,
        constant.outputInvoice.splitType.NoSalesList
    ];

    //折扣类型数组
    constant.outputInvoice.discountTypeArray = [
        constant.outputInvoice.discountType.InstantDiscount,
        constant.outputInvoice.discountType.MonthDiscount
    ];

    //开票类型数组
    constant.outputInvoice.issueInvoiceTypeArray = [
        constant.outputInvoice.issueInvoiceType.VatInvoiceSpecialTicket,
        constant.outputInvoice.issueInvoiceType.VatInvoiceOrdinaryTicket
    ];

    //开票状态数组
    constant.outputInvoice.statusArray = [
        constant.outputInvoice.status.Previewed,
        constant.outputInvoice.status.Issued,
        constant.outputInvoice.status.Printed,
        constant.outputInvoice.status.Voided,
        constant.outputInvoice.status.Reversed,
    ];


    //开票规则数组
    constant.outputInvoice.issueInvoiceBillingTypeArray = [
        constant.outputInvoice.issueInvoiceBillingType.AutoIssueInvoice,
        constant.outputInvoice.issueInvoiceBillingType.ManualIssueInvoice
    ];

    //折扣显示规则数组
    constant.outputInvoice.discountShowTypeArray = [
        constant.outputInvoice.discountShowType.Single,
        constant.outputInvoice.discountShowType.Share
    ];

    //纳税规则类型
    constant.outputInvoice.taxRuleTypeArray = [
        constant.outputInvoice.taxRuleType.Taxable,
        constant.outputInvoice.taxRuleType.TaxExemption
    ];

    //规则状态
    constant.outputInvoice.ruleStatusArray = [
        constant.outputInvoice.ruleStatus.Enable,
        constant.outputInvoice.ruleStatus.Disable
    ];

    //开票月频率
    constant.outputInvoice.issueInvoiceMonthRateArray = [
        constant.outputInvoice.issueInvoiceMonthRate.Week,
        constant.outputInvoice.issueInvoiceMonthRate.Month
    ];

    //开票月频率
    constant.outputInvoice.issueInvoiceDayRateArray = [
        constant.outputInvoice.issueInvoiceDayRate.FirstDay,
        constant.outputInvoice.issueInvoiceDayRate.SecondDay,
        constant.outputInvoice.issueInvoiceDayRate.ThridDay,
        constant.outputInvoice.issueInvoiceDayRate.FourthDay,
        constant.outputInvoice.issueInvoiceDayRate.FifthDay
    ];
    //未开票收入中的发票状态
    constant.outputInvoice.invoiceStatusOnReconArray = [
        constant.outputInvoice.InvoiceStatusOnRecon.AccountingInvoice,
        constant.outputInvoice.InvoiceStatusOnRecon.UnbilledInvoice
    ];

    //关联方式
    constant.outputInvoice.relevanceMethodTypeArray = [
        constant.outputInvoice.relevanceMethod.nis,
        constant.outputInvoice.relevanceMethod.jde,
        constant.outputInvoice.relevanceMethod.productCode
    ];
};