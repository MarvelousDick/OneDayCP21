package com.ethermorgan.onedaycp.dto;

import java.util.Map;

public class OperationResultDto<T> extends OperationResultBase {

    private Map<String, String> errors;

    private T data;

    public OperationResultDto() {
    }

    public OperationResultDto(Boolean result) {
        super();
        this.setResult(result);
    }

    public OperationResultDto(Boolean result, String resultMsg) {
        super();
        this.setResult(result);
        this.setResultMsg(resultMsg);
    }
    
    public OperationResultDto(Boolean result, String resultMsg, T data) {
        super();
        this.setResult(result);
        this.setResultMsg(resultMsg);
        this.setData(data);
    }

    
    public static OperationResultDto<?> success() {
        return new OperationResultDto<>(true);
    }

    public static OperationResultDto<?> error() {
        return new OperationResultDto<>(false, null);
    }

    public Map<String, String> getErrors() {
        return errors;
    }

    public void setErrors(Map<String, String> errors) {
        this.errors = errors;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

}
