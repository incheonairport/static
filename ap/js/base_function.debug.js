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

var Index, HeaderGnb, FullPage, TableLike, MainVisual, BoxModel;

$(function(){

  /**
   * Index Class( Parent Class )
   */

  Index = function(){

    this.$mainVisualItem = $('.main-visual-item');
    this.easingType = 'easeInOutExpo';

  };

  /**
   * HeaderGnb Class
   */

  HeaderGnb = new function(){

    Index.apply(this);



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

      //$visualItem.css({left:'100%'}).eq(0).css({left:0});
      //$visualItem.eq( $visualItem.length-1 ).css({left:'-100%'});

      $visualItem.hide().eq(0).show();

    };

    var _init = function(){

      _initPosition();

      _initPaging();


      setTimeout(function(){
        _textMotion();
      }, 1000);

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

    var _timeBar = function(){

      var barStretch = 0;
      var unitLength = 100 / ( (imageIntervalTime-imageMovingTime) / barStretchTime );

      timeID2 = setInterval(function(){
        $('.paging-link.on').css({height:(150 - barStretch) + '%'});
        //barStretch += unitLength;
      }, barStretchTime);

    };

    var _setPlayButtonClass = function(status){
      $('.play-button').attr('class', 'play-button').addClass(status);
    };

    // public
    this.moveLeft = function(auto){

      if( nextVisualIndex >= $visualItem.length ){
        nextVisualIndex = 0;
      }

      //$visualItem.eq(currentVisualIndex).stop().animate({left:'-100%'}, imageMovingTime, easingType);
      $visualItem.eq(currentVisualIndex).stop().fadeOut(imageMovingTime, easingType);
      //$visualItem.eq(nextVisualIndex).css({left:'100%'}).stop().animate({left:0}, imageMovingTime, easingType, function(){
      //  clearInterval(timeID2);
      //  if(auto){
      //    _timeBar();
      //  }
      //  _textMotion();
      //});
      $visualItem.eq(nextVisualIndex).stop().fadeIn(imageMovingTime, easingType, function(){
        clearInterval(timeID2);
        if(auto){
          _timeBar();
        }
        _textMotion();
      });

      $pageItem.find('.paging-link').removeClass('on');
      $pageItem.eq(nextVisualIndex).find('.paging-link').addClass('on');

      currentVisualIndex = nextVisualIndex;

    };

    this.moveRight = function(auto){

      if( nextVisualIndex <= -1 ){
        nextVisualIndex = $visualItem.length-1;
      }

      $visualItem.eq(currentVisualIndex).stop().animate({left:'100%'}, imageMovingTime, easingType);
      $visualItem.eq(nextVisualIndex).css({left:'-100%'}).stop().animate({left:0}, imageMovingTime, easingType, function(){
        clearInterval(timeID2);
        if(auto){
          _timeBar();
        }
        _textMotion();
      });

      $pageItem.find('.paging-link').removeClass('on');
      $pageItem.eq(nextVisualIndex).find('.paging-link').addClass('on');

      currentVisualIndex = nextVisualIndex;

    };

    this.rollAuto = function(){

      var _moveLeft = this.moveLeft;

      timeID = setInterval(function(){

        nextVisualIndex = currentVisualIndex + 1;
        _moveLeft(true);

        //HeaderGnb.setClass(HeaderGnb.getCurrentMainSectionIndex(), nextVisualIndex);

      }, imageIntervalTime);

      _timeBar();
      _setPlayButtonClass('pause');
    };

    this.rollLeft = function(){

      nextVisualIndex = currentVisualIndex + 1;
      this.moveLeft(false);

      //HeaderGnb.setClass(HeaderGnb.getCurrentMainSectionIndex(), nextVisualIndex);


    };

    this.rollRight = function(){

      nextVisualIndex = currentVisualIndex - 1;
      this.moveRight(false);

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

});



/******************
 * Base Execution *
 ******************/

$(function(){

  /**
   * loading
   */


  /**
   * event
   */

  // 공통 이벤트
  (function(){

    $('.gnb-depth1-link').on('mouseenter', function(){
      $('.gnb').addClass('on');
    });

    $('.gnb').on('mouseleave', function(){
      $('.gnb').removeClass('on');
    });


    // Layer Popup 닫기
    $('.layer-close').on('click', function(){

      LayerPopup.closePopup( $(this).parent('.layer') );

    });

  })();

  // 메인 페이지 이벤트
  (function(){

    $('.arrow.prev').on('click', function(){

      MainVisual.rollStop();

      if( !MainVisual.checkAnimate() ){

        MainVisual.rollRight();

      }

    });

    $('.arrow.next').on('click', function(){

      MainVisual.rollStop();

      if( !MainVisual.checkAnimate() ){

        MainVisual.rollLeft();

      }

    });

    $('.play-button').on('click', function(){

      if( $(this).hasClass('pause') ){

        MainVisual.rollStop();

      } else {

        MainVisual.rollAuto();

      }

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

  })();

});


