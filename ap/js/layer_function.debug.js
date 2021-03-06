/****************
 * Common Class *
 ****************/

var VendorDevice, LineTab, SelectBox, LayerPopup, CalendarPopup, ShowHide;

$(function(){

  /**
   * VendorDevice Class
   */

  VendorDevice = new function(){

    var ua = navigator.userAgent;

    var checkMobile = function(){
      if(ua.indexOf('Mobile') != -1){
        $('html').addClass('mobile');
      }
    };

    var checkBrowser = function(){

      if(ua.toLowerCase().indexOf('safari') != -1){

        if(ua.toLowerCase().indexOf('chrome') != -1){
          $('html').addClass('chrome');
        } else {
          $('html').addClass('safari');
        }

      } else if(ua.toLowerCase().indexOf('firefox') != -1){
        $('html').addClass('firefox');

      } else if(ua.toLowerCase().indexOf('msie 9.0') != -1){
        $('html').addClass('ie ie9');

      } else if(ua.toLowerCase().indexOf('msie 10.0') != -1){
        $('html').addClass('ie ie10');

      } else if(ua.toLowerCase().indexOf('rv:11.0') != -1){
        $('html').addClass('ie ie11');

      }
    };

    var checkOS = function(){

      if( ua.toLowerCase().indexOf('os x') != -1 ){

      }

    };

    checkMobile();
    checkBrowser();

  };

  /**
   * LineTab Class
   */

  LineTab = new function(){

    var tabWidth = 0;

    var calcTabWidth = function( $currentTab, findClass ){

      //if ($('html').hasClass('mobile')) {

        //tabWidth = 100 / Math.ceil( $currentTab.find(findClass).length / 2 );

      //} else {

        tabWidth = 100 / $currentTab.find(findClass).length;

      //}

    };

    var setTabWidth = function( $currentTab, findClass ){

      $currentTab.find(findClass).css({
        width: tabWidth + '%'
      });

    };

    var setTabPosition = function( $currentTab, findClass ){

      $currentTab.find(findClass).each(function(i){
        $(this).css({
          left : (i * tabWidth) + '%'
        });
      });

    };

    var setTab = function( $tabWrap ){

      if( $tabWrap.hasClass('tab-nav') ){

        $tabWrap.each(function() {

          calcTabWidth( $(this), '.tab-nav-list-item' );

          setTabWidth( $(this), '.tab-nav-list-item' );

        });

      } else {

        $tabWrap.each(function() {

          calcTabWidth( $(this), '.tab-area-heading' );
          setTabWidth( $(this), '.tab-area-heading' );
          setTabPosition( $(this), '.tab-area-heading' );

        });

      }

    };

    setTab( $('.tab-nav') );
    setTab( $('.tab-area') );

  };

  /**
   * SelectBox Class
   */

  SelectBox = new function(){

    this.toggleSelectList = function( $this ){
      $this.toggleClass('on');
      $this.next('.select-list').toggleClass('on');
    };

    this.afterClickList = function( $this ){
      $this.parents('.select-list').removeClass('on');
      $this.parents('.select-list').prev('.select-link-default').removeClass('on');
    };

    this.hideList = function(e){

      var container = $('.select-list');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('on');
        $('.select-link-default').removeClass('on');
      }

    };

  };

  /**
   * LayerPopup Class
   */

  LayerPopup = new function(){

    var $layerWrap = $('.layer-wrap');
    $('.layer').data('set', false);

    this.openPopup = function( $popupName ){

      $('html, body').addClass('open-layer');
      $layerWrap.addClass('on');
      $popupName.addClass('on');

    };

    this.closePopup = function( $popupName ){

      $('html, body').removeClass('open-layer');
      $layerWrap.removeClass('on');
      $popupName.removeClass('on');

    };

    this.nextPopup = function( $currentPopup, $nextPopup ){

      $currentPopup.removeClass('on');
      $nextPopup.addClass('on');

    };

    this.setPopupHeight = function(){

      var winHeight = $(window).height();

      if( $('.layer').hasClass('system') ){

        var winHeightHalf = winHeight/2;

        $('.layer.system').each(function(){

          $(this).css({height:winHeightHalf});
          $(this).find('.systemico').css({height:(winHeightHalf - 160)});

        });

      } else {

        $('.layer').each(function(){

          if( $(this).find('.layer-area').outerHeight() >= winHeight ){

            $(this).css({height:winHeight*0.96});

          } else {

            $(this).css({height:'auto'});

          }

        });

      }

    };

  };

  /**
   * CalendarPopup Class
   */

  CalendarPopup = new function(){

    this.loadDatePicker = function(){

      var $setDateInput = $('.timesetting-date-day');

      // set datepicker when loading
      if( $setDateInput.length != 0 ){

        if( $setDateInput.hasClass('js-from-input') ){

          $('.js-from-input').datepicker({
            showMonthAfterYear : true,
            showOtherMonths : true,
            selectOtherMonths : true,
            dateFormat: "yy.mm.dd",

            prevText : 'p',
            nextText : 'n',
            dayNames : ['월', '화', '수', '목', '금', '토', '일' ],
            dayNamesMin : ['월', '화', '수', '목', '금', '토', '일' ],
            dayNamesShort : ['월', '화', '수', '목', '금', '토', '일' ],
            monthNames : ['. 1', '. 2', '. 3', '. 4', '. 5', '. 6', '. 7', '. 8', '. 9', '. 10', '. 11', '. 12']
          });

          $('.js-to-input').datepicker({
            showMonthAfterYear : true,
            showOtherMonths : true,
            selectOtherMonths : true,
            dateFormat: "yy.mm.dd",

            prevText : 'p',
            nextText : 'n',
            dayNames : ['월', '화', '수', '목', '금', '토', '일' ],
            dayNamesMin : ['월', '화', '수', '목', '금', '토', '일' ],
            dayNamesShort : ['월', '화', '수', '목', '금', '토', '일' ],
            monthNames : ['. 1', '. 2', '. 3', '. 4', '. 5', '. 6', '. 7', '. 8', '. 9', '. 10', '. 11', '. 12']
          });

        } else {

          $setDateInput.datepicker({
            showMonthAfterYear : true,
            showOtherMonths : true,
            selectOtherMonths : true,
            dateFormat: "yy.mm.dd",

            prevText : 'p',
            nextText : 'n',
            dayNames : ['월', '화', '수', '목', '금', '토', '일' ],
            dayNamesMin : ['월', '화', '수', '목', '금', '토', '일' ],
            dayNamesShort : ['월', '화', '수', '목', '금', '토', '일' ],
            monthNames : ['. 1', '. 2', '. 3', '. 4', '. 5', '. 6', '. 7', '. 8', '. 9', '. 10', '. 11', '. 12']
          });

        }
      }

    };

    this.showDatePicker = function($this, type){

      $this.datepicker(type);

    };

    this.loadDatePicker();

  };

  /**
   * ShowHide Class
   */

  ShowHide = new function(){

    this.showHideContent = function(showType, indexNum, $tableNode){

      console.log(1);

      if(showType){
        $tableNode.eq(indexNum).addClass('on');
      } else {
        $tableNode.eq(indexNum).removeClass('on')
      }

    };

    this.hideAllContent = function( $tableNode ){

      $tableNode.removeClass('on');

    };

  };

});





