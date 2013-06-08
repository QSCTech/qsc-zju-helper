var navi="<div id=\"qscnavi_top\"><div id=\"qscnavi_top-content\"><div id=\"qscnavi_top-nav\"><ul><li><a href=\"http://www.qsc.zju.edu.cn\">求是潮</a></li><li><a>|</a></li><li><a href=\"http://www.qsc.zju.edu.cn/apps/qanda\">党校在线答题</a></li><li><a href=\"http://www.qsc.zju.edu.cn/share\">Share学习交流平台</a></li><li><a href=\"http://www.qsc.zju.edu.cn/apps/notice\">Notice活动发布平台</a></li><li><a href=\"http://m.myqsc.com/get/\">Mobile手机站</a></li><li><a href=\"http://box.myqsc.com/\">Box云优盘</a></li><li><a href=\"http://app.myqsc.com/voice/\">Voice求是好声音</a></li><li><a href=\"https://passport.myqsc.com/\">求是潮通行证</a></li></ul></div></div></div>";
var img_url=chrome.extension.getURL("icons/navi_logo_open.png");
var flip_open="<div id=\"qscnavi_flip_open\"><img src=\""+img_url+"\"/></div>";
var img_url=chrome.extension.getURL("icons/navi_logo_off.png");
var flip_off="<div id=\"qscnavi_flip_off\"><img src=\""+img_url+"\"/></div>";

$("body").prepend(navi);
$("body").prepend(flip_open);
$("body").prepend(flip_off);

$(window).scroll(function (){
	var offsetTop = $(window).scrollTop()+"px";
	$("#qscnavi_flip_open").animate({top: offsetTop }, { duration:300, queue:false });
	$("#qscnavi_flip_off").animate({top: offsetTop }, { duration:300, queue:false });
	$("#qscnavi_top").animate({top: offsetTop }, { duration:300, queue:false });
});

$("#qscnavi_flip_open").click(function(){
	$("#qscnavi_top").slideToggle(500);
	$("#qscnavi_flip_open").toggle();
	$("#qscnavi_flip_off").toggle();
});	
$("#qscnavi_flip_off").click(function(){
	$("#qscnavi_top").slideToggle(500);
	$("#qscnavi_flip_open").toggle();
	$("#qscnavi_flip_off").toggle();
});	

