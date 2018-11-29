SET NAMES UTF8;
DROP DATABASE IF EXISTS blogs ;
CREATE DATABASE blogs CHARSET=UTF8;
USE blogs;
#管路员发表的文章
CREATE TABLE publish(
	news VARCHAR(1000)	#管理员发表的文章；
);
#用户注册；
CREATE TABLE blog_user(
	uid    INT  PRIMARY KEY AUTO_INCREMENT,
	email	VARCHAR(30),	#邮箱名;
	yzm	VARCHAR(10),	#验证码；
	upwd	VARCHAR(30),	#密码
	newupwd VARCHAR(30)	#确认密码；
)