/********************
 * Common Execution *
 ********************/

$(function(){
  //scroll tab


  (function(){
    //$('.local-list.tab-half').wrap('<div class="tab-scroll-x" />');

    $(window).on('resize', function(){

      if( $('.local').width() >= 858 ){

        $('.local-list-item').css({width : ($('.local-list').width() / $('.local-list-item').length )});
        $('.local-list').css({width : 'auto'});

      } else {
        $('.local-list-item').outerWidth(78);
        $('.local-list').width( $('.local-list-item').outerWidth() * $('.local-list-item').length );

      }
    });
  })();

  /**
   * 날짜 선택
   */

  (function(){

    $('.timesetting-date-calendar').on('click', function(){

      CalendarPopup.showDatePicker($(this), 'show');

    });

    $('body').on('click', '.js-from-button', function(){

      CalendarPopup.showDatePicker($(this), 'show');

    });

    $('body').on('click', '.js-to-button', function(){

      CalendarPopup.showDatePicker($(this), 'show');

    });

  })();

  /**
   * 셀렉트 리스트
   */

  (function(){

    $('.select-link-default').data('open', false).on('click', function(){

      if( !$(this).data().open ){
        SelectBox.toggleSelectList( $(this) );
      } else {
        SelectBox.hideList(e);
      }

    });

    $('.select-list .select-list-link').on('click',function(){

      SelectBox.afterClickList( $(this) );

    });

  })();

  /**
   * 필터
   */

  (function(){

    $('.filter .filter-brand-search-btn').on('click', function(){
      $(this).toggleClass('on');
      $(this).parents('.filter').toggleClass('on');
    });

    $('.filter .base-close').on('click', function(){
      $(this).parents('.filter').removeClass('on');
    });

    $('.filter .filter-option').on('click', function(){
      $(this).toggleClass('on');
      $(this).next('.filter-service-field').toggleClass('on');
      //$(this).next('.filter-service-field').toggleClass('off');
    });

  })();

  /**
   * 탭
   */

  (function(){

    $('.tab-area-heading').on('click', function(){

      $(this).siblings('.tab-area-heading').removeClass('on').next('.tab-area-content').removeClass('on');

      $(this).addClass('on').next('.tab-area-content').addClass('on')

    });

    $('.btn-type-tab').on('click', function(){

      $(this).siblings('.btn-type-tab').removeClass('on');

      $(this).addClass('on');

    });

  })();
  (function(){

    $('.tab-area-heading').on('click', function(){

      $(this).siblings('.tab-area-heading').removeClass('on').next('.tab-area-content').removeClass('on');

      $(this).addClass('on').next('.tab-area-content').addClass('on')

    });

    $('.btn-type-tab').on('click', function(){

      $(this).siblings('.btn-type-tab').removeClass('on');

      $(this).addClass('on');

    });

  })();

  /**
   * 레이어 팝업
   */

  (function(){

    $(window).on('resize', function(){

      LayerPopup.setPopupHeight();

    });

    $('body').on('click', function(){

      if( $('.layer-wrap').hasClass('on') ){

        LayerPopup.setPopupHeight();

      }

    });

  })();

});



