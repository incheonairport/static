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

      }

      if(ua.toLowerCase().indexOf('firefox') != -1){
        $('html').addClass('firefox');
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

      if ($('html').hasClass('mobile')) {

        //tabWidth = 100 / Math.ceil( $currentTab.find(findClass).length / 2 );
        tabWidth = 100 / $currentTab.find(findClass).length;

      } else {

        tabWidth = 100 / $currentTab.find(findClass).length;

      }

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

    }

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

});



/**************
 * Base Class *
 **************/

var Index, HeaderGnb, MainVisual, BottomBanner, Zoom;

$(function(){

  /**
   * Index Class( Parent Class )
   */

  Index = function(){

    this.$mainVisualItem = $('.main-visual-item');
    this.currentMainSectionIndex = 0;
    this.easingType = 'easeInOutExpo';

  };

  /**
   * HeaderGnb Class
   */

  HeaderGnb = new function(){

    Index.apply(this);

    this.mobileHeaderInit = function(){

      $('.header-util-cs').insertBefore('.gnb-depth1');

      $('.header-util-lang').insertAfter('.gnb-depth1');

      $('.header-site').insertAfter('.gnb-depth1');

      $('.scroll-amount').insertBefore('.header-util');

      $('.header-search-item.gnb-search .header-search-input').addClass('mobile-none');
      $('.header-search-item.gnb-search .header-search-close').removeClass('mobile-none');

      if( $('.gnb-mobile-btn').length <= 0 ){
        $('.header').append('<button type="button" class="gnb-mobile-btn btn-gnb"><span>주메뉴 열기</span></button>');
      }

      if( $('.quick-toggle').length <= 0 ){
        $('.quick').append('<button type="button" class="quick-toggle"><span>퀵메뉴 열기</span></button>');
      }

      if( $('.gnb-mobile-btn-close').length <= 0){
        $('.gnb').append('<button type="button" class="gnb-mobile-btn-close">닫기</button>');
      }

    };

    this.pcHeaderInit = function(){

      $('.header-util-cs').appendTo( $('.header-util') );

      $('.header-util-lang').appendTo( $('.header-util') );

      $('.header-site').prependTo( $('.header') );

      $('.scroll-amount').insertAfter('.header-search');

      //$('.header-search-item.gnb-search').appendTo($('.header-search'));

      $('.gnb-mobile-btn').remove();
      $('.gnb-mobile-btn-close').remove();
      $('.quick-toggle').remove();

    };

  };

  /**
   * MainVisual Class
   */

  MainVisual = new function(){

    Index.apply(this);

    // private
    var currentVisualIndex = 0;
    var nextVisualIndex = 0;

    var $visualItem = this.$mainVisualItem;
    var easingType = this.easingType;

    var $pageItem;

    var timeID, timeID2;
    var imageMovingTime = 1000;
    var imageIntervalTime = 7000;
    var barStretchTime = 10;

    // private
    var _initPaging = function(){

      var $paging = $('<ul class="paging-visual"></ul>');

      $('.main-visual-control-paging').prepend($paging);

      for(var i=0; i<$visualItem.length; i++){
        $paging.append('<li class="paging-item"><div class="paging-link">' + (i+1) + '</div></li>');
      }

      $pageItem = $('.paging-item');
      $pageItem.removeClass('on');
      $pageItem.eq(0).find('.paging-link').addClass('on');

    };

    var _initPosition = function(){

      $visualItem.hide().eq(0).show();

    };

    var _init = function(){

      _initPosition();

      _initPaging();

      _timeBar(true);

      setTimeout(function(){
        _textMotion();
      }, 1000);

    };

    var _textMotion = function(){

      $visualItem.eq(currentVisualIndex).find('.visual-text').eq(0).stop().animate({
        opacity:1,
        left:0
      }, 1000, 'easeOutCubic')
          .delay(4000)
          .queue(function(next){
            $(this).stop().animate({
              opacity:0,
              left:-20
            }, 500);
            next();
          });

      $visualItem.eq(currentVisualIndex).find('.visual-text').eq(1).stop().delay(300).animate({
        opacity:1,
        right:0
      }, 1000, 'easeOutCubic')
          .delay(4000)
          .queue(function(next){
            $(this).stop().animate({
              opacity:0,
              right:-20
            }, 500);
            next();
          });

      $visualItem.eq(currentVisualIndex).find('.visual-text').eq(2).stop().delay(600).animate({
        opacity:1,
        left:0
      }, 1000, 'easeOutCubic')
          .delay(4000)
          .queue(function(next){
            $(this).stop().animate({
              opacity:0,
              left:-20
            }, 500);
            next();
          });

    };

    var _timeBar = function(auto){

      clearInterval(timeID2);

      var barStretch = 0;
      var unitLength = 100 / ( imageIntervalTime / barStretchTime );

      $('.paging-link.on').css({height:(100 - barStretch) + '%'});

      if(auto){

        timeID2 = setInterval(function(){
          $('.paging-link.on').css({height:(100 - barStretch) + '%'});
          barStretch += unitLength;
        }, barStretchTime);

      }

    };

    var _setPlayButtonClass = function(status){
      $('.main-visual-control-paging .play-button').attr('class', 'play-button').addClass(status);
    };

    // public
    this.fade = function(){

      if( nextVisualIndex >= $visualItem.length ){

        nextVisualIndex = 0;

      } else if( nextVisualIndex <= -1 ){

        nextVisualIndex = $visualItem.length-1;

      }

      $visualItem.eq(currentVisualIndex).stop().fadeOut(imageMovingTime, easingType);
      $visualItem.eq(nextVisualIndex).stop().fadeIn(imageMovingTime, easingType, function(){
        _textMotion();
      });

      $pageItem.find('.paging-link').removeClass('on');
      $pageItem.eq(nextVisualIndex).find('.paging-link').addClass('on');

      currentVisualIndex = nextVisualIndex;

    };

    this.rollAuto = function(){

      var _fade = this.fade;

      timeID = setInterval(function(){

        nextVisualIndex = currentVisualIndex + 1;
        _fade();

        _timeBar(true);

        //HeaderGnb.setClass(HeaderGnb.getCurrentMainSectionIndex(), nextVisualIndex);

      }, imageIntervalTime);

      _setPlayButtonClass('pause');

    };

    this.rollLeft = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex + 1;
      this.fade();
      _timeBar(false);

      //HeaderGnb.setClass(HeaderGnb.getCurrentMainSectionIndex(), nextVisualIndex);

    };

    this.rollRight = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex - 1;
      this.fade();
      _timeBar(false);

      //HeaderGnb.setClass(HeaderGnb.getCurrentMainSectionIndex(), nextVisualIndex);

    };

    this.rollStop = function(){

      // stop rolling
      clearInterval(timeID);

      // stop time bar
      clearInterval(timeID2);

      _setPlayButtonClass('play');

    };

    this.checkAnimate = function(){

      return this.$mainVisualItem.is(':animated');

    };

    this.getNextVisualIndex = function(){

      return nextVisualIndex;

    };

    // running in constructor when loading
    _init();
    this.rollAuto();

  };

  /**
   * BottomBanner Class
   */

  BottomBanner = new function(){

    // private
    var currentVisualIndex = 0;
    var nextVisualIndex = 0;

    var $visualItem = $('.main-banner-img-inner');
    var easingType = this.easingType;

    var $pageItem;

    var timeID, timeID2;
    var imageMovingTime = 1000;

    // private
    var _initPosition = function(){

      $visualItem.hide().eq(0).show();

    };

    var _init = function(){

      _initPosition();

    };

    var _setPlayButtonClass = function(status){
      $('.main-visual-control-paging .play-button').attr('class', 'play-button').addClass(status);
    };

    // public
    this.fade = function(){

      if( nextVisualIndex >= $visualItem.length ){

        nextVisualIndex = 0;

      } else if( nextVisualIndex <= -1 ){

        nextVisualIndex = $visualItem.length-1;

      }

      $visualItem.eq(currentVisualIndex).stop().fadeOut(imageMovingTime, easingType);
      $visualItem.eq(nextVisualIndex).stop().fadeIn(imageMovingTime, easingType);

      //$pageItem.find('.paging-link').removeClass('on');
      //$pageItem.eq(nextVisualIndex).find('.paging-link').addClass('on');

      currentVisualIndex = nextVisualIndex;

    };

    this.rollLeft = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex + 1;
      this.fade();

    };

    this.rollRight = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex - 1;
      this.fade();

    };

    this.rollStop = function(){

      // stop rolling
      clearInterval(timeID);

      // stop time bar
      clearInterval(timeID2);

      _setPlayButtonClass('play');

    };

    this.checkAnimate = function(){

      return this.$mainVisualItem.is(':animated');

    };

    this.getNextVisualIndex = function(){

      return nextVisualIndex;

    };

    // running in constructor when loading
    _init();

  };

  /**
   * Zoom Class
   */

  Zoom = new function(){

    var size = 1.0;

    this.exec = function (v) {

      var currentSize = size;
      if (v == 0) {
        currentSize = 1.0;
      } else {
        currentSize += v * 0.1;
      }

      if (currentSize < 0.8 || currentSize > 3.0) {
        //alert(currentSize);
        return;
      } else {
        size = currentSize;
      }

      if ( !$('html').hasClass('ie') ) {
        $('body').css('-webkit-transform','scale(' + size + ')');
        $('body').css('-moz-transform','scale(' + size + ')');
        $('body').css('-o-transform','scale(' + size + ')');

        $('body').css('-webkit-transform-origin', '50% 0%');
        $('body').css('-moz-transform-origin', '50% 0%');
        $('body').css('-o-transform-origin', '50% 0%');
      } else {
        $('body').css('zoom', (size * 100) + '%');
        $('body').css('-ms-transform','scale(' + size + ')');
        $('body').css('-ms-transform-origin', '50% 0%');

        $('body')[0].filters.item(0).M11 *= 1.5;
        $('body')[0].filters.item(0).M12 *= 1.5;
        $('body')[0].filters.item(0).M21 *= 1.5;
        $('body')[0].filters.item(0).M22 *= 1.5;

        $('body').css('transform','scale(' + size + ')');
        $('body').css('transform-origin', '50% 0%');
      }

      if( size == 1 ){

        $('body').attr('style', '');

      }



    };

    //this.exec(1);

  };

});



