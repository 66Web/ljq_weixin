(()=>{
    var txtName2 = document.getElementById("inputUser2");
    var txtPwd2 = document.getElementById("inputPwd2");
    txtName2.onfocus=function(){
        this.placeholder="请输入手机号";
        this.style.border="1px solid #a99269";
    };
    txtPwd2.onfocus=function(){
        this.placeholder="请输入你的密码";
        this.style.border="1px solid #a99269";
    };
    txtName2.onblur=function(){
        vertify(/^(\+86|0086)?\s*1[34578]\d{9}$/,this);
    };
    txtPwd2.onblur=function(){
        vertify(/^\w{6,14}$/,this);
    };
    function vertify(reg,txt){
        if(reg.test(txt.value)){
            txt.placeholder="";
            msgtwo.innerHTML="";
        }else{
            txt.value="";
            msgtwo.innerHTML="请输入正确格式";
            $("#msg2").css({
                color:"red"
            });
            txt.style.border="2px solid red"
        }
    }
    $(".btn2").click(function(e){
        if(!/^(\+86|0086)?\s*1[34578]\d{9}$/.test(txtName2.value)){
            msgtwo.innerHTML = "手机号格式不正确";
            $("#msgtwo").css({
                color:"red"
            });
        }else if(!/^\w{6,14}$/.test(txtPwd2.value)){
            msgtwo.innerHTML = "密码为6-14位有效字符";
            $("#msgtwo").css({
                color:"red"
            });
        }else{
            var xhr = new XMLHttpRequest();
            var u = inputUser2.value;
            var p = inputPwd2.value;
            xhr.open("GET",`data/register.php?uname=${u}&upwd=${p}`,true);
            xhr.send(null);
            msgtwo.innerHTML="注册成功";
            $("#msgtwo").css({
                color:"green"
            });
        }
    })
})();