/***************
 * Layer Class *
 ***************/

var MobileGnb, ArrangeBusStop;

$(function(){

  /**
   * MobileGnb
   */

  MobileGnb = new function(){

    this.mobileOnOffMenu = function( type ){

      if(type=='on'){
        $('.header').animate({left:0},350);
        $('.mobile-header').addClass('active');
        //$('body').on('scroll touchmove mousewheel', function(e){
        //  event.preventDefault();
        //  event.stopPropagation();
        //  return false;
        //});
        $('body').addClass('scrollfix');

      } else {
        $('.header').animate({left: -100 + '%'},350);
        $('.mobile-header').removeClass('active');
        $('body').removeClass('scrollfix');
        //$('body').off('scroll touchmove mousewheel');
      }

    };

  };

  /**
   * ArrangeBusStop
   */

  ArrangeBusStop = new function(){

    var busStop = {

      $node : $('.route-bus-line-list > .route-bus-line-list-article'),

      allNumber : $('.route-bus-line-list > .route-bus-line-list-article').length,

      topNumber : 0,

      bottomNumber : 0,

      topGap : 0,

      bottomGap : 0

    };

    this.setArrange = function(){

      busStop.topNumber = Math.ceil(busStop.allNumber / 2);
      busStop.bottomNumber = busStop.allNumber - busStop.topNumber;
      busStop.topGap = 100 / (busStop.topNumber - 1);
      busStop.bottomGap = 100 / (busStop.bottomNumber - 1);

      for(var i=0; i<busStop.topNumber; i++){

        busStop.$node.eq(i).addClass('top').css({
          left: busStop.topGap * i + '%'
        });

      }

      for(var j=0; j<busStop.bottomNumber; j++ ){

        busStop.$node.eq(j + busStop.topNumber).addClass('bottom').css({
          left: busStop.bottomGap * j + '%'
        });

      }

    };

    this.setBusStopPosition = function(){

      $('.bus-stop-index').each(function(i){
        $('.route-bus-stop-ico-box').append('<p class="exit exit-' + $(this).text() + '">' + $(this).text() + '번 출구</p>')
      });

    };

    this.setArrange();

    this.setBusStopPosition();

  };

});

