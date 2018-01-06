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
        $('html').addClass('ie9');

      } else if(ua.toLowerCase().indexOf('msie 10.0') != -1){
        $('html').addClass('ie10');

      } else if(ua.toLowerCase().indexOf('rv:11.0') != -1){
        $('html').addClass('ie11');

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

        tabWidth = 100 / Math.ceil( $currentTab.find(findClass).length / 2 );

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

    $('.select-link-default').on('click', function(){
      SelectBox.toggleSelectList( $(this) );
    });

    $('.select-list .select-list-link').on('click',function(){

      SelectBox.afterClickList( $(this) );

    });

    $(document).mouseup(function (e) {

      SelectBox.hideList(e);

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

var Index, HeaderGnb, TableLike, MainVisual, TopPopup, BottomBanner, BoxModel, ShoppingBanner;

$(function(){

  /**
   * Index Class( Parent Class )
   */

  Index = function(){

    this.$mainSection = $('.full-page-content .section');
    this.$mainVisualItem = $('.main-visual-item');
    this.$mainFullPageContent = $('.full-page-content');
    this.currentMainSectionIndex = 0;
    this.easingType = 'easeInOutExpo';

    this.setCurrentMainSectionIndex = function(currentIndex){

      this.currentMainSectionIndex = currentIndex;

    };

    this.getCurrentMainSectionIndex = function(){

      return this.currentMainSectionIndex;

    };

  };

  /**
   * HeaderGnb Class
   */

  HeaderGnb = new function(){

    Index.apply(this);

  };

  /**
   * FullPage Class
   */

  FullPage = new function(){

    Index.apply(this);
    //
    //this.sectionBgInit = function(){
    //
    //  $('.full-page-content .section-main-bg').css({
    //    top:-480
    //  });
    //
    //};
    //
    //this.sectionBgDown = function(sectionNextIndex){
    //
    //  this.$mainSection.eq(sectionNextIndex).find('.section-main-bg').animate({
    //    top:0
    //  }, 1000, 'easeOutQuad');
    //
    //};
    //
    //this.sectionBgUp = function(sectionPrevIndex){
    //
    //  this.$mainSection.eq(sectionPrevIndex).find('.section-main-bg').delay(100).animate({
    //    top:-480
    //  }, 900, 'easeOutQuad');
    //
    //};

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
    var imageIntervalTime = 10000;
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

    };

    var _textMotion = function(){

      $visualItem.eq(currentVisualIndex).find('.visual-text').eq(0).stop().animate({
        opacity:1,
        top:0
      }, 1000, 'easeOutCubic');

      $visualItem.eq(currentVisualIndex).find('.visual-text').eq(1).stop().delay(300).animate({
        opacity:1,
        top:0
      }, 1000, 'easeOutCubic');

      $visualItem.eq(currentVisualIndex).find('.visual-text').eq(2).stop().delay(600).animate({
        opacity:1,
        top:0
      }, 1000, 'easeOutCubic');

      $visualItem.eq(currentVisualIndex-1).find('.visual-text').eq(0).stop().animate({
        opacity:0,
        top:-20
      }, 1000, 'easeOutCubic');

      $visualItem.eq(currentVisualIndex-1).find('.visual-text').eq(1).stop().delay(500).animate({
        opacity:0,
        top:-20
      }, 1000, 'easeOutCubic');

      $visualItem.eq(currentVisualIndex-1).find('.visual-text').eq(2).stop().delay(500).animate({
        opacity:0,
        top:-20
      }, 1000, 'easeOutCubic');

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

    this.rollFirst = function(){
      _timeBar(true);

      setTimeout(function(){
        _textMotion();
      }, 1000);
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

  };

  /**
   * TopPopup Class
   */

  TopPopup = new function(){

    Index.apply(this);

    // private
    var $visualItem = $('.top-popup-item');
    var easingType = this.easingType;

    var currentVisualIndex = 0;
    var nextVisualIndex = 0;
    var totalPage = $visualItem.length;

    var timeID, timeID2;
    var imageMovingTime = 1000;
    var imageIntervalTime = 10000;

    // private
    var _initPaging = function(){

      $('.top-popup-control-paging-number').find('.current').text(currentVisualIndex+1);
      $('.top-popup-control-paging-number').find('.total').text(totalPage);

    };

    var _initPosition = function(){

      $visualItem.hide().eq(0).show();

    };

    var _init = function(){

      _initPosition();

      _initPaging();

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

      $('.top-popup-control-paging-number').find('.current').text(nextVisualIndex+1);

      currentVisualIndex = nextVisualIndex;

    };

    this.rollAuto = function(){

      var _fade = this.fade;

      timeID = setInterval(function(){

        nextVisualIndex = currentVisualIndex + 1;
        _fade();

      }, imageIntervalTime);

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

    };

    this.checkAnimate = function(){

      return $visualItem.is(':animated');

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

    var easingType = this.easingType;

    var timeID;
    var imageMovingTime = 1000;
    var imageIntervalTime = 3000;

    var $bannerList = $('.main-banner-list');
    var $bannerItem = $('.main-banner-item');

    var itemWidth = 0;
    var listWidth = 0;

    var _init = function(){

      $bannerItem.each(function(i){

        itemWidth = $(this).width() + parseInt( $(this).css('margin-right') );

        listWidth += itemWidth;

      });

      $bannerList.width(listWidth);

    };

    this.moveLeft = function(){

      $bannerList.stop().animate({
        left : -itemWidth
      }, imageMovingTime, easingType, function(){
        $('.main-banner-item:last-child').after($('.main-banner-item:first-child'));
        $bannerList.css({left:0});
      });

      currentVisualIndex = nextVisualIndex;

    };

    this.moveRight = function(){

      $('.main-banner-item:first-child').before($('.main-banner-item:last-child'));
      $bannerList.css({left:-itemWidth});

      $bannerList.stop().animate({
        left : 0
      }, imageMovingTime, easingType, function(){
        //$bannerList.css({left:-itemWidth});
      });

      currentVisualIndex = nextVisualIndex;

    };

    this.rollAuto = function(){

      var _moveLeft = this.moveLeft;

      timeID = setInterval(function(){

        nextVisualIndex = currentVisualIndex + 1;
        _moveLeft();

      }, imageIntervalTime);

    };

    this.rollLeft = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex + 1;
      this.moveLeft();

    };

    this.rollRight = function(){

      this.rollStop();

      nextVisualIndex = currentVisualIndex - 1;
      this.moveRight();

    };

    this.rollStop = function(){

      // stop rolling
      clearInterval(timeID);

    };

    this.checkAnimate = function(){

      return $bannerList.is(':animated');

    };

    _init();
    this.rollAuto();


  };

  /**
   * BoxModel Class
   */

  BoxModel = new function(){

    var $listItem = $('.boxmodel2-list-item');

    this.openBoxModel2Detail = function( $this ){

      $this.parents($listItem).toggleClass('on');
      if($this.parents($listItem).hasClass('on')) {
        $this.text('닫기');
      } else {
        $this.text('펼치기');
      }

    }

  };

  /**
   * TableLike Class
   */

  TableLike = new function(){

    // private member
    var $table = $('.table-like');
    var tableNum = $table.length;
    var $flightInfoDetail = $('.flight-info-detail').data('open', false);

    // public member


    // private method


    // public method
    this.setColumnWidth = function(){

      $table = $('.table-like');
      tableNum = $table.length;
      $flightInfoDetail = $('.flight-info-detail').data('open', false);

      for(var i=0; i<tableNum; i++){

        var thWidth = [];

        $table.eq(i).find('.th-like').each(function(){

          thWidth.push($(this).outerWidth());

        });

        $table.eq(i).find('.tr-like').each(function(){

          var colSkip = 0;

          if( $(this).children().hasClass('th-like') ){
            return true;
          }

          $(this).find('.td-like').each(function(){

            var colspanPos;
            var colspanNumber = 1;
            var colspanWidth = 0;

            if( ( colspanPos = $(this).attr('class').indexOf('colspan') ) >= 0 ){
              colspanNumber = $(this).attr('class').substr(colspanPos, 9).split('-')[1];
            }

            for(var i=0; i<colspanNumber; i++){

              colspanWidth += thWidth[colSkip];
              colSkip++;

            }

            $(this).outerWidth(colspanWidth);

          });

        });

      }

    };

    this.openInfoDetail = function( $thisFlightInfoDetail ){

      $flightInfoDetail.removeClass('on').data('open', false);

      $thisFlightInfoDetail.addClass('on').data('open', true);

    };

    this.closeInfoDetail = function( $thisFlightInfoDetail ){

      $thisFlightInfoDetail.removeClass('on').data('open', false);

    };

    this.openInfoDetailShare = function( $thisFlightInfoDetailShare ){

      $thisFlightInfoDetailShare.addClass('on');

    };

    this.closeInfoDetailShare = function( $thisFlightInfoDetailShare ){

      $thisFlightInfoDetailShare.removeClass('on');

    };


    // constructor
    this.setColumnWidth();

  };

  /**
   * ShoppingBanner Class
   */

  ShoppingBanner = new function(){

    // private
    var currentVisualIndex = 0;
    var nextVisualIndex = 0;

    var $visualItem = $('.slide-banner-list-item');
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
  })

})();

$(function(){

  /**
   * loading
   */

  var scrollHeight;

  $('.gnb').append('<div class="scroll-amount"></div>');

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

  (function(){
    // detect main page
    if( $('section').hasClass('main-visual') ){

      $('html').addClass('main');

      $('.top-popup').addClass('top-open');
      $('.header').addClass('top-open');
      $('.gnb').addClass('top-open');
      $('.total-search').addClass('top-open');
      $('.quick').addClass('top-open');
      $('.top-popup-toggle').data('open', true).addClass('down');

    } else {

      $('.top-popup').data('open', false);

    }

    if( $('section').hasClass('top-popup') ){

      $('.top-popup').addClass('top-open');
      $('.header').addClass('top-open');
      $('.gnb').addClass('top-open');
      $('.total-search').addClass('top-open');
      $('.quick').addClass('top-open');
      $('.top-popup-toggle').data('open', true).addClass('down');

    }

  })();


  // set full page

  (function(){

    if( $('#fullpage').length > 0 ){

      //FullPage.sectionBgInit();

      $('#fullpage').fullpage({
        scrollBar: true,
        scrollingSpeed: 1000,
        afterLoad: function(anchorLink, index){
          if(index == 2){
            MainVisual.rollStop();
            MainVisual.rollFirst();
            MainVisual.rollAuto();
          }
        }

      });

    }

  })();

  /**
   * event
   */

  //Header 이벤트
  (function(){

    $('.header').on({

      'mouseenter' : function(){

        $('.header, .gnb').addClass('bg');

      },

      'mouseleave' : function(){

        if( !$(this).hasClass('fixed') && !$('.total-search').hasClass('show') ){

          if( $('html').hasClass('main') ){
            $('.header, .gnb').removeClass('bg');
          }
        }

      }

    });

    $('.gnb').on({

      'mouseenter' : function(){

        if( !$(this).hasClass('fixed') ){

          $('.header, .gnb').addClass('bg');

        }

      },

      'mouseleave' : function(){

        if( !$(this).hasClass('fixed') && !$('.total-search').hasClass('show') ){

          if( $('html').hasClass('main') ){
            $('.header, .gnb').removeClass('bg');
          }
        }

        $('.gnb').removeClass('on')

      }

    });

    $('.gnb-depth1-link').on('mouseenter', function(e){

      e.stopPropagation();

      if( !$('.gnb').hasClass('fixed') ){

        //$('.header, .gnb').addClass('show');
        $('.header, .gnb').addClass('bg');

      }

      $('.gnb').addClass('on');

    });

    $('.gnb-search').on('click', function(){

      $('.total-search').addClass('show');
      $('.header, .gnb').addClass('bg');

    });

    $('.total-search-close').on('click', function(){

      $('.total-search').removeClass('show');

      $(window).scroll();

    });

  })();

  // 공통 이벤트
  (function(){

    // Layer Popup 닫기
    $('.layer-close').on('click', function(){

      LayerPopup.closePopup( $(this).parent('.layer') );

    });

    $(window).on('resize', function(){

      scrollHeight = $('body').height() - $(window).height();

    }).resize();

    $(window).on('scroll', function(){

      var scrollAmount = ( $(this).scrollTop() / scrollHeight ) * 100;
      $('.scroll-amount').css({width : scrollAmount + '%'});

      if( !$('.total-search').hasClass('show') ){

        if( $(this).scrollTop() >= 50 ){

          //$('.header, .gnb').addClass('fixed');


        } else if( $(this).scrollTop() < 50 ){

          //$('.header, .gnb').removeClass('fixed');
          //$('.scroll-amount').css({width : 0});

        }

        if( $('section').hasClass('main-visual') ){

          if( $(this).scrollTop() >= 400 ){

            //$('.top-popup').removeClass('top-big-open');
            //$('.top-popup-toggle').data('open', true).removeClass('top-big-open').addClass('down');
            //$('.header').removeClass('top-big-open');
            //$('.gnb').removeClass('top-big-open');
            //$('.total-search').removeClass('top-big-open');
            //$('.quick').removeClass('top-big-open');

            //$('.total-search').addClass('down');

          } else if( $(this).scrollTop() < 400 ) {

            //$('.top-popup').addClass('top-big-open');
            //$('.top-popup-toggle').data('open', true).addClass('top-big-open').removeClass('down');
            //$('.header').addClass('top-big-open');
            //$('.gnb').addClass('top-big-open');
            //$('.total-search').addClass('top-big-open');
            //$('.quick').addClass('top-big-open');

          }

          if( $(this).scrollTop() >= ($(window).height() ) ){

            if( $('html').hasClass('main') ){

              $('.header, .gnb').addClass('fixed bg down');

            } else {

              $('.header, .gnb').addClass('fixed down');

            }

            $('.top-popup').removeClass('top-open').addClass('down');
            $('.top-popup-toggle').data('open', false).removeClass('down');
            $('.header').removeClass('top-open');
            $('.gnb').removeClass('top-open');
            $('.total-search').removeClass('top-open');
            $('.quick').removeClass('top-open');

            $('.total-search').addClass('down');

          } else if( $(this).scrollTop() < ($(window).height() + 400) ){

            if( $('html').hasClass('main') ){

              $('.header, .gnb').removeClass('fixed bg down');

            } else {

              $('.header, .gnb').removeClass('fixed down');

            }

            $('.top-popup').removeClass('down');
            $('.total-search').removeClass('down');

          }

        } else {

          if( $(this).scrollTop() >= 400 ){

            if( $('html').hasClass('main') ){

              $('.header, .gnb').addClass('fixed bg down');

            } else {

              $('.header, .gnb').addClass('fixed down');

            }

            $('.top-popup').removeClass('top-open').addClass('down');
            $('.top-popup-toggle').data('open', false).removeClass('down');
            $('.header').removeClass('top-open');
            $('.gnb').removeClass('top-open');
            $('.total-search').removeClass('top-open');
            $('.quick').removeClass('top-open');

            $('.total-search').addClass('down');

          } else if( $(this).scrollTop() < 400 ){

            if( $('html').hasClass('main') ){

              $('.header, .gnb').removeClass('fixed bg down');

            } else {

              $('.header, .gnb').removeClass('fixed down');

            }

            $('.top-popup').removeClass('down');
            $('.total-search').removeClass('down');

          }

        }

        //try{
        //
        //  if( $(this).scrollTop() >= $('.section2').offset().top ){
        //
        //    $('.section2').removeClass('bg-fixed');
        //
        //  } else if( $(this).scrollTop() < $('.section2').offset().top ){
        //
        //    $('.section2').addClass('bg-fixed');
        //
        //  }
        //
        //  if( $(this).scrollTop() >= $('.section3').offset().top ){
        //
        //    $('.section3').removeClass('bg-fixed');
        //
        //  } else if( $(this).scrollTop() < $('.section3').offset().top ){
        //
        //    $('.section3').addClass('bg-fixed');
        //
        //  }
        //
        //} catch(e) {

          //console.log('SUB PAGE');

        //}

      }

    }).scroll();

  })();

  // 상단 팝업 이빈트
  (function(){

    $('.top-popup-control-arrow .arrow.prev').on('click', function(){

      console.log(24);

      if( !TopPopup.checkAnimate() ){

        TopPopup.rollRight();

      }

    });

    $('.top-popup-control-arrow .arrow.next').on('click', function(){

      console.log(24);

      if( !TopPopup.checkAnimate() ){

        TopPopup.rollLeft();

      }

    });

    $('.top-popup-control-paging .play-button.play').on('click', function(){

      TopPopup.rollAuto();

    });

    $('.top-popup-control-paging .play-button.pause').on('click', function(){

      TopPopup.rollStop();

    });

    $('.top-popup-toggle').on('click', function(){

      console.log( $(this).data('open') );

      if( $(this).data('open') ){
        $('.top-popup').removeClass('top-open');
        $('.top-popup-toggle').data('open', false).removeClass('down');
        $('.header').removeClass('top-open');
        $('.gnb').removeClass('top-open');
        $('.total-search').removeClass('top-open');
        $('.quick').removeClass('top-open');
      } else {
        $('.top-popup').addClass('top-open');
        $('.top-popup-toggle').data('open', true).addClass('down');
        $('.header').addClass('top-open');
        $('.gnb').addClass('top-open');
        $('.total-search').addClass('top-open');
        $('.quick').addClass('top-open');
      }

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

  })();

  // 하단 배너 이벤트
  (function(){

    $('.main-banner-control-arrow .arrow.prev').on('click', function(){

      if( !BottomBanner.checkAnimate() ){

        BottomBanner.rollRight();

      }

    });

    $('.main-banner-control-arrow .arrow.next').on('click', function(){

      if( !BottomBanner.checkAnimate() ){

        BottomBanner.rollLeft();

      }

    });

    $('.main-banner-control-paging .play-button.play').on('click', function(){

      BottomBanner.rollAuto();

    });

    $('.main-banner-control-paging .play-button.pause').on('click', function(){

      BottomBanner.rollStop();

    });

  })();

  // 출발 시간표 페이지 이벤트
  (function(){

    // 출발 시간표 상세보기 열기
    $('.flight-info-basic-link').on('click', function(e){

      e.preventDefault();

      var $thisFlightInfoDetail = $(this).parent().next();

      if( $thisFlightInfoDetail.data().open == false ){

        TableLike.openInfoDetail( $thisFlightInfoDetail );

      }

    });

    // 출발 시간표 상세보기 닫기
    $('.flight-info-detail-close').on('click', function(e){

      e.preventDefault();

      var $thisFlightInfoDetail = $(this).parents('.flight-info-detail');

      TableLike.closeInfoDetail( $thisFlightInfoDetail );

    });

    // 공유하기 보기
    $('.flight-info-detail-share').on('click', function(e){

      e.preventDefault();

      TableLike.openInfoDetailShare( $(this).next('.td-pop') );

    });

    // 공유하기 닫기
    $('.td-pop-close-btn').on('click', function(e){

      e.preventDefault();

      TableLike.closeInfoDetailShare( $(this).parent('.td-pop') );

    });

    // 운항속보 SMS Layer Popup
    $('.btn-newsflash').on('click', function(e){
      e.preventDefault();
      e.stopPropagation();

      LayerPopup.openPopup( $('.flight-sms-01') );

    });

    // 운항속보 SMS 다음 단계 Ppoup
    $('.js-next').on('click', function(e){

      e.preventDefault();

      LayerPopup.nextPopup( $(this).parents('.layer'), $(this).parents('.layer').next('.layer') );

    });

  })();

  // 쇼핑/이벤트 페이지
  (function(){

    $('.boxmodel2-list-item .btn-type-small').on('click', function(){

      BoxModel.openBoxModel2Detail( $(this) );

    });

    $('.slide-banner-btn.slide-left').on('click', function(){
      ShoppingBanner.rollRight();
    });

    $('.slide-banner-btn.slide-right').on('click', function(){
      ShoppingBanner.rollLeft();
    });

  })();

});


