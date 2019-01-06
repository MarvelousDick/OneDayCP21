create schema if not exists onedaycp ;

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

select schema onedaycp;

create table if not exists wx_user_info
(
	id varchar(128) not null,
	open_id varchar(128) null,
	nick_name varchar(58) null,
	sex smallint(6) null,
	province varchar(128) null,
	city varchar(128) null,
	country varchar(128) null,
	headimg_url varchar(256) null,
	union_id varchar(128) null,
	create_time datetime null,
		unique (ID)
);


alter table wx_user_info
	add primary key (ID);


create table if not exists user_info
(
	id varchar(128) not null,
	open_id varchar(128) null,
	nick_name varchar(58) null,
	sex smallint(6) null,
	match_sex smallint(6) null,
	birthday datetime null,
  wechat_id varchar(128) null,
  university varchar(128) null,
  major varchar(128) null,
  headimg_url varchar(256) null,
  user_status varchar(256) null,
	create_time datetime null,
);


alter table user_info
	add primary key (ID);