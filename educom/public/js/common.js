$(function() {
    $('body')
        //关闭弹窗事件
        .on('click', '.J-close,.J-btnCfm', function() {
            $(this).parents('.J-layer').hide();
        })
})
