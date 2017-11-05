<?php
require("init.php");
@$uname=$_REQUEST["uname"] or die("用户名输入错误");
@$upwd=$_REQUEST["upwd"] or die("密码输入错误");
$sql="INSERT INTO wxuser VALUES(null,'$uname','$upwd')";
$result=mysqli_query($conn,$sql);
if($result==false){
   echo "注册失败！";
}else{
   echo "注册成功，请返回登录";
}
?>