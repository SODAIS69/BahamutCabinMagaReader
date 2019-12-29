// ==UserScript==
// @name        巴哈姆特 - 小屋漫畫連載閱讀器
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       naruto861214@巴哈姆特
// @match        https://home.gamer.com.tw/creationDetail.php?sn=*
// @require  http://code.jquery.com/jquery-3.4.1.min.js
// @grant GM_addStyle
// @compatible        chrome
// ==/UserScript==





GM_addStyle ( `
#replys {
margin-top:49px;
background-color:#e6e6e3 !important;
height:2200px;
overflow:auto;
}
.nextarticle{
background-color:#f2e15b!important;
padding:5px;
color:black!important;

}
.nextarticle:hover{
background-color:#ffef71!important;
}
.nextarticle a{
color:black!important;
text-decoration:none;
}
.MSG-box2{
border-bottom: 1px solid;

}
.msgreport{
width:unset;
}
` );

(function() {
    'use strict';
    //判定文章作者是否為jiangou
    if($('.TS1  .msghead.gamercard').attr('data-gamercard-userid')!='jiangou'){
        return;
    }

    //找到上下一話
    var $table='';
    $('.MSG-list8C').find('a').each(
        function(a,b){
            //var  $compare=$(b).find('b').text();
            var $compareLast=$(b).text();


            if(($compareLast=='下一話')||($compareLast=='上一話')){
                $(b).closest('div') .addClass('nextarticle');
                $(b).closest('table') .attr('border','0');

                $(b).attr('target','_self');
            }else{return;}

            if($compareLast=='下一話'){
                $table=$(b).closest('table').parent().closest('table').clone();
            }



        });
    var $reply=$('#replys');
    $('.BH-slave_btns').append($reply) ;

    //調整replys高度
    var $height=$('.MSG-list8').outerHeight(true)-$('.MSG-list8F').height();
    $('#replys').height($height);

    //加入按鈕
    $('#replys').prepend($table) ;
    var $table2=$table.clone();
    $('#replys').after($table2) ;




})();