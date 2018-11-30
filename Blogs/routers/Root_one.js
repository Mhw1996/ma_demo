//链接数据库；
const pool=require("../pool.js");
//引入express;
const express=require("express");
//创建空的路由器
const router=express.Router();
//从数据库中获取用户的所用信息
    router.get("/user_list",(req,res)=>{
        var sql="select *from blog_user";
        pool.query(sql,(err,result)=>{
            if(err)throw err;
            res.send(result)
        })
    });

//导出路由
module.exports=router;