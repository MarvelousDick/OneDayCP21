package com.ethermorgan.onedaycp.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateDto {
    public UpdateDto(String userName, String matcherName) {
        this.userName = userName;
        this.matcherName = matcherName;
    }

    String userName;
    String matcherName;
}
