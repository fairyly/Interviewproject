// JavaScript Document

$.validator.addMethod("isPsw", function(value, element) {
    var length = value.length;
    var psw = /((?=.*\d)(?=.*\D)|(?=.*[a-zA-Z])(?=.*[^a-zA-Z]))^.{6,18}$/;
    return psw.test(value);
}, "密码为6~18个大小写英文字母、符号或数字组合");

$.validator.addMethod("isMobile", function(value, element) {
    var length = value.length;
    var mobile = /^1[3|4|5|7|8]\d{9}$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, "请输入正确的手机号码");


/*-------注册验证-----------*/
// $(function() {
function validform() {
    return $("#signupForm").validate({
        rules: {
            telphone: {
                required: true,
                rangelength: [11, 11],
                digits: "只能输入整数",
                isMobile: true
            },
            vcode: {
                required: true,
                rangelength: [6, 6]
            },
            password: {
                required: true,
                isPsw: true
            },
            confirm_password: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            telphone: {
                required: "请输入手机号",
                rangelength: jQuery.format("请输入正确的手机号码"),
            },
            vcode: {
                required: "请输入验证码",
                rangelength: jQuery.format("请输入六位数字的短信验证码"),
            },
            password: {
                required: "请输入密码",
                rangelength: jQuery.format("密码为6~18个大小写英文字母、符号或数字组合"),
            },
            confirm_password: {
                required: "请再次输入密码",
                rangelength: jQuery.format("请再次确认密码"),
                equalTo: "两次输入密码不一致"
            }
        }
    });
}
// });
