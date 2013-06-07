var navi="<div id=\"qscnavi_top\"><div id=\"qscnavi_top-content\"><div id=\"qscnavi_top-nav\"><ul><li><a href=\"http://www.qsc.zju.edu.cn\">求是潮</a></li><li><a>|</a></li><li><a href=\"http://www.qsc.zju.edu.cn/apps/qanda\">党校在线答题</a></li><li><a href=\"http://www.qsc.zju.edu.cn/share\">Share学习交流平台</a></li><li><a href=\"http://www.qsc.zju.edu.cn/apps/notice\">Notice活动发布平台</a></li><li><a href=\"http://m.myqsc.com/get/\">Mobile手机站</a></li><li><a href=\"http://box.myqsc.com/\">Box云优盘</a></li><li><a href=\"http://app.myqsc.com/voice/\">Voice求是好声音</a></li><li><a href=\"https://passport.myqsc.com/\">求是潮通行证</a></li></ul></div></div></div>";
$("body").prepend(navi);

var flip="<div id=\"qscnavi_flip\"><p>求是潮logo（点我）</p></div>";
$("body").prepend(flip);

$(document).ready(function(){
$("#qscnavi_flip").click(function(){
    $("#qscnavi_top").slideToggle("slow");
  });
});