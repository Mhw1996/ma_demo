//创建web服务器；
//引入css
//const login=require('../css/login.css');
//引入express；
const express=require("express");
//引入用户路由器；
const userRouter=require("./routers/user_router.js");
//引入body-parser;
const bodyParser=require("body-parser");
var app=express();
app.listen(3000,()=>{
	console.log("创建web服务器成功");
});
//托管静态文件到public下；
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended:false
}));
//使用路由器来管理路由；
//把用户路由器挂载到/user下；
//访问形式 /user/reginter
app.use('/user',userRouter);
