//链接数据库；
const pool=require("../pool.js");
//引入express;
const express=require("express");
//创建空的路由器
const router=express.Router();
//创建发表文章的功能；
router.post("/publish1",(req,res)=>{
	var obj=req.body;
	var $publish=obj.publish;
	//把发表的文章显示在浏览器上；
	res.send($publish);
//写入插入语句，把发表的文章插入到数据库中；
	pool.query('INSERT INTO publish VALUES(?)',[$publish],(err,result)=>{
		if(err) throw err;
		//console.log(result)
		if(result.affectedRows>0){
			//res.send({code:200,msg:"reg:success"});
			//alert("内容不能为空！！！");
		};
	});
});
//注册页面；
router.post("/publish2",(req,res)=>{
	var obj=req.body;
	//console.log(obj);
	var $email=obj.email;
	var $yzm=obj.yzm;
	var $upwd=obj.upwd;
	var $newupwd=obj.newupwd;
	//console.log($email, $yzm,$upwd,$newupwd);
	if(!$email){
		res.send("请输入邮箱名");
		return;
	}
	if(!$yzm){
		res.send("请输入验证码");
		return;
	}
	if(!$upwd){
		res.send("请输入密码");
		return;
	}
	if(!$newupwd){
		res.send("请输入密码");
		return;
	}
	if($upwd!=$newupwd){
		res.send("请确认密码,你输入的两次密码不一致");
		return;
	}
	pool.query('INSERT INTO blog_user SET ?',[obj],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send({code:200,msg:"reg:注册成功！！！"});
		};
	});	
});
//登录页面；
router.post("/sign",(req,res)=>{
	var obj=req.body;
	//console.log(obj)
	var $email=obj.email;
	var $newupwd=obj.newupwd;
	//var $pwd=obj.pwd;
	//console.log($email,$newupwd);
	if(!$email){
		res.send({code:406,msg:"email 请输入邮箱名"});
		return;
	}
	if(!$newupwd){
		res.send({code:407,msg:" 请输入密码"});
		return;
	};
	pool.query("SELECT *FROM blog_user WHERE email=? AND newupwd=?",[$email,$newupwd],(err,result)=>{	
		if(result.length>0){
			res.send({code:200,msg:'登陆成功'});
		}else{
			res.send({code:301,msg:'登录失败'})
		}
		//console.log(result)
	})
});
//导出路由器；
module.exports=router;     