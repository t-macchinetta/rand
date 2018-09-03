$(function () {

    // 変数の宣言
    var startBtn = $('#start');
    var isStart = false;
    // var roulette = $('#roulette');
    var result = 0;
    var roulette = -1;
    var min = 0;
    var max = 0;

    // スタート時の関数
    function clickedStart() {
        // stringで取得するので数値に変換
        min = Number($('#min').val());
        max = Number($('#max').val());
        // 型の確認用
        // 'use strict';
        // alert(typeof min);
        // alert(typeof max);

        // 最大値のほうが大きくないときは罵倒する
        if (min >= max) {
            alert("最小と最大の意味もわからんのか！！");
        } else {
            // ストップボタンに切り替え
            isStart = true;
            $('#start').addClass('none');
            $('#stop').removeClass('none');
            roulette = setInterval(function () {
                if (isStart == true) {
                    result = Math.floor(Math.random() * (max - min + 1)) + min;
                    $("#result").text(result);
                }
            }, 50);
        }
    }

    // ストップ時の関数
    function clickedStop() {
        // 停止
        clearTimeout(roulette);
        // スタートボタンに切り替え
        $('#stop').addClass('none');
        $('#start').removeClass('none');
        isStart = false;
        // 結果を画面に表示
        $("#result").text(result);
    }

    // スタートボタン押下時
    $('#start').on('click', function () {
        clickedStart();
    });

    // ストップボタン押下時
    $('#stop').on('click', function () {
        clickedStop();
    });

});