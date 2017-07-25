var TabBlock = {
  s: {
    animLen: 200
  },
  
  init: function() {
    TabBlock.bindUIActions();
    TabBlock.hideInactive();
  },
  
  bindUIActions: function() {
    $('#jsq .timeBtn:eq(0),#djs .timeBtn:eq(0)').on('click', function(){
      
		//var index =$(this).index()==1?0:1;
		TabBlock.switchTab($(this));
		
		//$('.progress-button').eq(index).find(":button:eq(3)").trigger("click");
		//切换全重置
				EndTime = new Date();
				clearTimeout(se1);	
				clearInterval(se);ss=1;m=s=0;
				
				/*$('.tabBlock-pane span[id$="time1"]').html("00 : 00 : 00").removeClass("timeInit");
				$('.tabBlock-pane span[id$="time2"]').removeClass("timeInit").html("10 : 00 : 00");*/
				$("#time1").html("00 : 00 : 00").removeClass("timeInit");
				//$("#time2").removeClass("timeInit").html("10 : 00 : 00");
				$('.djsTime').removeClass("timeInit").html("00").eq(0).html(10);
				$("#jsq .timeBtn:eq(1)").prop("name","start").html("开始");
				$("#jsq .timeBtn:eq(2)").prop("name","pause").html("暂停");
				$("#djs .timeBtn:eq(1)").prop("name","zdy").html("自定义");
				$("#djs .timeBtn:eq(2)").prop("name","start").html("开始");
				
				$("#djs .timeBtn:eq(3)").prop("name","pause").html("暂停");
    });
  },
  
  hideInactive: function() {
    var $tabBlocks = $('.tabBlock');
    
    $tabBlocks.each(function(i) {
      var 
        $tabBlock = $($tabBlocks[i]),
        $panes = $tabBlock.find('.tabBlock-pane'),
        $activeTab = $tabBlock.find('.tabBlock-tab.is-active');
      
      $panes.hide();
      $($panes[$activeTab.index()]).show();
    });
  },
  
  switchTab: function($tab) {
	 var index =$tab.attr("control")=="jsq"?1:0;
	/* if(index==1)
	 {
		 $tab.attr("control","djs").html("倒计时");
	 }
	 else
	 {
		 $tab.attr("control","jsq").html("计时器");
	 }*/
	/*var control=index ==1?"djs":"jsq";
	$tab.attr("control",control);*/
    var $context = $tab.closest('.tabBlock');
	
    TabBlock.showPane(index, $context);
   /* if (!$tab.hasClass('is-active')) {
      $tab.siblings().removeClass('is-active');
      $tab.addClass('is-active');
   
      TabBlock.showPane($tab.index(), $context);
    }*/
   },
  
  showPane: function(i, $context) {
    var $panes = $context.find('.tabBlock-pane');
   	
    // Normally I'd frown at using jQuery over CSS animations, but we can't transition between unspecified variable heights, right? If you know a better way, I'd love a read it in the comments or on Twitter @johndjameson
    $panes.slideUp(TabBlock.s.animLen);
    $($panes[i]).slideDown(TabBlock.s.animLen);
  }
};

$(function() {
  TabBlock.init();
});