/******************
 * Base Execution *
 ******************/

  // loading
(function(){

  setTimeout(function(){
    $('.loading-inner').removeClass('opacity');
  }, 1000);

  $(window).on('load', function(){
    setTimeout(function(){
      $('.loading').addClass('opacity').delay(1000).queue(function(){
        $(this).addClass('none');
      });
    }, 3000);

    if( $('*').hasClass('before-load') ){
      $('*').removeClass('before-load');
    }

  })

})();

$(function(){

  // 공사 메인 탭 모바일
  (function(){
    var windowSize = $(window).outerWidth();

    if( $('html').hasClass('mobile') || windowSize <= 1024){
      $('.main-section2-text-tit').addClass('on');
      $('.main-section2-text-tit').on('click',function(){
        $(this).toggleClass('on');
      });
    }

    if( $('html').hasClass('mobile') ){
      //$('.left-menu-depth1-item-link').removeClass('open');
      $('.left-menu-depth1-item-link').addClass('close');

    }




  })();

  /**
   * loading
   */

  var scrollHeight;

  $('.gnb').append('<div class="scroll-amount"></div>');

  // detect language
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

  // header set when resize/scroll
  (function(){

    $(window).on('resize', function(){

      scrollHeight = $('body').height() - $(window).height();

      if( $(window).outerWidth() > 1200 ){

        if( $('section.top-big-popup').length >= 0 ){
          $('section.top-big-popup').removeClass('mobile none');
        }

      } else {

        if( $('section.top-big-popup').length >= 0 ){
          $('section.top-big-popup').addClass('mobile');
        }

      }

      if( $(window).outerWidth() > 1200 ){

        HeaderGnb.pcHeaderInit();
        $('body').removeClass('mobile-menu-on');
        $('.gnb').removeClass('mobile-on mobile-off');
        $('.quick-menu-list').removeClass('quick-off quick-on');

        if( $(window).scrollTop() < 400 ){

          // when main
          if( $('section').hasClass('main-visual') && $('.top-popup').length > 0 ){

            $('html').addClass('main');

            // set top popup
            if( $('.top-popup').has('.top-popup-inner').length > 0 ){
              $('.top-popup').addClass('top-open');
              $('.header').addClass('top-open');
              $('.gnb').addClass('top-open');
              $('.total-search').addClass('top-open');
              $('.quick').addClass('top-open');
              $('.fullpage-wrapper').addClass('top-open');
              $('.top-popup-toggle').data('open', true).addClass('down');

              // header, gnb
              $('.header, .gnb').removeClass('fixed down bg');
            }


            // when sub
          } else {

            $('.top-popup').data('open', false);

          }

          if( $('section.top-big-popup').length > 0 ){

            $('.top-popup').addClass('top-big-open');
            $('.header').addClass('top-big-open');
            $('.gnb').addClass('top-big-open');
            $('.total-search').addClass('top-big-open');
            $('.quick').addClass('top-big-open');
            $('.top-popup-toggle').data('open', true).addClass('down');

          }

        }

      } else {

        $('.gnb-depth1-link').attr('href', '#');
        $('.header, .gnb').removeClass('fixed down').addClass('bg');
        $('.quick').removeClass('quick-in');

        HeaderGnb.mobileHeaderInit();
        $('.visual-text').removeClass('text-right text-left');

        $('.top-popup').removeClass('top-open top-big-open');
        $('.header').removeClass('top-open top-big-open');
        $('.gnb').removeClass('top-open top-big-open');
        $('.quick').removeClass('top-open top-big-open');
        $('.fullpage-wrapper').removeClass('top-open top-big-open');
        $('.top-popup-toggle').data('open', false).removeClass('down');

      }

    }).resize();

  })();

  /**
   * event
   */

  // Header 이벤트
  (function(){

    $('.gnb').on({

      'mouseleave' : function(){

        if( $(window).outerWidth() > 1024 ){
          //if( !$(this).hasClass('fixed') && !$('.total-search').hasClass('show') ){
          //
          //  if( $('html').hasClass('main') ){
          //    if( !$('.header-search-item.gnb-search').hasClass('on') ){
          //      $('.header, .gnb').removeClass('bg');
          //    }
          //  }
          //}

          $('.gnb').removeClass('on')
        }

      }

    });

    $('.gnb-depth1-link').on('mouseenter', function(e){

      if( $(window).outerWidth() > 1024 ){
        e.stopPropagation();

        //if( !$('.gnb').hasClass('fixed') ){
        //
        //  //$('.header, .gnb').addClass('show');
        //  $('.header, .gnb').addClass('bg');
        //
        //}

        $('.gnb').addClass('on');
      }

    });

    $('.gnb-depth1-link').data('open', false).on('click', function(e){

      if( $(window).outerWidth() <= 1024 ){

        e.preventDefault();

        if( !$(this).data().open ){

          console.log($(this).data().open);

          $('.gnb-depth1-item').removeClass('on').children('.gnb-depth1-link').data('open', false);
          $(this).parents('.gnb-depth1-item').addClass('on');
          $(this).data('open', true);

        } else {

          console.log($(this).data().open);

          $(this).parents('.gnb-depth1-item').removeClass('on').children('.gnb-depth1-link').data('open', false);
          $(this).data('open', false);

        }

      }

    });

    $('.header-search-btn.gnb-search').data('search', false).on('click', function(){

      if( !$(this).data().search && $(window).outerWidth() > 1024 ){

        $('.header-search-item.gnb-search').addClass('on');
        $(this).data('search', true);

      }

    });

    $('.header-search-close').on('click', function(){

      $('.header-search-item.gnb-search').removeClass('on');
      $('.header-search-btn.gnb-search').data('search', false);

    });

    $('body').on('click', 'button.gnb-mobile-btn.btn-gnb', function(e){
      $('body').addClass('scrollfix');
      //$('body').on('scroll touchmove mousewheel', function(e){
      //  event.preventDefault();
      //  event.stopPropagation();
      //  return false;
      //});

      $('.gnb').removeClass('mobile-off').addClass('mobile-on');
      $('body').addClass('mobile-menu-on');
      $('.quick').addClass('none');

    });

    $('body').on('click', 'button.gnb-mobile-btn-close', function(e){
      $('body').removeClass('scrollfix');
      //$('body').off('scroll touchmove mousewheel');
      $('.gnb').removeClass('mobile-on').addClass('mobile-off');
      $('body').removeClass('mobile-menu-on');
      $('.quick').removeClass('none');

    });

    $('body').on('click', 'button.gnb-mobile-btn.btn-quick', function(e){

      $('.quick').addClass('mobile-on');

    });

  })();

  // zoom in/out
  (function(){

    $('.location-btn-minus').on('click', function(){

      Zoom.exec(-1);

    });

    $('.location-btn-plus').on('click', function(){

      Zoom.exec(1);

    });

    $('.location-btn-print').on('click', function(){
      window.print();
    });

  })();

  // 공통 이벤트
  (function(){

    $(window).on('scroll', function(){

      if( !$('.total-search').hasClass('show') ){

        var scrollAmount = ( $(this).scrollTop() / scrollHeight ) * 100;

        $('.scroll-amount').css({width : scrollAmount + '%'});

        if( $(this).scrollTop() >= 200 ){

          $('.header, .gnb').addClass('down');
          $('.total-search').addClass('down');

        } else if( $(this).scrollTop() < 200 ){

          $('.header, .gnb').removeClass('down');
          $('.total-search').removeClass('down');

        }

      }

    }).scroll();

    // Layer Popup 닫기
    $('.layer-close').on('click', function(){

      LayerPopup.closePopup( $(this).parent('.layer') );

    });

  })();

  // 메인 페이지 이벤트
  (function(){

    $('.main-visual-control-arrow .arrow.prev').on('click', function(){

      if( !MainVisual.checkAnimate() ){

        MainVisual.rollRight();

      }

    });

    $('.main-visual-control-arrow .arrow.next').on('click', function(){

      if( !MainVisual.checkAnimate() ){

        MainVisual.rollLeft();

      }

    });

    $('.main-visual-control-paging .play-button').on('click', function(){

      if( $(this).hasClass('pause') ){

        MainVisual.rollStop();

      } else {

        MainVisual.rollAuto();

      }

    });

    $('.main-visual-news-title.tab').on('click', function(){

      var indexTab = $(this).index('.main-visual-news-title.tab');

      $('.main-visual-news-title.tab').each(function(i){

        if( i < indexTab ){
          $('.main-visual-news-title.tab').eq(i).addClass('prev').removeClass('next on');
        } else if(i > indexTab) {
          $('.main-visual-news-title.tab').eq(i).addClass('next').removeClass('prev on');
        } else {
          $('.main-visual-news-title.tab').eq(i).addClass('on').removeClass('prev next');
        }

      });

      $('.main-visual-news-txt.tab').removeClass('on');
      $(this).next('.main-visual-news-txt.tab').addClass('on');

    });

    $('.main-banner-wrap .banner-btn.left').on('click', function(){
      BottomBanner.rollRight();
    });

    $('.main-banner-wrap .banner-btn.right').on('click', function(){
      BottomBanner.rollLeft();
    });

  })();

  // LNB 이벤트
  (function(){

    var $lnb = $('.left-menu-depth1-item-link');

    // init
    $lnb.each(function(i){

      if( $(this).next('.left-menu-depth2').length != 0 ){

        $(this).addClass('has-child');

      }

      if( !$(this).hasClass('open') ){
        $(this).data('open', false);
      } else {
        $(this).data('open', true);
      }

    });


    $lnb.on('click', function(e){

      if( $(this).hasClass('has-child') ){

        e.preventDefault();

        $lnb.each(function(){

          if( $(this).hasClass('has-child') ){

            $(this).addClass('close').removeClass('on open').data('open', false);

          }

        });

        if( $(this).data('open') ){
          //$(this).removeClass('on open').addClass('close').data('open', false);
        } else {
          $(this).removeClass('close').addClass('on open').data('open', true);
        }

      }

    });

  })();

  // select box 이벤트
  (function(){

    $('.search-box-btn').on('click', function(){
      if( $('div').hasClass('search-box-year-contents') ){
        var index = $('#search-year.search-box-input-select option:selected').index();
        var val = $('#search-year.search-box-input-select option:selected').text();

        $('.search-box-year-contents').removeClass('on');
        $('.search-box-year-contents').eq(index).addClass('on');
      }

      $('.sub-contents-heading2.change-heading .year').text( val );
      $('.sub-contents-heading2.change-heading .number').text( $('.search-box-year-contents').eq(index).find('.table.vt-dark tr').length-1 );
    });

  })();

});

//$(window).on('resize', function(){
//
//  if( $(window).outerWidth() <= 1024 ){
//
//    if( $('.gnb-mobile-btn').length <= 0 ){
//      $('.header').prepend('<button type="button" class="gnb-mobile-btn btn-gnb"><span>주메뉴 열기</span></button>');
//    }
//
//  } else {
//    $('.gnb-mobile-btn.btn-gnb').remove();
//  }
//
//});


