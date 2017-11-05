(()=>{
    var txtName1 = document.getElementById("inputUser");
    var txtPwd1 = document.getElementById("inputPwd");
    txtName1.onfocus=function(){
       this.placeholder="请输入手机号";
       this.style.border="1px solid #a99269"
    };
    txtPwd1.onfocus=function(){
       this.placeholder="请输入你的密码";
       this.style.border="1px solid #a99269"
    };
    txtName1.onblur=function(){
        vertify(/^(\+86|0086)?\s*1[34578]\d{9}$/,this);
    };
    txtPwd1.onblur=function(){
        vertify(/^\w{6,14}$/,this);
    };
    function vertify(reg,txt){
        if(reg.test(txt.value)){
            txt.placeholder="";
            msgone.innerHTML="";
        }else{
            txt.value="";
            msgone.innerHTML="请输入正确格式";
            $("#msgone").css({
                color:"red"
            });
            txt.style.border="2px solid red"
        }
    }
})();
(()=>{
    var loginName = "";
    //获取登录按钮绑定点击事件
    $(".btn1").click(function(e){
       //获取用户名密码
        var u=$("[name='inputUser']").val();
        var p=$("[name='inputPwd").val();
        //返回数据并且判断
        $.ajax({
            type:"POST",
            url:"data/login.php",
            data:{uname:u,upwd:p},
            success:function(data){
                if(data.code>0){
                    loginName = u;
                    document.cookie = 'uname='+u;
                    location.href="../ljq/index.html"
                }else{
                    $("p.alert1").html(data.msg);
                }
            },
            error:function(){
                alert("网络连接错误，请检查");
            }
        });
    })
})();
