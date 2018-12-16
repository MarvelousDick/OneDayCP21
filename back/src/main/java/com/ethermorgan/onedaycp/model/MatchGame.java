package com.ethermorgan.onedaycp.model;

public class MatchGame {
    private String userid;

    private String username;

    private String matchusername;

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid == null ? null : userid.trim();
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getMatchusername() {
        return matchusername;
    }

    public void setMatchusername(String matchusername) {
        this.matchusername = matchusername == null ? null : matchusername.trim();
    }
}