/*******************
 * Layer Execution *
 *******************/

$(function(){

  (function(){

    var $html = $('html');
    var lang = $html.attr('lang');


    switch(lang){

      case 'ko' :
        $html.addClass('ko');
        break;

      case 'en' :
        $html.addClass('en');
        break;

      case 'ch' :
        $html.addClass('ch');
        break;

      case 'ja' :
        $html.addClass('ja');
        break;

    }

  })();

  // window close
  (function(){

    $('.lp-close').on('click', function(e){

      e.preventDefault();

      if( $(this).parents('html').attr('class').indexOf('ie') != -1 ){
        window.open('','_self').close()
      } else {
        window.close();
        self.close();
        window.opener = window.location.href;
        self.close();
        window.open('about:blank','_self').close();
      }

    });

  })();

  // header lnb index check
  (function(){

    var gnbLinkIndex = $('.gnb-link').index( $('.gnb-link.on') );

    $('.header').addClass('sub' + (gnbLinkIndex+1) );

  })();

  // header action when mobile
  (function(){

    $('.layer-gnb-mobile-btn').on('click',function(){
      MobileGnb.mobileOnOffMenu('on');
    });

    $('.layer-gnb-mobile-btn-close').on('click',function(){
      MobileGnb.mobileOnOffMenu('off');
    });

    $(window).on('resize', function(){
      var widthSize = window.outerWidth;
      if (widthSize <= 780) {
        $('.header').animate({left: -100 + '%'},0);
        $('.mobile-header').removeClass('active');
      } else if (widthSize > 780) {
        $('.header').animate({left:0},0);
      }
    }).resize();

  })();

  // time table show/hide
  (function(){

    $('.maglev-train-line-list-article-link').on('click', function(){

      var $tableNode = $('.maglev-train-line-time-table');

      ShowHide.hideAllContent( $tableNode );

      var indexNum = $(this).index('.maglev-train-line-list-article-link');

      ShowHide.showHideContent(true, indexNum, $tableNode);

    });

  })();

  // map scroll overflow div add
  //(function(){
  //
  //  $('.imgbox').wrap('<div class="imgbox-extend" />');
  //
  //})();



  // 공항지도 이벤트
  (function(){

    $('.search-map-box-level2').on('click', function (e) {
      e.preventDefault();
      $(this).addClass('on').parent().siblings().children().removeClass('on');
    });

    $('.search-map-box-level3').on('click', function (e) {
      e.preventDefault();
      $(this).addClass('on').parent().siblings().children().removeClass('on');
    });

    $('.search-map-control').data('open', true).on('click', function (e) {
      e.preventDefault();

      if( $(this).data().open ){
        $('.search-map-clear').addClass('on');
        $(this).data('open', false);
      } else {
        $('.search-map-clear').removeClass('on');
        $(this).data('open', true);
      }
    });



    $('.map-full-screen').data('full', false).on('click', function(){

      if( !$(this).data().full ){

        $(this).addClass('full-screen').attr('title', '전체화면 종료');

        $('.header.airport-services').addClass('full-screen');

        $('.contents').addClass('full-screen');

        $('.inner-contents').addClass('full-screen');

        $('.search-map-contents').addClass('full-screen');

        $('.search-map-clear').addClass('full-screen on');
        $('.search-map-control').data('open', false);
        $('.header').addClass('full-screen');

        $(this).data('full', true);

      } else {

        $(this).removeClass('full-screen').attr('title', '전체화면');

        $('.header.airport-services').removeClass('full-screen');

        $('.contents').removeClass('full-screen');

        $('.inner-contents').removeClass('full-screen');

        $('.search-map-contents').removeClass('full-screen');

        $('.search-map-clear').removeClass('full-screen on');
        $('.search-map-control').data('open', true);
        $('.header').removeClass('full-screen');

        $(this).data('full', false);

      }



    });

  })();

});