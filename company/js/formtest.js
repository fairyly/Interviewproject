//表单验证（正则表达式验证）

function ti(){
	 if(document.getElementById("username").value==""||document.getElementById("username").value==NaN){
      alert("用户名不能为空");
      document.getElementById("username").focus();
      return false;

      }
	


	var email=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if(!document.getElementById("Email").value.match(email)){
         alert("email格式不正确");
         document.getElementById("Email").focus();
         return false;
    }
     
     var QQ=/[1-9][0-9]{4,}/;
    if(!document.getElementById("QQ").value.match(QQ)){
         alert("QQ格式不正确");
          document.getElementById("QQ").focus();
         return false;
    }

     var Mobile=!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
    if(!document.getElementById("Mobile").value.match(Mobile)){
         alert("Mobile格式不正确");
          document.getElementById("Mobile").focus();
         return false;
    }


return true;
}