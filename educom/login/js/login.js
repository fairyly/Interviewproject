$(function() {
    $('body')
        //输入框获得焦点
        .on('focus', '.J-ipt', function() {
            $(this).parent().addClass('active');
        })
        .on('blur', '.J-ipt', function() {
            $(this).parent().removeClass('active');
        })
        //触发键盘显隐
        .on('click', '.J-keyboard', function(event) {

            $('.J-keyboard').not(this).removeClass('active');
            $(this).siblings('input').focus();
            $(this).toggleClass('active');

            if ($(this).hasClass('active')) {
                $('#keyboard').addClass('show');
            } else {
                $('#keyboard').removeClass('show');
            }
            event.stopPropagation();
        })
        //键盘阻止冒泡
        .on('click', '#keyboard', function(event) {

            event.stopPropagation();
        })
        //点击屏幕键盘消失
        .on('click', function() {
            $('.J-keyboard').removeClass('active');
            $('#keyboard').removeClass('show');

        })
        //获取验证码按钮事件
        .on('click', '#J-btnVcode', function() {
            $(this).val('60s');
            var o = $('#J-btnVcode');
            countSec(o, 60);
        })
        //注册页--判断是否通过验证，如果是，没有打钩同意协议，即弹出协议
        .on('click', '#J-btnRegist', function() {
            if (validform().form()) {
                if (!$('input[name="read"]').is(':checked')) {
                    $('#J-agree').show();
                    return false;
                }
            }

        })
        .on('click', '#J-read', function() {
            $('#J-agree').show();
        })
        // 关闭协议事件
        .on('click', '#J-close', function() {
            $('#J-agree').hide();
        })
        //同意协议按钮事件
        .on('click', '#J-btnAgree', function() {
            $('#J-agree').hide();
            $('#J-agreeTarget').attr('checked', 'checked');

        })
        //初始化表单验证
    validform();

})

//倒计时（只针对登陆注册等几个页面特殊封装)
function countSec(obj, sec, url) {
    var leftsecond = sec;
    var bTarget = obj.get(0).tagName == 'INPUT';
    if (bTarget) {
        $(obj).attr("disabled", true);
    }
    interVal = setInterval(function() {
        leftsecond--;
        var oSec = document.getElementById('countSec');
        if (bTarget) {
            $(obj).val(leftsecond + 's');
        } else {
            $(obj).html(leftsecond);
        }
        if (leftsecond <= 0) {
            if (bTarget) {

                $(obj).attr("disabled", false).val('重新发送');
            }
            clearInterval(interVal);
            if (url) {
                window.location.href = url;
            }
        }
    }, 1000);
}

//keyboard
function init() {
    // Note: all parameters, starting with 3rd, in the following
    // expression are equal to the default parameters for the
    // VKeyboard object. The only exception is 18th parameter
    // (flash switch), which is false by default.

    vkb = new VKeyboard("keyboard", // container's id
        keyb_callback, // reference to the callback function
        false, // create the arrow keys or not? (this and the following params are optional)
        true, // create up and down arrow keys? 
        false, // reserved
        false, // create the numpad or not?
        "", // font name ("" == system default)
        "20px", // font size in px
        "#b5d8fb", // font color
        "#F00", // font color for the dead keys
        "#FFF", // keyboard base background color
        "#FFF", // keys' background color
        "#DDD", // background color of switched/selected item
        "#b5d8fb", // border color
        "#CCC", // border/font color of "inactive" key (key with no value/disabled)
        "#FFF", // background color of "inactive" key (key with no value/disabled)
        "#b5d8fb", // border color of the language selector's cell
        true, // show key flash on click? (false by default)
        "#CC3300", // font color during flash
        "#FF9966", // key background color during flash
        "#CC3300", // key border color during flash
        false, // embed VKeyboard into the page?
        true, // use 1-pixel gap between the keys?
        0); // index(0-based) of the initial layout

    // 'field1' is "focused" by default:
    source = document.getElementById("password");

    register_field("password");
    register_field("confirm_password");
    // register_field("field3");

    source.focus();
}
