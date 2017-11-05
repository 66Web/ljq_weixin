<?php
   require("init.php");
   @$uname= $_REQUEST["uname"] or die('{"code":-1,"msg":"用户名是必须的"}');
   @$upwd=$_REQUEST["upwd"]or die('{"code":-2,"msg":"密码是必须的"}');
   $sql="SELECT * FROM wxuser WHERE uname='$uname' AND upwd='$upwd'";
   $result=mysqli_query($conn,$sql);
   $row=mysqli_fetch_assoc($result);
   if($row===null){
      echo '{"code":-3,"msg":"用户名或密码有误"}';
   }else{
      $uid = $row['uid'];
      echo '{"code":1,"msg":"登录正确","uid":'.$uid.'}';
   }

?>