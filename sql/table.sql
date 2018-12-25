create schema if not exists onedaycp collate utf8_general_ci;

create table if not exists match_game
(
	UserId varchar(50) not null,
	UserName varchar(255) null,
	MatchUserName varchar(255) null
);

create table if not exists t_user
(
	userId int auto_increment
		primary key,
	userName varchar(255) not null,
	password varchar(255) not null,
	phone varchar(255) not null
);

create table if not exists wx_user_info
(
	ID varchar(128) not null,
	OpenID varchar(128) null,
	NickName varchar(58) null,
	Sex smallint(6) null,
	Province varchar(128) null,
	City varchar(128) null,
	Country varchar(128) null,
	HeadimgURL varchar(256) null,
	Unionid varchar(128) null,
	CreateTime datetime null,
	constraint wxuserinfo_ID_uindex
		unique (ID)
);


alter table wx_user_info
	add primary key (ID);



create table if not exists user_info
(
	ID varchar(128) not null,
	OpenID varchar(128) null,
	NickName varchar(58) null,
	Sex smallint(6) null,
	Birthday datetime null,
  WechatID varchar(128) null,
  University varchar(128) null,
  Major varchar(128) null,
	CreateTime datetime null,
);


alter table user_info
	add primary key (ID);